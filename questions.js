const questions = [
  {
    question: "Q1. 길드에 가입했다.",
    answers: [
      { text: "먼저 인사하고 대화에 참여한다.", type: "E" },
      { text: "한동안 분위기를 살핀다.", type: "I" }
    ]
  },
  {
    question: "Q2. 익스트림 몬스터파크를 하려 한다. 가장 먼저 할 일은?",
    answers: [
      { text: "파티를 만들어 파티원을 구한다.", type: "E" },
      { text: "누가 파티 초대를 해줄 때까지 기다린다.", type: "I" }
    ]
  },
  {
    question: "Q3. 신직업이 나왔다.",
    answers: [
      { text: "성능부터 찾아본다.", type: "S" },
      { text: "컨셉과 이펙트부터 찾아본다.", type: "N" }
    ]
  },
  {
    question: "Q4. 직업을 선택할 때",
    answers: [
      { text: "현재 성능이 중요하다.", type: "S" },
      { text: "내가 끌리는 컨셉이 중요하다.", type: "N" }
    ]
  },
  {
    question: "Q5. 본캐가 큰 너프를 받았다.",
    answers: [
      { text: "더 강한 직업으로 갈아탄다.", type: "T" },
      { text: "애정이 있으니 계속 키운다.", type: "F" }
    ]
  },
  {
    question: "Q6. 친구가 '이 직업 어때?' 라고 물어봤다.",
    answers: [
      { text: "성능부터 설명해준다.", type: "T" },
      { text: "컨셉과 재미부터 설명해준다.", type: "F" }
    ]
  },
  {
    question: "Q7. 이벤트가 시작되었다.",
    answers: [
      { text: "보상을 계산하고 계획부터 세운다.", type: "J" },
      { text: "일단 참여하고 본다.", type: "P" }
    ]
  },
  {
    question: "Q8. 처음 가는 보스를 도전한다.",
    answers: [
      { text: "공략을 숙지한 후 입장한다.", type: "J" },
      { text: "직접 해보면서 배운다.", type: "P" }
    ]
  }
];

