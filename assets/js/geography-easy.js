/*Goegrapghy Quiz Easy*/  

// Quiz variables
let quiz = [];
quiz[0] = new Question("Which river flows through Paris?", "River Seine", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("In which country is the UK’s highest mountain, Ben Nevis?", "Scotland", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("Mount Vesuvius overlooks which modern Italian city?", "Naples", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("What is the highest active volcano in Europe?", "Mount Etna", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("Which European capital city is divided by canals into about 90 islands joined by about 400 bridges?", "Amsterdam", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("What’s the world’s biggest port?", "Port of Shanghai", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Which South American country has land borders with ten other countries?", "Brazil", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("Which city is also known as ‘The Eternal City’?", "Rome", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("The Great Barrier Reef is off the coast of which Australian state?", "Queensland", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("Which island would you Visit to kiss the Blarney Stone?", "Ireland", "Put in wrong answer", "Put in wrong answer");
let randomQuestion;
let answers = [];
let currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(quiz) {
  for (let i = quiz.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = quiz[i];
      quiz[i] = quiz[j];
      quiz[j] = temp;
  }
}


function btnProvideQuestion() { 
  
	let randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];

}

function answerA_clicked() {
  let answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		let answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  let answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Wrong Answer, Try Again!!!");
  }	 
  if(currentScore === 10) {
    window.location.assign("/assets/html/winner.html");
  }
}


/*Timer*/

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="quiz-timer">
  <svg class="quiz-timer__svg" viewBox="0 0 100 100">
    <g class="quiz-timer__circle">
      <circle class="quiz-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="quiz-timer-path-remaining"
        stroke-dasharray="283"
        class="quiz-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="quiz-timer-label" class="quiz-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("quiz-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      window.location.assign("/assets/html/times-up.html");
    } 
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("quiz-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("quiz-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("quiz-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("quiz-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("quiz-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}