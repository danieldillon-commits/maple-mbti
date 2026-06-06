const questions = [
  {
    question: "Q1. 이벤트가 시작되었다. 가장 먼저 하는 행동은?",
    answers: [
      "보상부터 확인한다.",
      "일단 참여해본다."
    ]
  },
  {
    question: "Q2. 새로운 직업이 출시되었다.",
    answers: [
      "성능부터 찾아본다.",
      "컨셉부터 살펴본다."
    ]
  },
  {
    question: "Q3. 길드에 가입한다면?",
    answers: [
      "활동이 체계적인 곳",
      "분위기가 좋은 곳"
    ]
  }
];

let currentQuestion = 0;

function renderQuestion() {
  document.querySelector(".container").innerHTML = `
    <h2>${questions[currentQuestion].question}</h2>

    <button onclick="nextQuestion()">
      ${questions[currentQuestion].answers[0]}
    </button>

    <button onclick="nextQuestion()">
      ${questions[currentQuestion].answers[1]}
    </button>

    <p>${currentQuestion + 1} / ${questions.length}</p>
  `;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  document.querySelector(".container").innerHTML = `
    <h1>🏹 카인</h1>

    <h2>압도적인 분위기는 그 자체로 강함이다.</h2>

    <p>
      당신은 결과만큼 감성과 분위기를 중요하게 생각하는 사람입니다.
    </p>

    <button onclick="location.reload()">
      다시 테스트하기
    </button>
  `;
}

document.getElementById("startBtn")
  .addEventListener("click", renderQuestion);
