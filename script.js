// variable elements //
var timer = document.getElementById("timer");
var view_high_score = document.getElementById("view_high_score");
var startBtn = document.getElementById("start-btn");
var questionsCon = document.getElementById("questionsCon");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer-1");
var answer2 = document.getElementById("answer-2");
var answer3 = document.getElementById("answer-3");
var answer4 = document.getElementById("answer-4");
var results = document.getElementById("results");
var final_score = document.getElementById("final_score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var high_scores = document.getElementById("high_scores");
var list_scores = document.getElementById("list_scores");
var go_back = document.getElementById("go_back");
var clear = document.getElementById("clear");
var lastQuestion = question.length - 1;
var runningQuestion = 0;

// variable arrays for questions //
var questions = [
    {
        title: "Question 1: Arrays in Javascript can be used to store ________.",
        answer1: "numbers & strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct: "answer4"
    },

    {
        title: "Question 2: Commonly used datatypes do NOT include: ",
        choices: ["strings", "alerts", "booleans", "numbers"], 
        correct: "alerts"
    },

    {
        title: "Question 3: A very useful tool during the development and debugging for printing content is to the debugger is: ",
        choices: ["javascript", "for loops", "console.log", "terminal/bash"], 
        correct: "for loops"
    },

    {
        title: "Question 4: The condition in an if/else statement is enclosed by a -  ",
        choices: ["quotes", "curly brackets", "square brackets", "parenthesis"], 
        correct: "parenthesis"
    },

    {
        title: "Question 5: String values must be enclosed in ________ when being assigned to variables.",
        choices: ["curly brackets", "quotes", "paranthesis", "commas"], 
        correct: "quotes"
    }

];
    
// adding javascript to the start button using click and grabbing the questions container, using its id to remove the hide class and then adding the hide class for the start button so that it dissappears after it is clicked //
var startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", function() {
    var questionsCon = document.getElementById("questionsCon");
    questionsCon.classList.remove("hide");

    var container = document.querySelector(".container")
    container.classList.add("hide");

    
    generateQuestion (0)

})

// var answerBtns = document.getElementsByClassName("btn")
// for (var i = 0; i < answerBtns.length; i++) {
//     answerBtns[i].addEventListener("click", function()
//     })
// }

function generateQuestion(index) {
    var questionEl= document.getElementById("question");
    questionEl.textContent = questions[index].title
    
    var btn1= document.getElementById("answer-1");
    btn1.textContent = questions[index].choices[0];

    var btn2= document.getElementById("answer-2");
    btn2.textContent = questions[index].choices[1];

    var btn3= document.getElementById("answer-3");
    btn3.textContent = questions[index].choices[2];

    var btn4= document.getElementById("answer-4");
    btn4.textContent = questions[index].choices[3];


}

function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        console.log("correct");
    }

    else {
        console.log("wrong");
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        generateQuestion(runningQuestion);
    }

    else {
        return results;
    }
}

// variables that change over time //
var timeLeft = 0;
var stop_timer = false;

timer.textContent = "time: " + timeLeft;

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