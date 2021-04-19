var questions = [
    {
        title: "Question 1: Arrays in Javascript can be used to store ________.",
        choices: ["numbers & strings", "other arrays", "booleans", "all of the above"], 
        correct: "all of the above"
    },

    {
        title: "Question 2: Arrays in Javascript can be used to store ________.",
        choices: ["numbers & strings", "other arrays", "booleans", "all of the above"], 
        correct: "all of the above"
    }
]
    

var startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", function() {
    var questionsCon = document.getElementById("questionsCon");
    questionsCon.classList.remove("hide");

    startBtn.classList.add("hide");

    generateQuestion (1)

})

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