

var list_scores = document.getElementById("list_scores");
var go_back = document.getElementById("go_back");
var clear = document.getElementById("clear");

function init(){
    var scoresfromStorage= localStorage.getItem("highScores")

    if (scoresfromStorage){
        displayhighScores(JSON.parse(scoresfromStorage))
    }else {
        list_scores.innerText="No Recorded High Scores Yet"
    }
}

function displayhighScores(scores){
    list_scores.innerHTML=""

    for (let i = 0; i < scores.length; i++) {
        var li=document.createElement("li")
        li.classList.add("scoreItem")
        li.innerText=scores[i].initials+" - "+scores[i].score

        list_scores.appendChild(li)
    }
}

clear.addEventListener("click", function(){
    localStorage.removeItem("highScores")

    init()
})

init()