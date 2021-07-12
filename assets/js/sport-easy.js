/*Sport Quiz Easy*/  

//variables
let quiz = [];
quiz[0] = new Question("Where are the 2028 Olympics going to be held?", "Los Angeles", "Berlin", "Dhubai");
quiz[1] = new Question("Which is the highest football ground in England?", "West Bromwich Albion", "White Heart lane", "Wembley");
quiz[2] = new Question("What age was George Foreman when he became the oldest heavyweight boxing champion in history?", "45", "35", "40");
quiz[3] = new Question("What is the point value of the pink ball in snooker?", "Six", "Five", "Four");
quiz[4] = new Question("What is Floyd Mayweather’s boxing nickname?", "Money", "Dollar", "Cents");
quiz[5] = new Question("Which country joined the Five Nations in 2000 to make it the Six Nations?", "Italy", "France", "Ireland");
quiz[6] = new Question("What does VAR stand for?", "Video Assistant Referee", "Video Aided Referee", "Video Assistant Response");
quiz[7] = new Question("At which Summer Olympic Games did 28 African countries refuse to participate?", "1976 Summer Olympics", "1980 Summer Olympics", "1972 Summer Olympics");
quiz[8] = new Question("Who holds the men's 400m world record of 43.03 seconds?", "Wayde van Niekerk", "Usain Bolt", "Thomas Barr");
quiz[9] = new Question("Which two teams compete in the Turin derby?", "Juventus and Torino", "Juventus and Milan", "Lazio and Milan");
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
	randomQuestion = quiz[randomNumber];
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
  } 
  if(currentScore === 10) {
    window.location.assign("winner.html");
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

const TIME_LIMIT = 60;
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
      window.location.assign("times-up.html");
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
