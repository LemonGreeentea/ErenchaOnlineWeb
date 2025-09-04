(function(){
  // Systems page with selection and quickInstall handling
  const STORAGE_KEY = 'dlcSelections';
  const UI_STATE_KEY = 'dlcSystemsUi';

  let SYSTEMS = [];
  const $ = s => document.querySelector(s);

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

  const getPrefix = () => {
    const p = window.location.pathname;
    return p.includes('/menu_dlc/') ? '../' : './';
  };
  const resolveAsset = (p) => {
    if (!p) return '';
    const s = String(p);
    if (s.startsWith('http://') || s.startsWith('https://') || s.startsWith('data:')) return s;
    // 루트 기준 경로("/images/..." 등)은 CDN 베이스(meta dlc-data-base)에 붙여 사용
    if (s.startsWith('/')) {
      const rel = s.replace(/^\/+/, '');
      return dataUrl(rel);
    }
    // R2 구조에 맞게 에셋 경로 처리
    if(s.startsWith('assets/images/')){
      // assets/images/DLC/xxx 또는 assets/images/dlc/xxx → images/DLC/xxx (CDN 구조)
      let imagePath = s.slice('assets/images/'.length);
      if (imagePath.startsWith('DLC/')) {
        // 그대로 사용
      } else if (imagePath.startsWith('dlc/')) {
        imagePath = 'DLC/' + imagePath.slice(4); // DLC 폴더 대소문자 정규화
      }
      return dataUrl('images/' + imagePath);
    }
    if(s.startsWith('assets/')){
      return dataUrl('data/' + s.slice('assets/'.length));
    }
    return getPrefix() + s.replace(/^\/?/, '');
  };

  async function loadSystems(){
    try {
      const res = await fetch('../assets/data/dlc/systems.json');
      if (!res.ok) throw new Error('Failed to load systems.json');
      const data = await res.json();
      SYSTEMS = Array.isArray(data) ? data : [];
    } catch(e){
      console.error('systems.json 로드 실패:', e);
      SYSTEMS = [];
    }
  }

  function loadSelections(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      const base = raw ? JSON.parse(raw) : { events: [], contents: [], characters: [], locations: [], systems: [] };
      if (!base.systems) base.systems = [];
      return base;
    }catch{ return { events: [], contents: [], characters: [], locations: [], systems: [] }; }
  }
  function saveSelections(obj){ localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }

  const isSelected = (sel, id) => (sel.systems || []).some(x=>x.id===id);
  const findChosen = (sel, id) => (sel.systems || []).find(x=>x.id===id);

  function allSubs(sys){ return (sys.sub || []).map(s=>({ id:s.id, name:s.name, loreFiles:s.loreFiles||[] })); }
  function defaultSubs(sys){ return (sys.sub || []).filter(s=>!!s.default).map(s=>({ id:s.id, name:s.name, loreFiles:s.loreFiles||[] })); }

  function toggleSystem(sys){
    const sel = loadSelections();
    const list = sel.systems || (sel.systems=[]);
    const idx = list.findIndex(x=>x.id===sys.id);
    if(idx>=0){ list.splice(idx,1); }
    else{
      const subs = Array.isArray(sys.sub) && sys.sub.length ? defaultSubs(sys) : [];
      list.push({ id: sys.id, name: sys.name, sub: subs });
    }
    saveSelections(sel);
    return isSelected(loadSelections(), sys.id);
  }

  function render(){
    const wrap = $('#systems-select-list');
    if (!wrap) return;
    wrap.innerHTML = '';
    const sel = loadSelections();

    SYSTEMS.forEach(sys => {
      const chosen = findChosen(sel, sys.id);
      const quick = (sys.quickInstall !== false); // default true
      const row = document.createElement('div');
      row.className = 'dlc-card';
      row.style.padding = '16px';
      if (isSelected(sel, sys.id)) row.classList.add('selected');

      // header layout
      const headWrap = document.createElement('div');
      headWrap.style.display = 'grid';
      const isMobile = (typeof window !== 'undefined') && (window.matchMedia ? window.matchMedia('(max-width: 640px)').matches : (window.innerWidth <= 640));
  headWrap.style.gridTemplateColumns = (isMobile ? '64px' : '144px') + ' 1fr';
      headWrap.style.gap = '12px';

      const img = document.createElement('img');
      img.className = 'dlc-card-thumb';
      img.alt = (sys.name||'시스템') + ' 썸네일';
      img.src = sys.thumb ? resolveAsset(sys.thumb) : '';
  img.style.width = isMobile ? '64px' : '144px';
  img.style.height = isMobile ? '64px' : '144px';
      img.style.objectFit='cover'; img.style.borderRadius='8px';

      const content = document.createElement('div');
      content.style.display = 'grid';
      content.style.gap = '6px';

      // 제목 + 배지(수동설치)
      const titleRow = document.createElement('div');
      titleRow.style.display = 'flex';
      titleRow.style.alignItems = 'center';
      titleRow.style.gap = '8px';
      const title = document.createElement('strong');
      title.textContent = sys.name || '시스템';
      titleRow.appendChild(title);
      if (!quick) {
        const badge = document.createElement('span');
        badge.textContent = '수동설치';
        badge.title = '간편설치 불가 DLC';
        badge.style.fontSize = '11px';
        badge.style.lineHeight = '1';
        badge.style.padding = '4px 8px';
        badge.style.borderRadius = '999px';
        badge.style.border = '1px solid #ff5a5a';
        badge.style.color = '#ff9a9a';
        badge.style.background = 'rgba(255,90,90,0.12)';
        titleRow.appendChild(badge);
      }

      const author = document.createElement('div');
      author.className = 'muted'; author.style.fontSize = '12px';
      author.textContent = sys.author ? `by. ${sys.author}` : '';

      const desc = document.createElement('p');
      desc.style.margin = '0'; desc.style.lineHeight = '1.45';
      desc.textContent = sys.description || '';

      const metaRow = document.createElement('div');
      metaRow.style.display='flex'; metaRow.style.alignItems='center'; metaRow.style.gap='8px'; metaRow.style.flexWrap='wrap';
      const updated = document.createElement('div');
      if (sys.lastUpdated) { updated.className='muted'; updated.style.fontSize='12px'; updated.textContent = sys.lastUpdated; }
      const spacer = document.createElement('div'); spacer.style.flex='1 1 auto';

      const actions = document.createElement('div'); actions.style.display='flex'; actions.style.gap='8px'; actions.style.flexWrap='wrap';
      const btnDetails = document.createElement('button'); btnDetails.className='button secondary'; btnDetails.type='button'; btnDetails.textContent='자세한 설명';
      // 두 번째 버튼: quickInstall 여부에 따라 라벨/링크 변경
      const btnLink = document.createElement('a'); btnLink.className='button';
      if (quick) {
        btnLink.textContent = '출처';
        if (sys.source) { btnLink.href = sys.source; btnLink.target='_blank'; btnLink.rel='noopener noreferrer'; }
        else { btnLink.textContent='출처 없음'; btnLink.classList.add('secondary'); btnLink.href='#'; btnLink.addEventListener('click', e=>e.preventDefault()); }
      } else {
        btnLink.textContent = '다운로드';
        if (sys.downloadUrl) { btnLink.href = sys.downloadUrl; btnLink.target='_blank'; btnLink.rel='noopener noreferrer'; }
        else { btnLink.textContent='다운로드 없음'; btnLink.classList.add('secondary'); btnLink.href='#'; btnLink.addEventListener('click', e=>e.preventDefault()); }
      }
      actions.append(btnDetails, btnLink);
      metaRow.append(updated, spacer, actions);

  content.append(titleRow, author, desc, metaRow);
      headWrap.append(img, content);
      row.append(headWrap);
      wrap.appendChild(row);

      // Events
      btnDetails.addEventListener('click', async (e)=>{ 
        e.stopPropagation(); 
        const body = await loadDetailsBody(sys);
        openDetailsModal(sys.name || '시스템', body);
      });
      row.style.cursor = 'pointer';
      row.addEventListener('click', ()=>{
        if (!quick) {
          // 비선택 표시: 빨간 외곽선 강조 후 해제
          const prev = row.style.boxShadow;
          row.style.boxShadow = '0 0 0 2px #ff5a5a inset';
          setTimeout(()=>{ row.style.boxShadow = prev || ''; }, 900);
          return;
        }
        const nowOn = toggleSystem(sys);
        row.classList.toggle('selected', nowOn);
      });
    });

    // Top/Bottom controls
    attachButtons();
  }

  function attachButtons(){
    const clearTop = $('#systems-clear-top');
    const clearBottom = $('#systems-clear-bottom');
    const allTop = $('#systems-select-all-top');
    const allBottom = $('#systems-select-all-bottom');

    const clearSelections = () => { const sel = loadSelections(); sel.systems = []; saveSelections(sel); render(); };
    const selectAll = () => {
      const sel = loadSelections();
      const ids = new Set((sel.systems||[]).map(x=>x.id));
      SYSTEMS.forEach(sys=>{
        const quick = (sys.quickInstall !== false);
        if (!quick) return; // 간편설치 불가 제외
        if (!ids.has(sys.id)) sel.systems.push({ id: sys.id, name: sys.name, sub: Array.isArray(sys.sub)&&sys.sub.length? defaultSubs(sys):[] });
      });
      saveSelections(sel); render();
    };

    if (clearTop) clearTop.onclick = clearSelections;
    if (clearBottom) clearBottom.onclick = clearSelections;
    if (allTop) allTop.onclick = selectAll;
    if (allBottom) allBottom.onclick = selectAll;
  }

  // --- Details modal (same style as locations) ---
  function openDetailsModal(title, body){
    let overlay = document.getElementById('sys-details-overlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'sys-details-overlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="sys-details-title">
          <div class="modal-header">
            <div id="sys-details-title" class="modal-title"></div>
            <button type="button" class="modal-close" id="sys-details-close">닫기</button>
          </div>
          <div class="modal-body">
            <div class="meta" id="sys-details-body" style="grid-column: 1 / -1;"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button secondary" id="sys-details-close2">닫기</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
      const close = ()=> overlay.classList.remove('active');
      overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
      overlay.querySelector('#sys-details-close').addEventListener('click', close);
      overlay.querySelector('#sys-details-close2').addEventListener('click', close);
    }
    overlay.querySelector('#sys-details-title').textContent = title;
    overlay.querySelector('#sys-details-body').innerHTML = `<p>${escapeHtml(body).replace(/\n/g,'<br>')}</p>`;
    overlay.classList.add('active');
  }

  async function loadDetailsBody(sys){
    if (sys.detailsFile) {
      try {
        const res = await fetch(resolveAsset(sys.detailsFile));
        if (res.ok) return await res.text();
      } catch (e) { console.warn('systems detailsFile 로드 실패:', e); }
    }
    if (Array.isArray(sys.details)) return sys.details.join('\n\n');
    return sys.details || sys.description || '';
  }

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' })[s]);

  document.addEventListener('DOMContentLoaded', async ()=>{
    await loadSystems();
    render();
  });
})();