const jobQuestions = {
  ISTJ: [
    {
      question: "Q9. 본캐를 고를 때 가장 중요한 것은?",
      answers: [
        { text: "오랫동안 사랑받아온 직업", job: "히어로" },
        { text: "어떤 상황에서도 든든한 직업", job: "다크나이트" },
        { text: "투자한 만큼 확실히 보상받는 직업", job: "나이트로드" }
      ]
    },
    {
      question: "Q10. 오랫동안 키울 직업이라면?",
      answers: [
        { text: "정석의 매력을 가진 직업", job: "히어로" },
        { text: "끝까지 믿고 의지할 수 있는 직업", job: "다크나이트" },
        { text: "언제 봐도 멋있는 직업", job: "나이트로드" }
      ]
    },
    {
      question: "Q11. 가장 마음이 가는 말은?",
      answers: [
        { text: "기본이 가장 강하다.", job: "히어로" },
        { text: "끝까지 버티는 사람이 이긴다.", job: "다크나이트" },
        { text: "결과로 증명하면 된다.", job: "나이트로드" }
      ]
    }
  ],

  ISFJ: [
    {
      question: "Q9. 파티원이 위험하다.",
      answers: [
        { text: "가장 먼저 도와주러 간다.", job: "비숍" },
        { text: "내가 대신 위험을 감수한다.", job: "미하일" },
        { text: "끝까지 곁을 지켜준다.", job: "팔라딘" }
      ]
    },
    {
      question: "Q10. 파티원들이 나를 기억한다면?",
      answers: [
        { text: "항상 도와주던 사람", job: "비숍" },
        { text: "위험할 때 지켜주던 사람", job: "미하일" },
        { text: "끝까지 함께 버텨주던 사람", job: "팔라딘" }
      ]
    },
    {
      question: "Q11. 가장 듣고 싶은 말은?",
      answers: [
        { text: "덕분에 정말 도움됐어.", job: "비숍" },
        { text: "네가 있어서 든든했어.", job: "미하일" },
        { text: "끝까지 함께해줘서 고마워.", job: "팔라딘" }
      ]
    }
  ],

  INFJ: [
    {
      question: "Q9. 가장 끌리는 이야기는?",
      answers: [
        { text: "어둠을 이겨내고 성장하는 이야기", job: "데몬슬레이어" },
        { text: "끝없는 지식을 추구하는 이야기", job: "썬콜" },
        { text: "특별한 존재와 함께 성장하는 이야기", job: "에반" }
      ]
    },
    {
      question: "Q10. 애정캐를 만드는 이유는?",
      answers: [
        { text: "캐릭터의 서사에 공감해서", job: "데몬슬레이어" },
        { text: "세계관과 설정이 흥미로워서", job: "썬콜" },
        { text: "함께 성장하는 느낌이 좋아서", job: "에반" }
      ]
    },
    {
      question: "Q11. 가장 중요하게 생각하는 가치는?",
      answers: [
        { text: "극복", job: "데몬슬레이어" },
        { text: "깨달음", job: "썬콜" },
        { text: "성장", job: "에반" }
      ]
    }
  ],

  INTJ: [
    {
      question: "Q9. 가장 마음에 드는 직업은?",
      answers: [
        { text: "남들과 다른 시스템을 가진 직업", job: "제로" },
        { text: "철저한 계산이 필요한 직업", job: "섀도어" },
        { text: "압도적인 힘을 다룰 수 있는 직업", job: "루미너스" }
      ]
    },
    {
      question: "Q10. 보스를 공략할 때 가장 즐거운 순간은?",
      answers: [
        { text: "계획했던 빌드가 완벽하게 맞아떨어질 때", job: "제로" },
        { text: "손해 없이 효율적으로 클리어할 때", job: "섀도어" },
        { text: "강력한 힘으로 압도할 때", job: "루미너스" }
      ]
    },
    {
      question: "Q11. 당신이 가장 중요하게 생각하는 것은?",
      answers: [
        { text: "완벽한 계획", job: "제로" },
        { text: "최고의 효율", job: "섀도어" },
        { text: "압도적인 결과", job: "루미너스" }
      ]
    }
  ],

  ISTP: [
    {
      question: "Q9. 새 직업을 시작했다.",
      answers: [
        { text: "일단 해보면서 익힌다.", job: "윈드브레이커" },
        { text: "혼자 조용히 연구한다.", job: "나이트워커" },
        { text: "몸으로 부딪히며 배운다.", job: "와일드헌터" }
      ]
    },
    {
      question: "Q10. 가장 멋있다고 생각하는 전투 방식은?",
      answers: [
        { text: "어떤 상황에서도 흔들리지 않는 전투", job: "윈드브레이커" },
        { text: "적이 눈치채지 못하는 전투", job: "나이트워커" },
        { text: "상황에 맞춰 바뀌는 전투", job: "와일드헌터" }
      ]
    },
    {
      question: "Q11. 가장 마음에 드는 플레이는?",
      answers: [
        { text: "자신의 리듬을 지키는 플레이", job: "윈드브레이커" },
        { text: "필요한 순간에만 움직이는 플레이", job: "나이트워커" },
        { text: "상황에 따라 방법을 바꾸는 플레이", job: "와일드헌터" }
      ]
    }
  ],

  ISFP: [
    {
      question: "Q9. 직업을 선택할 때 가장 중요한 것은?",
      answers: [
        { text: "분위기와 감성", job: "카인" },
        { text: "직접 플레이하는 손맛", job: "바이퍼" },
        { text: "눈길을 사로잡는 화려함", job: "플레임위자드" }
      ]
    },
    {
      question: "Q10. 직업을 오래 좋아하게 되는 이유는?",
      answers: [
        { text: "그 직업만의 분위기", job: "카인" },
        { text: "직접 플레이하는 재미", job: "바이퍼" },
        { text: "화려한 연출과 이펙트", job: "플레임위자드" }
      ]
    },
    {
      question: "Q11. 직업을 좋아하게 되는 결정적인 이유는?",
      answers: [
        { text: "압도적인 분위기", job: "카인" },
        { text: "시원한 손맛", job: "바이퍼" },
        { text: "멋있는 연출", job: "플레임위자드" }
      ]
    }
  ],

  INFP: [
    {
      question: "Q9. 가장 끌리는 컨셉은?",
      answers: [
        { text: "특별한 능력을 가진 존재", job: "제논" },
        { text: "변신하며 성장하는 영웅", job: "카이저" },
        { text: "기계를 다루는 천재", job: "메카닉" }
      ]
    },
    {
      question: "Q10. 약해도 계속 키우는 이유는?",
      answers: [
        { text: "세상에 하나뿐인 느낌이라서", job: "제논" },
        { text: "성장하는 모습이 멋있어서", job: "카이저" },
        { text: "꿈을 이루는 과정이 좋아서", job: "메카닉" }
      ]
    },
    {
      question: "Q11. 당신이 되고 싶은 모습은?",
      answers: [
        { text: "누구와도 다른 특별한 존재", job: "제논" },
        { text: "모두가 인정하는 영웅", job: "카이저" },
        { text: "꿈을 현실로 만드는 창조자", job: "메카닉" }
      ]
    }
  ],

  INTP: [
    {
      question: "Q9. 재밌는 직업이란?",
      answers: [
        { text: "연구할 거리가 많은 직업", job: "일리움" },
        { text: "정확도가 중요한 직업", job: "신궁" },
        { text: "활용 방법이 다양한 직업", job: "패스파인더" }
      ]
    },
    {
      question: "Q10. 가장 재미를 느끼는 순간은?",
      answers: [
        { text: "남들이 모르는 원리를 발견할 때", job: "일리움" },
        { text: "계산한 결과가 정확히 맞아떨어질 때", job: "신궁" },
        { text: "새로운 가능성을 시험할 때", job: "패스파인더" }
      ]
    },
    {
      question: "Q11. 친구들이 나를 뭐라고 부를 것 같은가?",
      answers: [
        { text: "연구자", job: "일리움" },
        { text: "분석가", job: "신궁" },
        { text: "탐험가", job: "패스파인더" }
      ]
    }
  ],

  ESTP: [
    {
      question: "Q9. 보스를 잡고 가장 듣고 싶은 말은?",
      answers: [
        { text: "와 진짜 멋있다.", job: "팬텀" },
        { text: "딜 진짜 미쳤다.", job: "불독" },
        { text: "그걸 어떻게 한 거야?", job: "블래스터" }
      ]
    },
    {
      question: "Q10. 가장 끌리는 플레이 스타일은?",
      answers: [
        { text: "사람들의 시선을 사로잡는 플레이", job: "팬텀" },
        { text: "압도적인 성능으로 증명하는 플레이", job: "불독" },
        { text: "실력으로 인정받는 플레이", job: "블래스터" }
      ]
    },
    {
      question: "Q11. 직업을 선택하는 가장 큰 이유는?",
      answers: [
        { text: "플레이하는 모습이 멋있어서", job: "팬텀" },
        { text: "강력한 존재감을 보여줄 수 있어서", job: "불독" },
        { text: "익힐수록 실력이 느껴져서", job: "블래스터" }
      ]
    }
  ],

  ESFP: [
    {
      question: "Q9. 사람들이 나를 기억하는 이유는?",
      answers: [
        { text: "어디서든 존재감이 커서", job: "엔젤릭버스터" },
        { text: "항상 에너지가 넘쳐서", job: "스트라이커" },
        { text: "남들과 다른 매력이 있어서", job: "키네시스" }
      ]
    },
    {
      question: "Q10. 메이플을 할 때 가장 행복한 순간은?",
      answers: [
        { text: "사람들이 내 캐릭터를 멋지다고 해줄 때", job: "엔젤릭버스터" },
        { text: "시원한 액션으로 전투를 즐길 때", job: "스트라이커" },
        { text: "독특한 플레이를 보여줄 때", job: "키네시스" }
      ]
    },
    {
      question: "Q11. 캐릭터를 자랑한다면?",
      answers: [
        { text: "진짜 화려하지 않냐?", job: "엔젤릭버스터" },
        { text: "전투가 진짜 시원하다.", job: "스트라이커" },
        { text: "이 직업 컨셉 미쳤다.", job: "키네시스" }
      ]
    }
  ],

ENFP: [
  {
    question: "Q9. 신직업이 출시되었다. 가장 먼저 할 일은?",
    answers: [
      { text: "일단 만들어서 직접 해본다.", job: "호영" },
      { text: "직업 스토리와 컨셉부터 찾아본다.", job: "캡틴" },
      { text: "어떤 가능성이 있을지 상상해본다.", job: "렌" }
    ]
  },
  {
    question: "Q10. 부캐를 키우는 이유는?",
    answers: [
      { text: "새로운 플레이를 경험하고 싶어서", job: "호영" },
      { text: "그 직업만의 컨셉이 마음에 들어서", job: "캡틴" },
      { text: "아직 가보지 않은 길을 경험하고 싶어서", job: "렌" }
    ]
  },
  {
    question: "Q11. 셋 중 가장 끌리는 말은?",
    answers: [
      { text: "재밌어 보이는데?", job: "호영" },
      { text: "컨셉 진짜 좋다.", job: "캡틴" },
      { text: "처음 보는 길일수록 더 설렌다.", job: "렌" }
    ]
  }
],
  ENTP: [
    {
      question: "Q9. 어렵다고 소문난 직업을 발견했다.",
      answers: [
        { text: "속도감이 마음에 든다.", job: "칼리" },
        { text: "독특한 콤보가 끌린다.", job: "카데나" },
        { text: "극악의 난이도가 궁금하다.", job: "블래스터" }
      ]
    },
    {
      question: "Q10. 어려운 직업이 끌리는 이유는?",
      answers: [
        { text: "빠른 템포를 즐길 수 있어서", job: "칼리" },
        { text: "나만의 방식으로 플레이할 수 있어서", job: "카데나" },
        { text: "익혔을 때 성취감이 커서", job: "블래스터" }
      ]
    },
    {
      question: "Q11. 가장 끌리는 직업은?",
      answers: [
        { text: "빠르고 정신없는 직업", job: "칼리" },
        { text: "남들이 잘 안 하는 직업", job: "카데나" },
        { text: "익히기 어려운 직업", job: "블래스터" }
      ]
    }
  ],

  ESTJ: [
    {
      question: "Q9. 길드원들이 당신을 평가한다면?",
      answers: [
        { text: "추진력이 엄청난 사람", job: "캐논마스터" },
        { text: "겁 없이 밀어붙이는 사람", job: "데몬어벤져" },
        { text: "사람들을 이끄는 사람", job: "카이저" }
      ]
    },
    {
      question: "Q10. 어려운 보스를 만났을 때?",
      answers: [
        { text: "화력으로 정면 돌파한다.", job: "캐논마스터" },
        { text: "위험을 감수하고 기회를 노린다.", job: "데몬어벤져" },
        { text: "공략을 이끌며 클리어한다.", job: "카이저" }
      ]
    },
    {
      question: "Q11. 당신이 생각하는 강한 사람은?",
      answers: [
        { text: "행동으로 보여주는 사람", job: "캐논마스터" },
        { text: "두려움 없이 도전하는 사람", job: "데몬어벤져" },
        { text: "사람들을 이끄는 사람", job: "카이저" }
      ]
    }
  ],

  ESFJ: [
    {
      question: "Q9. 길드에 새 사람이 들어왔다.",
      answers: [
        { text: "먼저 다가가 말을 건다.", job: "라라" },
        { text: "필요한 정보를 알려준다.", job: "보우마스터" },
        { text: "조용히 챙겨준다.", job: "은월" }
      ]
    },
    {
      question: "Q10. 친구들이 나를 좋아하는 이유는?",
      answers: [
        { text: "항상 분위기를 좋게 만들어서", job: "라라" },
        { text: "곁에서 든든하게 도와줘서", job: "보우마스터" },
        { text: "힘들 때 가장 먼저 떠오르는 사람이어서", job: "은월" }
      ]
    },
    {
      question: "Q11. 가장 뿌듯한 순간은?",
      answers: [
        { text: "모두가 즐거워할 때", job: "라라" },
        { text: "누군가에게 도움이 되었을 때", job: "보우마스터" },
        { text: "힘든 사람에게 힘이 되었을 때", job: "은월" }
      ]
    }
  ],

  ENFJ: [
    {
      question: "Q9. 좋은 리더란?",
      answers: [
        { text: "방향을 제시하는 사람", job: "소울마스터" },
        { text: "열정으로 사람들을 움직이는 사람", job: "아란" },
        { text: "사람들의 성장을 돕는 사람", job: "메르세데스" }
      ]
    },
    {
      question: "Q10. 사람들이 당신을 따르는 이유는?",
      answers: [
        { text: "앞으로 나아갈 길을 보여주기 때문에", job: "소울마스터" },
        { text: "열정으로 동기부여하기 때문에", job: "아란" },
        { text: "한 사람 한 사람을 챙겨주기 때문에", job: "메르세데스" }
      ]
    },
    {
      question: "Q11. 가장 듣고 싶은 말은?",
      answers: [
        { text: "덕분에 앞으로 나아갈 수 있었어.", job: "소울마스터" },
        { text: "네 열정이 큰 힘이 됐어.", job: "아란" },
        { text: "네 덕분에 성장할 수 있었어.", job: "메르세데스" }
      ]
    }
  ],

  ENTJ: [
    {
      question: "Q9. 당신이 원하는 최종 모습은?",
      answers: [
        { text: "누구나 인정하는 최강자", job: "아델" },
        { text: "전장을 지휘하는 전략가", job: "배틀메이지" },
        { text: "한계를 뛰어넘은 존재", job: "아크" }
      ]
    },
    {
      question: "Q10. 당신을 가장 설레게 만드는 목표는?",
      answers: [
        { text: "누구보다 높은 곳에 오르는 것", job: "아델" },
        { text: "완벽한 전략으로 승리하는 것", job: "배틀메이지" },
        { text: "어제의 나를 뛰어넘는 것", job: "아크" }
      ]
    },
    {
      question: "Q11. 가장 듣고 싶은 말은?",
      answers: [
        { text: "와 진짜 강하다.", job: "아델" },
        { text: "판을 완벽하게 읽네.", job: "배틀메이지" },
        { text: "어떻게 저렇게 성장했지?", job: "아크" }
      ]
    }
  ]
};

