/*Goegrapghy Quiz Intermediate*/  

//variables
let quiz = [];
quiz[0] = new Question("In which country would you be if you were Visiting the Taj Mahal?", "India", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("In which Scandinavian country would you find fjords?", "Norway", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("Which country’s name could be part of a Christmas dinner?", "Turkey", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Which stretch of water separates Anglesey and Wales?", "Menai Strait", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("In which continent is the world’s longest river, the Nile?", "Africa", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("What colour is the spot in the middle of the Japanese flag?", "Red", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Is Australia in the northern or the southern hemisphere?", "Southern", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("What does each star on the flag of the United States stand for?", "A state", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Which bridge, one of the oldest roadway bridges in the United States, was completed in 1883 and spans the East River?", "Brooklyn Bridge", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("On an O.S Map with a scale of 1:25000, how many inches represent one mile?", "Two and a half", "Put in wrong answer", "Put in wrong answer");
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
