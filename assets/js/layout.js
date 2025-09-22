document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.querySelector("header.main-header");
    const footerPlaceholder = document.querySelector("footer.main-footer");

    const path = window.location.pathname;
    const isSubPage = path.includes('/menu_news/') || 
                      path.includes('/menu_game-info/') || 
                      path.includes('/menu_community/') ||
                      path.includes('/menu_dlc/') ||
                      path.includes('/menu_my/');
    const prefix = isSubPage ? '../' : './';

    // 헤더 로드
    if (headerPlaceholder) {
        fetch(prefix + 'layout/header.html')
            .then(response => response.ok ? response.text() : Promise.reject('Header not found'))
            .then(data => {
                headerPlaceholder.innerHTML = data.replace(/{{prefix}}/g, prefix);
                
                // --- 모바일 메뉴 로직 (헤더 로드 후 실행) ---
                const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
                const mainNav = document.querySelector(".main-nav");

                if (mobileMenuToggle && mainNav) {
                    // 햄버거 버튼 클릭 시 메뉴 열고 닫기
                    mobileMenuToggle.addEventListener("click", () => {
                        mainNav.classList.toggle("active");
                        mobileMenuToggle.classList.toggle("active");
                    });

                    // 드롭다운 메뉴 클릭 처리
                    const dropdowns = mainNav.querySelectorAll('.dropdown');
                    dropdowns.forEach(dropdown => {
                        const link = dropdown.querySelector('a');
                        link.addEventListener('click', function(e) {
                            // 모바일 뷰에서만 작동 (햄버거 버튼이 보일 때)
                            if (window.getComputedStyle(mobileMenuToggle).display !== 'none') {
                                // 하위 메뉴가 있는 경우에만 클릭 이벤트 처리
                                if (dropdown.querySelector('.dropdown-menu')) {
                                    e.preventDefault(); // 링크 이동 방지
                                    
                                    // 현재 클릭한 메뉴의 active 상태를 토글
                                    const wasActive = dropdown.classList.contains('active');
                                    
                                    // 모든 메뉴의 active 상태를 먼저 제거
                                    dropdowns.forEach(d => d.classList.remove('active'));
                                    
                                    // 이전에 닫혀 있었다면, 다시 active 상태로 만듦
                                    if (!wasActive) {
                                        dropdown.classList.add('active');
                                    }
                                }
                            }
                        });
                    });
                }
            })
            .catch(error => console.error('Error loading header:', error));
    }

    // 푸터 로드
    if (footerPlaceholder) {
        fetch(prefix + 'layout/footer.html')
            .then(response => response.ok ? response.text() : Promise.reject('Footer not found'))
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    // DLC 빠른 이동 네비게이션 (모든 DLC 페이지 상단에 자동 삽입)
    try {
        const isDlcPage = path.includes('/menu_dlc/');
        if (isDlcPage) {
            const mainEl = document.querySelector('main');
            if (mainEl) {
                // 링크 정의 (menu_dlc 기준 상대 경로)
                const links = [
                    { href: './manual.html', label: '설명서' },
                    { href: './systems.html', label: '시스템' },
                    { href: './contents.html', label: '컨텐츠' },
                    { href: './characters.html', label: '캐릭터' },
                    { href: './download.html', label: '다운로드' },
                ];

                const current = path.split('/').pop();

                // 생성 함수
                const createNav = () => {
                    const wrap = document.createElement('div');
                    wrap.className = 'dlc-quick-nav';
                    wrap.setAttribute('role', 'navigation');
                    wrap.setAttribute('aria-label', 'DLC 빠른 이동');
                    const label = document.createElement('strong');
                    label.className = 'dlc-quick-nav__label';
                    label.textContent = 'DLC 이동';
                    const linksNav = document.createElement('nav');
                    linksNav.className = 'dlc-quick-nav__links';
                    links.forEach(l => {
                        const a = document.createElement('a');
                        a.href = l.href;
                        a.textContent = l.label;
                        if (current && l.href.endsWith(current)) a.classList.add('active');
                        linksNav.appendChild(a);
                    });
                    wrap.appendChild(label);
                    wrap.appendChild(linksNav);
                    return wrap;
                };

                // 너비 기준 컨테이너 파악
                const contentContainer = document.querySelector('.game-info-container') ||
                                          document.querySelector('.board-container') ||
                                          document.querySelector('.post-view-container');
                const widthClass = (contentContainer && contentContainer.classList.contains('game-info-container')) ? 'narrow' : 'wide';

                const navTop = createNav();
                const navBottom = createNav();
                navTop.classList.add(widthClass);
                navBottom.classList.add(widthClass);

                // 삽입: 최상단과 최하단
                mainEl.insertBefore(navTop, mainEl.firstChild);
                mainEl.appendChild(navBottom);
            }
        }
    } catch (e) {
        console.error('Failed to inject DLC quick nav:', e);
    }
});