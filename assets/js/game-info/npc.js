document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('npc-list-container');
  const searchInput = document.getElementById('npc-search-input');
  const filtersContainer = document.getElementById('npc-search-filters');

  function ensureSlash(s){ return s.endsWith('/') ? s : (s + '/'); }
  function getDataBase(){
    try{ if(typeof window.DLC_DATA_BASE === 'string' && window.DLC_DATA_BASE) return ensureSlash(window.DLC_DATA_BASE); }catch{}
    const meta = document.querySelector('meta[name="dlc-data-base"]');
    if(meta && meta.content) return ensureSlash(meta.content.trim());
    return null;
  }
  function resolveImagePath(path){
    if(!path) return path;
    if(/^https?:\/\//i.test(path)) return path;
    const base = getDataBase();
    if(!base) return path;
    if(path.includes('../assets/images/chara/')){
      return base + path.replace('../assets/images/chara/', 'images/character/');
    }
    return path;
  }

  function applyFiltersAndSearch(){
    const term = searchInput.value.toLowerCase();
    const selectedTypes = Array.from(filtersContainer.querySelectorAll('input[name="type"]:checked')).map(cb=>cb.value);
    const selectedGenders = Array.from(filtersContainer.querySelectorAll('input[name="gender"]:checked')).map(cb=>cb.value);
    const filtered = (window.npcData||[]).filter(npc => {
      const searchMatch = term === '' ||
        (npc.name||'').toLowerCase().includes(term) ||
        (npc.realName||'').toLowerCase().includes(term);
      const typeMatch = selectedTypes.length === 0 || selectedTypes.some(t => (npc.type||'').startsWith(t));
      const genderValue = npc.gender || npc.sex || '';
      const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(genderValue);
      return searchMatch && typeMatch && genderMatch;
    });
    render(filtered);
  }

  function render(list){
    container.innerHTML = '';
    if(!list.length){
      container.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
      return;
    }
    list.forEach(npc =>{
      const card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = `
        <div class="player-card-header">
          <img src="${resolveImagePath(npc.profileImage)}" alt="${npc.name}" class="profile-img">
          <div class="player-info">
            <div class="player-name-line">
              <span class="player-name">${npc.name||''}</span>
              ${npc.realName ? `<span class="player-real-name">(${npc.realName})</span>` : ''}
            </div>
            <div class="player-meta">
              <span class="player-type-tag type-${(npc.type||'').startsWith('DLC') ? 'dlc' : 'base'}">${npc.type||''}</span>
            </div>
          </div>
          <span class="toggle-arrow">▼</span>
        </div>
        <div class="player-card-content">
          <div class="player-images">
            ${npc.gameImage ? `<div class="image-box"><h4>게임 모습</h4><img src="${resolveImagePath(npc.gameImage)}" alt="게임 모습"></div>` : ''}
            ${npc.realImage ? `<div class="image-box"><h4>현실 모습</h4><img src="${resolveImagePath(npc.realImage)}" alt="현실 모습"></div>` : ''}
          </div>
          <div class="player-description">${npc.description||''}</div>
          <div class="card-close-wrapper"><button class="card-close-btn">접기</button></div>
        </div>`;
      container.appendChild(card);
    });
  }

  container.addEventListener('click', (e)=>{
    if (e.target.classList.contains('card-close-btn')) {
      const card = e.target.closest('.player-card');
      if(card){ card.classList.remove('active'); card.scrollIntoView({behavior:'smooth', block:'center'}); }
      return;
    }
    const header = e.target.closest('.player-card-header');
    if(header){
      const card = header.parentElement;
      const current = container.querySelector('.player-card.active');
      if(current && current!==card) current.classList.remove('active');
      card.classList.toggle('active');
      if(card.classList.contains('active')) card.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });

  searchInput.addEventListener('input', applyFiltersAndSearch);
  filtersContainer.addEventListener('change', applyFiltersAndSearch);

  applyFiltersAndSearch();
});
