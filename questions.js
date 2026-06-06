const questions = [
  {
    question: "Q1. 이벤트가 시작되었다. 가장 먼저 하는 행동은?",
    answers: [
      { text: "보상부터 확인한다.", type: "J" },
      { text: "일단 참여해본다.", type: "P" }
    ]
  },
  {
    question: "Q2. 새로운 직업이 출시되었다.",
    answers: [
      { text: "성능부터 찾아본다.", type: "T" },
      { text: "컨셉부터 살펴본다.", type: "F" }
    ]
  }
];

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
  document.querySelector(".container").innerHTML = `
    <h2>${questions[currentQuestion].question}</h2>

    <button onclick="selectAnswer('${questions[currentQuestion].answers[0].type}')">
      ${questions[currentQuestion].answers[0].text}
    </button>

    <button onclick="selectAnswer('${questions[currentQuestion].answers[1].type}')">
      ${questions[currentQuestion].answers[1].text}
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
    (scores.E > scores.I ? "E" : "I") +
    (scores.N > scores.S ? "N" : "S") +
    (scores.F > scores.T ? "F" : "T") +
    (scores.P > scores.J ? "P" : "J");

  document.querySelector(".container").innerHTML = `
    <h1>${mbti}</h1>

    <p>MBTI 계산 성공!</p>

    <button onclick="location.reload()">
      다시하기
    </button>
  `;
}

document.getElementById("startBtn")
  .addEventListener("click", renderQuestion);
