/*History Quiz Intermediate*/  

//variables
let quiz = [];
quiz[0] = new Question("What was the name of the baker in whose bakery the Great Fire of London of 1666 apparently started?", "Thomas Farriner (or Farynor)", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("The Spanish Civil War started in 1936 and ended in which year?", "1939", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("The horror of Guernica was portrayed in a painting by which artist?", "Pablo Picasso", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Which US President had the middle name Milhous?", "Richard Nixon", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("Which two students founded Google in 1998?", "Larry Page and Sergey Brin", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("In 1870 the Third Republic is declared in France after which leader was deposed?", "Emperor Napolean III", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("In 1958 the first artificial satellite launched in 1957 fell back to earth. What was its name?", "Sputnik 1", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("In 1918 Finland declared its independence from which country?", "Russia", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Which iconic structure began its construction in California in January 1933?", "Golden Gate Bridge", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("Which long distance train had its first run in October 1883?", "Venezuela", "Orient Express", "Put in wrong answer");
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
