const questions = [
  {
    text: "Wie viel Zeit hast du fürs Kochen?",
    answers: [
      { text: "Wenig", points: { fast: 2 } },
      { text: "Normal", points: { comfort: 2 } },
      { text: "Viel", points: { premium: 2 } }
    ]
  },
  {
    text: "Was isst du am liebsten?",
    answers: [
      { text: "Klassisch", points: { comfort: 1 } },
      { text: "Deftig", points: { hearty: 1 } },
      { text: "Leicht", points: { healthy: 1 } }
    ]
  }
];

let currentQuestion = 0;

let score = {
  fast: 0,
  comfort: 0,
  healthy: 0,
  hearty: 0,
  premium: 0
};

function renderQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question-container").innerText = q.text;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;

    btn.onclick = () => selectAnswer(answer);

    answersContainer.appendChild(btn);
  });
}

function selectAnswer(answer) {
  for (let key in answer.points) {
    score[key] += answer.points[key];
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});