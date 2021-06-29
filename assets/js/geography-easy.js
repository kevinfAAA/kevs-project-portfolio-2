/*Goegrapghy Quiz Easy*/  

//variables
let quiz = [];
quiz[0] = new Question("Which 'D' is an northern England town on the banks of the River Skerne?", "Darlington", "Put in wrong answer", "Put in wrong answer");
quiz[1] = new Question("In which English county might you find the towns Darwen and Nelson?", "Lancashire", "Put in wrong answer", "Put in wrong answer");
quiz[2] = new Question("Which is taller: The Eiffel Tower or Blackpool Tower?", "Eiffel Tower (324m vs 158m)", "Put in wrong answer", "Put in wrong answer");
quiz[3] = new Question("Baku is the capital city of which eastern European country?", "Azerbaijan", "Put in wrong answer", "Put in wrong answer");
quiz[4] = new Question("The Danube flows into what body of water?", "The Black Sea", "Put in wrong answer", "Put in wrong answer");
quiz[5] = new Question("Which river rises in the Himalayas in India and drains into the Bay of Bengal?", "Ganges", "Put in wrong answer", "Put in wrong answer");
quiz[6] = new Question("Which lake holds by far the largest volume of water in the UK?", "Loch Ness", "Put in wrong answer", "Put in wrong answer");
quiz[7] = new Question("The M1 motorway in the UK is how many miles long?", "193 miles", "Put in wrong answer", "Put in wrong answer");
quiz[8] = new Question("How many National Parks are there in Wales?", "Three", "Put in wrong answer", "Put in wrong answer");
quiz[9] = new Question("In which country is the worlds highest waterfall?", "Venezuela", "Put in wrong answer", "Put in wrong answer");
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
