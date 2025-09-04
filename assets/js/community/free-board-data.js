const freeBoardData = [
  {
    id: 6,
    category: "잡담",
    title: "아직 공사중입니다.",
    author: "홈페이지 관리자",
    date: "2025.08.28",
    views: 112,
    content: "아직 커뮤니티 탭은 제작중입니다. 참고하세요 :D",
    comments: [
      { author: "쫑쫑이", date: "2025.08.28", text: "네" },
      { author: "에렌샤지킴이", date: "2025.08.28", text: "헐.." }
    ]
  },
  {
    id: 5,
    category: "잡담",
    title: "이 게임 너무 재밌네요 ㅋㅋ",
    author: "에렌샤지킴이",
    date: "2025.08.28",
    views: 12,
    content: "오픈 첫날부터 달리는 중인데 시간 가는 줄 모르겠습니다. 다들 즐거운 하루 되세요!",
    comments: [
      { author: "쏙똑뉴비", date: "2025.08.28", text: "인정합니다! 퀘스트 따라가다 보니 벌써 30레벨이네요." },
      { author: "에렌샤지킴이", date: "2025.08.28", text: "와 빠르시네요! 전 이제 20레벨인데 ㅠㅠ" }
    ]
  },
  {
    id: 4,
    category: "파티",
    title: "심연의 동굴 3층 파티 구합니다 (1/4)",
    author: "쏙똑뉴비",
    date: "2025.08.28",
    views: 45,
    content: "방금 50레벨 찍은 힐러입니다! 같이 퀘스트 깨실 분 구해요. 힐은 빵빵하게 드립니다!",
    comments: [
      { author: "탱커구함", date: "2025.08.28", text: "저 탱커인데 지금 접속 가능합니다! 귓 드릴게요." }
    ]
  },
  {
    id: 3,
    category: "정보",
    title: "고요한 숲 보물상자 뜨네요 (짧은 팁)",
    author: "숲지기",
    date: "2025.08.27",
    views: 389,
    content: "고요한 숲 12시 폭포 뒤 동굴에 상자 있어요. 5분 간격 리젠 같음.",
    imageUrl: "../assets/images/update1.12.webp",
    comments: [
      { author: "지나가던행인", date: "2025.08.27", text: "와 팁 고마워요!", replies: [
        { author: "미니맵장인", date: "2025.08.27", text: "좌표 대충 120, 340쯤임" },
        { author: "숲지기", date: "2025.08.27", text: "맞아요 거기 맞습니다!" }
      ]},
      { author: "득템기원", date: "2025.08.27", text: "오늘도 득템 가자~" }
    ]
  },
  {
    id: 2,
    category: "질문",
    title: "블래스터 스킬 뭐부터?",
    author: "초블래스터",
    date: "2025.08.27",
    views: 152,
    content: "뉴비임. 블래스터 뭐부터 찍나요? 한 줄 조언 플리즈!",
    comments: [
      { author: "광폭화", date: "2025.08.27", text: "이동기 먼저, 그다음 딜 사이클 핵심" },
      { author: "딜찍누", date: "2025.08.27", text: "보스 갈 거면 생존기 필수", replies: [
        { author: "초블래스터", date: "2025.08.27", text: "감사! 바로 찍어봄" }
      ]}
    ]
  },
  {
    id: 1,
    category: "잡담",
    title: "퇴근하고 에렌샤 ON",
    author: "야근파이터",
    date: "2025.08.26",
    views: 1024,
    content: "퇴근했다. 오늘은 광산에서 망치질 간다 ㅋㅋ",
    comments: [
        { author: "야채곱창", date: "2025.08.26", text: "나도 접속! 파티 구함?", replies: [
          { author: "야근파이터", date: "2025.08.26", text: "ㅇㅋ 귓주세요" }
        ]}
    ]
  }
];

var boardData = freeBoardData;