const resultTitles = {
  "히어로": "정석은 결국 통한다.",
  "다크나이트": "끝까지 버티는 사람이 결국 이긴다.",
  "나이트로드": "결과로 증명하면 된다.",
  "비숍": "함께라서 더 강해진다.",
  "미하일": "누군가는 앞에서 지켜야 한다.",
  "팔라딘": "가장 강한 사람은 믿음을 주는 사람이다.",
  "데몬슬레이어": "상처도 결국 성장의 일부다.",
  "썬콜": "이해하는 순간, 세상이 달라진다.",
  "에반": "함께 성장하는 것이 가장 큰 힘이다.",
  "제로": "완벽한 계획은 우연을 이긴다.",
  "섀도어": "최고의 결과는 낭비를 줄이는 것에서 시작된다.",
  "루미너스": "압도적인 결과는 모든 과정을 증명한다.",
  "윈드브레이커": "자신의 리듬을 지키는 사람이 강하다.",
  "나이트워커": "필요한 순간에 움직이면 된다.",
  "와일드헌터": "상황이 바뀌면 방법도 바뀌어야 한다.",
  "카인": "압도적인 분위기는 그 자체로 강함이다.",
  "바이퍼": "재밌어야 계속 할 수 있다.",
  "플레임위자드": "멋있으면 이유는 충분하다.",
  "제논": "특별함은 만들어가는 것이다.",
  "카이저": "성장의 끝에는 새로운 내가 있다.",
  "메카닉": "아이디어는 실행될 때 가치가 있다.",
  "일리움": "세상을 바꾸는 건 새로운 발상이다.",
  "신궁": "정확함은 최고의 무기다.",
  "패스파인더": "새로운 길은 직접 만들어가는 것이다.",
  "팬텀": "스타일은 실력만큼 중요하다.",
  "불독": "자신감은 최고의 재능이다.",
  "블래스터": "한계를 넘는 순간이 가장 재밌다.",
  "엔젤릭버스터": "빛나는 사람은 결국 눈에 띈다.",
  "스트라이커": "고민보다 행동이 빠르다.",
  "키네시스": "세상을 다르게 보는 것이 재능이다.",
  "호영": "재밌어 보이면 일단 해본다.",
  "캡틴": "모험 없는 인생은 너무 심심하다.",
  "카데나": "어렵다고? 그래서 더 재밌다.",
  "칼리": "불가능해 보일수록 더 끌린다.",
  "캐논마스터": "크게 쏠 거면 제대로 쏜다.",
  "데몬어벤져": "위험을 감수해야 더 멀리 갈 수 있다.",
  "라라": "행복은 함께할 때 더 커진다.",
  "보우마스터": "믿음은 꾸준함에서 만들어진다.",
  "은월": "보이지 않아도 마음은 남는다.",
  "소울마스터": "빛은 결국 사람을 움직인다.",
  "아란": "포기하지 않는 의지가 결국 길을 만든다.",
  "메르세데스": "진짜 강함은 품격에서 나온다.",
  "아델": "도전하는 자는 아름답다.",
  "배틀메이지": "혼자 강한 것보다 함께 강한 것이 중요하다.",
  "아크": "새로운 길은 누군가 먼저 걸어야 한다.",
  "렌": "처음 보는 길일수록 더 설렌다."
};

