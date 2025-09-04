// 이벤트 게시물 데이터를 이곳에 추가하거나 수정하세요.
const eventsData = [
  {
    id: 3,
    title: "[진행] N행시 대축제 이벤트 안내",
    author: "GM에레레",
    date: "2031.08.26",
    views: "1,234",
    content: `
      <p>에렌샤 NPC들과 함께하는 <strong>N행시 대축제</strong>가 진행 중입니다. 센스 넘치는 3행시/4행시를 제출해 특별 칭호와 보상을 받아가세요!</p>

      <div class="section-card">
        <h3>이벤트 개요</h3>
        <ul class="kv-list">
          <li><strong>진행 기간</strong><div>2031. 08. 26 ~ 2031. 09. 08</div></li>
          <li><strong>진행 상태</strong><div><strong>접수 중</strong> (마감 전)</div></li>
          <li><strong>대상</strong><div>모든 모험가</div></li>
          <li><strong>주제</strong><div>에·렌·샤 3행시 또는 자유 주제 4행시</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>참여 방법</h3>
        <ol>
          <li>커뮤니티 > 자유게시판에 말머리 <strong>[이벤트]</strong>를 달고 글을 작성</li>
          <li>제목 예시: <em>[이벤트] N행시 - 캐릭터명/서버</em></li>
          <li>본문에 N행시와 간단한 설명 작성 (스크린샷 1장 첨부 권장)</li>
        </ol>
      </div>

      <div class="section-card">
        <h3>심사 및 일정</h3>
        <ul class="kv-list">
          <li><strong>접수 마감</strong><div>2031. 09. 08 23:59</div></li>
          <li><strong>결과 발표</strong><div>2031. 09. 10 (이 공지에서 안내)</div></li>
          <li><strong>심사 기준</strong><div>창의성 40 · 개그/재치 30 · 세계관 어울림 30</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>보상</h3>
        <div class="reward-card" role="note" aria-label="N행시 대축제 보상">
          <span class="pill-badge">최우수상</span>
          <div>
            <div class="reward-name">한정 칭호 [행시 장인]</div>
            <div class="reward-meta">+ 코스튬 '축제 머리띠(7일)' · 150,000 골드</div>
          </div>
        </div>
        <ul class="kv-list" style="margin-top:14px;">
          <li><strong>우수상(3명)</strong><div>코스튬 '축제 머리띠(7일)' · 80,000 골드</div></li>
          <li><strong>참가상(전원)</strong><div>축제 기념 풍선 × 3</div></li>
          <li><strong>지급 방식</strong><div>게임 내 우편함 자동 발송(발표 후 48시간 이내)</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>예시</h3>
        <ul>
          <li><strong>에</strong> 너지도 떨어졌지만…</li>
          <li><strong>렌</strong> 디는 오늘도 접속!</li>
          <li><strong>샤</strong> 방샤방한 보상은 내꺼!</li>
        </ul>
      </div>

      <div class="section-card">
        <h3>유의 사항</h3>
        <ol>
          <li>표절·타인의 창작물 도용 시 수상이 취소됩니다.</li>
          <li>부적절한 표현/논란 소지가 있는 글은 심사 제외됩니다.</li>
          <li>닉네임/서버 표기가 없을 경우 당첨이 취소될 수 있습니다.</li>
        </ol>
      </div>

      <div class="section-card faq-list">
        <h3>FAQ</h3>
        <p><strong>Q. 3행시만 가능한가요?</strong><br/>A. 4행시도 가능하며, 자유 주제 역시 허용됩니다.</p>
        <p><strong>Q. 중복 참여가 되나요?</strong><br/>A. 여러 건 제출 가능하나, 수상은 1회만 가능합니다.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "[종료] 여름맞이 빙고 이벤트 당첨자 발표",
    author: "GM에레레",
    date: "2030.08.15",
    views: "5,842",
    imageUrl: "",
    content: `
      <p>뜨거운 여름, '여름맞이 빙고 이벤트'에 참여해 주신 모든 모험가님들께 감사드립니다. 아래와 같이 최종 당첨자를 발표합니다!</p>

      <div class="section-card">
        <h3>이벤트 개요</h3>
        <ul class="kv-list">
          <li><strong>진행 기간</strong><div>2030. 07. 25 ~ 2030. 08. 10</div></li>
          <li><strong>참여 방법</strong><div>일일/주간 미션으로 빙고판을 채우고, <em>한 줄 완성</em>마다 <strong>추첨권 1장</strong> 획득 (최대 5장)</div></li>
          <li><strong>추첨 기준</strong><div>서버 통합 무작위 추첨, 중복 당첨 불가</div></li>
          <li><strong>발표 일시</strong><div>2030. 08. 15 (본 공지)</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>당첨 보상</h3>
        <div class="reward-card" role="note" aria-label="빙고 이벤트 보상">
          <span class="pill-badge">보상</span>
          <div>
            <div class="reward-name">여름 한정 칭호 [서머 빙고 마스터] × 1</div>
            <div class="reward-meta">캐릭터 귀속 · 거래 불가</div>
          </div>
        </div>
        <ul class="kv-list" style="margin-top:14px;">
          <li><strong>추가 보상</strong><div>쿨웨이브 파라솔(코스튬, 7일), 감정표현 '빙고!'</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>당첨자 명단 (10명)</h3>
        <p class="muted">명단은 닉네임 기준이며, 순서는 무작위입니다.</p>
        <ul>
          <li>타락파워전사</li>
          <li>구름모자</li>
          <li>유라</li>
          <li>바닐라라떼</li>
          <li>카인</li>
          <li>별비행</li>
          <li>나루</li>
          <li>파도소리</li>
          <li>끝까지</li>
          <li>썸머라임</li>
        </ul>
      </div>

      <div class="section-card">
        <h3>지급 일정 및 방법</h3>
        <ul class="kv-list">
          <li><strong>지급 일정</strong><div>2030. 08. 15 18:00 이후 순차 지급</div></li>
          <li><strong>지급 방법</strong><div>게임 내 <strong>우편함</strong> 자동 발송 (수령 기한 14일)</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>유의 사항</h3>
        <ol>
          <li>당첨자 명단은 부정 참여 검수 결과에 따라 변경될 수 있습니다.</li>
          <li>우편 보상 미수령 시 재지급이 불가합니다.</li>
          <li>닉네임 변경/삭제로 인한 불이익은 책임지지 않습니다.</li>
        </ol>
      </div>

      <div class="section-card faq-list">
        <h3>FAQ</h3>
        <p><strong>Q. 추첨권은 계정 단위인가요?</strong><br/>A. 네, 계정당 합산됩니다. 최대 5장까지 반영됩니다.</p>
        <p><strong>Q. 칭호는 양도되나요?</strong><br/>A. 캐릭터 귀속으로 양도/거래가 불가합니다.</p>
      </div>
    `
  },
  {
    id: 1,
    title: "[종료] 에렌샤 오픈 기념 접속 이벤트!",
    author: "GM에레레",
    date: "2029.08.28",
    views: "11,987",
    imageUrl: "",
    content: `
      <p>모험가 여러분, 에렌샤 온라인 정식 오픈을 기념하여 진행된 접속 이벤트가 성황리에 종료되었습니다. 참여해 주신 모든 분들께 진심으로 감사드립니다!</p>

      <div class="section-card">
        <h3>이벤트 개요</h3>
        <ul class="kv-list">
          <li><strong>진행 기간</strong><div>2029. 08. 21 ~ 2029. 08. 28</div></li>
          <li><strong>대상</strong><div>이벤트 기간 내 1회 이상 접속한 모든 계정</div></li>
          <li><strong>참여 조건</strong>
            <div>
              <ul>
                <li>튜토리얼(프롤로그) 완료</li>
                <li>누적 접속 10분 이상</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

  <img src="../assets/images/chara/mob/Dualtailcat.webp" alt="듀얼테일캣" class="align-center h-480" />

      <div class="section-card">
        <h3>지급 보상</h3>
        <div class="reward-card" role="note" aria-label="이벤트 보상">
          <span class="pill-badge">보상</span>
          <div>
            <div class="reward-name">듀얼테일캣 변신 포션 (15분) × 1</div>
            <div class="reward-meta">캐릭터 귀속 · 거래 불가</div>
          </div>
        </div>
        <ul class="kv-list" style="margin-top:14px;">
          <li><strong>효과</strong><div>사용 시 15분 동안 귀여운 <em>듀얼테일캣</em>으로 변신합니다.</div></li>
          <li><strong>부가 효과</strong><div>비전투 시 이동 속도 +10%, 전용 감정표현/포즈 활성화(사진 촬영에 최적화).</div></li>
          <li><strong>제한</strong><div>전투 시작 시 외형만 유지되며 스탯 변화는 없습니다. 일부 던전/레이드 구간에서는 사용이 제한될 수 있습니다.</div></li>
          <li><strong>유효 기간</strong><div>사용 시부터 실시간 15분(로그아웃/채널 이동 중에도 시간은 흐릅니다)</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>지급 일정 및 방법</h3>
        <ul class="kv-list">
          <li><strong>지급 일정</strong><div>2029. 08. 28 12:00 이후 순차 지급</div></li>
          <li><strong>지급 방법</strong><div>게임 내 <strong>우편함</strong>으로 자동 발송</div></li>
          <li><strong>우편 보관</strong><div>수령 기한 14일. 기한 만료 시 재지급은 불가합니다.</div></li>
        </ul>
      </div>

      <div class="section-card">
        <h3>유의 사항</h3>
        <ol>
          <li>계정당 1회만 보상이 지급됩니다(중복 접속, 다중 캐릭터 보유 시에도 1회).</li>
          <li>비정상적인 방법으로 이벤트에 참여한 기록이 확인될 경우 지급 취소 및 제재가 이루어질 수 있습니다.</li>
          <li>점검 또는 네트워크 상태에 따라 우편 발송이 다소 지연될 수 있습니다.</li>
        </ol>
      </div>

      <div class="section-card faq-list">
        <h3>FAQ</h3>
        <p><strong>Q. 포션 시간을 잠깐 멈출 수 있나요?</strong><br/>
        A. 이벤트 포션은 실시간 카운트로 동작합니다. 로그아웃/채널 이동 중에도 시간이 흐릅니다.</p>
        <p><strong>Q. 레이드에서 사용 가능한가요?</strong><br/>
        A. 대다수 콘텐츠에서 사용 가능하지만, 특정 레이드/컷신 구간에서는 연출 보호를 위해 사용이 제한될 수 있습니다.</p>
      </div>

      <p class="muted">다시 한 번 많은 성원에 감사드리며, 에렌샤에서의 즐거운 모험을 응원합니다!</p>
    `
  }
];

var boardData = eventsData; // const를 var로 변경
