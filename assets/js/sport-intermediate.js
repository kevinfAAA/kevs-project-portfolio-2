/*Sport Quiz Intermediate*/  

//variables
let quiz = [];
quiz[0] = new Question("In cricket, who scored England's first test century?", "W.G. Grace", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("Which horse won the Grand National in 1994?", "Minnehoma", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("How many players are there in an ice hockey team?", "Six", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Which Canadian was stripped of his gold medal at the 1988 Olympics after being found to have taken banned steroids?", "Ben Johnson", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("Which three disciplines do horse riders compete in in three day eventing?", "Dressage, cross-country and show jumping", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which tennis player currently holds the world record for the fastest serve?", "John Isner (157.2mph)", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Toxophily is a popular sport, by what name is it more commonly known?", "Archery", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("A 'buttonhook' is a term used in which sport?", "A state", "Basketball", "Put in wrong answer");
quiz[8] = new Question("What time is the men's 200m world record held by Usain Bolt?", "19.19 seconds", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("Who was Britain's first million pound footballer?", "Trevor Francis", "Put in wrong answer", "Put in wrong answer");
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
