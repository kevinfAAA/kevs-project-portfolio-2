/*Goegrapghy Quiz Easy*/  

//variables
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
