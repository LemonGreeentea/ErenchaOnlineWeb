document.addEventListener('DOMContentLoaded', function() {
    const recentNewsList = document.getElementById('recent-news-list');
    if (!recentNewsList) return;

    let allPosts = [];

    // 각 게시판 데이터를 하나의 배열로 합칩니다.
    if (typeof eventsData !== 'undefined') {
        allPosts.push(...eventsData.map(post => ({ ...post, category: '이벤트', boardType: 'events' })));
    }
    if (typeof noticesData !== 'undefined') {
        allPosts.push(...noticesData.map(post => ({ ...post, category: '공지', boardType: 'notices' })));
    }
    if (typeof updatesData !== 'undefined') {
        allPosts.push(...updatesData.map(post => ({ ...post, category: '업데이트', boardType: 'updates' })));
    }
    if (typeof gmNotesData !== 'undefined') {
        allPosts.push(...gmNotesData.map(post => ({ ...post, category: 'GM노트', boardType: 'gm-notes' })));
    }

    // 날짜를 기준으로 최신순으로 정렬합니다.
    allPosts.sort((a, b) => {
        // "YY.MM.DD" 형식의 날짜를 Date 객체로 변환하여 비교
        const dateA = new Date('20' + a.date.replace(/\./g, '-'));
        const dateB = new Date('20' + b.date.replace(/\./g, '-'));
        return dateB - dateA;
    });

    // 최신 5개의 게시물만 선택합니다.
    const recentPosts = allPosts.slice(0, 5);

    // HTML을 생성하여 목록에 삽입합니다.
    let content = '';
    recentPosts.forEach(post => {
        content += `
            <li>
                <a href="menu_news/post.html?board=${post.boardType}&id=${post.id}">
                    <span>[${post.category}]</span> ${post.title}
                </a>
                <span class="date">${post.date}</span>
            </li>
        `;
    });

    recentNewsList.innerHTML = content;
});
