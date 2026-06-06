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

const mbtiJobs = {
  ISTJ: ["히어로", "다크나이트", "나이트로드"],
  ISFJ: ["비숍", "미하일", "팔라딘"],
  INFJ: ["데몬슬레이어", "썬콜", "에반"],
  INTJ: ["제로", "섀도어", "루미너스"],

  ISTP: ["윈드브레이커", "나이트워커", "와일드헌터"],
  ISFP: ["카인", "바이퍼", "플레임위자드"],
  INFP: ["제논", "카이저", "메카닉"],
  INTP: ["일리움", "신궁", "패스파인더"],

  ESTP: ["팬텀", "불독", "블래스터"],
  ESFP: ["엔젤릭버스터", "스트라이커", "키네시스"],
  ENFP: ["호영", "캡틴", "카데나"],
  ENTP: ["칼리", "스트라이커", "카데나"],

  ESTJ: ["캐논마스터", "데몬어벤져", "카이저"],
  ESFJ: ["라라", "보우마스터", "은월"],
  ENFJ: ["소울마스터", "아란", "메르세데스"],
  ENTJ: ["아델", "배틀메이지", "아크"]
};

let currentQuestion = 0;

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

    <button onclick="selectAnswer('${q.answers[0].type}')">
      ${q.answers[0].text}
    </button>

    <button onclick="selectAnswer('${q.answers[1].type}')">
      ${q.answers[1].text}
    </button>

    <p>${currentQuestion + 1} / ${questions.length}</p>
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

  showMbtiJobs(mbti);
}

function showMbtiJobs(mbti) {
  const jobs = mbtiJobs[mbti];

  document.querySelector(".container").innerHTML = `
    <h1>${mbti}</h1>

    <p>당신의 메BTI 유형이 결정되었습니다!</p>

    <h2>추천 직업 후보</h2>

    <div class="job-card">${jobs[0]}</div>
    <div class="job-card">${jobs[1]}</div>
    <div class="job-card">${jobs[2]}</div>

    <button onclick="location.reload()">
      다시하기
    </button>
  `;
}

document.getElementById("startBtn")
  .addEventListener("click", renderQuestion);
