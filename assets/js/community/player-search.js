document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('player-list-container');
    const searchInput = document.getElementById('player-search-input');
    const filtersContainer = document.getElementById('search-filters');

    // R2 이미지 경로 변환 함수
    function getDataBase(){
        // 1) window 전역
        try{ if(typeof window.DLC_DATA_BASE === 'string' && window.DLC_DATA_BASE) return ensureSlash(window.DLC_DATA_BASE); }catch{}
        // 2) meta 태그
        const meta = document.querySelector('meta[name="dlc-data-base"]');
        if(meta && meta.content) return ensureSlash(meta.content.trim());
        // 3) 기본 로컬 경로 (fallback)
        return null;
    }
    function ensureSlash(s){ return s.endsWith('/') ? s : (s + '/'); }
    function resolveImagePath(path){
        if(!path) return path;
        if(/^https?:\/\//i.test(path)) return path; // absolute
        
        const base = getDataBase();
        if(!base) return path; // fallback to original path
        
        // ../assets/images/chara/ → images/character/
        if(path.includes('../assets/images/chara/')){
            const newPath = base + path.replace('../assets/images/chara/', 'images/character/');
            console.log('Image path conversion:', path, '→', newPath);
            return newPath;
        }
        return path;
    }

    function applyFiltersAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTypes = Array.from(filtersContainer.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
        const selectedGenders = Array.from(filtersContainer.querySelectorAll('input[name="gender"]:checked')).map(cb => cb.value);

        const filteredPlayers = playerData.filter(player => {
            const searchMatch = searchTerm === '' ||
                player.name.toLowerCase().includes(searchTerm) ||
                (player.realName && player.realName.toLowerCase().includes(searchTerm)) ||
                (player.guild && player.guild.toLowerCase().includes(searchTerm));
            const typeMatch = selectedTypes.length === 0 || selectedTypes.some(type => player.type.startsWith(type));
            const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(player.gender);
            return searchMatch && typeMatch && genderMatch;
        });

        displayPlayers(filteredPlayers);
    }

    function displayPlayers(players) {
        container.innerHTML = '';
        if (players.length === 0) {
            container.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
            return;
        }
        players.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerHTML = `
                <div class="player-card-header">
                    <img src="${resolveImagePath(player.profileImage)}" alt="${player.name}" class="profile-img">
                    <div class="player-info">
                        <div class="player-name-line">
                            <span class="player-name">${player.name}</span>
                            ${player.realName ? `<span class="player-real-name">(${player.realName})</span>` : ''}
                        </div>
                        <div class="player-meta">
                            <span class="player-guild">${player.guild}</span>
                            <span class="player-type-tag type-${player.type.startsWith('DLC') ? 'dlc' : 'base'}">${player.type}</span>
                        </div>
                    </div>
                    <span class="toggle-arrow">▼</span>
                </div>
                <div class="player-card-content">
                    <div class="player-images">
                        <div class="image-box">
                            <h4>게임 모습</h4>
                            <img src="${resolveImagePath(player.gameImage)}" alt="게임 모습">
                        </div>
                        <div class="image-box">
                            <h4>현실 모습</h4>
                            <img src="${resolveImagePath(player.realImage)}" alt="현실 모습">
                        </div>
                    </div>
                    <div class="player-description">${player.description}</div>
                    <div class="card-close-wrapper">
                        <button class="card-close-btn">접기</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-close-btn')) {
            const card = e.target.closest('.player-card');
            if (card) {
                card.classList.remove('active');
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            }
            return;
        }

        const header = e.target.closest('.player-card-header');
        if (header) {
            const card = header.parentElement;
            const currentActive = container.querySelector('.player-card.active');
            if (currentActive && currentActive !== card) {
                currentActive.classList.remove('active');
            }
            card.classList.toggle('active');
            if (card.classList.contains('active')) {
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            }
        }
    });

    searchInput.addEventListener('input', applyFiltersAndSearch);
    filtersContainer.addEventListener('change', applyFiltersAndSearch);

    applyFiltersAndSearch();
});
