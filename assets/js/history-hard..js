/*History Quiz Hard*/  

//variables
let quiz = [];
quiz[0] = new Question("What colour were the pyramids at Giza originally?", "White", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("The first televised address from the Oval Office was made in 1947 by which President?", "President Truman", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("In November 1921, the Japanese Prime Minister Hara Takashi was assassinated in which city?", "Tokyo", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Who found the entrance to Tutankhamun's tomb in the Valley of the Kings in Nov 1922?", "Howard Carter", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("On the 4th November 1956, Soviet troops entered which country in order to quell a rebellion?", "Hungary", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which Apache leader in 1886 after 29 years years of fighting finally surrendered in Arizona?", "Geronimo", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("In 1904, the area that is known as 'Times Square' in Manhattan was renamed to Times Square, what was it called before?", "Long Ace Square", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("Who is the Roman god of agriculture?", "Saturn", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("Manchester United players and 15 other passengers were killed in February 1958 in an accident that became known as what?", "Munich air disaster", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("What was the name of the mythological monster that had nine heads?", "Hydra", "Put in wrong answer", "Put in wrong answer");
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