const resultDescriptions = {

"다크나이트":
"당신은 쉽게 포기하지 않는 사람입니다.\n\n남들이 지칠 때도 묵묵히 자신의 길을 걸어갑니다.\n\n당신은 빠르게 앞서가는 사람보다 끝까지 남아있는 사람에게 더 큰 가치를 둡니다.\n\n그래서 힘든 순간에도 다시 일어설 수 있습니다.\n\n누군가는 재능으로 앞서가지만 당신은 끈기로 앞으로 나아갑니다.\n\n결국 끝까지 버티는 사람이 가장 멀리 간다는 것을 믿습니다.",

"카인":
"당신은 화려하게 드러나기보다 자신만의 분위기로 사람을 끌어당기는 사람입니다.\n\n남들의 시선보다 스스로의 기준과 감성을 더 중요하게 생각합니다.\n\n당신은 억지로 중심에 서기보다 가만히 있어도 존재감이 느껴지는 사람에 가깝습니다.\n\n그래서 당신의 강함은 목소리의 크기가 아니라 분위기에서 나옵니다.\n\n사람들은 종종 당신이 가진 깊이를 뒤늦게 발견합니다.\n\n압도적인 분위기는 그 자체로 강함입니다.",

  "호영":
    "당신은 호기심이 많은 사람입니다. 새로운 것을 보면 일단 도전해보고 싶어집니다. 인생도 게임도 재미있어 보여야 한다고 생각합니다.",

  "카데나":
    "당신은 어려운 길을 두려워하지 않습니다. 오히려 남들이 어렵다고 할수록 더 도전하고 싶어집니다. 성취감이 당신을 움직이는 원동력입니다.",

  "아델":
    "당신은 성장과 발전을 중요하게 생각합니다. 더 높은 곳을 향해 나아가는 과정 자체를 즐깁니다. 도전하는 사람의 모습이 가장 아름답다고 믿습니다.",
"카이저":
"당신은 성장형 주인공에 가깝습니다.\n\n지금의 모습보다 앞으로의 가능성에 더 큰 가치를 둡니다.\n\n꾸준한 성장 끝에 강해질 수 있다고 믿습니다.\n\n남들이 이미 완성된 결과를 볼 때, 당신은 아직 성장할 수 있는 가능성을 먼저 봅니다.\n\n그래서 실패를 두려워하기보다 성장을 멈추는 것을 더 두려워합니다.\n\n당신에게 강함이란 타고나는 것이 아니라 끝없이 만들어가는 것입니다.",

"미하일":
    "당신은 책임감이 강한 사람입니다. 누군가를 지켜야 하는 순간 물러서지 않습니다. 다른 사람에게 든든한 존재가 되고 싶어 합니다.",

  "엔젤릭버스터":
    "당신은 사람들에게 긍정적인 에너지를 주는 사람입니다. 자신의 매력과 개성을 숨기지 않습니다. 세상을 조금 더 밝게 만드는 힘이 있습니다.",

  "아크":
    "당신은 끊임없이 변화하고 성장하는 사람입니다. 새로운 길을 두려워하지 않습니다. 어제보다 나은 자신을 만드는 데 의미를 둡니다.",

  "제로":
    "당신은 계획적이고 전략적인 사람입니다. 즉흥성보다 설계된 움직임을 선호합니다. 준비된 사람만이 기회를 잡는다고 생각합니다.",

  "은월":
    "당신은 조용하지만 깊은 사람입니다. 겉으로 드러나지 않아도 진심은 결국 전해진다고 믿습니다. 사람과의 인연을 소중하게 생각합니다.",

  "소울마스터":
    "당신은 주변 사람들에게 긍정적인 영향을 주고 싶어 합니다. 혼자 빛나는 것보다 함께 성장하는 것을 더 중요하게 생각합니다.",

  "렌":
"당신은 새로운 가능성에 마음이 움직이는 사람입니다.\n\n익숙한 길보다 아직 가보지 않은 길에 더 큰 설렘을 느낍니다.\n\n남들이 정해놓은 답을 그대로 따라가기보다 직접 경험하며 자신만의 답을 찾고 싶어 합니다.\n\n그래서 당신은 변화와 도전을 두려워하지 않습니다.\n\n새로운 만남과 경험 속에서 성장하는 힘이 있습니다.\n\n처음 보는 길일수록 더 설렌다는 말을 가장 잘 보여주는 사람입니다.",
};

