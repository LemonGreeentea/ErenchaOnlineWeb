const playerData = [
  {
    id: 1,
    name: "지존재현v",
    realName: "정재현",
    guild: "세모길드",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/ZizonJaehyun.webp",
    gameImage: "../assets/images/chara/player/ZizonJaehyun.webp",
    realImage: "../assets/images/chara/player/ZizonJaehyun_reallife.webp",
    description: `
        <p class="player-quote">왜 길을 막고 있어? 죽고 싶나 보네.</p>
        <ul>
            <li><strong>이름 :</strong> 지존재현v (정재현)</li>
            <li><strong>소속 :</strong> 세모길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 21세</li>
            <li><strong>특징 :</strong> 명랑함, 자신감, 대담함</li>
            <li><strong>주요 능력 :</strong> 오비탈 트위스트, 순보(액티브), 기동성 향상(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            고등학생 때 에렌샤를 시작하여 날카로운 게임 감각과 피지컬로 빠르게 두각을 나타냈습니다. 그의 리더십 아래 세모 길드는 루미나의 이전 지배 길드 '나인즈'를 무너뜨리고 도시의 새로운 지배자가 되었습니다. 귀여운 외모와 장난기 넘치는 평판으로 여성 플레이어들에게 인기가 많으며, 놀라운 컨트롤 실력으로 '1대1 PvP의 신'으로 불립니다. 레벨 111, 랭킹 외의 히든 클래스 '체이서'입니다.
        </p>
    `
  },
  {
    id: 2,
    name: "나루",
    realName: "권나루",
    guild: "백설",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Naru.webp",
    gameImage: "../assets/images/chara/player/Naru.webp",
    realImage: "../assets/images/chara/player/Naru_reallife.webp",
    description: `
        <p class="player-quote">…내 뒤에 서.</p>
        <ul>
            <li><strong>이름 :</strong> 나루 (권나루)</li>
            <li><strong>소속 :</strong> 백설 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 26세</li>
            <li><strong>특징 :</strong> 과묵함, 책임감 강함, 허당끼/어리숙한 면모</li>
            <li><strong>주요 능력 :</strong> 종말의 단두대, 얼음 갑옷</li>
        </ul>
        <p class="player-narrative-description">
            에렌샤 최고의 레이드 전문 길드 '백설'의 마스터. 겉으로는 차갑고 과묵해 보이지만, 동료들에게는 마음이 따뜻하고 사려 깊다. 말보다는 행동으로 보여주며, 항상 레이드와 공성전의 선두에 선다. 의외로 독서가 취미이며, 레벨 161, 랭킹 4위의 '워로드'이다.
        </p>
    `
  },
  {
    id: 3,
    name: "카인",
    realName: "강시혁",
    guild: "메인",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Cain.webp",
    gameImage: "../assets/images/chara/player/Cain.webp",
    realImage: "../assets/images/chara/player/Cain_reallife.webp",
    description: `
        <p class="player-quote">오늘 차 맛이 좋군. 뭔가 좋은 일이 생길 징조인가.</p>
        <ul>
            <li><strong>이름 :</strong> 카인 (강시혁)</li>
            <li><strong>소속 :</strong> 메인 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 23세</li>
            <li><strong>특징 :</strong> 합리적, 카리스마, 신념</li>
            <li><strong>주요 능력 :</strong> 찰나의 그림자, 엘리멘탈 인챈트</li>
        </ul>
        <p class="player-narrative-description">
            세모 길드의 공동 창립자로, 재현과 함께 길드를 대륙 최강의 세력으로 키웠습니다. 그러나 '루미나 학살 사건' 이후 재현의 방식에 환멸을 느끼고 길드를 떠났습니다. 과묵하지만 조용한 카리스마로 추종자들의 절대적인 신뢰를 받으며, 레벨 153, 랭킹 7위의 히든 클래스 '아케인 블레이드'입니다.
        </p>
    `
  },
  {
    id: 4,
    name: "아랑",
    realName: "한아랑",
    guild: "나비",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Arang.webp",
    gameImage: "../assets/images/chara/player/Arang.webp",
    realImage: "../assets/images/chara/player/Arang_reallife.webp",
    description: `
        <p class="player-quote">오늘도 버스킹하러 가는 거죠? 준비됐어요!</p>
        <ul>
            <li><strong>이름 :</strong> 아랑 (한아랑)</li>
            <li><strong>소속 :</strong> 나비 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 친절함, 포용력</li>
            <li><strong>주요 능력 :</strong> 천상의 아리아, 연주자의 섬세한 손길</li>
        </ul>
        <p class="player-narrative-description">
            나비 길드의 마스터. 전투보다는 커뮤니티를 중시하는 플레이어들을 모아 길드를 창설했습니다. 현실에서는 프로 첼리스트를 꿈꾸는 음대생이며, 재현이 유일하게 말싸움에서 이기지 못하는 상대로 알려져 있습니다. 레벨 126의 '바드'입니다.
        </p>
    `
  },
  {
    id: 5,
    name: "대호짱",
    realName: "이대호",
    guild: "불철주야",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Daehozzang.webp",
    gameImage: "../assets/images/chara/player/Daehozzang.webp",
    realImage: "../assets/images/chara/player/Daehozzang_reallife.webp",
    description: `
        <p class="player-quote">좋아, 일 끝났다! 한잔하러 가자고~</p>
        <ul>
            <li><strong>이름 :</strong> 대호짱 (이대호)</li>
            <li><strong>소속 :</strong> 불철주야 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 48세</li>
            <li><strong>특징 :</strong> 호탕함, 실용적, 장인정신</li>
            <li><strong>주요 능력 :</strong> 급속 담금질, 강타</li>
        </ul>
        <p class="player-narrative-description">
            불철주야 길드의 마스터. 현실에서는 대기업 생산 라인을 관리하는 부서장으로, 퇴근 후 에렌샤 대장간에 접속하는 것을 '2차 출근'이라 부른다. 술과 사람을 좋아하는 호탕한 장인으로 길드원들을 가족처럼 아낀다. 레벨 139의 '대장장이'이다.
        </p>
    `
  },
  {
    id: 6,
    name: "마로",
    realName: "이철웅",
    guild: "마법소녀",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Maro.webp",
    gameImage: "../assets/images/chara/player/Maro.webp",
    realImage: "../assets/images/chara/player/Maro_reallife.webp",
    description: `
        <p class="player-quote">좋아, 마법소녀 출동 시간이다!</p>
        <ul>
            <li><strong>이름 :</strong> 마로 (이철웅)</li>
            <li><strong>소속 :</strong> 마법소녀 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 29세</li>
            <li><strong>특징 :</strong> 호탕함, 정의감, 돌격대장</li>
            <li><strong>주요 능력 :</strong> 무모한 돌진</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 유소년 스포츠 코치. 몸이 아파 밖을 나가지 못하는 조카와 함께 가상 세계를 즐기기 위해 에렌샤를 시작했다. 조카가 가장 좋아하는 마법소녀 애니메이션의 이름을 따서 길드를 만들고, 조카를 웃게 하기 위해 "마법소녀 길드장 마로다!"라고 자랑스럽게 소개한다. 레벨 143, 랭킹 31위의 '버서커'이다.
        </p>
    `
  },
  {
    id: 7,
    name: "토끼공주",
    realName: "류지현",
    guild: "-",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Tokkigongju.webp",
    gameImage: "../assets/images/chara/player/Tokkigongju.webp",
    realImage: "../assets/images/chara/player/Tokkigongju_reallife.webp",
    description: `
        <p class="player-quote">너... 한 판 붙을래?</p>
        <ul>
            <li><strong>이름 :</strong> 토끼공주 (류지현)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 21세</li>
            <li><strong>특징 :</strong> 나른함, 전투광</li>
            <li><strong>주요 능력 :</strong> 블레이드 액션(패시브), 앵클 슬래시(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 한때 격투 게임계를 제패했던 천재 프로게이머. 평소에는 나른하고 무기력해 보이지만, 전투만 시작되면 상대를 도발하며 안무처럼 화려한 스킬 연계를 선보이는 전투광으로 돌변합니다. PvP를 할 때만 진정으로 살아있음을 느끼며, 레벨 139, 랭킹 38위의 '섀도우 블레이드'입니다.
        </p>
    `
  },
  {
    id: 8,
    name: "비비안",
    realName: "한이서",
    guild: "메르세데스",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Vivian.webp",
    gameImage: "../assets/images/chara/player/Vivian.webp",
    realImage: "../assets/images/chara/player/Vivian_reallife.webp",
    description: `
        <p class="player-quote">...언젠가, 저도.</p>
        <ul>
            <li><strong>이름 :</strong> 비비안 (한이서)</li>
            <li><strong>소속 :</strong> 메르세데스 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 자본주의적 사고, 외로움, 평범함에 대한 동경</li>
            <li><strong>주요 능력 :</strong> 없음</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 대한민국 굴지의 대기업 서진그룹의 유력한 후계자. 진정한 인간관계를 맺을 기회 없이 자라나, 늘 외로움과 사람에 대한 그리움을 안고 살아왔습니다. 그녀에게 에렌샤는 유일한 안식처이자 숨 쉴 수 있는 공간입니다. 전투 기술은 전혀 없으며, 평민으로 변장해 다른 플레이어들의 소소한 일상을 지켜보는 것이 유일한 취미입니다. 레벨 44입니다.
        </p>
    `
  },
  {
    id: 9,
    name: "카이저",
    realName: "권준혁",
    guild: "메르세데스",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Kaiser.webp",
    gameImage: "../assets/images/chara/player/Kaiser.webp",
    realImage: "../assets/images/chara/player/Kaiser_reallife.webp",
    description: `
        <p class="player-quote">즉시 이행하겠습니다, 아가씨.</p>
        <ul>
            <li><strong>이름 :</strong> 카이저 (권준혁)</li>
            <li><strong>소속 :</strong> 메르세데스 길드</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 프로페셔널, 충성심, 츤데레</li>
            <li><strong>주요 능력 :</strong> 일섬(一殲), 발도술의 경지(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 한이서(비비안)의 개인 비서이자 경호실장. 대대로 서진 그룹을 섬겨온 가문에서 태어나 그녀를 지키는 것을 운명으로 여기고 있습니다. 한때 백설 길드의 고위 간부였으나, 비비안이 에렌샤에 접속하자 망설임 없이 메르세데스 길드로 이적했습니다. 레벨 147, 랭킹 27위의 '검호'입니다.
        </p>
    `
  },
  {
    id: 10,
    name: "아리아",
    realName: "수채하",
    guild: "-",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Aria.webp",
    gameImage: "../assets/images/chara/player/Aria.webp",
    realImage: "../assets/images/chara/player/Aria_reallife.webp",
    description: `
        <p class="player-quote">흥미 없어. 너희들과 소꿉놀이할 시간 없으니까.</p>
        <ul>
            <li><strong>이름 :</strong> 아리아 (수채하)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 23세</li>
            <li><strong>특징 :</strong> 츤데레, 외톨이, 숨겨진 상처</li>
            <li><strong>주요 능력 :</strong> 레이피어 패리, 플레슈(액티브), 숙련된 받아치기(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            과거 '스타더스트' 길드의 에이스였으나 길드가 해체된 후 마음의 문을 닫았습니다. 불의를 보면 참지 못하지만, 퉁명스럽게 굴며 속내를 감추는 츤데레. 현실에서는 '한국 골프의 미래'로 불리는 프로 골퍼입니다. 시스템상 불가능한 레이피어 패리를 버그를 통해 성공시키며 자신만의 시그니처 스킬로 만들었습니다. 레벨 137, 랭킹 43위의 '펜서'입니다.
        </p>
    `
  },
  {
    id: 11,
    name: "유라",
    realName: "백유라",
    guild: "세모",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Yura.webp",
    gameImage: "../assets/images/chara/player/Yura.webp",
    realImage: "../assets/images/chara/player/Yura_reallife.webp",
    description: `
        <p class="player-quote">제 뒤에 계세요. 길을 열겠습니다.</p>
        <ul>
            <li><strong>이름 :</strong> 유라 (백유라)</li>
            <li><strong>소속 :</strong> 세모길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 무심함, 얼어붙은 심장, (가까운 동료에게만 따뜻함)</li>
            <li><strong>주요 능력 :</strong> 제비 되돌리기, 초승달 베기(액티브), 초월적인 힘(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            세모 길드의 창립 멤버 중 한 명. 현실에서는 11만 팔로워를 보유한 인기 모델이자 셀럽입니다. 본래 PK나 세력전에는 관심이 없었으나, 신입 시절부터 함께한 재현, 카인, 봄비에게 가장 의지하며 길드에 남았습니다. 카인이 떠난 후에도 세모 길드가 '가족'처럼 되었기에 자리를 지키고 있습니다. 레벨 165, 랭킹 3위의 히든 클래스 '검성'입니다.
        </p>
    `
  },
  {
    id: 12,
    name: "애기마녀",
    realName: "유하은",
    guild: "감자농장단",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/AegiManyeo.webp",
    gameImage: "../assets/images/chara/player/AegiManyeo.webp",
    realImage: "../assets/images/chara/player/AegiManyeo_reallife.webp",
    description: `
        <p class="player-quote">아, 아니에요! 일부러 빗맞춘 거예요! 이건 경고 차원이었어요!</p>
        <ul>
            <li><strong>이름 :</strong> 애기마녀 (유하은)</li>
            <li><strong>소속 :</strong> 감자농장단</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 20세</li>
            <li><strong>특징 :</strong> 푼수, 성장형 캐릭터</li>
            <li><strong>주요 능력 :</strong> 파이어볼(액티브), 파이어 애로우(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 경영학과 대학생으로, 스트레스에서 벗어나기 위해 에렌샤를 시작했습니다. 경쟁보다는 농사, 낚시, 요리 등 평화로운 콘텐츠를 즐기기 위해 '감자농장단' 길드에 가입했으며, 소소한 활동에서 행복을 느낍니다. 레벨 26의 '견습 마법사'입니다.
        </p>
    `
  },
  {
    id: 13,
    name: "타락파워전사",
    realName: "김민정",
    guild: "-",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/TarakPowerJeonsa.webp",
    gameImage: "../assets/images/chara/player/TarakPowerJeonsa.webp",
    realImage: "../assets/images/chara/player/TarakPowerJeonsa_reallife.webp",
    description: `
        <p class="player-quote">아이고, 아가야. 사냥 그렇게 하는 거 아니다. 이리 와봐, 언니가 알려줄게.</p>
        <ul>
            <li><strong>이름 :</strong> 타락파워전사 (김민정)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>특징 :</strong> 호탕함, 볼수록 매력, 눈웃음</li>
            <li><strong>주요 능력 :</strong> 천화난만(버그성 스킬), 이십사수매화검법(패시브), 매화낙영참(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            부산에 오피스텔을 소유하고 있지만 돈 욕심은 크게 없습니다. 뉴비에게 유독 친절하여 '뉴비 컬렉터'로 불립니다. 평소에는 에필리아에서 잡담을 나누거나 심심하면 레이드에 참여하며, 매화 검법을 사용하여 그림 같은 전투를 펼칩니다. 레벨 179, 랭킹 1위의 히든 클래스 '매화검선'입니다.
        </p>
    `
  },
  {
    id: 14,
    name: "고먐미",
    realName: "김자성",
    guild: "-",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Gomyammi.webp",
    gameImage: "../assets/images/chara/player/Gomyammi.webp",
    realImage: "../assets/images/chara/player/Gomyammi_reallife.webp",
    description: `
        <p class="player-quote">와... 고인물 지리노 ㄷㄷ</p>
        <ul>
            <li><strong>이름 :</strong> 고먐미 (김자성)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 27세</li>
            <li><strong>특징 :</strong> 무해함, 나른함, 의외의 매력</li>
            <li><strong>주요 능력 :</strong> 없음</li>
        </ul>
        <p class="player-narrative-description">
            귀여운 외모와 독특한 말투로 빠르게 성장 중인 신인 스트리머. 본인은 인기를 실감하지 못하며 "그냥 마음대로 플레이할 뿐"이라고 말합니다. 액션 영화나 애니메이션으로 대리만족하다가 직접 판타지를 실현하기 위해 에렌샤를 시작했습니다. 레벨 18의 '검사'입니다.
        </p>
    `
  },
  {
    id: 15,
    name: "포간충",
    realName: "박주원",
    guild: "-",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Poganchung.webp",
    gameImage: "../assets/images/chara/player/Poganchung.webp",
    realImage: "../assets/images/chara/player/Poganchung_reallife.webp",
    description: `
        <p class="player-quote">내가 너 알아? 왜 친한 척이야?</p>
        <ul>
            <li><strong>이름 :</strong> 포간충 (박주원)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 22세</li>
            <li><strong>특징 :</strong> 냉소적, 경계심, 은근한 다정함</li>
            <li><strong>주요 능력 :</strong> 없음</li>
        </ul>
        <p class="player-narrative-description">
            한때 유망한 축구 선수였으나, 팀원들과의 불화로 은퇴 후 사람보다 동물을 더 믿게 되었습니다. 유기 동물을 돌보는 데 헌신하며, 사람에게는 거리를 두지만 동물이나 귀여운 존재에게는 다정한 모습을 보입니다. 다시 상처받는 것이 두려워 일부러 본성을 숨기고 있습니다. 레벨 109의 '섀도우 블레이드'입니다.
        </p>
    `
  },
  {
    id: 16,
    name: "끝까지",
    realName: "김소율",
    guild: "감자농장단",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Kkeutkkaji.webp",
    gameImage: "../assets/images/chara/player/Kkeutkkaji.webp",
    realImage: "../assets/images/chara/player/Kkeutkkaji_reallife.webp",
    description: `
        <p class="player-quote">자, 에렌샤 빵은 정말 맛있어. 현실에도 있었으면 좋겠다.</p>
        <ul>
            <li><strong>이름 :</strong> 끝까지 (김소율)</li>
            <li><strong>소속 :</strong> 감자농장단 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>특징 :</strong> 온화함, 책임감, 수호자, 숨겨진 매력</li>
            <li><strong>주요 능력 :</strong> 정사필중(正射必中), 날카로운 눈(패시브), 속사(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            에렌샤 초창기 플레이어 중 한 명. 과거 '사신'이라 불리며 랭킹 1위를 유지했으나, 끝없는 경쟁에 지쳐 지금은 '감자농장단'의 마스터로 평화롭게 지내고 있습니다. 길드원들을 자식처럼 아끼지만, 길드가 위협받을 때는 누구보다 단호해집니다. 레벨 158, 랭킹 5위의 히든 클래스 '신궁(神弓)'입니다.
        </p>
    `
  },
  {
    id: 17,
    name: "나는야소환사",
    realName: "박지수",
    guild: "엄마는외계인",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Naneunyasohwansa.webp",
    gameImage: "../assets/images/chara/player/Naneunyasohwansa.webp",
    realImage: "../assets/images/chara/player/Naneunyasohwansa_reallife.webp",
    description: `
        <p class="player-quote">자, 얘들아, 놀이 시간이다! 저기 저 오빠 외로워 보이는데, 가서 놀아주자!</p>
        <ul>
            <li><strong>이름 :</strong> 나는야소환사 (박지수)</li>
            <li><strong>소속 :</strong> 엄마는외계인 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 20세</li>
            <li><strong>특징 :</strong> 장난기, 소악마, 컨셉 충실</li>
            <li><strong>주요 능력 :</strong> 다중 소환(액티브), 사역마 강화(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 디자인을 전공하는 대학생. 성능보다는 컨셉과 재미를 추구하며, 귀엽고 장난기 많은 소환수들만 데리고 다닙니다. 소환수들에게 '내 새끼들'이라 부르며 무한한 애정을 보여주고, 가끔 소환수들이 다른 플레이어에게 장난을 치기도 합니다. 레벨 134, 랭킹 49위의 '소환사'입니다.
        </p>
    `
  },
  {
    id: 18,
    name: "별사탕",
    realName: "이수미",
    guild: "엄마는외계인",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Byeolsatang.webp",
    gameImage: "../assets/images/chara/player/Byeolsatang.webp",
    realImage: "../assets/images/chara/player/Byeolsatang_reallife.webp",
    description: `
        <p class="player-quote">자, 새로운 포션이야! 이름은 '춤추는 유성 에이드'! ...아마 팔다리가 더 생기거나 하진 않을 거야.</p>
        <ul>
            <li><strong>이름 :</strong> 별사탕 (이수미)</li>
            <li><strong>소속 :</strong> 엄마는외계인 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 28세</li>
            <li><strong>특징 :</strong> 4차원, 다정함, 매드 사이언티스트</li>
            <li><strong>주요 능력 :</strong> 기묘한 연금술(패시브), 불규칙 합성(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            반복되는 일상에 지친 프로그래머. SF와 판타지 팬으로, 에렌샤에서 4차원적인 면모를 마음껏 발산하고 있습니다. 주류 길드에 속하지 못하는 괴짜들을 위해 '엄마는외계인' 길드를 창설했습니다. 길드원들에게 이상한 포션을 나눠주며 '임상실험'을 즐기기도 합니다. 레벨 86의 '연금술사'입니다.
        </p>
    `
  },
  {
    id: 19,
    name: "뺙뺙",
    realName: "이세나",
    guild: "나비",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Bbyakbbyak.webp",
    gameImage: "../assets/images/chara/player/Bbyakbbyak.webp",
    realImage: "../assets/images/chara/player/Bbyakbbyak_reallife.webp",
    description: `
        <p class="player-quote">말도 안 돼! 저거 밤하늘 염료 드롭이잖아! 완전 대박! 운수 좋은 날!</p>
        <ul>
            <li><strong>이름 :</strong> 뺙뺙 (이세나)</li>
            <li><strong>소속 :</strong> 나비 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 21세</li>
            <li><strong>특징 :</strong> 활기참, 예술적 감각</li>
            <li><strong>주요 능력 :</strong> 숙련된 재봉술(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 마케팅을 전공하는 대학생으로, 커뮤니티 성장에 집착합니다. 나비 길드의 인기와 확장을 위해 헌신하며, 그녀가 맞춤 제작한 의상은 인기가 매우 많습니다. 레벨 65의 '재봉사'입니다.
        </p>
    `
  },
  {
    id: 20,
    name: "견우",
    realName: "차견우",
    guild: "엄마는외계인",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Gyeonu.webp",
    gameImage: "../assets/images/chara/player/Gyeonu.webp",
    realImage: "../assets/images/chara/player/Gyeonu_reallife.webp",
    description: `
        <p class="player-quote">하... 진짜... 우리 길드는 왜 항상 이 모양일까?</p>
        <ul>
            <li><strong>이름 :</strong> 견우 (차견우)</li>
            <li><strong>소속 :</strong> 엄마는외계인 길드</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 21세</li>
            <li><strong>특징 :</strong> 합리적, 수호자, 정상인</li>
            <li><strong>주요 능력 :</strong> 숙련된 받아치기(패시브), 플레슈(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 역사학을 전공하는 대학생. '엄마는외계인' 길드에서 '유일한 정상인'으로 알려져 있습니다. 항상 다른 사람의 뒤처리를 도맡는 '마지못한 보호자'처럼 말하지만, 결국 모든 것을 완벽하게 해결합니다. 레벨 101의 '펜서'입니다.
        </p>
    `
  },
  {
    id: 21,
    name: "봄비",
    realName: "정윤하",
    guild: "메인",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Bombi.webp",
    gameImage: "../assets/images/chara/player/Bombi.webp",
    realImage: "../assets/images/chara/player/Bombi_reallife.webp",
    description: `
        <p class="player-quote">저 구름 좀 봐. 고양이처럼 생겼어... 귀여워.</p>
        <ul>
            <li><strong>이름 :</strong> 봄비 (정윤하)</li>
            <li><strong>소속 :</strong> 메인 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 20세</li>
            <li><strong>특징 :</strong> 순수함, 느린 반응, 무해함, 치유계</li>
            <li><strong>주요 능력 :</strong> 인피니티 드로우, 더블 드로우(액티브), 매직 부스트(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 경계선 지능 장애를 가진 소녀. 세모 길드의 창립 멤버였으나, 길드가 커지면서 따돌림을 당했고 카인을 따라 길드를 나왔습니다. 전투 시에는 완전히 다른 사람처럼 변해 압도적인 기동성으로 적을 폭격합니다. 레벨 144, 랭킹 29위의 '배틀 메이지'입니다.
        </p>
    `
  },
  {
    id: 22,
    name: "르네상스",
    realName: "박현수",
    guild: "엄마는외계인",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Renaissance.webp",
    gameImage: "../assets/images/chara/player/Renaissance.webp",
    realImage: "../assets/images/chara/player/Renaissance_reallife.webp",
    description: `
        <p class="player-quote">내가 총을 들었다는 건... 누군가는 재수 없는 날이라는 뜻이지.</p>
        <ul>
            <li><strong>이름 :</strong> 르네상스 (박현수)</li>
            <li><strong>소속 :</strong> 엄마는외계인 길드</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 27세</li>
            <li><strong>특징 :</strong> 능글맞음, 장난기, 천재 전략가, 매력적인 악동</li>
            <li><strong>주요 능력 :</strong> 듀얼 난사(액티브), 빠른 재장전(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            '유쾌한 미치광이'로 불리는 젊은 사업가이자 액션 영화광. 장난기 넘치는 교활함과 예측 불가능한 행동으로 유명하지만, 그 이면에는 날카로운 계산과 치열한 경쟁심이 숨어 있습니다. 레벨 137의 '듀얼리스트'입니다.
        </p>
    `
  },
  {
    id: 23,
    name: "드리머",
    realName: "민영준",
    guild: "신 나인즈",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Dreamer.webp",
    gameImage: "../assets/images/chara/player/Dreamer.webp",
    realImage: "../assets/images/chara/player/Dreamer_reallife.webp",
    description: `
        <p class="player-quote">꿈은 시끄럽고 화려하게 꾸는 거야.</p>
        <ul>
            <li><strong>이름 :</strong> 드리머 (민영준)</li>
            <li><strong>소속 :</strong> 신 나인즈 (길드마스터)</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 23세</li>
            <li><strong>특징 :</strong> 열정적, 대담함, 쾌활함</li>
            <li><strong>주요 능력 :</strong> 뼈 자르기(패시브), 와일드 슬래시(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            구 나인즈 길드 마스터의 동생이자 전 간부. 형이 길드를 그만두자 '신 나인즈'를 창설했습니다. 현실에서는 만화 카페를 운영하는 형의 영향을 받은 하드코어 애니메이션 오타쿠입니다. 히든 직업 '도살자'는 적의 방어력을 일부 무시하는 강력한 패시브 스킬 '뼈 자르기'를 부여합니다. 레벨 120입니다.
        </p>
    `
  },
  {
    id: 24,
    name: "빙수사랑개",
    realName: "김아영",
    guild: "신 나인즈",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/BingsuSaranggae.webp",
    gameImage: "../assets/images/chara/player/BingsuSaranggae.webp",
    realImage: "../assets/images/chara/player/BingsuSaranggae_reallife.webp",
    description: `
        <p class="player-quote">크하하! 그게 다야? 더 재밌게 해봐!</p>
        <ul>
            <li><strong>이름 :</strong> 빙수사랑개 (김아영)</li>
            <li><strong>소속 :</strong> 신 나인즈</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 광인, 예측불허, 폭발적, 의리</li>
            <li><strong>주요 능력 :</strong> 무자비한 콤보(액티브), 광폭화(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 대기업에 다니는 직장인. 평생 모범생으로 살아온 억압된 자아를 해방시키기 위해 에렌샤를 선택했습니다. 구 나인즈 길드의 전 간부였으며, 드리머의 부활 선언 후 복귀했습니다. 전략보다는 본능과 파괴력에 의존하는 극단적인 인파이터입니다. 레벨 123의 '스트라이커'입니다.
        </p>
    `
  },
  {
    id: 25,
    name: "스컬지",
    realName: "박민지",
    guild: "백설",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Scourge.webp",
    gameImage: "../assets/images/chara/player/Scourge.webp",
    realImage: "../assets/images/chara/player/Scourge_reallife.webp",
    description: `
        <p class="player-quote">모든 이야기에는 끝이 있는 법이죠. 후후... 우후후후. 어쩌면, 지금일지도.</p>
        <ul>
            <li><strong>이름 :</strong> 스컬지 (박민지)</li>
            <li><strong>소속 :</strong> 백설 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 22세</li>
            <li><strong>특징 :</strong> 수수께끼, 조용한 광기, 실용주의, 완벽주의</li>
            <li><strong>주요 능력 :</strong> 사신의 춤(액티브), 망자의 속삭임(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 문학을 전공하는 대학생. 경쟁이나 권력 다툼에는 관심이 없지만, 최고 난이도 콘텐츠를 정복하는 과정 자체를 하나의 '서사'로 여기기 때문에 백설 길드에 소속되어 있습니다. 길드 레이드 외에는 거의 모습을 드러내지 않아 '유령 길드원'으로 불립니다. 레벨 148, 랭킹 25위의 히든 클래스 '그림 베일'입니다.
        </p>
    `
  },
  {
    id: 26,
    name: "미운오리",
    realName: "문동규",
    guild: "-",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Miunori.webp",
    gameImage: "../assets/images/chara/player/Miunori.webp",
    realImage: "../assets/images/chara/player/Miunori_reallife.webp",
    description: `
        <p class="player-quote">흥, 이 정도 함정쯤이야 예상 범위 내였어.</p>
        <ul>
                <li><strong>이름 :</strong> 미운오리 (문동규)</li>
                <li><strong>소속 :</strong> 없음</li>
                <li><strong>성별 :</strong> 남성</li>
                <li><strong>나이 :</strong> 18세</li>
                <li><strong>특징 :</strong> 호기심, 모험심, 쿨한 척, 숨겨진 열정</li>
                <li><strong>주요 능력 :</strong> 탐색(패시브), 기습(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 입시 스트레스에 시달리는 평범한 고등학생. 정해진 길을 강요하는 현실에 답답함을 느껴 에렌샤의 무한한 자유에 매료되었습니다. 그의 목표는 남들이 가는 길이 아닌, 미개척 루트를 개척하고 숨겨진 유적이나 퀘스트를 최초로 발견하는 것입니다. 커뮤니티 사이트의 모험 게시판에 자신의 발견을 올리며 소소한 명성을 얻고 있습니다. 레벨 32의 '탐색가'입니다.
        </p>
    `
  },
  {
    id: 27,
    name: "엔젤리너스",
    realName: "심춘자",
    guild: "-",
    type: "바닐라",
    gender: "여성",
    profileImage: "../assets/images/chara/player/profile/Angel-in-us.webp",
    gameImage: "../assets/images/chara/player/Angel-in-us.webp",
    realImage: "../assets/images/chara/player/Angel-in-us_reallife.webp",
    description: `
        <p class="player-quote">걱정 마세요! 제가 전부 다 치료해 드릴게요!</p>
        <ul>
            <li><strong>이름 :</strong> 엔젤리너스 (심춘자)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 19세</li>
            <li><strong>특징 :</strong> 발랄함, 애교 많음, 긍정적</li>
            <li><strong>주요 능력 :</strong> 상급 치유(액티브), 축복(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 평범한 고등학생. 에렌샤에서 다른 사람을 돕는 것에 큰 기쁨을 느끼며, 길드에서 사랑받는 막내 역할을 완벽하게 수행합니다. 그녀의 긍정적인 에너지와 헌신적인 플레이 스타일은 파티의 사기를 높이는 데 중요한 역할을 합니다. 다소 촌스러운 본명과 천사 같은 게임 속 외모의 차이 때문에 길드원들에게 놀림감이 되기도 하지만, 크게 신경 쓰지 않습니다. 레벨 58의 '사제'입니다.
        </p>
    `
  },
  {
    id: 28,
    name: "짜글이",
    realName: "오민준",
    guild: "메르세데스",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Jjageuli.webp",
    gameImage: "../assets/images/chara/player/Jjageuli.webp",
    realImage: "../assets/images/chara/player/Jjageuli_realife.webp",
    description: `
        <p class="player-quote">어머, 저런. 얼마나 힘드셨어요. 이 차는 서비스입니다. 자, 편하게 다 말씀해보세요.</p>
        <ul>
            <li><strong>이름 :</strong> 짜글이 (오민준)</li>
            <li><strong>소속 :</strong> 메르세데스 길드</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 28세</li>
            <li><strong>특징 :</strong> 정보상, 사교술의 대가, 공감 능력</li>
            <li><strong>주요 능력 :</strong> 화술(패시브), 장사꾼의 직감(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 VIP 전용 호텔의 컨시어지 출신. 고객들의 은밀한 요청을 처리하며 '정보가 곧 힘이자 돈'이라는 진리를 깨달았습니다. 그의 세련된 분석과 교차 검증은 단순한 소문을 고급 정보로 바꾸어 놓았습니다. 비전투 직업이며, 주로 세르냐에서 활동합니다. 레벨 76의 '상인'입니다.
        </p>
    `
  },
  {
    id: 29,
    name: "한울",
    realName: "박다솔",
    guild: "메인",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/player/profile/Hanwool.webp",
    gameImage: "../assets/images/chara/player/Hanwool.webp",
    realImage: "../assets/images/chara/player/Hanwool_reallife.webp",
    description: `
        <p class="player-quote">배고픈 채로는 싸울 수 없죠~ 자, 다들 한 그릇씩 받으세요!</p>
        <ul>
            <li><strong>이름 :</strong> 한울 (박다솔)</li>
            <li><strong>소속 :</strong> 메인 길드</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>특징 :</strong> 친절함, 세심함, 보살핌</li>
            <li><strong>주요 능력 :</strong> 지지고 볶기(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에서는 프로 셰프를 꿈꾸는 요리 전공 학생. 메인 길드의 군수 장교이자 가장 신뢰받는 조언자 중 한 명입니다. 직접 전투에 참여하지는 않지만, 그의 요리는 아군에게 강력한 능력치 버프를 제공합니다. 레벨 117의 생산직 클래스 '퀴지니에'입니다.
        </p>
    `
    },
    {
    id: 201,
    name: "엠버",
    realName: "김수아",
    guild: "-",
    type: "DLC-불꽃과 얼음",
    gender: "여성",
    profileImage: "../assets/images/chara/dlc_player/profile/amber.webp",
    gameImage: "../assets/images/chara/dlc_player/amber.webp",
    realImage: "../assets/images/chara/dlc_player/amber_reallife.webp",
    description: `
            <p class="player-quote">퀘스트. 곰발바닥. 열 개. 서쪽 숲.</p>
        <ul>
            <li><strong>이름 :</strong> 엠버 (김수아)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
                <li><strong>나이 :</strong> 21세</li>
                <li><strong>특징 :</strong> 은근한 광기, 4차원, 무모함</li>
                <li><strong>주요 능력 :</strong> 검기(화염, 시그니처), 플레임 스톰(액티브), 화염 면역(패시브), 플레임 스텝(액티브)</li>
        </ul>
        <p class="player-narrative-description">
                생명과학과 대학생이자 꽃집 아르바이트생. 타인의 눈치를 보는 현실과 달리 게임에선 자기가 하고싶은대로 하며 솔플을 선호한다. 가끔 프로스트(박도윤)와 함께하지만 전혀 신경쓰지 않는다. 추운걸 매우 싫어하며, 싸울 땐 무작정 돌진한 뒤 단검과 화염도구로 혼란시키는 러시형 전투를 펼친다. 레벨 52, 클래스 '플레임 블레이더'다.
        </p>
    `
  },
  {
    id: 202,
    name: "프로스트",
    realName: "박도윤",
    guild: "-",
    type: "DLC-불꽃과 얼음",
    gender: "남성",
    profileImage: "../assets/images/chara/dlc_player/profile/frost.webp",
    gameImage: "../assets/images/chara/dlc_player/frost.webp",
    realImage: "../assets/images/chara/dlc_player/frost_reallife.webp",
    description: `
        <p class="player-quote">자, 얼렸으니 막타 쳐주세요!</p>
        <ul>
            <li><strong>이름 :</strong> 프로스트 (박도윤)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 21세</li>
            <li><strong>특징 :</strong> 인기 많음, 배려심, 사교 활동</li>
            <li><strong>주요 능력 :</strong> 아이스 스피어(시그니처), 아이스볼트(액티브), 칠링 스텝(액티브, 물 위 걷기), 눈 내리기(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            생명공학부 대학생으로 소위 말하는 '인싸'. 다양한 사람과 어울리기 위해 파티 사냥을 즐기며, 밝고 친절한 말투로 주변의 분위기를 이끈다. 냉기로브와 완드로 적을 얼리고 지연시켜 동료의 마무리를 돕는다. 엠버(김수아)와 가끔씩 파티사냥을 한다. 레벨 43, 클래스 '냉기마법사'다.
        </p>
    `
    },
    {
        id: 203,
        name: "별빛고양이",
        realName: "한재민",
        guild: "감자농장단",
        type: "DLC",
        gender: "남성",
        profileImage: "../assets/images/chara/dlc_player/profile/Byeolbitgoyangi.webp",
        gameImage: "../assets/images/chara/dlc_player/Byeolbitgoyangi.webp",
        realImage: "../assets/images/chara/dlc_player/Byeolbitgoyangi_reallife.webp",
        description: `
                <p class="player-quote">굳이 너까지 챙겨줘야 할 이유는 없잖아. ... 같이 가든 말든 알아서 해.</p>
                <ul>
                        <li><strong>이름 :</strong> 별빛고양이 (한재민)</li>
                        <li><strong>소속 :</strong> 감자농장단</li>
                        <li><strong>성별 :</strong> 남성</li>
                        <li><strong>나이 :</strong> 22세</li>
                        <li><strong>특징 :</strong> 실용적, 침착함, 계산적, 츤데레 성향</li>
                        <li><strong>주요 능력 :</strong> 뿌리 채찍(액티브), 뿌리 속박(액티브), 야수 길들이기/소환: 쌍꼬리 고양이(액티브), 별빛 섬광(액티브), 자연의 축복(액티브)</li>
                </ul>
                <p class="player-narrative-description">
                    밤에 주로 접속해 약초·재료 채집으로 소소한 수익을 올리는 실리형 ‘쌀먹’ 유저다. 편의상 감자농장단에 몸담았지만 필요하면 미련 없이 떠나며, 겉은 까칠해도 속정이 깊은 츤데레다. 드루이드 기술로 안정적인 수익을 쌓고, 덩굴이 감긴 나무 지팡이와 작은 채집 가방을 들고 다닌다.
                </p>
        `
    }
];

// 전역 노출: DLC/검색 모달 등에서 재사용할 수 있도록 window에 연결
try {
    if (typeof window !== 'undefined') {
        window.playerData = playerData;
    }
} catch {}