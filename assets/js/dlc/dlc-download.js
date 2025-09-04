(function(){
  function $(sel){return document.querySelector(sel);} 
  function createLi(text){const li=document.createElement('li'); li.textContent=text; return li;}
  function bytesToSize(bytes){
    if(bytes === 0) return '0 B';
    const k = 1024, dm = 2, sizes = ['B','KB','MB','GB'];
    const i = Math.floor(Math.log(bytes)/Math.log(k));
    return parseFloat((bytes/Math.pow(k,i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // RPack WASM 로더 (rpack 압축/해제를 위해 사용). WASM 경로는 assets/js/dlc/rpack_bg.wasm
  const RPACK_WASM_URL = '../assets/js/dlc/rpack_bg.wasm';
  const RPack = {
    wasm: null,
    memory: null,
    async init(){
      if (this.wasm) return;
      const res = await fetch(RPACK_WASM_URL);
      if (WebAssembly.instantiateStreaming) {
        const { instance } = await WebAssembly.instantiateStreaming(res, {});
        this.wasm = instance.exports; this.memory = this.wasm.memory;
      } else {
        const buf = await res.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(buf, {});
        this.wasm = instance.exports; this.memory = this.wasm.memory;
      }
    },
    _u8(){ return new Uint8Array(this.memory.buffer); },
    _view(){ return new DataView(this.memory.buffer); },
    _pass(arr){ const ptr = this.wasm.__wbindgen_malloc(arr.length, 1) >>> 0; this._u8().set(arr, ptr); return { ptr, len: arr.length }; },
    _take(ptr,len){ const out = this._u8().subarray(ptr, ptr+len).slice(); this.wasm.__wbindgen_free(ptr, len, 1); return out; },
    async encode(u8){
      await this.init();
      const ret = this.wasm.__wbindgen_add_to_stack_pointer(-16);
      const { ptr, len } = this._pass(u8);
      this.wasm.encode(ret, ptr, len);
      const v = this._view();
      const outPtr = v.getInt32(ret+0, true); const outLen = v.getInt32(ret+4, true);
      const out = this._take(outPtr, outLen);
      this.wasm.__wbindgen_add_to_stack_pointer(16);
      return out;
    },
    async decode(u8){
      await this.init();
      const ret = this.wasm.__wbindgen_add_to_stack_pointer(-16);
      const { ptr, len } = this._pass(u8);
      this.wasm.decode(ret, ptr, len);
      const v = this._view();
      const outPtr = v.getInt32(ret+0, true); const outLen = v.getInt32(ret+4, true);
      const out = this._take(outPtr, outLen);
      this.wasm.__wbindgen_add_to_stack_pointer(16);
      return out;
    }
  };

  function u32le(n){ const b=new Uint8Array(4); new DataView(b.buffer).setUint32(0,n,true); return b; }
  function joinU8(arrs){ let t=0; for(const a of arrs) t+=a.length; const out=new Uint8Array(t); let o=0; for(const a of arrs){ out.set(a,o); o+=a.length; } return out; }
  function te(s){ return new TextEncoder().encode(s); }
  // ---- Data Base (Cloudflare R2) 설정 ----
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
    // rel은 data 루트(assets/data) 이하 경로
    const base = getDataBase();
    rel = String(rel||'').replace(/^\/+/, '');
    return base + rel;
  }
  function resolveDataPath(p){
    if(!p) return p;
    if(/^https?:\/\//i.test(p)) return p; // absolute
    // strip leading ../ or /
    const s = String(p).replace(/^\.\.\//, '').replace(/^\//,'');
    
    // R2 구조 매핑: 현재 R2에는 data 폴더가 직접 업로드되어 있음
    // 1) 에셋 이미지(다운로드용): assets/data/asset(s)/* → data/assets/*
    if(s.startsWith('assets/data/asset/')){
      return dataUrl('data/assets/' + s.slice('assets/data/asset/'.length));
    }
    if(s.startsWith('assets/data/assets/')){
      return dataUrl('data/assets/' + s.slice('assets/data/assets/'.length));
    }
    // 2) 이미 data/assets/* 형태라면 그대로 사용
    if(s.startsWith('data/assets/')){
      return dataUrl(s);
    }
    // 3) 일반 데이터 파일: assets/data/* → data/*
    if(s.startsWith('assets/data/')){
      // assets/data/dlc/xxx → data/dlc/xxx (R2에서는 data 폴더가 루트에 있음)
      return dataUrl('data/' + s.slice('assets/data/'.length));
    }
    // 4) 레거시 이미지 경로 지원: assets/images/* → data/image/* (DLC 폴더 제거)
    if(s.startsWith('assets/images/')){
      // assets/images/DLC/xxx 또는 assets/images/dlc/xxx → data/image/xxx (DLC 폴더 제거)
      let imagePath = s.slice('assets/images/'.length);
      if(imagePath.startsWith('DLC/') || imagePath.startsWith('dlc/')){
        imagePath = imagePath.slice(4); // 'DLC/' 또는 'dlc/' 제거
      }
      return dataUrl('data/image/' + imagePath);
    }
    
    // If caller already gives path under data root
    return dataUrl(s);
  }

  // selections 구조 예: { events: [{id,name}], contents: [...], characters: [...] }
  function loadSelections(){
    try{
      const raw = localStorage.getItem('dlcSelections');
  return raw ? JSON.parse(raw) : { events: [], contents: [], characters: [], locations: [] };
    }catch(e){
  return { events: [], contents: [], characters: [], locations: [] };
    }
  }

  // slots
  function loadSlots(){
    try{
      const raw = localStorage.getItem('dlcSelectionSlots');
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.slice(0,6) : [];
    }catch{ return []; }
  }
  function saveSlots(slots){ localStorage.setItem('dlcSelectionSlots', JSON.stringify(slots.slice(0,6))); }
  function formatKST(iso){
    try{
      const d = new Date(iso);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return new Intl.DateTimeFormat('ko-KR', { dateStyle:'medium', timeStyle:'short', timeZone: tz }).format(d);
    }catch{ return iso; }
  }
  function renderSlots(){
    const host = document.getElementById('dlc-selection-slots'); if(!host) return;
    host.innerHTML = '';
    const slots = loadSlots();
    for(let i=0;i<6;i++){
      const s = slots[i];
      const el = document.createElement('div'); el.className = 'dlc-slot';
      if(s){
        const h = document.createElement('h4'); h.textContent = s.name || `슬롯 ${i+1}`;
        const t = document.createElement('small'); t.textContent = `저장일시: ${formatKST(s.savedAt)}`;
        const row = document.createElement('div'); row.className = 'row';
        const btnLoad = document.createElement('button'); btnLoad.className='button'; btnLoad.type='button'; btnLoad.textContent='불러오기'; btnLoad.onclick=()=>{ saveSelections(s.data); renderAll(); };
        const btnOverwrite = document.createElement('button'); btnOverwrite.className='button secondary'; btnOverwrite.type='button'; btnOverwrite.textContent='덮어쓰기'; btnOverwrite.onclick=()=> promptSaveToSlot(i);
        const btnClear = document.createElement('button'); btnClear.className='button secondary'; btnClear.type='button'; btnClear.textContent='비우기'; btnClear.onclick=()=>{ if(confirm('이 슬롯을 비울까요?')){ slots[i]=null; saveSlots(slots); renderSlots(); } };
        row.append(btnLoad, btnOverwrite, btnClear);
        el.append(h,t,row);
      } else {
        const h = document.createElement('h4'); h.textContent = `슬롯 ${i+1}`;
        const t = document.createElement('small'); t.textContent = '비어 있음';
        const row = document.createElement('div'); row.className = 'row';
        const btnSave = document.createElement('button'); btnSave.className='button'; btnSave.type='button'; btnSave.textContent='저장'; btnSave.onclick=()=> promptSaveToSlot(i);
        row.append(btnSave);
        el.append(h,t,row);
      }
      host.appendChild(el);
    }
  }
  function promptSaveToSlot(index){
    const name = prompt('슬롯 이름을 입력하세요 (예: 레이드 세팅)');
    if(name===null) return;
    const slots = loadSlots();
    const data = loadSelections();
    slots[index] = { name: name.trim()||`슬롯 ${index+1}`, savedAt: new Date().toISOString(), data };
    saveSlots(slots);
    renderSlots();
  }

  // share code (URL-safe base64 of JSON, optionally compressed later)
  function encodeShareCode(sel){
    const json = JSON.stringify({ v:1, d: sel });
    const b64 = btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
    return b64;
  }
  function decodeShareCode(code){
    try{
      const b64 = code.replace(/-/g,'+').replace(/_/g,'/');
      const json = decodeURIComponent(escape(atob(b64)));
      const obj = JSON.parse(json);
      if(obj && obj.v===1 && obj.d) return obj.d;
      return null;
    }catch{ return null; }
  }

  function renderSummary(sel){
  const hasAny = (sel.events?.length||0) + (sel.contents?.length||0) + (sel.characters?.length||0) + (sel.locations?.length||0) > 0;
    const emptyEl = $('#dlc-empty');
    const summary = $('#selection-summary');
    emptyEl.style.display = hasAny ? 'none' : 'block';
    summary.style.display = hasAny ? 'block' : 'none';

    const ulE = $('#list-events'); ulE.innerHTML='';
    const ulC = $('#list-contents'); ulC.innerHTML='';
    const ulP = $('#list-characters'); ulP.innerHTML='';
    (sel.events||[]).forEach(x=> ulE.appendChild(createLi(x.name||x.title||String(x.id))));
    (sel.contents||[]).forEach(x=> ulC.appendChild(createLi(x.name||x.title||String(x.id))));
    (sel.characters||[]).forEach(x=> ulP.appendChild(createLi(x.name||x.title||String(x.id))));
    // locations는 세부 선택을 괄호로 표시
    const locList = document.createElement('div');
    locList.style.marginTop = '10px';
    (sel.locations||[]).forEach(loc=>{
      const li = createLi(loc.name || String(loc.id));
      const subs = (loc.sub||[]).map(s=> s.name).join(', ');
      if(subs){ li.textContent += ` (${subs})`; }
      ulC.appendChild(li); // 컨텐츠 섹션 하단에 함께 표시(요약 영역 확장 최소화)
    });
  }

  // ---- Download analytics (per-DLC with 30min dedup) ----
  const DL_AUDIT_KEY = 'dlcDownloadAudit';
  const DEDUP_MS = 30 * 60 * 1000; // 30 minutes
  function loadAudit(){
    try{ const raw = localStorage.getItem(DL_AUDIT_KEY); return raw ? JSON.parse(raw) : {}; }catch{ return {}; }
  }
  function saveAudit(obj){ try{ localStorage.setItem(DL_AUDIT_KEY, JSON.stringify(obj)); }catch{} }
  function dlcItemsFromSelections(sel){
    const items = [];
    (sel.events||[]).forEach(x=> items.push({ id: x.id, name: x.name||x.title||x.id, type: 'event' }));
    (sel.contents||[]).forEach(x=> items.push({ id: x.id, name: x.name||x.title||x.id, type: 'content' }));
    (sel.characters||[]).forEach(x=> items.push({ id: x.id, name: x.name||x.title||x.id, type: 'character' }));
    (sel.locations||[]).forEach(loc=>{
      items.push({ id: loc.id, name: loc.name||loc.id, type: 'location-group' });
      (loc.sub||[]).forEach(s=> items.push({ id: s.id, name: s.name||s.id, type: 'location-sub' }));
    });
    return items;
  }
  function filterDedup(items){
    const audit = loadAudit();
    const now = Date.now();
    const out = [];
    items.forEach(it=>{
      const key = `${it.type}:${it.id}`;
      const last = audit[key] || 0;
      if(now - last >= DEDUP_MS){ out.push(it); audit[key] = now; }
    });
    saveAudit(audit);
    return out;
  }
  function sendDownloadAnalytics(items, artifact){
    if(!items || !items.length) return;
    const gtag = window.gtag;
    const plausible = window.plausible;
    items.forEach(it=>{
      const payload = { dlc_id: it.id, dlc_type: it.type, dlc_name: it.name, artifact: artifact||'unknown' };
      if(typeof gtag === 'function'){
        gtag('event','dlc_download', payload);
      } else if(typeof plausible === 'function'){
        try{ plausible('DLC Download', { props: payload }); }catch{}
      } else {
        // fallback: console log
        try{ console.info('[dlc] download', payload); }catch{}
      }
    });
  }

  // Local stats store for operator page
  const DL_STATS_KEY = 'dlcDownloadStats';
  function loadStats(){ try{ const raw=localStorage.getItem(DL_STATS_KEY); return raw? JSON.parse(raw): {}; }catch{ return {}; } }
  function saveStats(s){ try{ localStorage.setItem(DL_STATS_KEY, JSON.stringify(s)); }catch{} }
  function updateStats(items, artifact){
    if(!items || !items.length) return;
    const stats = loadStats();
    const now = Date.now();
    items.forEach(it=>{
      const key = `${it.type}:${it.id}`;
      const rec = stats[key] || { id: it.id, type: it.type, name: it.name, count: 0, perArtifact: {}, lastAt: 0 };
      rec.name = it.name || rec.name; // keep latest name
      rec.count += 1;
      rec.perArtifact[artifact] = (rec.perArtifact[artifact]||0) + 1;
      rec.lastAt = now;
      stats[key] = rec;
    });
    saveStats(stats);
  }

  // Optional server analytics
  function getAnalyticsEndpoint(){
    let ep = null;
    try{ if(window.DLC_ANALYTICS_ENDPOINT) ep = String(window.DLC_ANALYTICS_ENDPOINT); }catch{}
    if(!ep){
      const meta = document.querySelector('meta[name="dlc-analytics-endpoint"]');
      if(meta && meta.content) ep = meta.content.trim();
    }
    return ep || null;
  }
  function clientId(){
    const KEY='dlcClientId';
    try{
      let id = localStorage.getItem(KEY);
      if(!id){ id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16)); localStorage.setItem(KEY,id); }
      return id;
    }catch{ return 'anon'; }
  }
  async function sendServerAnalytics(items, artifact){
    const endpoint = getAnalyticsEndpoint();
    if(!endpoint || !items || !items.length) return;
    const payload = {
      site: location.host,
      clientId: clientId(),
      artifact: artifact||'unknown',
      ts: Date.now(),
      windowBucket: Math.floor(Date.now()/DEDUP_MS),
      items: items.map(it=>({ key: `${it.type}:${it.id}` , id: it.id, type: it.type, name: it.name }))
    };
    try{
      await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload), keepalive: true });
    }catch(e){ console.warn('Server analytics failed', e); }
  }

  // ---- Global Notes builder ----
  // Returns { text: string, hasDLCData: boolean }
  async function buildGlobalNotesText(sel){
  // Load locations.json to access globalNotes fields
    async function loadLocations(){
      try{
  const res = await fetch('../assets/data/dlc/locations.json');
        if(!res.ok) throw new Error('HTTP '+res.status);
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }catch(e){ console.error('Failed to load locations.json', e); return []; }
    }
    async function loadBaseline(){
      try{
  const res = await fetch('../assets/data/dlc/global-notes-baseline.json');
        if(!res.ok) throw new Error('HTTP '+res.status);
        return await res.json();
      }catch(e){ console.error('Failed to load baseline notes', e); return { defaultCharacters: [], defaultRealLife: [] }; }
    }
    async function loadCharacters(){
      try{
  const res = await fetch('../assets/data/dlc/characters.json');
        if(!res.ok) throw new Error('HTTP '+res.status);
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }catch(e){ console.error('Failed to load characters.json', e); return []; }
    }
    const groups = await loadLocations();
    const charsData = await loadCharacters();
    const baseline = await loadBaseline();
    const byId = Object.fromEntries(groups.map(g=>[g.id, g]));
    const charById = Object.fromEntries((charsData||[]).map(c=>[c.id,c]));

    const locs = sel.locations || [];
    // Separate DLC-derived sets from baseline sets to evaluate badge visibility later
    const baselineCharacters = new Set(baseline.defaultCharacters||[]);
    const baselineReal = new Set(baseline.defaultRealLife||[]);
    const dlcCharacters = new Set();
    const dlcReal = new Set();
    for(const loc of locs){
      const g = byId[loc.id];
      if(!g) continue;
      (g.globalNotes||[]).forEach(n=>{ if(n && typeof n==='string') dlcCharacters.add(n); });
      (g.globalNotesRealLife||[]).forEach(n=>{ if(n && typeof n==='string') dlcReal.add(n); });
    }
    // characters.json 쪽 글로벌 노트 포함
    for(const ch of (sel.characters||[])){
      const rec = charById[ch.id];
      if(!rec) continue;
      (rec.globalNotes||[]).forEach(n=>{ if(n && typeof n==='string') dlcCharacters.add(n); });
      (rec.globalNotesRealLife||[]).forEach(n=>{ if(n && typeof n==='string') dlcReal.add(n); });
    }
    // Merge for text composition (baseline + DLC)
    const names = new Set([...baselineCharacters, ...dlcCharacters]);
    const namesReal = new Set([...baselineReal, ...dlcReal]);
    if(names.size===0 && namesReal.size===0) return { text: '', hasDLCData: false };

    // user-defined notes (separate: general & reallife)
    let userNotesGeneral = '';
    let userNotesReal = '';
    try{
      userNotesGeneral = localStorage.getItem('dlcUserGlobalNotesGeneral') || '';
      userNotesReal = localStorage.getItem('dlcUserGlobalNotesReal') || '';
      // backward compatibility: migrate old single-note key into general if present
      if(!userNotesGeneral && !userNotesReal){
        const legacy = localStorage.getItem('dlcUserGlobalNotes') || '';
        if(legacy){ userNotesGeneral = legacy; }
      }
    }catch{}

  const lines = [];
    lines.push('## Guideline');
    lines.push('');
    lines.push('Erencha is home to countless players. Do not randomly insert Named Players into the story without proper narrative logic. This undermines coherence and enjoyment, and is strictly prohibited. If the circumstances and reasoning for a Named Player’s appearance are not satisfied, create a new extra player not listed instead.');
    lines.push('');
    lines.push('## Image Command Instructions');
    lines.push('');
    lines.push('### Character Image Guidelines');
    lines.push('- Use an Image command from the Characters Image Command List based on context. Example:`<img src=Character Image Command>`');
    lines.push('- Before a character\'s dialogue, display the image command for the Character Name. Try to exhibit multiple characters and to limit showing image commands of the same character only once per response.');
    lines.push('');
    lines.push('**do not duplicate image command in one response**.');
    lines.push('');
  lines.push('#### Characters Image Command List');
    const userGeneral = (userNotesGeneral||'').trim();
    const hasGeneralList = names.size>0 || !!userGeneral;
    if(hasGeneralList){
      lines.push('');
      if(names.size>0){ lines.push('- ' + Array.from(names).join(',')); }
      if(userGeneral){ lines.push('- ' + userGeneral); }
    }
    lines.push('');
    lines.push('### Reallife Character Image Guidelines');
    lines.push('');
    lines.push('* If an offline meeting occurs, such as a gathering or personal meetup outside the game, please use a real-life image.');
    lines.push('  Example) `<img src=AegiManyeo_reallife>`');
    lines.push('');
  lines.push('#### Reallife Characters Image Command List');
    const userReal = (userNotesReal||'').trim();
    const hasRealList = namesReal.size>0 || !!userReal;
    if(hasRealList){
      lines.push('');
      if(namesReal.size>0){ lines.push('- ' + Array.from(namesReal).join(',')); }
      if(userReal){ lines.push('- ' + userReal); }
    }
    lines.push('');
    lines.push('### Extra Character Image Guidelines');
    lines.push('');
    lines.push(' If the character is not listed in the Character Image Command List, consider them an Extra Character. only use the "Male" and "Female" Image command without Emotion Command. Example: `<img src="Female">`.');

  // user notes are now inlined under their respective lists above

  return { text: lines.join('\n'), hasDLCData: (dlcCharacters.size>0 || dlcReal.size>0) };
  }

  async function renderGlobalNotes(){
    const panel = document.getElementById('global-notes-panel');
    if(!panel) return;
    const textEl = document.getElementById('global-notes-text');
    const btnCopy = document.getElementById('btn-copy-global-notes');
    const btnEdit = document.getElementById('btn-edit-user-notes');
    const btnToggle = document.getElementById('toggle-global-notes');
    const STATE_KEY = 'dlcGlobalNotesOpen';
    const badge = document.getElementById('global-notes-badge');
    const hint = document.getElementById('user-notes-hint');
    const sel = loadSelections();
    const result = await buildGlobalNotesText(sel);
    const text = result && result.text ? result.text : '';
    const hasDLCData = !!(result && result.hasDLCData);
    if(text && text.trim()){
      panel.style.display = 'block';
      textEl.value = text;
      if(badge) badge.style.display = hasDLCData ? 'inline-flex' : 'none';
      if(hint) hint.textContent = hasDLCData ? '글로벌 노트에 붙여넣을 데이터가 준비되어 있어요! 필요 시 사용자 노트를 추가하세요.' : '글로벌 노트에 입력할 내용이 있으면 입력해주세요!';
      // restore persisted collapsed/open state (default collapsed)
      let open = false;
      try{ open = localStorage.getItem(STATE_KEY) === '1'; }catch{}
      if(open){ panel.classList.remove('collapsed'); btnToggle && btnToggle.setAttribute('aria-expanded','true'); btnToggle && (btnToggle.textContent='접기'); }
      else { panel.classList.add('collapsed'); btnToggle && btnToggle.setAttribute('aria-expanded','false'); btnToggle && (btnToggle.textContent='펼치기'); }
      if(btnCopy){
        btnCopy.onclick = ()=>{
          textEl.select();
          document.execCommand('copy');
        };
      }
      if(btnEdit){
        btnEdit.onclick = ()=> openUserNotesModal();
      }
      if(btnToggle){
        // default collapsed
        btnToggle.onclick = ()=>{
          const collapsed = panel.classList.contains('collapsed');
          if(collapsed){ panel.classList.remove('collapsed'); btnToggle.textContent='접기'; btnToggle.setAttribute('aria-expanded','true'); try{ localStorage.setItem(STATE_KEY,'1'); }catch{} }
          else { panel.classList.add('collapsed'); btnToggle.textContent='펼치기'; btnToggle.setAttribute('aria-expanded','false'); try{ localStorage.setItem(STATE_KEY,'0'); }catch{} }
        };
      }
    } else {
      panel.style.display = 'none';
      textEl.value = '';
  if(badge) badge.style.display = 'none';
  if(hint) hint.textContent = '글로벌 노트에 입력할 내용이 있으면 입력해주세요!';
    }
  }

  // simple modal for user notes editing
  function openUserNotesModal(){
    let overlay = document.getElementById('user-notes-overlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'user-notes-overlay';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="user-notes-title">
          <div class="modal-header">
            <div id="user-notes-title" class="modal-title">사용자 글로벌 노트 입력</div>
            <button type="button" class="modal-close" id="user-notes-close">닫기</button>
          </div>
          <div class="modal-body user-notes">
            <div class="form-row">
              <label for="user-notes-input-general">일반(Characters) 추가 내용</label>
              <textarea id="user-notes-input-general" class="styled-input" rows="8" placeholder="예: 특정 캐릭터 이미지 가이드 또는 추가 메모"></textarea>
            </div>
            <div class="form-row">
              <label for="user-notes-input-reallife">리얼라이프(Reallife) 추가 내용</label>
              <textarea id="user-notes-input-reallife" class="styled-input" rows="8" placeholder="예: 오프라인 상황 이미지 가이드 또는 추가 메모"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="button" id="user-notes-save">저장</button>
            <button type="button" class="button secondary" id="user-notes-cancel">취소</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
    }
    const close = ()=> overlay.classList.remove('active');
    overlay.classList.add('active');
    const inputGeneral = overlay.querySelector('#user-notes-input-general');
    const inputReal = overlay.querySelector('#user-notes-input-reallife');
    try{
      inputGeneral.value = localStorage.getItem('dlcUserGlobalNotesGeneral') || '';
      inputReal.value = localStorage.getItem('dlcUserGlobalNotesReal') || '';
      if(!inputGeneral.value && !inputReal.value){
        const legacy = localStorage.getItem('dlcUserGlobalNotes') || '';
        if(legacy){ inputGeneral.value = legacy; }
      }
    }catch{ inputGeneral.value=''; inputReal.value=''; }
    overlay.querySelector('#user-notes-close').onclick = close;
    overlay.querySelector('#user-notes-cancel').onclick = close;
    overlay.querySelector('#user-notes-save').onclick = ()=>{
      try{
        localStorage.setItem('dlcUserGlobalNotesGeneral', inputGeneral.value||'');
        localStorage.setItem('dlcUserGlobalNotesReal', inputReal.value||'');
      }catch{}
      close();
      renderGlobalNotes();
    };
  }

  // 기존 일반 번들/해시 기능 제거 (요구사항에 따라 Risu만 생성)

  // ---- Risu 로어북 병합/다운로드 ----
  function gatherLoreEntries(sel){
    const reg = (window.DLC_LOREBOOKS && window.DLC_LOREBOOKS.registry) || {};
    const ids = [];
  (sel.events||[]).forEach(x=> ids.push(x.id));
  (sel.contents||[]).forEach(x=> ids.push(x.id));
  (sel.characters||[]).forEach(x=> ids.push(x.id));
  // locations는 세부 선택 id들을 펼쳐서 사용
  (sel.locations||[]).forEach(loc=> (loc.sub||[]).forEach(s=> ids.push(s.id)) );
    const entries = [];
    ids.forEach(id=>{
      // 지역(loc-*)은 파일에서 로드하므로 레지스트리 스킵
      if(/^loc-/.test(id)) return;
      const arr = reg[id];
      if(Array.isArray(arr)) entries.push(...arr);
    });
    return entries;
  }

  async function buildRisuLorebookBlob(sel){
  const entries = gatherLoreEntries(sel);

    // 지역 선택의 loreFiles를 로드하여 data를 합칩니다.
    async function fetchJSON(path){
      try{
  const resolved = resolveDataPath(path);
        const res = await fetch(resolved);
        if(!res.ok) throw new Error('HTTP '+res.status);
        return await res.json();
      }catch(e){ console.error('Failed to load lore file', path, e); return null; }
    }

  // locations.json / characters.json 로드 (그룹/캐릭터 기본 loreFiles 지원)
    async function loadLocationsData(){
      try{
        const res = await fetch('../assets/data/dlc/locations.json');
        if(!res.ok) throw new Error('HTTP '+res.status);
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }catch(e){ console.error('Failed to load locations.json', e); return []; }
    }
    async function loadCharactersData(){
      try{
        const res = await fetch('../assets/data/dlc/characters.json');
        if(!res.ok) throw new Error('HTTP '+res.status);
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }catch(e){ console.error('Failed to load characters.json', e); return []; }
    }
    async function loadFolderTemplate(){
      try{
        const res = await fetch(dataUrl('data/lorebooks/charater_folder.json'));
        if(!res.ok) throw new Error('HTTP '+res.status);
        const data = await res.json();
        return (data && data.type==='risu' && Array.isArray(data.data)) ? data : null;
      }catch(e){ console.error('Failed to load charater_folder.json', e); return null; }
    }

    const locationsData = await loadLocationsData();
    const locById = Object.fromEntries((locationsData||[]).map(g => [g.id, g]));
  const charactersData = await loadCharactersData();
    const charById = Object.fromEntries((charactersData||[]).map(c => [c.id, c]));
  const folderTemplate = await loadFolderTemplate();

    const locs = sel.locations || [];
    for(const loc of locs){
      const group = locById[loc.id];
      // 1) 그룹 기본 loreFiles
      if(group && Array.isArray(group.loreFiles)){
        for(const p of group.loreFiles){
          const obj = await fetchJSON(p);
          if(obj && obj.type==='risu' && Array.isArray(obj.data)){
            obj.data.forEach(d=> entries.push(d));
          }
        }
      }
      // 2) 서브 선택 loreFiles
      for(const s of (loc.sub||[])){
        for(const p of (s.loreFiles||[])){
          const obj = await fetchJSON(p);
          if(obj && obj.type==='risu' && Array.isArray(obj.data)){
            obj.data.forEach(d=> entries.push(d));
          }
        }
      }
    }

    // 3) 선택된 캐릭터의 loreFiles
    for(const ch of (sel.characters||[])){
      const rec = charById[ch.id];
      if(!rec) continue;
      for(const p of (rec.loreFiles||[])){
        const obj = await fetchJSON(p);
        if(obj && obj.type==='risu' && Array.isArray(obj.data)){
          obj.data.forEach(d=> entries.push(d));
        }
      }
    }

  // Build folder header + player list lines (only when character DLC is selected)
  let finalEntries = entries.slice();
  if(folderTemplate && (sel.characters && sel.characters.length > 0)){
      try{
        const folderData = JSON.parse(JSON.stringify(folderTemplate)); // deep copy
        const folderId = folderData.data.find(e=>e.mode==='folder')?.key;
        const listNode = folderData.data.find(e=>e.comment && e.comment.includes('Bot Character')); // Player/NPC/GM list node
        if(listNode){
          const lines = [];
          // Keep headings
          const raw = String(listNode.content||'');
          const parts = raw.split(/### /g); // ['', 'Player List\n...', 'Erencha NPC List\n...', ...]
          // Build player lines from selected characters with folderLine
          const playerLines = [];
          for(const ch of (sel.characters||[])){
            const rec = charById[ch.id];
            if(rec && rec.folderLine){ playerLines.push(`- ${rec.folderLine}`); }
          }
          // Recompose content
          let rebuilt = raw;
          if(parts.length >= 2){
            // Replace the Player List section block up to next ###
            const idxStart = raw.indexOf('### Player List');
            if(idxStart >= 0){
              const idxNext = raw.indexOf('### Erencha NPC List', idxStart+1);
              const head = raw.slice(0, idxStart);
              const playerHeader = '### Player List\n';
              const playerBody = (playerLines.length ? playerLines.join('\n')+'\n\n' : '\n');
              const tail = idxNext >=0 ? raw.slice(idxNext) : '';
              rebuilt = head + playerHeader + playerBody + tail;
            }
          }
          listNode.content = rebuilt;
        }
        // Only include the folder header and the updated list node, to avoid bundling base character lore by default
        const toPrepend = [];
        const folderEntry = folderData.data.find(e=>e.mode==='folder');
        if(folderEntry) toPrepend.push(folderEntry);
        if(listNode){
          if(folderId){ listNode.folder = listNode.folder || folderId; }
          toPrepend.push(listNode);
        }
        // Prepend minimal character folder/list block
        finalEntries = toPrepend.concat(finalEntries);
      }catch(e){ console.warn('Folder injection failed', e); }
    }

    const payload = (window.DLC_LOREBOOKS && window.DLC_LOREBOOKS.toRisu)
      ? window.DLC_LOREBOOKS.toRisu(finalEntries)
      : { type:'risu', ver:1, data: finalEntries };
    const text = JSON.stringify(payload, null, 2);
    return new Blob([text], {type:'application/json'});
  }

  // ---- RisuM(.risum) 생성용 헬퍼 ----
  // 최종 lorebook 엔트리 수집 (buildRisuLorebookBlob와 동일한 소스 사용)
  async function collectFinalLoreEntries(sel){
    const base = gatherLoreEntries(sel);
    async function fetchJSON(path){
      try{
        const resolved = resolveDataPath(path);
        const res = await fetch(resolved);
        if(!res.ok) throw new Error('HTTP '+res.status);
        return await res.json();
      }catch(e){ console.error('Failed to load lore file', path, e); return null; }
    }
    async function loadLocationsData(){
  try{ const r=await fetch('../assets/data/dlc/locations.json'); if(!r.ok) throw 0; const d=await r.json(); return Array.isArray(d)?d:[]; }catch{ return []; }
    }
    async function loadCharactersData(){
  try{ const r=await fetch('../assets/data/dlc/characters.json'); if(!r.ok) throw 0; const d=await r.json(); return Array.isArray(d)?d:[]; }catch{ return []; }
    }
    async function loadFolderTemplate(){
  try{ const r=await fetch(dataUrl('data/lorebooks/charater_folder.json')); if(!r.ok) throw 0; const d=await r.json(); return (d&&d.type==='risu'&&Array.isArray(d.data))?d:null; }catch{ return null; }
    }
    const locationsData = await loadLocationsData();
    const locById = Object.fromEntries((locationsData||[]).map(g=>[g.id,g]));
    const charactersData = await loadCharactersData();
    const charById = Object.fromEntries((charactersData||[]).map(c=>[c.id,c]));
    const folderTemplate = await loadFolderTemplate();
    const out = base.slice();
    for(const loc of (sel.locations||[])){
      const group = locById[loc.id];
      if(group && Array.isArray(group.loreFiles)){
        for(const p of group.loreFiles){ const obj = await fetchJSON(p); if(obj && obj.type==='risu' && Array.isArray(obj.data)) obj.data.forEach(d=> out.push(d)); }
      }
      for(const s of (loc.sub||[])){
        for(const p of (s.loreFiles||[])){ const obj = await fetchJSON(p); if(obj && obj.type==='risu' && Array.isArray(obj.data)) obj.data.forEach(d=> out.push(d)); }
      }
    }
    for(const ch of (sel.characters||[])){
      const rec = charById[ch.id]; if(!rec) continue;
      for(const p of (rec.loreFiles||[])){ const obj = await fetchJSON(p); if(obj && obj.type==='risu' && Array.isArray(obj.data)) obj.data.forEach(d=> out.push(d)); }
    }
  let finalEntries = out;
  if(folderTemplate && (sel.characters && sel.characters.length > 0)){
      try{
        const folderData = JSON.parse(JSON.stringify(folderTemplate));
        const folderId = folderData.data.find(e=>e.mode==='folder')?.key;
        const listNode = folderData.data.find(e=> e.comment && e.comment.includes('Bot Character'));
        if(listNode){
          const raw = String(listNode.content||'');
          const idxStart = raw.indexOf('### Player List');
          if(idxStart>=0){
            const idxNext = raw.indexOf('### Erencha NPC List', idxStart+1);
            const head = raw.slice(0, idxStart);
            const playerHeader = '### Player List\n';
            const playerLines = [];
            for(const ch of (sel.characters||[])){
              const rec = charById[ch.id]; if(rec && rec.folderLine){ playerLines.push(`- ${rec.folderLine}`); }
            }
            const playerBody = (playerLines.length ? playerLines.join('\n')+'\n\n' : '\n');
            const tail = idxNext>=0 ? raw.slice(idxNext) : '';
            listNode.content = head + playerHeader + playerBody + tail;
          }
        }
        // Only include folder + list, not any base lorebook entries
        const toPrepend = [];
        const folderEntry = folderData.data.find(e=>e.mode==='folder');
        if(folderEntry) toPrepend.push(folderEntry);
        if(listNode){
          if(folderId){ listNode.folder = listNode.folder || folderId; }
          toPrepend.push(listNode);
        }
        finalEntries = toPrepend.concat(finalEntries);
      }catch{}
    }
    // JSON 로어북과 동일하게 엔트리 스키마를 정규화하여(Risu가 기대하는 필드 기본값 포함) 반환
    try{
      if(window.DLC_LOREBOOKS && typeof window.DLC_LOREBOOKS.toRisu === 'function'){
        return window.DLC_LOREBOOKS.toRisu(finalEntries).data;
      }
    }catch{}
    // Fallback: 최소 필드 기본값 수동 채움
    return finalEntries.map((e,i)=>({
      key: e.key,
      comment: e.comment || '',
      content: e.content,
      mode: e.mode || 'normal',
      insertorder: (e.insertorder !== undefined ? e.insertorder : (100 + i)),
      alwaysActive: !!e.alwaysActive,
      secondkey: e.secondkey || '',
      selective: !!e.selective,
      useRegex: !!e.useRegex,
      ...(e.folder? {folder: e.folder}: {}),
      ...(e.bookVersion!==undefined? {bookVersion: e.bookVersion}: {})
    }));
  }

  async function gatherAssetFiles(sel){
    // locations + sub
    let groups = [];
    try{ const res = await fetch('../assets/data/dlc/locations.json'); if(res.ok) groups = await res.json(); }catch{}
    const byId = Object.fromEntries((groups||[]).map(g=>[g.id,g]));
    const set = new Set();
    const locs = sel.locations || [];
    for(const loc of locs){
      const g = byId[loc.id]; if(!g) continue;
      (g.assetImages||[]).forEach(p=> set.add(p));
  (loc.sub||[]).forEach(s=> (s.assetImages||[]).forEach(p=> set.add(p)));
    }
    // characters
    try{
      const resC = await fetch('../assets/data/dlc/characters.json');
      if(resC.ok){
        const chars = await resC.json();
        const byCharId = Object.fromEntries((chars||[]).map(c=>[c.id,c]));
        for(const ch of (sel.characters||[])){
          const rec = byCharId[ch.id]; if(rec && Array.isArray(rec.assetImages)) rec.assetImages.forEach(p=> set.add(p));
        }
      }
    }catch{}
    return Array.from(set);
  }

  async function buildRisumModuleBytes(sel){
    const entries = await collectFinalLoreEntries(sel);
    const nameInput = $('#filename');
    const name = (nameInput && nameInput.value ? nameInput.value : 'Erencha-DLC');
    const description = 'Erencha DLC bundle (generated)';
    const assetsPaths = await gatherAssetFiles(sel);
    // kind는 파일명(확장자 제외)로 지정, 동일 kind는 첫 번째만 포함
    const toBase = (p)=> (p.split('/').pop()||'asset').replace(/\.[^.]+$/, '');
    const toExt  = (p)=>{
      const fname = p.split('/').pop()||'';
      const m = /\.([A-Za-z0-9]+)(?:$|\?)/.exec(fname);
      return (m && m[1]) ? m[1].toLowerCase() : 'bin';
    };
    const seenKinds = new Set();
    const assetObjs = [];
    for(const p of assetsPaths){
      const kind = toBase(p);
      if(seenKinds.has(kind)) continue; // 중복 kind 제거
      seenKinds.add(kind);
      const ext = toExt(p);
      assetObjs.push({ path: p, kind, id: ext }); // id = 확장자(예: png)
    }
    const assetsMeta = assetObjs.map(a => [a.kind, '', a.id]);
    const moduleObj = {
      name,
      description,
      id: 'dlc-' + Date.now(),
      lorebook: entries,
      assets: assetsMeta.length ? assetsMeta : undefined
    };
    const mainJson = JSON.stringify({ type:'risuModule', module: moduleObj }, null, 2);
    const mainPacked = await RPack.encode(te(mainJson));

    const chunks = [ new Uint8Array([111]), new Uint8Array([0]), u32le(mainPacked.length), mainPacked ];
    // Append asset blocks in same order as assetsMeta
    for(const a of assetObjs){
      try{
        const res = await fetch(resolveDataPath(a.path));
        if(!res.ok) throw new Error('HTTP '+res.status);
        const arr = new Uint8Array(await res.arrayBuffer());
        const packed = await RPack.encode(arr);
        chunks.push(new Uint8Array([1]));
        chunks.push(u32le(packed.length));
        chunks.push(packed);
      }catch(e){ console.error('Asset fetch/pack failed', a.path, e); }
    }
    chunks.push(new Uint8Array([0]));
    return joinU8(chunks);
  }

  // 일반 번들 생성 기능 제거

  document.addEventListener('DOMContentLoaded', function(){
    // 파일명 기본값
    const today = new Date();
    const pad = n=> String(n).padStart(2,'0');
    $('#filename').value = `dlc-bundle_${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;

    renderAll();

  // 파일 생성 버튼 제거됨

    // Risu 로어북 다운로드 버튼 동적 추가
    const buildControls = document.querySelector('.build-controls');
    if(buildControls){
  const btn = document.createElement('button');
  btn.id = 'build-risu-btn';
  btn.className = 'primary';
  btn.textContent = '로어북 JSON 생성';
      btn.style.marginLeft = '8px';
      buildControls.appendChild(btn);
      btn.addEventListener('click', async ()=>{
        const sel = loadSelections();
        const blob = await buildRisuLorebookBlob(sel);
        const sizeStr = bytesToSize(blob.size);
        $('#bundle-size').textContent = sizeStr;
        const filename = (($('#filename').value || 'dlc-lorebook') + '.json');
        const url = URL.createObjectURL(blob);
        const a = $('#download-link');
        a.href = url; a.download = filename;
        $('#build-result').style.display = 'block';

  // analytics (per-DLC, 30min dedup)
  const items = filterDedup(dlcItemsFromSelections(sel));
  sendDownloadAnalytics(items, 'lorebook');
  updateStats(items, 'lorebook');
  sendServerAnalytics(items, 'lorebook');
      });

      // 에셋 ZIP 생성 버튼
      const btnAssets = document.createElement('button');
      btnAssets.id = 'build-assets-btn';
      btnAssets.className = 'secondary';
      btnAssets.textContent = '에셋 생성';
      btnAssets.style.marginLeft = '8px';
      buildControls.appendChild(btnAssets);
      btnAssets.addEventListener('click', async ()=>{
        // Load locations data
        let groups = [];
        try{
          const res0 = await fetch('../assets/data/dlc/locations.json');
          if(res0.ok){ groups = await res0.json(); }
        }catch{}
        const byId = Object.fromEntries((groups||[]).map(g=>[g.id,g]));
        const sel = loadSelections();
        const locs = sel.locations || [];
        const set = new Set();
        for(const loc of locs){
          const g = byId[loc.id]; if(!g) continue;
          (g.assetImages||[]).forEach(p => set.add(p));
          (loc.sub||[]).forEach(s => (s.assetImages||[]).forEach(p=> set.add(p)));
        }
        // Include selected characters' assetImages too
        try{
          const res1 = await fetch('../assets/data/dlc/characters.json');
          if(res1.ok){
            const chars = await res1.json();
            const byCharId = Object.fromEntries((chars||[]).map(c=>[c.id,c]));
            for(const ch of (sel.characters||[])){
              const rec = byCharId[ch.id];
              if(rec && Array.isArray(rec.assetImages)){
                rec.assetImages.forEach(p=> set.add(p));
              }
            }
          }
        }catch{}
        const files = Array.from(set);
        // Build ZIP
        const zip = new JSZip();
        const usedNames = new Map();
        const makeUnique = (filename)=>{
          if(!usedNames.has(filename)) { usedNames.set(filename, 1); return filename; }
          const n = usedNames.get(filename) + 1; usedNames.set(filename, n);
          const dot = filename.lastIndexOf('.');
          const base = dot >= 0 ? filename.slice(0, dot) : filename;
          const ext = dot >= 0 ? filename.slice(dot) : '';
          return `${base} (${n})${ext}`;
        };
        let totalBytes = 0;
        for(const path of files){
          try{
            const res2 = await fetch(resolveDataPath(path));
            if(!res2.ok) throw new Error('HTTP '+res2.status);
            const blob = await res2.blob();
            totalBytes += blob.size;
            const arrBuf = await blob.arrayBuffer();
            // Flatten to zip root with unique filenames
            const fileName = path.split('/').pop() || 'asset.bin';
            const unique = makeUnique(fileName);
            zip.file(unique, arrBuf);
          }catch(e){ console.error('Fail fetch asset', path, e); }
        }
        const zipBlob = await zip.generateAsync({type:'blob'});
        $('#assets-count').textContent = String(files.length);
        $('#assets-size').textContent = bytesToSize(totalBytes);
        const filename = (($('#filename').value || 'dlc-assets') + '.zip');
        const url = URL.createObjectURL(zipBlob);
        const a = $('#assets-download-link'); a.href = url; a.download = filename;
        $('#assets-build-result').style.display = 'flex';

  // analytics (per-DLC, 30min dedup)
  const items2 = filterDedup(dlcItemsFromSelections(sel));
  sendDownloadAnalytics(items2, 'assets');
  updateStats(items2, 'assets');
  sendServerAnalytics(items2, 'assets');
      });

      // RisuM(.risum) 생성 버튼
      const btnRisum = document.createElement('button');
      btnRisum.id = 'build-risum-btn';
      btnRisum.className = 'secondary';
      btnRisum.textContent = 'RisuM 생성(.risum)';
      btnRisum.style.marginLeft = '8px';
      buildControls.appendChild(btnRisum);
      btnRisum.addEventListener('click', async ()=>{
        try{
          const sel = loadSelections();
          const bytes = await buildRisumModuleBytes(sel);
          // 동적 결과 패널 구성
          let panel = document.getElementById('risum-build-result');
          if(!panel){
            panel = document.createElement('div');
            panel.id = 'risum-build-result';
            panel.className = 'build-result section-panel';
            panel.style.display = 'none';
            panel.innerHTML = '<div class="row-inline"><span>크기: <strong id="risum-size">-</strong></span> <a id="risum-download-link" class="button" href="#" download>RisuM 다운로드</a></div>';
            const anchor = document.getElementById('assets-build-result') || document.getElementById('build-result') || buildControls;
            anchor.parentNode.insertBefore(panel, anchor.nextSibling);
          }
          const filename = (($('#filename').value || 'dlc-module') + '.risum');
          const url = URL.createObjectURL(new Blob([bytes], {type:'application/octet-stream'}));
          $('#risum-size').textContent = bytesToSize(bytes.length);
          const a = $('#risum-download-link'); a.href = url; a.download = filename;
          panel.style.display = 'block';

          // analytics
          const items = filterDedup(dlcItemsFromSelections(sel));
          sendDownloadAnalytics(items, 'risum');
          updateStats(items, 'risum');
          sendServerAnalytics(items, 'risum');
        }catch(e){
          alert('RisuM 생성 실패: ' + (e?.message || e));
          console.error(e);
        }
      });
    }

    // controls wiring
    const btnReset = $('#btn-reset-selections');
    const btnExport = $('#btn-export-selections');
    const btnImport = $('#btn-import-selections');
    const inputImport = $('#input-import-selections');
    const btnGenCode = $('#btn-generate-code');
    const outCode = $('#share-code-output');
    const btnCopy = $('#btn-copy-code');
    const inCode = $('#share-code-input');

  if(btnReset){ btnReset.onclick = ()=>{ if(confirm('선택을 모두 초기화할까요?')){ localStorage.setItem('dlcSelections', JSON.stringify({events:[],contents:[],characters:[],locations:[]})); renderAll(); } }; }
    if(btnExport){ btnExport.onclick = ()=>{
      const data = loadSelections();
  const payload = { type: 'dlcSelections', version: 1, exportedAt: new Date().toISOString(), data };
      const text = JSON.stringify(payload, null, 2);
      const blob = new Blob([text], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = `dlc-selections-${Date.now()}.json`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    }; }
    if(btnImport && inputImport){
      btnImport.onclick = ()=> inputImport.click();
      inputImport.onchange = ()=>{
        const f = inputImport.files && inputImport.files[0]; if(!f) return;
        const reader = new FileReader();
        reader.onload = ()=>{
          try{
            const obj = JSON.parse(String(reader.result||''));
            const data = obj && (obj.data || obj);
            if(!data || typeof data !== 'object' || !('characters' in data)) throw new Error('형식이 올바르지 않습니다.');
            localStorage.setItem('dlcSelections', JSON.stringify({ events: data.events||[], contents: data.contents||[], characters: data.characters||[], locations: data.locations||[] }));
            renderAll();
          }catch(e){ alert('불러오기 실패: ' + e.message); }
        };
        reader.readAsText(f);
        inputImport.value='';
      };
    }
    if(btnGenCode && outCode){ btnGenCode.onclick = ()=>{ outCode.value = encodeShareCode(loadSelections()); }; }
    if(btnCopy && outCode){ btnCopy.onclick = ()=>{ outCode.select(); document.execCommand('copy'); }; }
    const btnApply = $('#btn-apply-code');
    if(btnApply && inCode){ btnApply.onclick = ()=>{
      const data = decodeShareCode(inCode.value.trim());
      if(!data){ alert('코드가 올바르지 않습니다.'); return; }
  localStorage.setItem('dlcSelections', JSON.stringify({ events: data.events||[], contents: data.contents||[], characters: data.characters||[], locations: data.locations||[] }));
      renderAll();
    }; }

    // collapsible controls (default collapsed)
    const btnToggle = $('#toggle-controls');
    const panel = $('#dlc-controls-wrapper');
    if(btnToggle && panel){
      const CTRL_STATE_KEY = 'dlcControlsOpen';
      const setState = (open)=>{
        if(open){ panel.classList.remove('collapsed'); btnToggle.setAttribute('aria-expanded','true'); btnToggle.textContent='접기'; }
        else { panel.classList.add('collapsed'); btnToggle.setAttribute('aria-expanded','false'); btnToggle.textContent='펼치기'; }
        try{ localStorage.setItem(CTRL_STATE_KEY, open ? '1' : '0'); }catch{}
      };
      // restore previous state; default collapsed
      let initial = false;
      try{ initial = localStorage.getItem(CTRL_STATE_KEY) === '1'; }catch{}
      setState(initial);
      btnToggle.onclick = ()=>{ const open = panel.classList.contains('collapsed'); setState(open); };
    }
  });

  function renderAll(){
    const sel = loadSelections();
    renderSummary(sel);
    renderSlots();
  renderGlobalNotes();
  }
})();
