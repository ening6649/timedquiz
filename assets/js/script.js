


// var startQuiz = function() {
//    questionAsk();
//    choiceList();
// }

// var questionAsk = function() {
//     var questionAskEl = document.createElement ("h1");
//     questionAskEl.textContent = "blah blah blah";
//     questionAskEl.className = "questions";
//     questionAskEl.appendChild(quiz);
// }

// var choiceList = function () {
//     var choiceListEl = document.createElement ("li");
//         choiceListEl.textContent = "";
//         questionlistEl.className = "choices"
//         startButtonEl.appendChild(questionlistEl)
// }

// questionAsk.className = "questions";
// choiceList.className = "choices"



// var choiceOneEl = document.querySelector("#button1");
// var choiceTwoEl = document.querySelector("#button2");
// var choiceThreeEl = document.querySelector("#button3");
// var choiceFourEl =document.querySelector("#button4");



var startButtonEl= document.querySelector("#start");
var counterEl= document.querySelector("#count");

var counter = 3;
var timerRun = false;
var startgame = function () {
    if (timerRun ===false) {
        timerRun = true;
        counter = 5;
    var stopCount = setInterval(() => {
     counterEl.textContent= counter; 
     counter--;
        console.log(counter)
        if (counter < 0) {
            clearInterval(stopCount);
            timerRun=false;
            // scorePage();
        };
    
    }, 1000);
    }
} 


startButtonEl.addEventListener("click", startgame);




// var timedstart = setTimeout (blah,1000); 


// startButtonEl.addEventListener("click", startQuiz);