let currentQuestion = 0;
let currentJobQuestion = 0;
let selectedMbti = "";
let jobScores = {};

let scores = {
  I: 0,
  E: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0
};

function renderQuestion() {
  const q = questions[currentQuestion];

  document.querySelector(".container").innerHTML = `
    <h2>${q.question}</h2>
    <button onclick="selectAnswer('${q.answers[0].type}')">${q.answers[0].text}</button>
    <button onclick="selectAnswer('${q.answers[1].type}')">${q.answers[1].text}</button>
    <p>${currentQuestion + 1} / 11</p>
  `;
}

function selectAnswer(type) {
  scores[type]++;
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    calculateMBTI();
    return;
  }

  renderQuestion();
}

function calculateMBTI() {
  const mbti =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.N >= scores.S ? "N" : "S") +
    (scores.F >= scores.T ? "F" : "T") +
    (scores.P >= scores.J ? "P" : "J");

  selectedMbti = mbti;
  currentJobQuestion = 0;
  jobScores = {};

  showJobQuestion();
}

function showJobQuestion() {
  const q = jobQuestions[selectedMbti][currentJobQuestion];

  document.querySelector(".container").innerHTML = `
    <h2>${q.question}</h2>
    <button onclick="selectJobAnswer('${q.answers[0].job}')">${q.answers[0].text}</button>
    <button onclick="selectJobAnswer('${q.answers[1].job}')">${q.answers[1].text}</button>
    <button onclick="selectJobAnswer('${q.answers[2].job}')">${q.answers[2].text}</button>
    <p>${currentJobQuestion + 9} / 11</p>
  `;
}

