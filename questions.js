const questions = [
  {
    question: "Q1.\n이벤트가 시작되었다.\n가장 먼저 하는 행동은?",
    answers: [
      "보상부터 확인한다.",
      "일단 참여해본다."
    ]
  }
];

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `
    <h2>${questions[0].question}</h2>
    <button>${questions[0].answers[0]}</button>
    <button>${questions[0].answers[1]}</button>
  `;
});
