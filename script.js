// variable elements //
var interval;
var timer = document.getElementById("timer");
var view_high_score = document.getElementById("view_high_score");
var startBtn = document.getElementById("start-btn");
var questionsCon = document.getElementById("questionsCon");
var question = document.getElementById("question");
var results = document.getElementById("results");
var final_score = document.getElementById("final_score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

var answerButtons = document.getElementById("answer-buttons");
var btn1 = document.getElementById("answer-1");
var btn2 = document.getElementById("answer-2");
var btn3 = document.getElementById("answer-3");
var btn4 = document.getElementById("answer-4");
var buttons = document.querySelectorAll(".btn");
// var start =
var questionOutcome = document.getElementById("questionClick");

var runningQuestion = 0;
var correctAnswers = 0;
var timeLeft = 60;

// variable arrays for questions //
var questions = [
  {
    title: "Question 1: Arrays in Javascript can be used to store ________.",
    choices: [
      "numbers & strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correct: "all of the above",
  },

  {
    title: "Question 2: Commonly used datatypes do NOT include: ",
    choices: ["strings", "alerts", "booleans", "numbers"],
    correct: "alerts",
  },

  {
    title:
      "Question 3: A very useful tool during the development and debugging for printing content is to the debugger is: ",
    choices: ["javascript", "for loops", "console.log", "terminal/bash"],
    correct: "console.log",
  },

  {
    title:
      "Question 4: The condition in an if/else statement is enclosed by a -  ",
    choices: ["quotes", "curly brackets", "square brackets", "parenthesis"],
    correct: "parenthesis",
  },

  {
    title:
      "Question 5: String values must be enclosed in ________ when being assigned to variables.",
    choices: ["curly brackets", "quotes", "paranthesis", "commas"],
    correct: "quotes",
  },
];

var lastQuestion = questions.length - 1;

// var answerButtons = document.getElementsByClass

function generateQuestion(index) {
  var questionEl = document.getElementById("question");
  questionEl.textContent = questions[index].title;

  btn1.textContent = questions[index].choices[0];

  btn2.textContent = questions[index].choices[1];

  btn3.textContent = questions[index].choices[2];

  btn4.textContent = questions[index].choices[3];
}

function checkAnswer(userChoice) {
  if (userChoice === questions[runningQuestion].correct) {
    questionOutcome.innerText = "Correct!";

    correctAnswers += 1;
  } else {
    questionOutcome.innerText = "Incorrect!";
    console.log("wrong");

    timeLeft -= 10;
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    generateQuestion(runningQuestion);
  } else {
    endQuiz()
  }
}

function endQuiz() {
  clearInterval(interval);

  final_score.innerText = "Your Final Score is: " + timeLeft;

  results.classList.toggle("hide");
  questionsCon.classList.toggle("hide");
}

// variables that change over time //
timer.textContent = "Time: " + timeLeft;

// var stop_timer = false;

//Button clicks //
// go_back_button.addEventListener("click", back_to_start);
// clear_button.addEventListener("click", clear_high_scores);
// view_high_score.addEventListener("click", create_high_score_page);

// functions //

// timer //
// funtion tikTok() {

//     if (stop_timer === false) {
//         if (timeLeft >= 1){
//             timer.textContent = "Time: " + timeLeft;
//             timeLeft--;
//         }
//         else if(timeLeft === 0) {
//             timer.textContent = "Time: " + timeLeft;
//             score_render();
//         }
//     }
// }

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    console.log(e.target.innerText);

    checkAnswer(e.target.innerText);
  });
}

submitBtn.addEventListener("click", function () {
  console.log(initials.value, correctAnswers);

  var userScore = { initials: initials.value, score: timeLeft };

  var scoresfromStorage = localStorage.getItem("highScores");

  if (scoresfromStorage) {
    var updatedScores = JSON.parse(scoresfromStorage);
    updatedScores.push(userScore);
    localStorage.setItem("highScores", JSON.stringify(updatedScores));
  } else {
    localStorage.setItem("highScores", JSON.stringify([userScore]));
  }
});

startBtn.addEventListener("click", function () {
  interval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timer.textContent = "Time: " + timeLeft;
    } else {
      endQuiz()
    }
  }, 1000);

  displayQuestion(runningQuestion);

  function displayQuestion() {
    var questionsCon = document.getElementById("questionsCon");
    questionsCon.classList.remove("hide");

    var container = document.querySelector(".container");
    container.classList.add("hide");
  }

  generateQuestion(runningQuestion);
});
