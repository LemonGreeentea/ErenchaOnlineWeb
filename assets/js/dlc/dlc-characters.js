(function(){
  const $ = (sel,ctx=document)=>ctx.querySelector(sel);
  const $$ = (sel,ctx=document)=>Array.from(ctx.querySelectorAll(sel));

  // R2 데이터 베이스 URL 헬퍼 함수들
  function getDataBase(){
    // 1) window 전역
    try{ if(typeof window.DLC_DATA_BASE === 'string' && window.DLC_DATA_BASE) return ensureSlash(window.DLC_DATA_BASE); }catch{}
    // 2) meta 태그
    const meta = document.querySelector('meta[name="dlc-data-base"]');
    if(meta && meta.content) return ensureSlash(meta.content.trim());
    // 3) 기본 로컬 경로
    return '../assets/data/';
  }
  function ensureSlash(s){ return s.endsWith('/') ? s : (s + '/'); }
  function dataUrl(rel){
    const base = getDataBase();
    rel = String(rel||'').replace(/^\/+/, '');
    return base + rel;
  }

  let newCharacters = [];
  // 길드 설명(문장) 로딩/매핑용
  let guildLines = null; // 문자열 배열
  const GUILD_KO = { mudeom:'무덤', changcheon:'창천', 'hunting-research-society':'수렵연구회', masterpiece:'마스터피스' };
  const GUILD_EN = { mudeom:'Mudeom Guild', changcheon:'Changcheon Guild', 'hunting-research-society':'Hunting Research Society Guild', masterpiece:'Masterpiece Guild' };

  // 저장 키
  const STORAGE_KEY = 'dlcSelections';

  function loadSelections(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { events: [], contents: [], characters: [] };
    }catch(e){
      return { events: [], contents: [], characters: [] };
    }
  }

  function saveSelections(sel){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sel));
  }


  function isSelected(sel, id){
    return (sel.characters||[]).some(c=>c.id===id);
  }

  async function loadGuildList(){
    if (Array.isArray(guildLines)) return guildLines;
    try{
      const r = await fetch('../assets/data/dlc/dlcguildlist.json');
      if(!r.ok) throw new Error('HTTP '+r.status);
      const json = await r.json();
      const arr = Array.isArray(json && json.guilds) ? json.guilds : [];
      guildLines = arr;
    }catch(e){
      console.warn('길드 리스트를 불러오지 못했습니다:', e);
      guildLines = [];
    }
    return guildLines;
  }

  function getGuildLineBySlug(slug){
    if(!slug || !Array.isArray(guildLines)) return '';
    // 1) 한글 길드명으로 매칭
    const ko = GUILD_KO[slug];
    if(ko){
      const hit = guildLines.find(s=> typeof s === 'string' && s.trim().startsWith(`- ${ko} 길드`));
      if(hit) return hit;
    }
    // 2) 영문 괄호명으로 매칭
    const en = GUILD_EN[slug];
    if(en){
      const hit2 = guildLines.find(s=> typeof s === 'string' && s.includes(`(${en})`));
      if(hit2) return hit2;
    }
    return '';
  }

  function toggleCharacter(id, payload){
    const sel = loadSelections();
    const list = sel.characters || (sel.characters=[]);
    const idx = list.findIndex(c=>c.id===id);
    if(idx>=0){
      list.splice(idx,1);
    }else{
      list.push(payload);
    }
    saveSelections(sel);
    return isSelected(sel,id);
  }

  function makeCard(c){
    const card = document.createElement('div');
  card.className = 'dlc-card clickable';
  // 스타일은 CSS .dlc-card 규칙을 따릅니다.

  // 초기 선택 상태 반영
  try {
    const sel = loadSelections();
    if (isSelected(sel, c.id)) card.classList.add('selected');
  } catch {}

  const img = document.createElement('img');
  img.src = c.image; img.alt = c.name; img.className = 'dlc-card-thumb';

  const title = document.createElement('div');
  const realPart = c.realName ? ` <span class="muted">· ${c.realName}${c.gender ? ' · ' + c.gender : ''}</span>` : '';
  title.innerHTML = `<strong>${c.name}</strong>${realPart}`;
  const subtitle = document.createElement('div');
  subtitle.className = 'muted';
  const dlcPart = c.dlcTitle ? ` · ${c.dlcTitle}` : '';
  const author = c.author ? `by. ${c.author}` : '';
  subtitle.textContent = `${author}${dlcPart}`.trim();

  // 업데이트 날짜(있다면 회색 작은 글씨로 표기)
  const updated = document.createElement('div');
  if (c.lastUpdated) {
    updated.className = 'muted';
    updated.style.fontSize = '12px';
  updated.style.display = 'block';
  updated.style.textAlign = 'right';
  updated.style.marginTop = '6px';
    updated.textContent = c.lastUpdated;
  }

  const p = document.createElement('p'); p.textContent = c.desc || ''; p.style.minHeight='40px'; p.style.margin='0';

  const actions = document.createElement('div'); actions.className = 'dlc-actions';

    // 자세히 + 개별 다운로드 버튼
    const detailBtn = document.createElement('button'); detailBtn.className='button secondary'; detailBtn.type='button'; detailBtn.textContent='자세히';
    detailBtn.addEventListener('click', ()=> openDetailModal(c));
    actions.appendChild(detailBtn);
  const srcBtn = document.createElement('button'); srcBtn.className='button'; srcBtn.type='button'; srcBtn.textContent='출처';
    (function(){
      const valid = getValidSource(c);
      if(valid){
        srcBtn.addEventListener('click', (e)=>{ e.stopPropagation(); window.open(valid.url, '_blank', 'noopener'); });
      } else {
        srcBtn.classList.add('secondary');
        srcBtn.textContent = '출처 없음';
        srcBtn.disabled = true;
      }
    })();
    actions.appendChild(srcBtn);

    card.appendChild(img);
    card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(p);
  if (c.lastUpdated) card.appendChild(updated);
    card.appendChild(actions);
  // 카드 클릭 시 선택 토글
    card.addEventListener('click', ()=>{
      const nowOn = toggleCharacter(c.id, { id: c.id, name: c.name, role: c.role, source: c.source || null });
      card.classList.toggle('selected', nowOn);
    });
    // 버튼 클릭은 토글 방지
    detailBtn.addEventListener('click', (e)=>{ e.stopPropagation(); });
    return card;
  }

  // http(s) 링크만 유효 출처로 인정
  function getValidSource(c){
    const src = c && c.source;
    if(!src || !src.url) return null;
    try {
      const u = new URL(src.url, window.location.href);
      if(u.protocol === 'http:' || u.protocol === 'https:'){
        return { label: src.label || '출처', url: u.href };
      }
      return null;
    } catch { return null; }
  }

  // 모달 핸들러
  function openDetailModal(c){
    const overlay = document.getElementById('char-modal');
    const closeEls = [document.getElementById('char-modal-close'), document.getElementById('char-modal-cancel')];
  document.getElementById('char-modal-title').textContent = `${c.name}`;
  const gameImg = document.getElementById('char-modal-image-game');
  const realImg = document.getElementById('char-modal-image-real');
  const realBox = document.getElementById('char-modal-image-real-box');
  gameImg.src = c.imageGame || c.image;
  gameImg.alt = `${c.name} 게임 이미지`;
  if(c.imageReal){ realImg.src = c.imageReal; realImg.alt = `${c.name} 현실 이미지`; realBox.style.display='block'; }
  else { realImg.removeAttribute('src'); realImg.alt=''; realBox.style.display='none'; }
  const modalName = document.getElementById('char-modal-name');
  const modalRole = document.getElementById('char-modal-role');
  const modalDesc = document.getElementById('char-modal-desc');
  modalName.textContent = `${c.name}${c.realName ? ' · ' + c.realName : ''}${c.gender ? ' · ' + c.gender : ''}`;
  modalRole.textContent = `제작자: ${c.author || '미상'}${c.dlcTitle ? ' · ' + c.dlcTitle : ''}`;
  // player-data 우선 사용: characters.json에 playerId가 있으면 playerData에서 설명을 가져와 사용
  let usedPlayerData = false;
  if (typeof window !== 'undefined' && Array.isArray(window.playerData) && c.playerId) {
    const pd = window.playerData.find(p => p.id === c.playerId);
    if (pd && pd.description) {
      modalDesc.innerHTML = `${pd.description}${c.dlcDescription ? `<p>${c.dlcDescription}</p>` : ''}`;
      usedPlayerData = true;
    }
  }
  if (!usedPlayerData) {
  // player-data 스타일로 구성: 인적사항(이름/소속/성별/나이/특징/주요 능력) + 본문 + DLC 설명
  const items = [];
  // 소속: 없음 (데이터에 guild가 없을 수 있으므로 기본값 없음)
  const org = c.guild || '없음';
  const gender = c.gender || '-';
  const age = (typeof c.age === 'number' && !isNaN(c.age)) ? `${c.age}세` : (c.ageText || '-');
  const feat = Array.isArray(c.features) ? c.features.join(', ') : (c.features || '-');
  const skills = Array.isArray(c.mainAbilities) ? c.mainAbilities.join(', ') : (c.mainAbilities || '-');
  // 이름 형식: 엠버(이름) · 김수아(본명)
  const nameFormatted = `${c.name ? `${c.name}` : ''}${c.realName ? `${c.name ? ' · ' : ''}${c.realName}` : ''}`;
  items.push(`<li><strong>이름 :</strong> ${nameFormatted}</li>`);
  items.push(`<li><strong>소속 :</strong> ${org}</li>`);
  items.push(`<li><strong>성별 :</strong> ${gender}</li>`);
  items.push(`<li><strong>나이 :</strong> ${age}</li>`);
  items.push(`<li><strong>특징 :</strong> ${feat}</li>`);
  items.push(`<li><strong>주요 능력 :</strong> ${skills}</li>`);
  const detailHtml = c.detail || c.desc || '';
  const dlcHtml = c.dlcDescription ? `<p>${c.dlcDescription}</p>` : '';
  modalDesc.innerHTML = `
    <ul>
      ${items.join('\n')}
    </ul>
    ${detailHtml ? `<p class="player-narrative-description">${detailHtml}</p>` : ''}
    ${dlcHtml}
  `;
  }
    const source = document.getElementById('char-modal-source');
    const valid = getValidSource(c);
    if(valid){
      source.innerHTML = `<small>출처: <a href="${valid.url}" target="_blank" rel="noopener noreferrer">${valid.label}</a></small>`;
    } else { source.innerHTML = ''; }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden','false');

    function onClose(){ overlay.classList.remove('active'); overlay.setAttribute('aria-hidden','true'); cleanup(); }
    function onOverlay(e){ if(e.target===overlay) onClose(); }
    function cleanup(){
      overlay.removeEventListener('click', onOverlay);
      closeEls.forEach(el=> el && el.removeEventListener('click', onClose));
      document.removeEventListener('keydown', onEsc);
    }
    function onEsc(e){ if(e.key==='Escape') onClose(); }
    overlay.addEventListener('click', onOverlay);
    closeEls.forEach(el=> el && el.addEventListener('click', onClose));
    document.addEventListener('keydown', onEsc);
  }

  function render(){
    const grid = document.getElementById('dlc-characters-grid');
    grid.innerHTML = '';
    newCharacters.forEach(c=> grid.appendChild(makeCard(c)));
    // characters page controls - top/bottom (match Regions)
    const clearTop = document.getElementById('chars-clear-top');
    const clearBottom = document.getElementById('chars-clear-bottom');
    const allTop = document.getElementById('chars-select-all-top');
    const allBottom = document.getElementById('chars-select-all-bottom');

    const clearSelections = () => {
      const sel = loadSelections();
      sel.characters = [];
      saveSelections(sel);
      render();
    };
    const selectAll = () => {
      const sel = loadSelections();
      const ids = new Set((sel.characters||[]).map(x=>x.id));
      newCharacters.forEach(c=>{ if(!ids.has(c.id)) sel.characters.push({ id:c.id, name:c.name, role:c.role, source:c.source||null }); });
      saveSelections(sel);
      render();
    };
    if(clearTop) clearTop.onclick = clearSelections;
    if(clearBottom) clearBottom.onclick = clearSelections;
    if(allTop) allTop.onclick = selectAll;
    if(allBottom) allBottom.onclick = selectAll;
  }

  function resolveImagePath(path){
    if(!path) return path;
    if(/^https?:\/\//i.test(path)) return path; // absolute
    // 루트 기준 경로("/images/..." 등)은 CDN 베이스에 붙여 사용
    if(path.startsWith('/')){
      const rel = path.replace(/^\/+/, '');
      return dataUrl(rel);
    }
    // R2 구조에 맞게 이미지 경로 매핑
    if(path.startsWith('assets/images/')){
      // assets/images/DLC/xxx 또는 assets/images/dlc/xxx → data/image/xxx (DLC 폴더 제거)
      let imagePath = path.slice('assets/images/'.length);
      if(imagePath.startsWith('DLC/') || imagePath.startsWith('dlc/')){
        imagePath = imagePath.slice(4); // 'DLC/' 또는 'dlc/' 제거
      }
      return dataUrl('data/image/' + imagePath);
    }
    if(path.startsWith('assets/')){
      return dataUrl('data/' + path.slice('assets/'.length));
    }
    return path; // 기타 상대 경로는 그대로 사용
  }

  async function load(){
    try{
      // 길드 리스트 선로딩
      await loadGuildList();
      const r = await fetch('../assets/data/dlc/characters.json');
      if(!r.ok) throw new Error('HTTP '+r.status);
      const list = await r.json();
      // 경로 보정: R2 구조에 맞게 이미지 경로 처리
      const pdArray = (typeof window !== 'undefined' && Array.isArray(window.playerData)) ? window.playerData : [];
      const pdMap = new Map(pdArray.map(p=>[p.id, p]));
      newCharacters = (list||[]).map(c=>{
        const normalized = {
          ...c,
          image: resolveImagePath(c.image),
          imageGame: resolveImagePath(c.imageGame),
          imageReal: resolveImagePath(c.imageReal),
        };
        // dlc-guild 슬러그를 길드 설명 문장으로 변환하여 guild 필드에 주입
        const slug = c['dlc-guild'];
        if(slug){
          const line = getGuildLineBySlug(slug);
          if(line) normalized.guild = line;
        }
        // playerId 연결 시 player-data에서 간단 필드 보완
        if (c.playerId && pdMap.has(c.playerId)) {
          const pd = pdMap.get(c.playerId);
          normalized.realName = normalized.realName || pd.realName || '';
          normalized.gender = normalized.gender || pd.gender || '';
          normalized.guild = normalized.guild || pd.guild || '';
        }
        return normalized;
      });
      render();
    }catch(e){
      console.error('캐릭터 데이터를 불러오지 못했습니다:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', load);
})();
