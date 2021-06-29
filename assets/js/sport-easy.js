/*Sport Quiz Easy*/  

//variables
let quiz = [];
quiz[0] = new Question("Where are the 2028 Olympics going to be held?", "Los Angeles, USA", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("Which is the highest football ground in England?", "West Bromwich Albion at 552ft", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("What age was George Foreman when he became the oldest heavyweight boxing champion in history?", "45", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("What is the point value of the pink ball in snooker?", "Six", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("What is Floyd Mayweather’s boxing nickname?", "Money", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which country joined the Five Nations in 2000 to make it the Six Nations?", "Italy", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("What does VAR stand for?", "Video Assistant Referee", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("At which Summer Olympic Games did 28 African countries refuse to participate?", "1976 Summer Olympics, in Montreal", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Who holds the men's 400m world record of 43.03 seconds?", "Wayde van Niekerk", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("Which two teams compete in the Turin derby?", "Juventus and Torino", "Put in wrong answer", "Put in wrong answer");
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

function shuffle(o) {
	for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

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
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Loser!");
    adjustScore(false);
  }	  
}
