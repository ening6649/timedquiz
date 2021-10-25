


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


// start page 
var body = document.body;
var MainEl=document.createElement("main");
var divEl = document.createElement("div");
var H2El = document.createElement ("h2");
var pEl= document.createElement("p");
var buttonEl = document.createElement ("button");
divEl.className = "startpage";
H2El.textContent = "Timed Quiz";
pEl.textContent = "Start your quiz here";
buttonEl.textContent ="click to start";
buttonEl.id ="start";
body.appendChild(MainEl);
MainEl.appendChild(divEl);
divEl.appendChild(H2El);
divEl.appendChild(pEl);
divEl.appendChild(buttonEl);




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
// Event delegation refers to offsetting the click event to a parent that will always exist, 
// then checking which child element triggered the event. 
// A plain JavaScript solution would look something like this:

// document.querySelector("#wrapper").addEventListener("click", function(event) {
//  if (event.target.matches(".task")) {
//    console.log("dynamic task was clicked");
//  }
// });



//   // set new submission to local storage 
//   localStorage.setItem("key",JSON.stringify(user));
//   // retrives the string
//   let userString= localStorage.getItem("key");
//   // inside parse must be a string
//   let userObject = JSON.parse(userString);
// });


// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// // favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);
// listEl.appendChild(li1);


// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// imgEl.setAttribute("src", "http://placekitten.com/200/300");
// nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// favoriteEl.setAttribute("style", "font-size:20px;");

// // TODO: Add ordered list items containing four favorite foods
// listEl.setAttribute("style","background-color:#333;padding:20px;");
// li1.setAttribute("style","color:white;padding:5px;margin-left:35;background-color:#f00;")
