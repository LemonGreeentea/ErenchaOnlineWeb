document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('auction-grid');
  const searchInput = document.getElementById('auction-search-input');
  const sortSelect = document.getElementById('auction-sort-select');
  const filters = document.getElementById('auction-filters');
  const filterToggleBtn = document.getElementById('filter-toggle-btn');

  if (!grid) return;

  function formatPrice(value) { return value.toLocaleString('ko-KR'); }

  function groupByItem(list) {
    const map = new Map();
    list.forEach(it => {
      const key = it.name;
      const cur = map.get(key) || {
        name: it.name,
        category: it.category,
        currency: it.currency,
        thumbnail: it.thumbnail,
        grade: it.grade,
  listings: [],
        latestPostedAt: it.postedAt
      };
      cur.listings.push(it);
  // seller info removed
      if (new Date(it.postedAt) > new Date(cur.latestPostedAt)) cur.latestPostedAt = it.postedAt;
      map.set(key, cur);
    });
    return Array.from(map.values()).map(g => {
      const prices = g.listings.map(x => x.price);
      const totalQty = g.listings.reduce((a, x) => a + (x.quantity || 1), 0);
      // 대표 설명: 최신 등록의 desc 우선, 없으면 첫 번째 desc 사용
      const sortedByDate = [...g.listings].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
      const repDesc = (sortedByDate.find(x => x.desc)?.desc) || g.listings[0]?.desc || '';
  return { ...g, listingCount: g.listings.length, totalQuantity: totalQty, lowestPrice: Math.min(...prices), desc: repDesc };
    });
  }

  function applyFilters() {
    const term = (searchInput?.value || '').toLowerCase();
    const selectedCats = Array.from(filters?.querySelectorAll('input[name="category"]:checked') || []).map(cb => cb.value);
    const selectedRarities = Array.from(filters?.querySelectorAll('input[name="rarity"]:checked') || []).map(cb => cb.value);

    let items = [...auctionItems];
    items = items.filter(it => it.name.toLowerCase().includes(term));
    if (selectedCats.length) items = items.filter(it => selectedCats.includes(it.category));
    if (selectedRarities.length) items = items.filter(it => selectedRarities.includes(it.grade));

    let groups = groupByItem(items);
    const sort = sortSelect?.value || 'recent';
    if (sort === 'low') groups.sort((a, b) => a.lowestPrice - b.lowestPrice);
    else if (sort === 'high') groups.sort((a, b) => b.lowestPrice - a.lowestPrice);
    else groups.sort((a, b) => new Date(b.latestPostedAt) - new Date(a.latestPostedAt));

    render(groups);
  }

  function render(groups) {
    grid.innerHTML = '';
    if (!groups.length) { grid.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>'; return; }

    groups.forEach(item => {
      const card = document.createElement('div');
      card.className = 'auction-card';
      card.innerHTML = `
        <div class="auction-thumb">
          <img src="${item.thumbnail}" alt="${item.name}">
          <span class="item-grade grade-${item.grade}">${item.grade}</span>
        </div>
        <div class="auction-info">
          <h3 class="item-name">${item.name}</h3>
          <p class="item-meta">분류 : ${item.category} · 재고 : ${item.totalQuantity.toLocaleString('ko-KR')}개</p>
          <p class="item-desc">설명 : ${item.desc || '-'}</p>
          <div class="auction-price-row">
            <span class="price price-emph">최저가 : ${formatPrice(item.lowestPrice)}${item.currency}</span>
            <button class="buy-btn" type="button">거래하기</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput?.addEventListener('input', applyFilters);
  sortSelect?.addEventListener('change', applyFilters);
  filters?.addEventListener('change', applyFilters);

  if (filterToggleBtn && filters) {
    const setExpanded = (exp) => {
      filterToggleBtn.setAttribute('aria-expanded', String(exp));
      filters.classList.toggle('expanded', exp);
      filters.classList.toggle('collapsed', !exp);
      filterToggleBtn.textContent = '필터 설정';
    };
    setExpanded(false);
    filterToggleBtn.addEventListener('click', () => {
      const next = filterToggleBtn.getAttribute('aria-expanded') !== 'true';
      setExpanded(next);
    });
  }

  applyFilters();
});
