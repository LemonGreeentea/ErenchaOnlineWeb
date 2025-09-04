document.addEventListener('DOMContentLoaded', function() {
    const boardBody = document.getElementById('board-body');
    // boardData는 각 HTML 파일에 먼저 로드된 데이터 파일(e.g., gm-notes-data.js) 안에 있습니다.
    if (typeof boardData !== 'undefined' && boardBody) {
        let content = '';
        // URL에서 현재 게시판 종류(e.g., 'gm-notes')를 가져옵니다.
        const path = window.location.pathname;
        const boardType = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));

        boardData.forEach(post => {
            content += `
                <tr>
                    <td>${post.id}</td>
                    <td class="title"><a href="post.html?board=${boardType}&id=${post.id}">${post.title}</a></td>
                    <td>${post.author}</td>
                    <td>${post.date}</td>
                    <td>${post.views}</td>
                </tr>
            `;
        });
        boardBody.innerHTML = content;
    }
});
