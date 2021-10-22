


var startQuiz = function() {
   questionAsk();
   choiceList();
}

var questionAsk = function() {
    var questionAskEl = document.createElement ("h1");
    questionAskEl.textContent = "blah blah blah";
    questionAskEl.className = "questions";
    questionAskEl.appendChild(quiz);
}

var choiceList = function () {
    var choiceListEl = document.createElement ("li");
        choiceListEl.textContent = "";
        questionlistEl.className = "choices"
        startButtonEl.appendChild(questionlistEl)
}


var startButtonEl= document.querySelector("#start");




var choiceOneEl = document.querySelector("#button1");
var choiceTwoEl = document.querySelector("#button2");
var choiceThreeEl = document.querySelector("#button3");
var choiceFourEl =document.querySelector("#button4");



var counter = 60;
var counterEl= document.querySelector("#count");
function setCountertext() {
    counterEl.textContent = counter; 
}
var countdown = function () {
    counter--;
    setCountertext();
    if (counter ===0) {
        clearInterval(startCountdown);
        // scorePage();
    }

}

var startCountdown = setInterval(countdown, 1000);
counterEl.append(counter)






// var timedstart = setTimeout (blah,1000); 


startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", countdown);