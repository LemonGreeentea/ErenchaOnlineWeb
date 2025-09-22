// NPC 데이터 모듈: player-data.js와 동일한 구조의 description HTML을 사용
const npcData = [
  {
    id: 'npc-lina',
    name: '리나',
    realName: '', // AI NPC
    type: '바닐라', // 바닐라 | DLC
    gender: '여성',
    profileImage: '../assets/images/chara/NPC/profile/Lina.webp',
    gameImage: '../assets/images/chara/NPC/Lina.webp',
    realImage: '',
    description: `
    <p class="player-quote">에렌샤에 오신 걸 환영해요! 당신의 모험이 별빛으로 가득하길.</p>
        <ul>
            <li><strong>이름 :</strong> 리나 (Lina)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>직업 :</strong> 루미나 '별빛 휴식 여관' 아르바이트생</li>
      <li><strong>위치 :</strong> 루미나, "별빛 휴식 여관"</li>
            <li><strong>특징 :</strong> 친절함, 다정함, 애칭 사용, 고운 목소리</li>
        </ul>
        <p class="player-narrative-description">
            루미나의 별빛 휴식 여관에서 일하는 친절한 직원. 상냥한 미소와 꿀빛 눈동자, 단정한 갈색 땋은 머리가 인상적이다. 플레이어들에게 다정하게 인사하며, 친해진 이들에게는 애칭을 붙여 부르곤 한다. 대부분의 모험가들에게 좋은 인상을 남겨 높은 호감도를 자랑한다.
        <ul>
            <li>대부분의 플레이어에게 거의 보편적으로 높은 호감도를 얻고 있다.</li>
            <li>꾸준히 도움을 주면 희귀한 히든 칭호를 해금할 수 있다는 소문이 있다.</li>
        </ul>
    `
  },
  
  
  {
  id: 'npc-lyra',
  name: '리라',
  realName: '', // AI NPC
  type: '바닐라', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/NPC/profile/Lyra.webp',
  gameImage: '../assets/images/chara/NPC/Lyra.webp',
  realImage: '',
  description: `
    <p class="player-quote">들리나요? 잎새의 속삭임과 버섯들의 윙윙거림… 그게 당신 노래의 첫 음이에요.</p>
    <ul>
      <li><strong>이름 :</strong> 리라 (Lyra)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>직업 :</strong> 방랑 음유시인이자 숲의 요정</li>
      <li><strong>위치 :</strong> 포프레프네</li>
      <li><strong>특징 :</strong> 변덕스러움, 호기심, 수수께끼/가사로 말함, 정령 교감 지도</li>
    </ul>
    <p class="player-narrative-description">
      반투명한 나비 같은 날개를 지닌 작은 요정. 머리결은 초록 덩굴과 꽃들이 폭포처럼 흘러내리는 듯하고, 눈동자는 호박 보석처럼 빛난다. 정교하게 깎아 만든 작은 나무 루트를 들고 다닌다. 숲의 날씨만큼이나 빠르게 변하는 기분과 장난기 어린 말투로, 수수께끼와 노랫말에 비유를 즐겨 쓴다. 유망한 음유시인들에게 ‘숲의 심장박동’을 듣는 법과 정령과 소통하는 법을 가르친다.
    </p>
    <ul>
      <li>음유시인 2차 전직 퀘스트를 제공한다.</li>
      <li>반짝이고 예쁜 것을 좋아해, 고급 보석을 가져오면 희귀 스킬북과 교환해 줄 때가 있다.</li>
    </ul>
  `
  },
  {
  id: 'npc-lucian',
  name: '루시안',
  realName: '', // AI NPC
  type: '바닐라', // 바닐라 | DLC
  gender: '남성',
  profileImage: '../assets/images/chara/NPC/profile/Lucian.webp',
  gameImage: '../assets/images/chara/NPC/Lucian.webp',
  realImage: '',
  description: `
    <p class="player-quote">색은 감정이고, 원단은 이야기죠. 오늘 밤, 세상에 어떤 이야기를 들려주실 건가요?</p>
    <ul>
      <li><strong>이름 :</strong> 루시안 (Lucian)</li>
      <li><strong>성별 :</strong> 남성</li>
      <li><strong>직업 :</strong> 세르냐 고급 부티크 '미드나잇 벨벳'의 주인 겸 재단사</li>
      <li><strong>위치 :</strong> 세르냐, 미드나잇 벨벳</li>
      <li><strong>특징 :</strong> 심미주의, 예술성, 정중하지만 거리감, 약간의 우울, 실용성보다 디자인 완성도 중시</li>
    </ul>
    <p class="player-narrative-description">
      나이를 가늠하기 어려운 아름다움을 지닌 뱀파이어. 어깨까지 내려오는 비단처럼 부드러운 검은 머리와 사람을 꿰뚫어 보는 듯한 깊은 적안(赤眼)을 가졌다. 자신의 손으로 완벽하게 재단한 검은 수트를 늘 차려입고, 느긋하면서도 우아한 동작으로 매장을 운영한다. 싸움과 권력 다툼에는 흥미가 없으며, 오직 완벽한 디자인에서만 아름다움을 찾는다. 플레이어를 레벨이 아닌 '스타일 감각'으로 평가한다.
    </p>
    <ul>
      <li>맞춤 의상을 의뢰하려면 금화뿐 아니라 희귀한 새 깃털, 거대 거미의 실 같은 ‘영감의 재료’를 함께 가져와야 한다.</li>
    </ul>
  `
  },
  {
  id: 'npc-isabelle',
  name: '이사벨',
  realName: '', // AI NPC
  type: '바닐라', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/NPC/profile/Isabelle.webp',
  gameImage: '../assets/images/chara/NPC/Isabelle.webp',
  realImage: '',
  description: `
    <p class="player-quote">이론 없는 실천은 공허하고, 이해 없는 실천은 위험할 뿐이다. 둘 다 갖췄음을 증명해라.</p>
    <ul>
      <li><strong>이름 :</strong> 이사벨 (Isabelle)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>직업 :</strong> 에피리아 마법 학원 기초 원소학 교수</li>
      <li><strong>위치 :</strong> 에피리아, 마법 학원</li>
      <li><strong>특징 :</strong> 엄격함, 논리성, 완벽주의, 고난도 시험/과제</li>
    </ul>
    <p class="player-narrative-description">
      매서운 지성과 날카로운 통찰을 지닌 학자. 틀 하나 흐트러짐 없는 올백의 검은 머리와 단정한 안경, 짙은 남청색의 학자 로브로 엄격하고 깔끔한 인상을 준다. 학생(플레이어)들에게 완벽을 요구하지만, 속으로는 젊은 마도사들의 성장을 지켜보는 보람을 느낀다. 그녀의 '시험' 퀘스트는 의도적으로 한계를 시험하도록 설계되어 있다.
    </p>
    <ul>
      <li>모든 특별 과제를 완수하면 희귀한 마력 강화 소모품을 보상으로 준다.</li>
    </ul>
  `
  },
  {
  id: 'npc-elara',
  name: '엘라라',
  realName: '', // AI NPC
  type: '바닐라', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/NPC/profile/Elara.webp',
  gameImage: '../assets/images/chara/NPC/Elara.webp',
  realImage: '',
  description: `
    <p class="player-quote">북풍은 차갑지만, 이곳의 화덕불은 언제나 따뜻하답니다. 편히 쉬어요, 영웅님.</p>
    <ul>
      <li><strong>이름 :</strong> 엘라라 (Elara)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>직업 :</strong> 에피리아 '따뜻한 화덕' 여관 주인</li>
      <li><strong>위치 :</strong> 에피리아, '따뜻한 화덕' 여관</li>
      <li><strong>특징 :</strong> 침착함, 지혜로움, 관찰자 성향, 상황 맞춤 대사</li>
    </ul>
    <p class="player-narrative-description">
      은빛으로 땋은 머리와 온화한 푸른 눈동자를 지닌 여성. 두툼하고 따뜻해 보이는 모직 드레스를 주로 입는다. 수많은 영웅들의 발자취를 지켜봐 온 관찰자로서, 숙박만 제공하는 것이 아니라 조용한 지혜와 격려를 건넨다. 때로는 플레이어의 장비나 상태에 따라 맥락에 맞는 한 마디를 덧붙이기도 한다.
    </p>
    <ul>
      <li>그녀가 끓이는 스튜는 소량의 일시적 '한기 저항' 버프를 부여한다.</li>
      <li>공식 설정상 미혼이며, 이에 매료된 플레이어들이 호감을 얻으려 노력하는 이야기가 많다.</li>
    </ul>
  `
  },
  {
  id: 'npc-jimmy',
  name: '지미',
  realName: '', // AI NPC
  type: '바닐라', // 바닐라 | DLC
  gender: '남성',
  profileImage: '../assets/images/chara/NPC/profile/Jimmy.webp',
  gameImage: '../assets/images/chara/NPC/Jimmy.webp',
  realImage: '',
  description: `
    <p class="player-quote">또 풋내기인가? 사막에 부와 영광 찾으러 왔다고? 대부분이 얻는 건 모래랑 죽음뿐이지. 좋아, 뭘 가져왔는지나 보자고.</p>
    <ul>
      <li><strong>이름 :</strong> 지미 (Jimmy)</li>
      <li><strong>성별 :</strong> 남성</li>
      <li><strong>직업 :</strong> 크로노시스의 베테랑 탐험가 겸 유물 감정사, 유물 매매 상점 운영</li>
      <li><strong>위치 :</strong> 크로노시스</li>
      <li><strong>특징 :</strong> 냉소적, 현실적, 결과 중시, 직설적 화법, 사막 생존 전문가</li>
    </ul>
    <p class="player-narrative-description">
      사막 햇볕에 그을린 피부와 텁수룩한 수염, 계산적인 눈빛을 가진 사나이. 모래폭풍에 닳아 해진 실용적인 가죽 장비와 챙 넓은 모자를 늘 착용하며, 왼쪽 눈을 가로지르는 길고 깊은 흉터가 눈에 띈다. 수많은 모험가들이 공상에 취해 사막에서 스러지는 모습을 보아 온 탓에 쉽게 사람을 믿지 않고, 화려한 이야기보다 손에 잡히는 결과를 중시한다. 소규모 유물 매매 상점을 운영하며 탐험가들의 물건을 사들이고 판다.
    </p>
    <ul>
      <li>수년 전 사막에서 실종된 전설의 탐험가 길드의 유일한 생존자라는 소문이 있다.</li>
    </ul>
  `
  },
  {
  id: 'npc-illyna',
  name: '일리나',
  realName: '', // AI NPC
  type: 'DLC-새로운 인연', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/DLC_NPC/profile/Illyna.webp',
  gameImage: '../assets/images/chara/DLC_NPC/Illyna.webp',
  realImage: '',
  description: `
    <p class="player-quote">가장 높은 왕좌는, 가장 시린 얼음 위에 세워지는 법.</p>
    <ul>
      <li><strong>이름 :</strong> 푸른 낫 일리나 (Blue Scythe Illyna)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>클래스 :</strong> 글레이셜 팬텀</li>
      <li><strong>위치 :</strong> ??? (상위 레벨 지역·월드 이벤트 시 등장)</li>
      <li><strong>무기 :</strong> 코퀴토스(Cocytus) — 심연의 서리를 깎아 만든 듯한 거대한 낫.</li>
      <li><strong>특징 :</strong> 냉정, 집요, 목적 지향. 최상위 플레이어의 정체를 막기 위해 ‘심판(Arbiter)’으로서 시험을 행한다.</li>
      <li><strong>전투 스타일 :</strong> 기동 암살자 + 광역 제어 냉기술사의 하이브리드. 지형을 위험 지대로 바꾸고, 목표를 동료로부터 격리하는 데 특화.</li>
    </ul>
    <p class="player-narrative-description">
      일리나는 서버 최강자들을 상대로 균형을 시험하는 유니크 NPC다. 그녀의 행위는 악의가 아닌 ‘기능’에 근거하며, 지정된 대상을 추적·고립·처단하는 냉혹한 절차로 수행된다. 검은 판금 갑옷 위로 금이 간 듯 흐르는 푸른 광맥과, 후드 가장자리의 푸른 휘광, 그리고 푸른 에너지 망토가 그녀의 정체성을 상징한다.
    </p>
  `
  },
  {
  id: 'npc-astraios',
  name: '아스트라이오스',
  realName: '', // AI NPC
  type: 'DLC-새로운 인연', // 바닐라 | DLC
  gender: '남성',
  profileImage: '../assets/images/chara/DLC_NPC/profile/Astraios.webp',
  gameImage: '../assets/images/chara/DLC_NPC/Astraios.webp',
  realImage: '',
  description: `
    <p class="player-quote">그대의 무구에 깃든 운명의 궤적을 보여주게. 별의 빛이 그 길을 감당할 자격이 있는지 시험할 것이니.</p>
    <ul>
      <li><strong>이름 :</strong> 아스트라이오스</li>
      <li><strong>성별 :</strong> 남성</li>
      <li><strong>클래스 :</strong> 별의 대장장이</li>
      <li><strong>위치 :</strong> 유성우 이벤트 발생 후의 신선한 운석 낙하지점(야간에만 등장)</li>
      <li><strong>무기 :</strong> 이벤트 호라이즌 — 청색 별빛의 고리로 둘러싸인 미소 특이점 망치. 공간·시간·운명을 휘어 금속을 단련한다.</li>
      <li><strong>특징 :</strong> 고대적, 냉담, 철학적 관조. 부·정치와 무관하며, 만물의 ‘궤적’을 읽고 가치 있는 운명에게만 개입한다.</li>
      <li><strong>전투/기능 스타일 :</strong> 전통적 전투 대신 장인의 의식으로 질서와 운명에 맞선다.</li>
    </ul>
    <p class="player-narrative-description">
      태초의 우주에서 별을 단련하던 천체적 장인. 필멸자들 속에서 ‘가능성과 운명’의 불꽃을 보고 에렌샤에 내려왔다. 그는 하늘의 파편이 대지에 떨어질 때에만 모습을 드러내며, 명성과 부가 아닌 ‘단련할 가치가 있는 운명’을 찾는다. 그의 얼굴은 형체가 아닌 심연의 보랏빛 성운—중앙의 암흑을 중심으로 소용돌이치는 우주 그 자체다.
    </p>
    <ul>
      <li>‘유성우’ 월드 이벤트가 발생한 상위 지역의 야간에만 등장한다.</li>
      <li>한 번 등장할 때 서버 전체 기준 사용 가능 횟수가 제한되어 경쟁을 유발한다.</li>
      <li>NPC로서 피해를 받지 않으며, 전투로 교란할 수 없다.</li>
    </ul>
  `
  },
  {
  id: 'npc-sati',
  name: '사티',
  realName: '', // AI NPC
  type: 'DLC-새로운 인연', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/DLC_NPC/profile/Sati.webp',
  gameImage: '../assets/images/chara/DLC_NPC/Sati.webp',
  realImage: '',
  description: `
    <p class="player-quote">당신의 여정에는 어떤 맛이 담겨있나요? 흥미롭네요. 제 요리는... 이 땅이 품고 있는 이야기, 바람이 속삭이는 노래를 담아내는 하나의 여정이랍니다. 혹시 괜찮다면 제 요리를 조금 맛보시겠어요?</p>
    <ul>
      <li><strong>이름 :</strong> 사티 (Sati)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>클래스 :</strong> 떠돌이 요리사</li>
      <li><strong>위치 :</strong> 이동형 출현(지역 고유 재료 루트에 따라 순환)</li>
      <li><strong>무기 :</strong> 소형 조리용 나이프(채집/유틸리티 중심)</li>
      <li><strong>특징 :</strong> 장인, 모험심, 열정, 호기심, 사교적, ‘철학하는 요리사’</li>
    </ul>
    <p class="player-narrative-description">
      귀족가의 전속 요리사였으나 재료 속 ‘이야기’를 좇아 명예를 떠난 방랑 요리사. 날렵한 체형에 호박빛 눈동자, 라임 그린으로 물든 투 브레이드 끝, 붉은 꽃 장식을 꽂은 머리가 특징이다. 오렌지 트리밍의 흰 더블브레스트 코트와 튼튼한 청록색 유틸리티 앞치마(흰 꽃 자수), 가죽 팬츠, 가벼운 금속 가디언틀렛을 착용한다. 허리 벨트에는 유리병과 소형 조리 나이프가 달려 있으며, 언제든 펼쳐 ‘휴대 주방’으로 변하는 대형 가죽 배낭을 메고 다닌다.
    </p>
    <ul>
      <li>완전한 비전투 NPC로, 공격적인 몬스터에게 무시된다(패시브 효과).</li>
      <li>요리사(Cuisinier) 클래스 플레이어에게 그녀의 인정을 받는 것은 큰 영예로 여겨진다.</li>
      <li>대형 가죽 배낭은 ‘무한 재료 보관’과 ‘자동 온도 제어’ 같은 숨겨진 기능을 가진 에픽 등급 아이템이라는 소문이 있다.</li>
      <li>히든 라포 시스템을 통해 비밀 상점과 독점 레시피가 해금된다.</li>
    </ul>
  `
  },
  {
  id: 'npc-rex',
  name: '렉스',
  realName: '', // AI NPC
  type: 'DLC-새로운 인연', // 바닐라 | DLC
  gender: '남성',
  profileImage: '../assets/images/chara/DLC_NPC/profile/Rex.webp',
  gameImage: '../assets/images/chara/DLC_NPC/Rex.webp',
  realImage: '',
  description: `
    <p class="player-quote">자, 증명해봐라. 네놈들이 사냥꾼인지, 아니면 그저 사냥감인지.</p>
    <ul>
      <li><strong>이름 :</strong> 렉스</li>
      <li><strong>성별 :</strong> 남성</li>
      <li><strong>클래스 :</strong> 그랜드 헌트마스터</li>
      <li><strong>위치 :</strong> ??? — 대수렵제 개시 지역 및 오지</li>
      <li><strong>무기 :</strong> '거수의 포효' — 거대 쇠뇌(단발 고화력) / '정점의 이빨' — 괴수의 송곳니로 만든 단검</li>
      <li><strong>특징 :</strong> 천재, 자신감, 야성적 직감, 예리함, 스릴 추구, 사냥의 중재자</li>
    </ul>
    <p class="player-narrative-description">
      에렌샤 대륙의 생태 균형을 지켜 온 비밀 혈통 '워처스' 최연소 수장. 유년기부터 모든 선배를 추월한 수렵의 귀재로, 얼굴의 흉터는 전설적 단독 수렵의 전리품이다. 대수렵제는 그의 말처럼 놀이가 아니라 '과잉 개체의 성스러운 간벌'이며, 진정한 강자들을 시험하는 의식이다. 도시와 문서는 혐오하며, 거친 황야에서만 숨을 쉰다.
    </p>
    <ul>
      <li>검은 늑대 새끼 '꼬마'는 그림자추적 늑대 무리의 유일한 생존자. 렉스가 동반자로 기른다.</li>
      <li>관리인 직함과 달리 도시와 서류 작업을 증오하며, 대부분의 시간을 미개척 황야에서 보낸다.</li>
      <li>바람과 동물의 움직임만으로 날씨 변화와 몬스터 대이동을 정확히 예측한다.</li>
    </ul>
  `
  },
  {
  id: 'npc-yeon-mihwa',
  name: '연미화',
  realName: '', // AI NPC
  type: 'DLC-새로운 인연', // 바닐라 | DLC
  gender: '여성',
  profileImage: '../assets/images/chara/DLC_NPC/profile/YeonMihwa.webp',
  gameImage: '../assets/images/chara/DLC_NPC/YeonMihwa.webp',
  realImage: '',
  description: `
    <p class="player-quote">슬슬, 재밌어지는군.</p>
    <ul>
      <li><strong>이름 :</strong> 연미화 (Yeon Mihwa)</li>
      <li><strong>성별 :</strong> 여성</li>
      <li><strong>클래스 :</strong> 극-환룡도</li>
      <li><strong>위치 :</strong> 유랑형 출현 — 달빛 사막, 폭풍 절벽 등 아름답고도 거대한 힘이 깃든 장소</li>
      <li><strong>무기 :</strong> '명천' 나기나타(좌수 위주) / '환아' 와키자시(우수, 근접·기습)</li>
      <li><strong>특징 :</strong> 자유분방, 도발적, 스릴 추구, 방랑 검객, 불가해</li>
    </ul>
    <p class="player-narrative-description">
      여우의 간계와 뇌룡의 파괴를 한 몸에 지닌 이종의 존재. 어느 세력에도 속하지 않은 유랑 히든 보스이며, 술과 싸움, 그리고 흥미로운 이야기만을 좇는다. 장대한 은백색의 포니테일, 오른쪽 눈을 가리는 앞머리, 금 문양이 새겨진 흑각 하나, 은백의 여우 귀와 은비늘 용의 꼬리. 느슨하게 걸친 회색 기모노와 검은 오비, 술 호리병이 그녀의 상징이다.
    </p>
    <ul>
      <li>한 장소에 오래 머물지 않는 유랑 NPC. 달빛 사막, 폭풍 절벽 등 인상적인 장소를 선호한다.</li>
      <li>월드 보스 격파, 서버 최초 업적 등 세계에 큰 '파문'을 일으키면 등장 확률이 증가한다.</li>
      <li>히든 클래스 '환룡도(Phantom Dragon Blade)' 해금 조건 — (정복의 길) 1:1 승리 또는 (라포의 길) 장기 히든 연퀘 완수로 신뢰를 획득.</li>
    </ul>
  `
  },
  // 예시 항목 (필요 시 실제 NPC 데이터로 교체/확장)
  // {
  //   id: 'npc-001',
  //   name: '예시 NPC',
  //   realName: '',
  //   type: '바닐라', // 바닐라 | DLC
  //   profileImage: '../assets/images/chara/NPC/profile/Example.webp',
  //   gameImage: '../assets/images/chara/NPC/Example.webp',
  //   realImage: '',
  //   description: `
  //       <p class="player-quote">대사 한 줄.</p>
  //       <ul>
  //           <li><strong>이름 :</strong> 예시 NPC</li>
  //           <li><strong>소속 :</strong> -</li>
  //           <li><strong>성별 :</strong> -</li>
  //       </ul>
  //       <p class="player-narrative-description">간단 설명</p>
  //   `
  // }
]

try { if (typeof window !== 'undefined') window.npcData = npcData; } catch {}
