async function fetchJSON(url){
  const r = await fetch(url)
  if(!r.ok) throw new Error('HTTP '+r.status)
  return r.json()
}

function indexData(locationsList, charactersList){
  const idx = new Map()
  const meta = new Map()
  // locations
  for(const g of (locationsList||[])){
    idx.set(g.id, { id: g.id, name: g.name, author: g.author||'', thumb: g.thumb||'', type: 'location-group' })
    meta.set(g.id, g)
    if(Array.isArray(g.sub)){
      for(const s of g.sub){
        idx.set(s.id, { id: s.id, name: s.name, author: g.author||'', thumb: g.thumb||'', type: 'location-sub', parent: g.id })
      }
    }
  }
  // characters
  for(const c of (charactersList||[])){
    idx.set(c.id, { id: c.id, name: c.name, author: c.author||'', thumb: c.image||'', type: 'character' })
    meta.set(c.id, c)
  }
  return { idx, meta }
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

function cardHtml(r, map){
  const m = map.idx.get(r.id) || {}
  const thumb = m.thumb ? `<img src="/${m.thumb}" alt="" class="dlc-thumb">` : ''
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
        ${map.meta.get(r.id)?.sub ? '<button class="button secondary small" data-details="'+r.id+'">세부사항 보기</button>' : ''}
      </div>
    </div>
    ${map.meta.get(r.id)?.sub ? `<div class="dlc-children" data-children-of="${r.id}" style="display:${openGroups.get(r.id)?'block':'none'}"></div>` : ''}
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
      const card = document.createElement('div')
      card.className = 'analytics-card'
      card.innerHTML = cardHtml(r, map)
      wrap.appendChild(card)

      // fill children
      const cont = card.querySelector(`[data-children-of="${r.id}"]`)
      const kids = childrenOf.get(r.id) || []
      for(const c of kids){
        const row = document.createElement('div')
        row.innerHTML = childItemHtml(c, map)
        cont?.appendChild(row.firstElementChild)
        emitted.add(c.id)
      }
      emitted.add(r.id)
    } else if(map.idx.get(r.id)?.parent && wantGroup.has(map.idx.get(r.id).parent)){
      continue
    } else {
      const card = document.createElement('div')
      card.className = 'analytics-card'
      card.innerHTML = cardHtml(r, map)
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
      fetchJSON('/assets/data/dlc/locations.json'),
      fetchJSON('/assets/data/dlc/characters.json'),
    ])
    const map = indexData(loc, chars)
    // ensure perArtifact/lastAt normalization (if older function)
    const base = (sum.rows||[]).map(r=> ({
      ...r,
      perArtifact: r.perArtifact || r.perartifact || {},
      lastAt: typeof r.lastAt === 'string' ? Number(r.lastAt) : (r.lastAt ?? r.lastat ?? 0)
    }))
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
