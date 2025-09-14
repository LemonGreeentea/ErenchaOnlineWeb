(function(){
  // ---------- Constants ----------
  const STORAGE_KEY = 'dlcSelections';
  const UI_STATE_KEY = 'dlcLocationsUi'; // 접힘/펼침 유지

  // ---------- Data (Locations) ----------
  let LOCATIONS = [];
  
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
    // images/로 시작하는 경우도 CDN images 아래로 맵핑
    if (s.startsWith('images/')) {
      return dataUrl(s);
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
  async function loadLocations(){
    try {
      const res = await fetch('../assets/data/dlc/contents.json');
      if (!res.ok) throw new Error('Failed to load contents.json');
      const data = await res.json();
      if (Array.isArray(data)) LOCATIONS = data; else LOCATIONS = [];
    } catch (e) {
      console.error('contents.json 로드 실패:', e);
      LOCATIONS = [];
    }
  }

  // ---------- Utilities ----------
  const $ = (s)=> document.querySelector(s);
  const loadSelections = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const base = raw ? JSON.parse(raw) : { events: [], contents: [], characters: [], locations: [] };
      if (!base.locations) base.locations = [];
      return base;
    } catch { return { events: [], contents: [], characters: [], locations: [] }; }
  };
  const saveSelections = (obj) => localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));

  const loadUiState = () => {
    try {
      const raw = localStorage.getItem(UI_STATE_KEY);
      const ui = raw ? JSON.parse(raw) : { expanded: {} };
      if (!ui.expanded) ui.expanded = {};
      return ui;
    } catch { return { expanded: {} }; }
  };
  const saveUiState = (ui) => localStorage.setItem(UI_STATE_KEY, JSON.stringify(ui));
  const isExpanded = (id) => !!loadUiState().expanded[id];
  const setExpanded = (id, val) => { const ui = loadUiState(); if (val) ui.expanded[id] = true; else delete ui.expanded[id]; saveUiState(ui); };

  // ---------- Selection helpers ----------
  const findChosen = (sel, groupId) => (sel.locations || []).find(x => x.id === groupId);
  const allSubs = (group) => (group.sub || []).map(s => ({ id: s.id, name: s.name, loreFiles: s.loreFiles || [] }));
  const defaultSubs = (group) => (group.sub || []).filter(s => !!s.default).map(s => ({ id: s.id, name: s.name, loreFiles: s.loreFiles || [] }));
  const currentCheckedSubs = (container, group) => {
    if (!container || !(group.sub || []).length) return [];
    return Array.from(container.querySelectorAll('input[type="checkbox"][data-sub]'))
      .filter(inp => inp.checked)
      .map(inp => {
        const s = (group.sub || []).find(x => x.id === inp.getAttribute('data-sub'));
        return s ? { id: s.id, name: s.name, loreFiles: s.loreFiles || [] } : null;
      })
      .filter(Boolean);
  };

  const applyHighlight = (row, group, chosen) => {
    row.classList.remove('selected', 'partial');
    if (!chosen) return;
    const total = (group.sub || []).length;
    const count = (chosen.sub || []).length;
    if (total === 0) {
      // 서브가 없으면 선택 시 항상 selected 표시
      row.classList.add('selected');
    } else if (count === total) {
      row.classList.add('selected');
    } else if (count > 0) {
      row.classList.add('partial');
    }
  };

  // ---------- Render ----------
  function renderList(){
    const wrap = $('#locations-select-list');
    const sel = loadSelections();
    wrap.innerHTML = '';

    LOCATIONS.forEach(group => {
      const chosen = findChosen(sel, group.id);

      // 카드
      const row = document.createElement('div');
      row.className = 'dlc-card';
      row.style.padding = '16px';

      // 상단 레이아웃: 썸네일 | 본문
      const isMobile = (typeof window !== 'undefined') && (window.matchMedia ? window.matchMedia('(max-width: 640px)').matches : (window.innerWidth <= 640));
      const headWrap = document.createElement('div');
      headWrap.className = 'dlc-card__head';
      headWrap.style.display = 'grid';
      headWrap.style.gap = '12px';
      headWrap.style.alignItems = 'start';
  headWrap.style.gridTemplateColumns = isMobile ? '64px 1fr' : '144px 1fr';

      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'dlc-card__thumb-wrap';
      const thumb = document.createElement('img');
      thumb.className = 'dlc-card-thumb';
      thumb.alt = (group.name || 'DLC') + ' 썸네일';
      thumb.src = group.thumb ? resolveAsset(group.thumb) : placeholderThumb(group.name || 'DLC');
      thumb.addEventListener('error', ()=>{ thumb.src = placeholderThumb(group.name || 'DLC'); });
      // 썸네일 크기
  thumb.style.width = isMobile ? '64px' : '144px';
  thumb.style.height = isMobile ? '64px' : '144px';
      thumb.style.objectFit = 'cover';
      thumb.style.borderRadius = '8px';
      thumbWrap.appendChild(thumb);

      const content = document.createElement('div');
      content.style.display = 'grid';
      content.style.gap = '6px';
      content.style.minWidth = '0';

      // 제목
      const titleEl = document.createElement('div');
      const titleStrong = document.createElement('strong');
      titleStrong.style.fontSize = isMobile ? '16px' : '18px';
      titleStrong.textContent = group.name || 'DLC';
      titleEl.appendChild(titleStrong);
      // 태그 배지 (콘텐츠 종류별 색상)
      if (Array.isArray(group.tags) && group.tags.length) {
        const tagsWrap = document.createElement('span');
        tagsWrap.style.marginLeft = '8px';
        tagsWrap.style.display = 'inline-flex';
        tagsWrap.style.gap = '6px';
        group.tags.forEach(t => {
          const badge = document.createElement('span');
          badge.textContent = String(t);
          badge.style.fontSize = '11px';
          badge.style.padding = '2px 6px';
          badge.style.borderRadius = '999px';
          // 색상 매핑
          const raw = String(t).trim();
          const key = raw.toLowerCase();
          let bg = '#607d8b', border = '#546e7a', color = '#ffffff'; // default (slate)
          if (raw === '지역') { // Region
            bg = '#1976d2'; border = '#1565c0'; color = '#ffffff';
          } else if (key === 'npc') { // NPC
            bg = '#2e7d32'; border = '#1b5e20'; color = '#ffffff';
          } else if (raw === '이벤트' || key === 'event' || key === 'events') { // Event
            bg = '#ef6c00'; border = '#e65100'; color = '#ffffff';
          } else if (raw === '몬스터') { // Monster
            bg = '#6a1b9a'; border = '#4a148c'; color = '#ffffff';
          }
          badge.style.background = bg;
          badge.style.border = '1px solid ' + border;
          badge.style.color = color;
          tagsWrap.appendChild(badge);
        });
        titleEl.appendChild(tagsWrap);
      }

      // 제작자(작은 글씨)
      const authorEl = document.createElement('div');
      authorEl.className = 'muted';
      authorEl.style.fontSize = '12px';
      authorEl.textContent = group.author ? `by. ${group.author}` : '';

      // 간단 설명
      const descEl = document.createElement('p');
      descEl.style.margin = '0';
      descEl.style.lineHeight = '1.45';
      descEl.textContent = group.description || '';

      // 업데이트 날짜(왼쪽 정렬)
      const updEl = document.createElement('div');
      if (group.lastUpdated) {
        updEl.className = 'muted';
        updEl.style.fontSize = '12px';
        updEl.textContent = group.lastUpdated;
      }

      // 액션 버튼들
      const actions = document.createElement('div');
      actions.style.display = 'flex';
      actions.style.gap = '8px';
      actions.style.flexWrap = 'wrap';
      actions.style.alignItems = 'center';
      const btnDetails = document.createElement('button');
      btnDetails.type = 'button';
      btnDetails.className = 'button secondary';
      btnDetails.textContent = '자세한 설명';
      const btnSource = document.createElement('a');
      btnSource.className = 'button';
      btnSource.textContent = '출처';
      btnSource.href = group.source || '#';
      btnSource.target = '_blank';
      btnSource.rel = 'noopener noreferrer';
      // 공통 버튼 모양 개선(필 형태)
      [btnDetails, btnSource].forEach(b=>{
        b.style.borderRadius = '999px';
        b.style.padding = isMobile ? '6px 10px' : '8px 12px';
        b.style.fontSize = isMobile ? '12px' : '13px';
      });
      actions.append(btnDetails, btnSource);

      // 메타/액션 행: 왼쪽에 업데이트, 오른쪽에 버튼
      const metaRow = document.createElement('div');
      metaRow.style.display = 'flex';
      metaRow.style.alignItems = 'center';
      metaRow.style.gap = '8px';
      metaRow.style.flexWrap = 'wrap';
      const spacer = document.createElement('div');
      spacer.style.flex = '1 1 auto';
      metaRow.append(updEl, spacer, actions);

      content.append(titleEl, authorEl, descEl, metaRow);

      headWrap.append(thumbWrap, content);

  const hasSubs = Array.isArray(group.sub) && group.sub.length > 0;
      let sub = null; let fadeToggle = null; let fadeFooter = null;
      if (hasSubs) {
        // 서브 체크박스 컨테이너
        sub = document.createElement('div');
        sub.className = 'collapsible collapsed';
        sub.style.display = 'grid';
        sub.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px,1fr))';
        sub.style.gap = '8px';

        // 세부 펼침 상태 복원
        if (isExpanded(group.id)) sub.classList.remove('collapsed');

        // 서브 렌더
        (group.sub || []).forEach(s => {
          const checked = !!(chosen && (chosen.sub || []).find(x => x.id === s.id));
          const box = document.createElement('label');
          box.style.display = 'flex'; box.style.alignItems = 'center'; box.style.gap = '8px'; box.style.cursor = 'pointer';
          box.innerHTML = `<input type="checkbox" data-sub="${s.id}" ${checked? 'checked':''}/><span>${s.name}</span>`;
          sub.appendChild(box);
        });

        // 푸터(그라데이션) + 토글
        fadeFooter = document.createElement('div');
        fadeFooter.className = 'dlc-fade-footer';
        fadeToggle = document.createElement('button');
        fadeToggle.type = 'button'; fadeToggle.className = 'fade-toggle';
        const syncFade = () => {
          const collapsed = sub.classList.contains('collapsed');
          fadeToggle.textContent = collapsed ? '세부 사항 펼치기 ▼' : '세부 사항 접기 ▲';
          fadeToggle.setAttribute('aria-expanded', String(!collapsed));
          fadeToggle.classList.toggle('expanded', !collapsed);
        };
        syncFade();
        fadeToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          const collapsed = sub.classList.contains('collapsed');
          if (collapsed) sub.classList.remove('collapsed'); else sub.classList.add('collapsed');
          setExpanded(group.id, collapsed);
          syncFade();
        });
        fadeFooter.appendChild(fadeToggle);

        row.append(headWrap, sub, fadeFooter);
      } else {
        // 서브가 없으면 헤더만 추가
        row.append(headWrap);
      }
      wrap.appendChild(row);

      // 하이라이트 적용
      applyHighlight(row, group, chosen);

      // ---------- Events ----------
      // 카드 전체 클릭: 선택/해제 (버튼/링크/서브체크/토글 클릭은 무시)
      row.style.cursor = 'pointer';
      row.addEventListener('click', (e) => {
        const t = e.target;
        const actions = headWrap.querySelector('div'); // first actions in content
        // 버튼/링크 클릭 시 카드 토글 방지
        const btnSecondary = headWrap.querySelector('button.button.secondary');
        const linkSource = headWrap.querySelector('a.button');
        if (btnSecondary && (t === btnSecondary || btnSecondary.contains(t))) return;
        if (linkSource && (t === linkSource || linkSource.contains(t))) return;
        if (fadeToggle && (t === fadeToggle || fadeToggle.contains(t))) return;
        if (fadeFooter && (t === fadeFooter || fadeFooter.contains(t))) return;
        if (hasSubs && sub && (t === sub || sub.contains(t))) return;
        const store = loadSelections();
        const already = findChosen(store, group.id);
        if (already) {
          // 해제: 해당 그룹만 제거 (다중 선택 유지)
          store.locations = (store.locations || []).filter(x => x.id !== group.id);
          saveSelections(store);
          renderList();
          return;
        }
        // 선택
        let subs = [];
        if (hasSubs) {
          const collapsed = sub.classList.contains('collapsed');
          subs = collapsed ? allSubs(group) : currentCheckedSubs(sub, group);
          if (!subs.length) subs = defaultSubs(group);
        } else {
          // 서브가 없으면 그룹 자체를 대표하는 더미 서브를 생성해 다운로드 단계에서 group.loreFiles를 처리하도록 연결
          subs = [];
        }
        const locs = store.locations || [];
        const idx = locs.findIndex(x => x.id === group.id);
        const entry = { id: group.id, name: group.name, sub: subs };
        if (idx >= 0) locs[idx] = entry; else locs.push(entry);
        store.locations = locs;
        saveSelections(store);
        renderList();
      });

      // 서브 체크 변경: 선택 갱신 + 하이라이트 즉시 반영
      if (hasSubs && sub) {
        sub.addEventListener('change', () => {
          const store = loadSelections();
          const subs = currentCheckedSubs(sub, group);
          let locs = store.locations || [];
          const idx = locs.findIndex(x => x.id === group.id);
          const entry = { id: group.id, name: group.name, sub: subs };
          if (idx >= 0) locs[idx] = entry; else locs.push(entry);
          store.locations = locs;
          saveSelections(store);
          applyHighlight(row, group, entry);
        });
      }

      // 상세 모달 (배열/파일 지원)
      const validBodyLoad = async () => {
        const body = await loadDetailsBody(group);
        openDetailsModal(group.name, body);
      };
      const btnDetailsEl = headWrap.querySelector('button.button.secondary');
      if (btnDetailsEl) btnDetailsEl.addEventListener('click', (e)=>{ e.stopPropagation(); validBodyLoad(); });
    });
  }

  // ---------- Misc ----------
  function placeholderThumb(label){
    const text = encodeURIComponent((label || 'DLC').slice(0, 10));
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#0f151c'/>
      <stop offset='100%' stop-color='#1d2733'/>
    </linearGradient>
  </defs>
  <rect width='512' height='512' fill='url(#g)'/>
  <rect x='16' y='16' width='480' height='480' rx='24' ry='24' fill='none' stroke='#2f3e4c' stroke-width='4'/>
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Noto Sans KR, sans-serif' font-size='36' fill='#a0b0c0'>${text}</text>
  <text x='50%' y='86%' dominant-baseline='middle' text-anchor='middle' font-family='Noto Sans KR, sans-serif' font-size='18' fill='#4db8ff'>Thumbnail</text>
  </svg>`;
    return 'data:image/svg+xml;utf8,' + svg;
  }

  function attachButtons(){
    const clearTop = $('#locations-clear-top');
    const clearBottom = $('#locations-clear-bottom');
    const allTop = $('#locations-select-all-top');
    const allBottom = $('#locations-select-all-bottom');

    const clearSelections = () => { const sel = loadSelections(); sel.locations = []; saveSelections(sel); renderList(); };
    const selectAll = () => {
      const sel = loadSelections();
      if (LOCATIONS.length) {
        sel.locations = LOCATIONS.map(g => ({ id: g.id, name: g.name, sub: allSubs(g) }));
      } else sel.locations = [];
      saveSelections(sel);
      renderList();
    };
    if (clearTop) clearTop.onclick = clearSelections;
    if (clearBottom) clearBottom.onclick = clearSelections;
    if (allTop) allTop.onclick = selectAll;
    if (allBottom) allBottom.onclick = selectAll;
  }

  // 간단 모달 생성/제어
  function openDetailsModal(title, body){
    let overlay = document.getElementById('loc-details-overlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'loc-details-overlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="loc-details-title">
          <div class="modal-header">
            <div id="loc-details-title" class="modal-title"></div>
            <button type="button" class="modal-close" id="loc-details-close">닫기</button>
          </div>
          <div class="modal-body">
            <div class="meta" id="loc-details-body" style="grid-column: 1 / -1;"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button secondary" id="loc-details-close2">닫기</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
      const close = ()=> overlay.classList.remove('active');
      overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
      overlay.querySelector('#loc-details-close').addEventListener('click', close);
      overlay.querySelector('#loc-details-close2').addEventListener('click', close);
    }
    overlay.querySelector('#loc-details-title').textContent = title;
    overlay.querySelector('#loc-details-body').innerHTML = `<p>${escapeHtml(body).replace(/\n/g,'<br>')}</p>`;
    overlay.classList.add('active');
  }

  // details를 편하게 작성하기 위한 로더: 배열/파일 경로 모두 지원
  async function loadDetailsBody(group){
    // 1) detailsFile 우선
    if (group.detailsFile) {
      try {
        const res = await fetch(resolveAsset(group.detailsFile));
        if (res.ok) {
          return await res.text();
        }
      } catch (e) { console.warn('detailsFile 로드 실패:', e); }
    }
    // 2) details가 배열이면 문단 구분으로 합치기
    if (Array.isArray(group.details)) {
      return group.details.join('\n\n');
    }
    // 3) 문자열이면 그대로
    return group.details || group.description || '';
  }

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' })[s]);

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', async ()=>{
    await loadLocations();
    renderList();
    attachButtons();
  });
})();
