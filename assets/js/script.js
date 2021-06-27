/*Goegrapghy Quiz*/  

//variables
let quiz = [];
quiz[0] = new Question("What is the capital of Chile?", "Santiago", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("What is the highest mountain in Britain?", "Ben Nevis", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("What is the smallest country in the world?", "Vatican City", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Alberta is a province of which country?", "Canada", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("How many countries still have the shilling as currency?", "Four – Kenya, Uganda, Tanzania and Somalia", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which is the only vowel not used as the first letter in a US State?", "E", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("What is the largest country in the world?", "Russia", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("Where would you find the River Thames?", "London, UK", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("What is the hottest continent on Earth?", "Africa", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("What is the longest river in the world?", "River Nile", "Put in wrong answer", "Put in wrong answer");
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
