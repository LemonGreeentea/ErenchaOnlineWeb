function loadFreeBoard(boardType) {
    const tbody = document.querySelector('.board-table tbody');
    if (!tbody) {
        console.error('게시판의 tbody 요소를 찾을 수 없습니다.');
        return;
    }
    tbody.innerHTML = '';

    if (typeof boardData === 'undefined') {
        console.error('boardData를 찾을 수 없습니다. 데이터 파일이 올바르게 로드되었는지 확인하세요.');
        return;
    }

    boardData.forEach(post => {
        const tr = document.createElement('tr');
        const postLink = `./post.html?board=${boardType}&id=${post.id}`;

        tr.innerHTML = `
            <td>${post.id}</td>
            <td class="title">
                <a href="${postLink}">
                    <span class="category">[${post.category}]</span> ${post.title}
                </a>
            </td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>${post.views}</td>
        `;
        tbody.appendChild(tr);
    });
}
