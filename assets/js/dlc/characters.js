(function(){
  // 간단한 샘플 캐릭터 목록 (필요시 확장 가능)
  const ALL_CHARACTERS = [
    { id: 'dlc-char-aria-alt', name: '아리아(확장)', desc: '아리아의 확장 변주 캐릭터.' },
    { id: 'dlc-char-lyra-alt', name: '리라(확장)', desc: '리라의 새로운 스킬셋이 포함된 변주.' },
    { id: 'dlc-char-lucian-alt', name: '루시안(확장)', desc: '루시안의 대체 성장 경로.' },
    { id: 'dlc-char-seren', name: '세렌', desc: '평온의 음유시인. 군중 제어와 보조에 특화.' },
    { id: 'dlc-char-kai', name: '카이', desc: '속도와 연계에 특화된 이도류 검사.' },
    { id: 'dlc-char-mira', name: '미라', desc: '장거리 정밀 사격 전문가. 표식 시너지 제공.' }
  ];

  const STORAGE_KEY = 'dlcSelections';
  const MAX = 3;

  function $(s){ return document.querySelector(s); }
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

  function renderList(selected){
    const wrap = $('#character-select-list');
    wrap.innerHTML = '';
    ALL_CHARACTERS.forEach(c => {
      const checked = selected.some(s => s.id === c.id);
      const card = document.createElement('div');
      card.className = 'card';
      card.style.padding = '12px';
      card.innerHTML = `
        <label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">
          <input type="checkbox" data-id="${c.id}" ${checked ? 'checked' : ''} />
          <span>
            <strong>${c.name}</strong><br>
            <span class="muted">${c.desc}</span>
          </span>
        </label>`;
      wrap.appendChild(card);
    });
  }

  function updateCountUI(count){
    const el = $('#selected-count');
    if(el) el.textContent = `${count} / ${MAX} 선택됨`;
  }

  function attachHandlers(){
    const wrap = $('#character-select-list');
    wrap.addEventListener('change', (e) => {
      if(e.target && e.target.matches('input[type="checkbox"][data-id]')){
        const id = e.target.getAttribute('data-id');
        const sel = loadSelections();
        sel.characters = sel.characters || [];

        if(e.target.checked){
          if(sel.characters.length >= MAX){
            // 초과 시 체크 해제 및 경고
            e.target.checked = false;
            alert(`추가 캐릭터는 최대 ${MAX}명까지 선택할 수 있습니다.`);
            return;
          }
          // 중복 방지 후 추가
          if(!sel.characters.some(x => x.id === id)){
            const meta = ALL_CHARACTERS.find(x => x.id === id);
            sel.characters.push({ id, name: meta?.name || id });
          }
        }else{
          sel.characters = sel.characters.filter(x => x.id !== id);
        }
        saveSelections(sel);
        updateCountUI(sel.characters.length);
      }
    });

    $('#save-btn').addEventListener('click', () => {
      // 이미 변경 시마다 저장되므로 안내만
      alert('선택이 저장되었습니다. DLC > 다운로드에서 번들을 생성하세요.');
    });

    $('#clear-btn').addEventListener('click', () => {
      const sel = loadSelections();
      sel.characters = [];
      saveSelections(sel);
      renderList(sel.characters);
      updateCountUI(0);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const sel = loadSelections();
    const selected = sel.characters || [];
    renderList(selected);
    updateCountUI(selected.length);
    attachHandlers();
  });
})();
