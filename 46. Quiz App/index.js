const questionEl = document.getElementById('question');
const answersEl = document.querySelector('.answers');
const submitEl = document.querySelector('.btn');

const questions = ["Which language runs in a web browser?", "What does CSS stand for?", "What does HTML stand for?", "What year was JavaScript launched?"];
const answers = [
  [
    { "Java": false },
    { "Python": false },
    { "C": false },
    { "JavaScript": true }
  ],

  [
    { "Central Style Sheets": false },
    { "Cascading Style Sheets": true },
    { "Cascading Simple Sheets": false },
    { "Cars SUVs Sailboats": false }
  ],

  [
    { "Hypertext Markup Language": true },
    { "Hypertext Markdown Language": false },
    { "Hyperloop Machine Language": false },
    { "Helicopters Terminals Motorboats Lamborginis": false }
  ],

  [
    { 1996: false },
    { 1994: false },
    { 1995: true },
    { "None of the above": false },
  ]
];

let currentQuestionIdx = -1;
let score = 0;

submitEl.addEventListener('click', proceed);
showNextQuestion();

function proceed() {
  const answer = getAnswer();
  if (!answer) return;

  updateScore(answer.value);
  showNextQuestion();
}

function getAnswer() {
  return document.querySelector('input[name="answer"]:checked');
}

function updateScore(answer) {
  let isCorrect = false;
  let questionAnswers = answers[currentQuestionIdx];
  for (let i = 0; i < questionAnswers.length; i++) {
    let currentAnswer = questionAnswers[i];
    if (answer === Object.keys(currentAnswer)[0]) {
      isCorrect = currentAnswer[answer];
      break;
    }
  }
  score += Number(isCorrect);
}

function showNextQuestion() {
  currentQuestionIdx++;
  if (currentQuestionIdx === questions.length) {
    return finishQuiz();
  }
  questionEl.innerText = questions[currentQuestionIdx];
  showPossibleAnswers();
}

function showPossibleAnswers() {
  answersEl.innerHTML = '';
  const setOfAnswers = answers[currentQuestionIdx];

  setOfAnswers.forEach(answerObj => {
    const answer = Object.keys(answerObj)[0];
    const answerEl = document.createElement('div');
    answerEl.classList.add('answer');
    answerEl.innerHTML = `
    <input type="radio" id="${answer}" name="answer" value="${answer}">
    <label for="${answer}">${answer}</label>
    `
    answersEl.appendChild(answerEl);
  });
}

function finishQuiz() {
  function showScore() {
    document.querySelector('.quiz-content').innerHTML = `<h2> You answered ${score}/${questions.length} questions correctly </h2>`;
  }

  function updateSubmitFn() {
    submitEl.removeEventListener('click', proceed);
    submitEl.addEventListener('click', () => window.location.reload());
    submitEl.innerText = "Reload";
  }

  showScore();
  updateSubmitFn();
}
