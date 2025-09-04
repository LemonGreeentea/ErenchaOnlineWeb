// 공지 게시물 데이터를 이곳에 추가하거나 수정하세요.
const noticesData = [
  {
    id: 2,
    title: "8/26(화) 임시점검 안내 (완료)",
    author: "GM노아",
    date: "2031.08.26",
    views: "3,456",
    imageUrl: "", // 이미지가 없는 경우 비워두세요.
    content: `
      <p>서버 안정화를 위한 임시점검이 <strong>완료</strong>되었습니다. 아래 내용을 참고해 주세요.</p>

      <div class="section-card">
        <h3>점검 개요</h3>
        <ul class="kv-list">
          <li><strong>일시</strong><div>2031. 08. 26 10:00 ~ 11:10 (KST)</div></li>
          <li><strong>상태</strong><div><strong>완료</strong> — 접속 및 플레이 정상</div></li>
          <li><strong>영향</strong><div>전체 서버 접속 제한</div></li>
          <li><strong>주요 작업</strong><div>DB 최적화, 보안 패치, 일부 오류 수정</div></li>
        </ul>
      </div>

    `
  },
  {
    id: 1,
    title: "비정상 플레이어 제재 안내",
    author: "GM재크",
    date: "2031.08.20",
    views: "8,112",
    imageUrl: "",
    content: `
      <p>공정한 게임 환경 유지를 위해 최근 수집된 로그와 신고, 내부 모니터링 결과를 종합 검토하였으며, 운영정책에 따른 제재가 아래와 같이 적용되었습니다.</p>

      <div class="section-card">
        <h3>제재 기준</h3>
        <ul class="kv-list">
          <li><strong>매크로/자동 사냥</strong><div>비인가 프로그램 사용, 반복 입력 자동화 등</div></li>
          <li><strong>어뷰징</strong><div>의도적인 전투력 조정, 비정상 골드/아이템 획득, 승패 조작</div></li>
          <li><strong>시스템 악용</strong><div>버그 재현·확산, 비정상 접속 시도 및 보안 우회</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>제재 내역 (닉네임 기준)</h3>
        <p class="muted">명단은 일부만 공개되며, 비공개 제재 대상자도 존재합니다.</p>
        <p><strong>30일 정지</strong></p>
        <ul>
          <li>선샤인쿠키</li>
          <li>밤별</li>
          <li>제로나인</li>
          <li>모래시계군</li>
          <li>라일락스윗</li>
          <li>푸른망토</li>
          <li>빙글빙글</li>
        </ul>
        <p style="margin-top:10px;"><strong>1년 정지</strong></p>
        <ul>
          <li>크림슨테일</li>
          <li>뉴타입드라이브</li>
          <li>리바운드</li>
          <li>프로토콜7</li>
          <li>미스틱블루</li>
          <li>하나무라</li>
          <li>이클립스K</li>
        </ul>
        <p style="margin-top:10px;"><strong>영구 정지</strong></p>
        <ul>
          <li>블랙코메트</li>
          <li>데드리프트</li>
          <li>제로데이</li>
          <li>아웃로우</li>
          <li>크로노스톰</li>
          <li>다크홀릭</li>
          <li>헌터스에지</li>
        </ul>
      </div>

      <div class="section-card">
        <h3>적용 및 문의</h3>
        <ul class="kv-list">
          <li><strong>적용 일시</strong><div>2031. 08. 20 12:00부터 순차 적용</div></li>
          <li><strong>제재 범위</strong><div>관련 캐릭터 및 동일 계정 내 연관 캐릭터</div></li>
          <li><strong>이의 제기</strong><div>사유서와 증빙을 첨부하여 <a href="../menu_community/inquiry.html">고객센터 문의</a>로 접수 (공지 게시 후 7일 이내)</div></li>
        </ul>
        <p class="muted">건전한 플레이 문화를 위해 지속적으로 모니터링을 강화하겠습니다. 협조에 감사드립니다.</p>
      </div>
    `
  }
];

var boardData = noticesData; // const를 var로 변경
