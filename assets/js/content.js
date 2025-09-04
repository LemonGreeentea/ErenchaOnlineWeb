// 이 파일의 내용만 수정하여 메인 배너를 변경하세요.

const heroData = {
  "title": "당신의 이야기가 역사가 되는 세계, 에렌샤",
  "description": "정해진 메인 스토리 대신, 당신의 선택과 발자국이 세계의 연대기에 기록됩니다.<br>너브기어로 체감하는 오감, 그리고 플레이어가 써 내려가는 역사. 지금 경험해보세요.",
  "period": "GRAND OPEN"
};

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const boardType = params.get('board');
    const postId = parseInt(params.get('id'));

    let dataFile = '';
    // 뉴스 계열 데이터는 /news 하위로 이동했고, 자유게시판은 /community 하위에 있습니다.
    if (boardType === 'notices') {
        dataFile = '../assets/js/news/notices-data.js';
    } else if (boardType === 'events') {
        dataFile = '../assets/js/news/events-data.js';
    } else if (boardType === 'updates') {
        dataFile = '../assets/js/news/updates-data.js';
    } else if (boardType === 'gm-notes') {
        dataFile = '../assets/js/news/gm-notes-data.js';
    } else if (boardType === 'free') {
        dataFile = '../assets/js/community/free-board-data.js';
    }

    if (dataFile) {
        const script = document.createElement('script');
        script.src = dataFile;
        script.onload = function() {
            const post = boardData.find(p => p.id === postId);

            if (post) {
                let title = post.title;
                if (boardType === 'free' && post.category) {
                    title = `[${post.category}] ${post.title}`;
                }

                document.title = title;
                document.querySelector('.post-header h1').textContent = title;
                document.querySelector('.post-meta .author').textContent = `작성자: ${post.author}`;
                document.querySelector('.post-meta .date').textContent = `작성일: ${post.date}`;
                
                const postBody = document.querySelector('.post-body');
                postBody.innerHTML = post.content;

                // 이미지 첨부 기능 추가
                if (post.imageUrl) {
                    const img = document.createElement('img');
                    img.src = post.imageUrl;
                    img.alt = '게시글 이미지';
                    // 텍스트 내용 앞에 이미지를 추가합니다.
                    postBody.insertBefore(img, postBody.firstChild);
                }

                // 댓글/대댓글 로드 로직 (중첩 지원)
                const commentList = document.querySelector('.comment-list');
                const commentCount = document.querySelector('.comment-count');
                if (commentList && commentCount && Array.isArray(post.comments)) {
                    const countComments = (comments) =>
                        comments.reduce((sum, c) => sum + 1 + (Array.isArray(c.replies) ? countComments(c.replies) : 0), 0);

                    const renderComment = (comment) => {
                        const li = document.createElement('li');
                        li.className = 'comment-item';
                        li.innerHTML = `
                            <div class="comment-author">${comment.author}</div>
                            <div class="comment-text">${comment.text}</div>
                            <div class="comment-date">${comment.date}</div>
                        `;
                        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
                            const repliesUl = document.createElement('ul');
                            repliesUl.className = 'reply-list';
                            comment.replies.forEach(reply => {
                                repliesUl.appendChild(renderComment(reply));
                            });
                            li.appendChild(repliesUl);
                        }
                        return li;
                    };

                    commentCount.textContent = countComments(post.comments);
                    post.comments.forEach(comment => commentList.appendChild(renderComment(comment)));
                }
                
                const listBtn = document.querySelector('.list-btn');
                if (listBtn) {
                    // 자유게시판의 경로를 올바르게 수정
                    if (boardType === 'free') {
                        // 같은 폴더 내 목록으로 (menu_community)
                        listBtn.href = `./free-board.html`;
                    } else {
                        listBtn.href = `../menu_news/${boardType}.html`;
                    }
                }
            } else {
                document.querySelector('.post-body').innerHTML = '<p>게시글을 불러오는 데 실패했습니다. URL을 확인해주세요.</p>';
            }
        };
        script.onerror = function() {
            document.querySelector('.post-body').innerHTML = '<p>데이터 파일을 불러오는 데 실패했습니다.</p>';
        };
        document.body.appendChild(script);
    } else {
        document.querySelector('.post-body').innerHTML = '<p>잘못된 게시판 접근입니다.</p>';
    }
});