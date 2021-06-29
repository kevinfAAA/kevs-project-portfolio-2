/*Sport Quiz Hard*/  

//variables
let quiz = [];
quiz[0] = new Question("Who holds the women's 100m world record?", "Florence Griffith-Joyner (10.49 seconds set in 1988)", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("Who won her 7th World Championship snooker title in 1994?", "Alison Fisher", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("What's the oldest stroke used in competitive swimming?", "Breastroke", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Which course is the traditional home of the Masters?", "Augusta", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("Which sport was reintroduced to the 1988 Seoul Olympics after an absence of 64 years?", "Tennis", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Who fought Mohammed Ali In The Rumble In The Jungle?", "George Foreman", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Which member of the British royal family competed in the 1976 Montreal Olympic Games?", "Princess Anne", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("Who is the most decorated female British athlete with five Olympic medals?", "Katherine Grainger (rower)", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Which football team are known as the Gunners?", "Arsenal", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("What are the five ring colours on the Olympic flag?", "Blue, yellow, black, green and red", "Put in wrong answer", "Put in wrong answer");
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
