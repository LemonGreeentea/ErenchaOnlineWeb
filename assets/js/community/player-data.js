const playerData = [
  {
    id: 1,
    name: "지존재현v",
    realName: "정재현",
    guild: "세모",
    type: "바닐라",
    gender: "남성",
    profileImage: "../assets/images/chara/Player/profile/ZizonJaehyun.webp",
    gameImage: "../assets/images/chara/Player/ZizonJaehyun.webp",
    realImage: "../assets/images/chara/Player/ZizonJaehyun_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Naru.webp",
    gameImage: "../assets/images/chara/Player/Naru.webp",
    realImage: "../assets/images/chara/Player/Naru_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Cain.webp",
    gameImage: "../assets/images/chara/Player/Cain.webp",
    realImage: "../assets/images/chara/Player/Cain_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Arang.webp",
    gameImage: "../assets/images/chara/Player/Arang.webp",
    realImage: "../assets/images/chara/Player/Arang_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Daehozzang.webp",
    gameImage: "../assets/images/chara/Player/Daehozzang.webp",
    realImage: "../assets/images/chara/Player/Daehozzang_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Maro.webp",
    gameImage: "../assets/images/chara/Player/Maro.webp",
    realImage: "../assets/images/chara/Player/Maro_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Tokkigongju.webp",
    gameImage: "../assets/images/chara/Player/Tokkigongju.webp",
    realImage: "../assets/images/chara/Player/Tokkigongju_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Vivian.webp",
    gameImage: "../assets/images/chara/Player/Vivian.webp",
    realImage: "../assets/images/chara/Player/Vivian_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Kaiser.webp",
    gameImage: "../assets/images/chara/Player/Kaiser.webp",
    realImage: "../assets/images/chara/Player/Kaiser_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Aria.webp",
    gameImage: "../assets/images/chara/Player/Aria.webp",
    realImage: "../assets/images/chara/Player/Aria_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Yura.webp",
    gameImage: "../assets/images/chara/Player/Yura.webp",
    realImage: "../assets/images/chara/Player/Yura_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/AegiManyeo.webp",
    gameImage: "../assets/images/chara/Player/AegiManyeo.webp",
    realImage: "../assets/images/chara/Player/AegiManyeo_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/TarakPowerJeonsa.webp",
    gameImage: "../assets/images/chara/Player/TarakPowerJeonsa.webp",
    realImage: "../assets/images/chara/Player/TarakPowerJeonsa_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Gomyammi.webp",
    gameImage: "../assets/images/chara/Player/Gomyammi.webp",
    realImage: "../assets/images/chara/Player/Gomyammi_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Poganchung.webp",
    gameImage: "../assets/images/chara/Player/Poganchung.webp",
    realImage: "../assets/images/chara/Player/Poganchung_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Kkeutkkaji.webp",
    gameImage: "../assets/images/chara/Player/Kkeutkkaji.webp",
    realImage: "../assets/images/chara/Player/Kkeutkkaji_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Naneunyasohwansa.webp",
    gameImage: "../assets/images/chara/Player/Naneunyasohwansa.webp",
    realImage: "../assets/images/chara/Player/Naneunyasohwansa_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Byeolsatang.webp",
    gameImage: "../assets/images/chara/Player/Byeolsatang.webp",
    realImage: "../assets/images/chara/Player/Byeolsatang_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Bbyakbbyak.webp",
    gameImage: "../assets/images/chara/Player/Bbyakbbyak.webp",
    realImage: "../assets/images/chara/Player/Bbyakbbyak_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Gyeonu.webp",
    gameImage: "../assets/images/chara/Player/Gyeonu.webp",
    realImage: "../assets/images/chara/Player/Gyeonu_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Bombi.webp",
    gameImage: "../assets/images/chara/Player/Bombi.webp",
    realImage: "../assets/images/chara/Player/Bombi_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Renaissance.webp",
    gameImage: "../assets/images/chara/Player/Renaissance.webp",
    realImage: "../assets/images/chara/Player/Renaissance_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Dreamer.webp",
    gameImage: "../assets/images/chara/Player/Dreamer.webp",
    realImage: "../assets/images/chara/Player/Dreamer_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/BingsuSaranggae.webp",
    gameImage: "../assets/images/chara/Player/BingsuSaranggae.webp",
    realImage: "../assets/images/chara/Player/BingsuSaranggae_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Scourge.webp",
    gameImage: "../assets/images/chara/Player/Scourge.webp",
    realImage: "../assets/images/chara/Player/Scourge_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Miunori.webp",
    gameImage: "../assets/images/chara/Player/Miunori.webp",
    realImage: "../assets/images/chara/Player/Miunori_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Angel-in-us.webp",
    gameImage: "../assets/images/chara/Player/Angel-in-us.webp",
    realImage: "../assets/images/chara/Player/Angel-in-us_reallife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Jjageuli.webp",
    gameImage: "../assets/images/chara/Player/Jjageuli.webp",
    realImage: "../assets/images/chara/Player/Jjageuli_realife.webp",
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
    profileImage: "../assets/images/chara/Player/profile/Hanwool.webp",
    gameImage: "../assets/images/chara/Player/Hanwool.webp",
    realImage: "../assets/images/chara/Player/Hanwool_reallife.webp",
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
    profileImage: "../assets/images/chara/DLC_Player/profile/amber.webp",
    gameImage: "../assets/images/chara/DLC_Player/amber.webp",
    realImage: "../assets/images/chara/DLC_Player/amber_reallife.webp",
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
    profileImage: "../assets/images/chara/DLC_Player/profile/frost.webp",
    gameImage: "../assets/images/chara/DLC_Player/frost.webp",
    realImage: "../assets/images/chara/DLC_Player/frost_reallife.webp",
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
        profileImage: "../assets/images/chara/DLC_Player/profile/Byeolbitgoyangi.webp",
        gameImage: "../assets/images/chara/DLC_Player/Byeolbitgoyangi.webp",
        realImage: "../assets/images/chara/DLC_Player/Byeolbitgoyangi_reallife.webp",
        description: `
                <p class="player-quote">굳이 너까지 챙겨줘야 할 이유는 없잖아. ... 같이 가든 말든 알아서 해.</p>
                <ul>
                        <li><strong>이름 :</strong> 별빛고양이 (한재민)</li>
                        <li><strong>소속 :</strong> 감자농장단</li>
                        <li><strong>성별 :</strong> 남성</li>
                        <li><strong>나이 :</strong> 22세</li>
                        <li><strong>특징 :</strong> 실용적, 침착함, 계산적, 츤데레 성향</li>
                        <li><strong>주요 능력 :</strong> 뿌리 채찍(액티브), 뿌리 속박(액티브), 야수 길들이기/소환: 듀얼테일캣(액티브), 별빛 섬광(액티브), 자연의 축복(액티브)</li>
                </ul>
                <p class="player-narrative-description">
                    밤에 주로 접속해 약초·재료 채집으로 소소한 수익을 올리는 실리형 ‘쌀먹’ 유저다. 편의상 감자농장단에 몸담았지만 필요하면 미련 없이 떠나며, 겉은 까칠해도 속정이 깊은 츤데레다. 드루이드 기술로 안정적인 수익을 쌓고, 덩굴이 감긴 나무 지팡이와 작은 채집 가방을 들고 다닌다.
                </p>
        `
    },
    {
        id: 204,
        name: "스텔라",
        realName: "유진",
        guild: "-",
        type: "DLC-It's a Trap!",
        gender: "남성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Stella.webp",
        gameImage: "../assets/images/chara/DLC_Player/Stella.webp",
        realImage: "../assets/images/chara/DLC_Player/Stella_reallife.webp",
        description: `
        <p class="player-quote">흥. 내 알 바 아니야.</p>
        <ul>
            <li><strong>이름 :</strong> 스텔라 (유진)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 남성</li>
            <li><strong>나이 :</strong> 18세</li>
            <li><strong>특징 :</strong> 냉소적, 쉽게 당황함, 갭 모에, 겉은 차갑고 속은 여림</li>
            <li><strong>주요 능력 :</strong> 아이스 월(액티브), 아쿠아 힐(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 코스프레가 취미인 고등학생으로, 양성적인 외모를 살려 다양한 캐릭터로 변신한다. 에렌샤에서는 '차가운 미인 엘프' 콘셉트를 즐기지만, 실제 성격은 소심하고 쉽게 당황하는 편이라 겉모습과 행동 사이의 거대한 갭이 매력 포인트다. 전투에서는 물·얼음 속성의 마법으로 적을 얼리거나 벽을 세워 아군을 보호하고, 긴급 상황에는 치유 마법으로 팀을 살리는 다재다능한 서포터로 활약한다.
            최근에는 떠들썩한 '솔레리온'에게 휘말려 임시 파티를 함께하는 중. 솔레리온의 노골적인 농담에는 새빨개져 버럭하지만, 티격태격 끝에도 결국 손을 보태고 만다. 레벨 138, 히든 클래스 '프로스트 메이든'이다.
        </p>
        `
    },
    {
        id: 205,
        name: "솔레리온",
        realName: "박소은",
        guild: "-",
        type: "DLC-It's a Trap!",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Solerion.webp",
        gameImage: "../assets/images/chara/DLC_Player/Solerion.webp",
        realImage: "../assets/images/chara/DLC_Player/Solerion_reallife.webp",
        description: `
        <p class="player-quote">가하하하! 마음에 드는군! 오늘 밤은 한잔하고, 붙고, 신나게 즐겨보자!</p>
        <ul>
            <li><strong>이름 :</strong> 솔레리온 (박소은)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>특징 :</strong> 호쾌함, 전투광, 기사도, 숨겨진 여성스러움</li>
            <li><strong>주요 능력 :</strong> 무기 마스터(패시브), 광전사의 포효(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 부유한 집안에서 자란 얌전하고 공손한 아가씨. 어릴 적부터 판타지 소설과 영화에 심취해, 현실의 '박소은'과 정반대인 가장 완벽한 '마초 전사'로 에렌샤를 즐긴다. 근접 무기를 두루 능숙하게 다루는 다재다능한 전사로, 평소엔 대검으로 전장을 쓸어버리는 딜러지만 상황에 따라 방패와 장검을 들어 탱커 역할도 완벽히 수행한다. 칼날 끝에서 은은한 화염기가 뿜어져 나오는 +10 '라그나로크'를 애용한다.
            게임 속에서는 시원시원한 웃음과 거친 농담을 서슴지 않는 '한 잔, 한 판, 한 판 더'의 전형적인 무투가처럼 굴지만, 몬스터의 공격에 맞아 무심코 "어머, 어쩌지…" 같은 말이나 '꺄악!' 하는 비명이 튀어나와 동료들을 당황하게 만들기도 한다. 현실에서는 한 방울의 술도 못 마시지만, 게임 속에선 누구보다 술을 사랑하는 헤비 드링커 행세를 한다. 최근에는 '스텔라'와 임시 파티를 맺고 사냥 중이다. 레벨 151, 랭킹 13위의 히든 클래스 '무기 마스터'다.
        </p>
        `
    },
    {
        id: 206,
        name: "날다람",
        realName: "김사돌",
    guild: "무덤",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/NalDaram.webp",
        gameImage: "../assets/images/chara/DLC_Player/NalDaram.webp",
        realImage: "../assets/images/chara/DLC_Player/NalDaram_reallife.webp",
        description: `
        <p class="player-quote">잠깐—먼저 생각해 보자.</p>
        <ul>
            <li><strong>이름 :</strong> 날다람 (김사돌)</li>
            <li><strong>소속 :</strong> 무덤 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 33세</li>
            <li><strong>특징 :</strong> 신중함, 사려 깊음, 자기 의심, 보호적</li>
            <li><strong>주요 능력 :</strong> 이터널 레퀴엠(시그니처), 소울 드레인(액티브), 레이스 베일(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 과중한 업무에 지친 영업직 직원. 조심스럽지만 신뢰받는 리더십으로 무덤 길드의 운영을 맡아 동료를 우선한다. 전투에선 소환수로 거리를 유지하며 아군을 지원해 전장을 단단히 붙잡는다. 레벨 106, 클래스 '네크로맨서'다.
        </p>
        `
    },
    {
        id: 207,
        name: "날만져",
        realName: "임승율",
        guild: "무덤",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/NalManjeo.webp",
        gameImage: "../assets/images/chara/DLC_Player/NalManjeo.webp",
        realImage: "../assets/images/chara/DLC_Player/NalManjeo_reallife.webp",
        description: `
        <p class="player-quote">곤경에 빠진 사람을 돕는 건 당연한 일이지!</p>
        <ul>
            <li><strong>이름 :</strong> 날만져 (임승율)</li>
            <li><strong>소속 :</strong> 무덤</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 37세</li>
            <li><strong>특징 :</strong> 정의감, 열정적, 두뇌 회전 빠름, 보호적</li>
            <li><strong>주요 능력 :</strong> 리얼리티 슬래시(시그니처), 공격·방어·민첩·신성 마법 전반(올라운더)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 경찰이자 기혼자로, 게임 속에선 정의의 구현체이자 무덤의 든든한 방패다. 길드를 창설해 이끌던 초대 마스터였으나, 자신의 돌진 성향을 자각하고 보다 신중한 날다람에게 자리를 맡겼다. 전장에선 영웅처럼 포즈를 취하며 악명을 쌓은 PK를 집요하게 추적한다. 레벨 164, 히든 클래스 '팔라딘 챔피언'다.
        </p>
        `
    },
    {
        id: 208,
        name: "카르라 알레스테오로스 에블레르",
        realName: "천영화",
    guild: "무덤",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Karla.webp",
        gameImage: "../assets/images/chara/DLC_Player/Karla.webp",
        realImage: "../assets/images/chara/DLC_Player/Karla_reallife.webp",
        description: `
        <p class="player-quote">심연 앞에 무릎 꿇어라. 파괴의 미학을 보여주지.</p>
        <ul>
            <li><strong>이름 :</strong> 카르라 알레스테오로스 에블레르 (천영화)</li>
            <li><strong>소속 :</strong> 무덤</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 20세</li>
            <li><strong>특징 :</strong> 중2병, 오만함(롤플), 독자적 논리, 유리대포</li>
            <li><strong>주요 능력 :</strong> 그랜드 캐터스트로피(시그니처)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 조용한 대학생이지만, 게임에선 압도적 화력을 뽐내는 길드의 핵심 딜러다. 악역 콘셉트의 연기로 팔라딘 날만져와 티격태격하지만, 보스전에서는 번개처럼 전장을 정리한다. 레벨 163, 히든 클래스 '디재스터 캐스터'다.
        </p>
        `
    },
    {
        id: 209,
        name: "안녕철권선생",
        realName: "태수빈",
    guild: "무덤",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Annyeongcheolkwonseonsaeng.webp",
        gameImage: "../assets/images/chara/DLC_Player/Annyeongcheolkwonseonsaeng.webp",
        realImage: "../assets/images/chara/DLC_Player/Annyeongcheolkwonseonsaeng_reallife.webp",
        description: `
        <p class="player-quote">계획은 간단! 내가 뛰어들어 큰 놈 한 대 치고 넘긴다!</p>
        <ul>
            <li><strong>이름 :</strong> 안녕철권선생 (태수빈)</li>
            <li><strong>소속 :</strong> 무덤</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 27세</li>
            <li><strong>특징 :</strong> 무모함, 충동적, 브레인 오프, 위기 시 보호적</li>
            <li><strong>주요 능력 :</strong> 임팩트 웨이브(시그니처), 그레이터 힐(액티브), 홀리 쉴드(액티브), 정화(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 초등교사지만, 게임에선 최전선에서 적을 밀어내며 동료를 지키는 괴짜 힐러다. 계산 대신 돌입을 선택해 혼란을 만들고, 딱 죽기 직전의 타이밍에 힐을 꽂아넣는다. 레벨 115, 클래스 '배틀 프리스트'다.
        </p>
        `
    },
    {
        id: 210,
        name: "와룡가든",
        realName: "손여란",
        guild: "창천",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Waryonggarden.webp",
        gameImage: "../assets/images/chara/DLC_Player/Waryonggarden.webp",
        realImage: "../assets/images/chara/DLC_Player/Waryonggarden_reallife.webp",
        description: `
        <p class="player-quote">전투는 시작 전에 끝나요. 모든 건 정보에 달려 있죠.</p>
        <ul>
            <li><strong>이름 :</strong> 와룡가든 (손여란)</li>
            <li><strong>소속 :</strong> 창천 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 27세</li>
            <li><strong>특징 :</strong> 신중함, 교활함, 통제적, 전략가</li>
            <li><strong>주요 능력 :</strong> 천리책(시그니처), 정보 봉인(패시브), 지휘 강화(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 번역가이자 하드코어 공략러. 창천 길드의 난폭한 전력을 말 한마디로 통제하며 한 발 앞에서 상황을 설계한다. 앞에 나서기보다 판을 짜는 지휘관형 플레이로 상대의 숨통을 조여 온다. 레벨 77, 클래스 '스트래티지스트 메이지'다.
        </p>
        `
    },
    {
        id: 211,
        name: "무인류금우",
        realName: "류금우",
        guild: "창천",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/MuinRyuGeumwoo.webp",
        gameImage: "../assets/images/chara/DLC_Player/MuinRyuGeumwoo.webp",
        realImage: "../assets/images/chara/DLC_Player/MuinRyuGeumwoo_reallife.webp",
        description: `
        <p class="player-quote">승패야 즐거움의 일부일 뿐!</p>
        <ul>
            <li><strong>이름 :</strong> 무인류금우 (류금우)</li>
            <li><strong>소속 :</strong> 창천 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 24세</li>
            <li><strong>특징 :</strong> 대담함, 솔직함, 경쟁심, 쾌활함</li>
            <li><strong>주요 능력 :</strong> 헤븐 스플리팅 슬래시(시그니처), 포워드 러시(액티브), 배틀 스피릿(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            사무라이 사극 마니아로, 정면승부를 즐기는 듀얼 특화 전사다. 읽기와 결단으로 승부를 가르며, 길드 레이드와 이벤트에 빠지지 않는 믿음직한 돌격수. 라이벌 날만져를 쓰러뜨리기 위해 오오타치를 갈고닦는다. 레벨 147, 히든 클래스 '로스트 사무라이'다.
        </p>
        `
    },
    {
        id: 212,
        name: "물어뜯는벼락",
        realName: "이연주",
        guild: "창천",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Mureoddeudneunbyeorak.webp",
        gameImage: "../assets/images/chara/DLC_Player/Mureoddeudneunbyeorak.webp",
        realImage: "../assets/images/chara/DLC_Player/Mureoddeudneunbyeorak_reallife.webp",
        description: `
        <p class="player-quote">한 번의 일격. 한 번의 승부면 충분해.</p>
        <ul>
            <li><strong>이름 :</strong> 물어뜯는벼락 (이연주)</li>
            <li><strong>소속 :</strong> 창천 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 22세</li>
            <li><strong>특징 :</strong> 온화함, 친절함, 배려심, 스릴 추구</li>
            <li><strong>주요 능력 :</strong> 썬더 팽 처형(시그니처), 섀도우 베일(액티브), 어쌔신즈 인스팅트(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 온화한 대학생이지만, 게임에선 암살·기습에 특화된 유리대포형 딜러다. 은신과 일격필살 콤보로 적을 지워내 rival 길드에 악명을 떨친다. 레벨 123, 클래스 '닌자(쌍검 스페셜리스트)'다.
        </p>
        `
    },
    {
        id: 213,
        name: "뻐끔뻐끔구슬",
        realName: "양미성",
        guild: "수렵연구회",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Bbeokkeum-Bbeokkeum-Guseul.webp",
        gameImage: "../assets/images/chara/DLC_Player/Bbeokkeum-Bbeokkeum-Guseul.webp",
        realImage: "../assets/images/chara/DLC_Player/Bbeokkeum-Bbeokkeum-Guseul_reallife.webp",
        description: `
        <p class="player-quote">우와아! 저기 큰 몬스터! 방패로 콕—해도 돼?!</p>
        <ul>
            <li><strong>이름 :</strong> 뻐끔뻐끔구슬 (양미성)</li>
            <li><strong>소속 :</strong> 수렵연구회 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 26세</li>
            <li><strong>특징 :</strong> (게임) 하이텐션, 시끄러움, 호기심 과다, 카오틱 굿 / (현실) 냉소적, 프로페셔널, 예리함, 실용적</li>
            <li><strong>주요 능력 :</strong> 룩 앳 미!★(시그니처), 실드 배쉬, 퍼피 칙스 가드, 스퀴키 해머 봉크</li>
        </ul>
        <p class="player-narrative-description">
            일본에서 활동하는 프로 성우. 게임에선 ‘무대 체질’인 탱커로 전장을 휘젓지만, 현실에선 건조하고 날카로운 본색이 드러난다. 동생(핥렐루야)의 폭주를 제어할 수 있는 유일한 인물. 레벨 101, 클래스 '가디언 나이트'다.
        </p>
        `
    },
    {
        id: 214,
        name: "핥렐루야",
        realName: "양교성",
        guild: "수렵연구회",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Hallelujah.webp",
        gameImage: "../assets/images/chara/DLC_Player/Hallelujah.webp",
        realImage: "../assets/images/chara/DLC_Player/Hallelujah_reallife.webp",
        description: `
        <p class="player-quote">기술은 군사, 다음은 야스, 그리고 의학! 인류의 위대함이야!</p>
        <ul>
            <li><strong>이름 :</strong> 핥렐루야 (양교성)</li>
            <li><strong>소속 :</strong> 수렵연구회</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 26세</li>
            <li><strong>특징 :</strong> 에로게 마니아, 부끄러움 無, 언니 바라기, 예술·사격 재능</li>
            <li><strong>주요 능력 :</strong> 선 드로핑(시그니처), 피어싱 샷, 멀티 애로우 배러지, 이글 아이(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            수렵연구회의 주력 원딜이자 유명 일러스트레이터. 전투에선 최대 사거리에서 포화로 전장을 갈아엎지만, 전투가 끝나면 노필터 망언 제조기로 돌아간다. 언니의 한마디 앞에만 작아진다. 레벨 82, 클래스 '데드아이'다.
        </p>
        `
    },
    {
        id: 215,
        name: "눈물콸콸",
        realName: "한서주",
        guild: "수렵연구회",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Nummulkwalkwal.webp",
        gameImage: "../assets/images/chara/DLC_Player/Nummulkwalkwal.webp",
        realImage: "../assets/images/chara/DLC_Player/Nummulkwalkwal_reallife.webp",
        description: `
        <p class="player-quote">...</p>
        <ul>
            <li><strong>이름 :</strong> 눈물콸콸 (한서주)</li>
            <li><strong>소속 :</strong> 수렵연구회</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 30세</li>
            <li><strong>특징 :</strong> 과묵함, 금욕적, 번아웃, 시한폭탄</li>
            <li><strong>주요 능력 :</strong> 회사노예의 살의(시그니처), 플러리 오브 블로우즈, 아이언 바디, 사일런트 스텝</li>
        </ul>
        <p class="player-narrative-description">
            말보다 주먹으로 말하는 근접 메인 딜러. 현실에선 혹독한 일을 견디는 프로그래머로, 게임을 스트레스 해소의 무대로 삼는다. 적의 얼굴 앞까지 파고들어 폭풍 연타로 전장을 밀어붙인다. 레벨 78, 클래스 '몽크'다.
        </p>
        `
    },
    {
        id: 216,
        name: "트리스메기스투스",
        realName: "안유민",
        guild: "마스터피스",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Trismegistus.webp",
        gameImage: "../assets/images/chara/DLC_Player/Trismegistus.webp",
        realImage: "../assets/images/chara/DLC_Player/Trismegistus_reallife.webp",
        description: `
        <p class="player-quote">어서 오세요. 제대로 찾아오셨습니다.</p>
        <ul>
            <li><strong>이름 :</strong> 트리스메기스투스 (안유민)</li>
            <li><strong>소속 :</strong> 마스터피스 길드 (길드마스터)</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>특징 :</strong> 로어 집착, 박식함, 예술적 완벽주의, 모범시민 위장, 러브크래프트 광</li>
            <li><strong>주요 능력 :</strong> (미지) 금단의 지식 관련 시그니처, 마스터 연금술, 어비스 그라스프(액티브), 엘드리치 놀리지(패시브)</li>
        </ul>
        <p class="player-narrative-description">
            친절하고 공손한 장인처럼 보이나, 일단 작품 이야기가 시작되면 심연의 로어를 끝없이 풀어놓는 괴인. 실전에서는 괴상한 포션과 저주로 후방 지원을 맡되, 워락 마법으로 자구책도 갖췄다. 레벨 113, 클래스 '오컬티스트(알케미스트-워락 하이브리드)'다.
        </p>
        `
    },
    {
        id: 217,
        name: "불가살뚱이",
        realName: "권안영",
        guild: "마스터피스",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Bulgasal-ttungyi.webp",
        gameImage: "../assets/images/chara/DLC_Player/Bulgasal-ttungyi.webp",
        realImage: "../assets/images/chara/DLC_Player/Bulgasal-ttungyi_reallife.webp",
        description: `
        <p class="player-quote">자자~ 방패는 왼쪽이 무거워요. 가볍게 맞춰 드릴게요! 그 전에... 어, 간식 타임!</p>
        <ul>
            <li><strong>이름 :</strong> 불가살뚱이 (권안영)</li>
            <li><strong>소속 :</strong> 마스터피스 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 23세</li>
            <li><strong>특징 :</strong> 쾌활함, 에너지 넘침, 미식가, 장인정신, 실용주의</li>
            <li><strong>주요 능력 :</strong> 커스텀 피팅(시그니처), 마스터 제련·단조, 장비 감정</li>
        </ul>
        <p class="player-narrative-description">
            파티의 장비를 완벽히 맞춰 승률을 끌어올리는 마스터 대장장이. 전투보다는 먹을거리에 더 진심이며, 작업 전엔 꼭 붉은 크래미를 물고 망치를 든다. 레벨 80, 클래스 '블랙스미스'다.
        </p>
        `
    },
    {
        id: 218,
        name: "타천☆사",
        realName: "한유은",
        guild: "마스터피스",
        type: "DLC-지고",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Tacheon-sa.webp",
        gameImage: "../assets/images/chara/DLC_Player/Tacheon-sa.webp",
        realImage: "../assets/images/chara/DLC_Player/Tacheon-sa_reallife.webp",
        description: `
        <p class="player-quote">짜잔! 신작 골렘! 무적! 완벽! ...기분 좋아지면 폭발할 수도? ☆</p>
        <ul>
            <li><strong>이름 :</strong> 타천☆사 (한유은)</li>
            <li><strong>소속 :</strong> 마스터피스 길드</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 22세</li>
            <li><strong>특징 :</strong> 사고뭉치, 카오틱 뉴트럴, 장난꾸러기 화신, 엉뚱한 천재, 바퀴벌레 애호</li>
            <li><strong>주요 능력 :</strong> 서프라이즈 피처!(시그니처), 마스터 골렘 크래프팅, 트랩 설치, 폭약 공학</li>
        </ul>
        <p class="player-narrative-description">
            마스터피스의 자타공인 혼돈 요원. 모든 골렘에 황당한 ‘숨겨진 기능’을 넣는 악명으로, 커뮤니티에선 사살해도 용서된다는 불문율까지 생겼다. 길드도 감싸지 않지만, 트리스는 그 미학적 혼돈을 사랑한다. 레벨 67, 클래스 '골렘 크래프트'다.
        </p>
        `
    },
    {
        id: 219,
        name: "퍼플푸프",
        realName: "표은주",
        guild: "-",
        type: "DLC",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Purplepuff.webp",
        gameImage: "../assets/images/chara/DLC_Player/Purplepuff.webp",
        realImage: "../assets/images/chara/DLC_Player/Purplepuff_reallife.webp",
        description: `
        <p class="player-quote">아니야 아니야, 애야! 마나를 너무 일찍 풀었잖아. 차근차근 모았다가—뿅! 이렇게, 뿅!</p>
        <ul>
            <li><strong>이름 :</strong> 퍼플푸프 (표은주)</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 35세</li>
            <li><strong>특징 :</strong> 발랄함, 외향적, 장난기 많은 멘토, 보살핌</li>
            <li><strong>주요 능력 :</strong> 튜터의 가호(시그니처), 마나 애로우(액티브), 아케인 실드(액티브), 엘리멘탈 펀더멘털(패시브), 티칭(패시브), 마나 분수(패시브), 아케인 미사일 스웜(액티브), 텔레포트(액티브), 그랜드 엘리멘탈 서모닝(액티브)</li>
        </ul>
        <p class="player-narrative-description">
            현실에선 심리 상담사로 일하며, 에렌샤에선 새내기 마법사들을 돌보고 길러내는 데서 기쁨과 보람을 느낀다. 루미나 중앙 광장 근처에 작은 야외 ‘교실’을 마련해 누구든 찾아오는 마법사를 환영하며, 고난도 운용보다 기본기를 완벽한 폼으로 시연하고 비유로 쉽게 설명하는 ‘재밌는 선생님’ 타입이다.
            대부분의 전투에서는 전력을 다하지 않지만, 진지해지는 순간 모든 원소 학파의 고위 마법을 연사해 상대를 압도하는 다재다능한 ‘진짜’ 대마법사로 변한다. 제자들이 성장해 에필리아로 떠나면 종종 투덜대며 삐지기도 하고, 성숙하고 아름다운 외모 탓에 기혼으로 오해받지만 실제로는 미혼이다. 언젠가 ‘평생 제자’를 만나는 것이 비밀스러운 꿈. 레벨 165, 히든 클래스 ‘아크메이지’다.
        </p>
        `
    },
    {
        id: 220,
        name: "지상최강의총잡이",
        realName: "한가람",
        guild: "-",
        type: "DLC",
        gender: "여성",
        profileImage: "../assets/images/chara/DLC_Player/profile/Hanbangjwa.webp",
        gameImage: "../assets/images/chara/DLC_Player/Hanbangjwa.webp",
        realImage: "../assets/images/chara/DLC_Player/Hanbangjwa_reallife.webp",
        description: `
        <p class="player-quote">"다음 타겟. 저기… 갑니다."</p>
        <ul>
            <li><strong>이름 :</strong> 지상최강의총잡이 (한가람)</li>
            <li><strong>커뮤니티 닉네임 :</strong> 한방좌</li>
            <li><strong>소속 :</strong> 없음</li>
            <li><strong>성별 :</strong> 여성</li>
            <li><strong>나이 :</strong> 20세</li>
            <li><strong>특징 :</strong> 음울함, 어색한 사교성, 인정받고 싶어함, 허약한 멘탈, 천재</li>
            <li><strong>클래스 :</strong> 아케인 건슬링어(히든클래스)</li>
            <li><strong>주요 능력 :</strong> 역추진탄(액티브), 작렬탄(액티브), 종언의 세례(시그니처)</li>
        </ul>
        <p class="player-narrative-description">
            에렌샤 최고의 저격수. 음울한 본모습을 어린아이 같은 닉네임 뒤에 숨기고 있다. 스킬만으로는 부족하다는 것을 깨닫고, 인정받고 사랑받기 위해 게임을 하지만, 어색하게 유행어를 따라하며 다른 이들과 소통하려 애쓴다.
            인정받고 싶다는 욕구로 라이플, 공중기동, 마나 컨트롤의 독특한 숙련도 조합을 터득했고, 이로 인해 히든 퀘스트를 발동시켜 유니크 보스 '팬텀 스펙터'를 물리치고 서버 최초 '아케인 건슬링어'가 되었다.
            겉으로는 조용하고 음울하지만, 내면으로는 인정받고 좋아받고 싶어하는 마음이 간절하다. 감정 상태가 극도로 불안정하며 타인의 칭찬에 전적으로 의존한다. 파티 플레이 후에는 자신의 사회적 수행을 끊임없이 반추한다.
            관중들에게 깊은 인상을 주기 위해 순전히 화려함을 위해 설계된 어려운 곡예 기동을 구사하며, 예상치 못한 각도에서 높은 정확도로 공격한다. 레벨 136, 히든 클래스 '아케인 건슬링어'다.
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