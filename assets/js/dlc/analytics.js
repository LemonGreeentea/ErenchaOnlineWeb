async function fetchJSON(url){
  const r = await fetch(url)
  if(!r.ok) throw new Error('HTTP '+r.status)
  return r.json()
}

// --- CDN data base helpers (align with dlc-download mapping) ---
function ensureSlash(s){ return s && s.endsWith('/') ? s : (String(s||'') + '/'); }
function getDataBase(){
  try{ if(typeof window.DLC_DATA_BASE === 'string' && window.DLC_DATA_BASE) return ensureSlash(window.DLC_DATA_BASE) }catch{}
  const meta = document.querySelector('meta[name="dlc-data-base"]')
  if(meta && meta.content) return ensureSlash(meta.content.trim())
  return '/'
}
function dataUrl(rel){
  const base = getDataBase()
  rel = String(rel||'').replace(/^\/+/, '')
  return base + rel
}
function resolveImage(p){
  if(!p) return ''
  const s0 = String(p).trim()
  if(/^https?:\/\//i.test(s0)) return s0
  let s = s0.replace(/^\/+/, '') // strip leading '/'
  // Map assets/images/* -> data/image/* (drop DLC/ prefix if present)
  if(s.startsWith('assets/images/')){
    let rest = s.slice('assets/images/'.length)
    if(rest.startsWith('DLC/') || rest.startsWith('dlc/')) rest = rest.slice(4)
    return dataUrl('data/image/' + rest)
  }
  // Map images/* -> data/image/*
  if(s.startsWith('images/')){
    return dataUrl('data/image/' + s.slice('images/'.length))
  }
  // Map assets/data/asset(s)/* -> data/assets/* (if thumbs ever use it)
  if(s.startsWith('assets/data/asset/')){
    return dataUrl('data/assets/' + s.slice('assets/data/asset/'.length))
  }
  if(s.startsWith('assets/data/assets/')){
    return dataUrl('data/assets/' + s.slice('assets/data/assets/'.length))
  }
  // Fallback: try under data root as-is
  return dataUrl(s)
}

function indexData(locationsList, charactersList){
  const idx = new Map()
  const meta = new Map()
  // locations
  for(const g of (locationsList||[])){
  const thumb = resolveImage(g.thumb||'')
  idx.set(g.id, { id: g.id, name: g.name, author: g.author||'', thumb, type: 'location-group' })
    meta.set(g.id, g)
    if(Array.isArray(g.sub)){
      for(const s of g.sub){
    idx.set(s.id, { id: s.id, name: s.name, author: g.author||'', thumb, type: 'location-sub', parent: g.id })
      }
    }
  }
  // characters
  for(const c of (charactersList||[])){
  const thumb = resolveImage(c.image||'')
  idx.set(c.id, { id: c.id, name: c.name, author: c.author||'', thumb, type: 'character' })
    meta.set(c.id, c)
  }
  return { idx, meta }
}

// Normalize legacy IDs (loc-*) to new contents-* when possible
function buildIdNormalizer(locationsList){
  const map = new Map()
  // Simple heuristic: if id starts with 'contents-' and we previously used 'loc-' prefix for the same slug
  // create mapping from oldId -> newId. We'll derive slug by stripping the prefix.
  const have = new Set((locationsList||[]).map(x=>x.id))
  // Build reverse index by slug
  const bySlug = new Map()
  for(const id of have){
    const m = String(id).match(/^(?:contents|loc)-(.*)$/)
    if(m){
      const slug = m[1]
      if(!bySlug.has(slug)) bySlug.set(slug, [])
      bySlug.get(slug).push(id)
    }
  }
  // For any slug that has both forms, map loc-* -> contents-* as canonical
  for(const [slug, ids] of bySlug.entries()){
    const newId = ids.find(x=> x.startsWith('contents-'))
    const oldId = ids.find(x=> x.startsWith('loc-'))
    if(oldId && newId){ map.set(oldId, newId) }
  }
  // Also hardcode commonly renamed pairs just in case
  map.set('loc-luminaextensions','contents-luminaextensions')
  map.set('loc-Phanteon','contents-Phanteon')
  return (id)=> map.get(id) || id
}

function fmtTime(ms){
  if(!ms) return '-'
  const d = new Date(Number(ms))
  if(isNaN(d.getTime())) return '-'
  const p = n=> String(n).padStart(2,'0')
  return `${d.getFullYear()}.${p(d.getMonth()+1)}.${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`
}

const openGroups = new Map() // groupId => boolean
let ALL_ROWS = [] // 원본 전체 행 (총 다운로드 계산에 사용)

function typeKo(t){
  if(t==='location-group') return '지역(그룹)'
  if(t==='location-sub') return '지역(세부)'
  if(t==='character') return '캐릭터'
  return t || '-'
}

function cardHtml(r, map, hasChildren){
  const m = map.idx.get(r.id) || {}
  const thumb = m.thumb ? `<img src="${m.thumb}" alt="" class="dlc-thumb" loading="lazy" onerror="this.style.display='none'">` : ''
  const author = m.author ? m.author : ''
  return `
    <div class="dlc-card-row">
      <div class="dlc-thumb-wrap">${thumb}</div>
      <div class="dlc-main">
        <div class="dlc-title">${m.name||r.name||r.id}${author?` <span class=\"muted\">· ${author}</span>`:''}</div>
        <div class="dlc-meta muted">${typeKo(r.type)}</div>
      </div>
      <div class="dlc-side">
        <div class="dlc-count">다운로드 <strong>${r.count}</strong></div>
        ${hasChildren ? '<button class="button secondary small" data-details="'+r.id+'">세부사항 보기</button>' : ''}
      </div>
    </div>
    ${hasChildren ? `<div class="dlc-children" data-children-of="${r.id}" style="display:${openGroups.get(r.id)?'block':'none'}"></div>` : ''}
  `
}

function childItemHtml(c, map){
  const m = map.idx.get(c.id) || {}
  return `
    <div class="dlc-child">
      <div class="bullet">•</div>
      <div class="name">${m.name||c.name||c.id}</div>
      <div class="count">${c.count}</div>
    </div>
  `
}

function render(rows, map){
  const wrap = document.getElementById('cards')
  const empty = document.getElementById('empty')
  wrap.innerHTML = ''
  if(rows.length===0){ empty.style.display='block'; return }
  empty.style.display='none'

  // totals: 모든 유형 합산 (지역/캐릭터 등)
  const source = Array.isArray(ALL_ROWS) && ALL_ROWS.length ? ALL_ROWS : rows
  let total = 0
  for(const r of source){ total += (r.count||0) }
  document.getElementById('total-count').textContent = String(total)

  // group children by parent (from all rows in view)
  const childrenOf = new Map()
  for(const r of rows){
    const meta = map.idx.get(r.id)
    const parent = meta && meta.parent
    if(parent){
      if(!childrenOf.has(parent)) childrenOf.set(parent, [])
      childrenOf.get(parent).push(r)
    }
  }

  // Emit cards
  const emitted = new Set()
  const wantGroup = new Set(childrenOf.keys())
  for(const r of rows){
    if(emitted.has(r.id)) continue
    const isGroup = r.type==='location-group' && wantGroup.has(r.id)
    if(isGroup){
      const kids = childrenOf.get(r.id) || []
      const hasChildren = kids.length > 0
      const card = document.createElement('div')
      card.className = 'analytics-card'
      card.innerHTML = cardHtml(r, map, hasChildren)
      wrap.appendChild(card)

      // fill children
      if(hasChildren){
        const cont = card.querySelector(`[data-children-of="${r.id}"]`)
        for(const c of kids){
          const row = document.createElement('div')
          row.innerHTML = childItemHtml(c, map)
          cont?.appendChild(row.firstElementChild)
          emitted.add(c.id)
        }
      }
      emitted.add(r.id)
    } else if(map.idx.get(r.id)?.parent && wantGroup.has(map.idx.get(r.id).parent)){
      continue
    } else {
      const card = document.createElement('div')
      card.className = 'analytics-card'
      card.innerHTML = cardHtml(r, map, false)
      wrap.appendChild(card)
      emitted.add(r.id)
    }
  }

  // Toggle handlers
  wrap.querySelectorAll('[data-details]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id = btn.getAttribute('data-details')
      const box = wrap.querySelector(`[data-children-of="${id}"]`)
      const open = box && box.style.display !== 'none'
      if(box){ box.style.display = open ? 'none' : 'block' }
      openGroups.set(id, !open)
      btn.textContent = open ? '세부사항 보기' : '세부사항 닫기'
    })
  })
}

function applyFilters(source){
  const q = document.getElementById('search').value.trim().toLowerCase()
  const t = document.getElementById('filter-type').value
  const s = document.getElementById('sort-by').value
  let rows = source.filter(r=>{
    const inType = t==='all' ? true : r.type===t
    return inType && (!q || `${r.name||''} ${r.id||''}`.toLowerCase().includes(q))
  })
  if(s==='lastAt-desc') rows.sort((a,b)=> (b.lastAt||0)-(a.lastAt||0))
  else if(s==='name-asc') rows.sort((a,b)=> String(a.name||'').localeCompare(String(b.name||'')))
  else rows.sort((a,b)=> (b.count||0)-(a.count||0))
  return rows
}

async function main(){
  try{
    const [sum, loc, chars] = await Promise.all([
      fetchJSON('/dlc-summary'),
  fetchJSON('/assets/data/dlc/contents.json'),
      fetchJSON('/assets/data/dlc/characters.json'),
    ])
    const map = indexData(loc, chars)
    const normalizeId = buildIdNormalizer(loc)
    // ensure perArtifact/lastAt normalization (if older function)
    const baseRaw = (sum.rows||[]).map(r=> ({
      ...r,
      id: normalizeId(r.id), // remap legacy ids to new contents-*
      perArtifact: r.perArtifact || r.perartifact || {},
      lastAt: typeof r.lastAt === 'string' ? Number(r.lastAt) : (r.lastAt ?? r.lastat ?? 0)
    }))
    // Aggregate rows by normalized id (sum counts, merge perArtifact, keep max lastAt)
    const agg = new Map()
    for(const r of baseRaw){
      const key = r.id
      if(!agg.has(key)){
        agg.set(key, { ...r })
      } else {
        const cur = agg.get(key)
        cur.count = (cur.count||0) + (r.count||0)
        cur.lastAt = Math.max(cur.lastAt||0, r.lastAt||0)
        const pa = { ...(cur.perArtifact||{}) }
        for(const k in (r.perArtifact||{})){
          pa[k] = (pa[k]||0) + (r.perArtifact[k]||0)
        }
        cur.perArtifact = pa
      }
    }
    const base = Array.from(agg.values())
  ALL_ROWS = base.slice()

  const update = ()=> render(applyFilters(base), map)
    document.getElementById('search').addEventListener('input', update)
    document.getElementById('filter-type').addEventListener('change', update)
    document.getElementById('sort-by').addEventListener('change', update)

    update()
  }catch(e){
    const tbody = document.getElementById('rows')
    const empty = document.getElementById('empty')
    empty.textContent = '통계를 불러오지 못했습니다: '+String(e.message||e)
    empty.style.display='block'
    tbody.innerHTML = ''
  }
}

document.addEventListener('DOMContentLoaded', main)