function selectJobAnswer(job) {
  jobScores[job] = (jobScores[job] || 0) + 1;
  currentJobQuestion++;

  if (currentJobQuestion >= jobQuestions[selectedMbti].length) {
    showFinalResult();
    return;
  }

  showJobQuestion();
}

function showFinalResult() {
  let finalJob = "";
  let maxScore = -1;

  for (const job in jobScores) {
    if (jobScores[job] > maxScore) {
      maxScore = jobScores[job];
      finalJob = job;
    }
  }

  const allJobs = jobQuestions[selectedMbti][0].answers.map(answer => answer.job);
  const relatedJobs = allJobs.filter(job => job !== finalJob);

  document.querySelector(".container").innerHTML = `
    <div class="result-card">
      <p class="result-label">당신의 메BTI 직업은?</p>

      <h1>${finalJob}</h1>

      <h2>${resultTitles[finalJob]}</h2>

      <p class="result-description">
  ${resultDescriptions[finalJob] || ""}
</p>

      <p class="mbti-text">당신의 메BTI 유형: <strong>${selectedMbti}</strong></p>

<div class="related-box">
  <p>이런 직업도 잘 맞아요 ✨</p>

  <div class="job-card">${relatedJobs[0]}</div>
  <div class="job-card">${relatedJobs[1]}</div>
</div>

      <button onclick="copyResult('${finalJob}', '${selectedMbti}')">
        결과 복사하기
      </button>

      <button onclick="location.reload()">
        다시 테스트하기
      </button>
    </div>
  `;
}

function copyResult(job, mbti) {
  const text = "내 메BTI 결과는 " + job + "!\n" + resultTitles[job] + "\n메BTI 유형: " + mbti;
  navigator.clipboard.writeText(text);
  alert("결과가 복사됐어요!");
}

document.getElementById("startBtn").addEventListener("click", renderQuestion);
