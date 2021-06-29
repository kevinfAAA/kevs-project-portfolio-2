/*History Quiz Easy*/  

//variables
let quiz = [];
quiz[0] = new Question("What did the Romans call Scotland?", "Caledonia", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("Who was made Lord Mayor of London In 1397, 1398, 1406 And 1419?", "Richard (Dick) Whittington", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("Who was Henry VIIIs last wife?", "Catherine Parr", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Who was the youngest British Prime Minister?", "William Pitt (The Younger)", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("In which year was Joan of Arc burned at the stake?", "1431", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which nationality was the polar explorer Roald Amundsen?", "Norweigan", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Who was the first female Prime Minister of Australia?", "Julia Gillard (2010-2013)", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("Which English explorer was executed in 1618, fifteen year after being found guilty of conspiracy against King James I of England and VI of Scotland?", "Sir Walter Raleigh", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Which English city was once known as Duroliponte?", "Cambridge", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?", "Smallpox", "Put in wrong answer", "Put in wrong answer");
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
