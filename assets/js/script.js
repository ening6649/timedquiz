









// var choiceOneEl = document.querySelector("#button1");
// var choiceTwoEl = document.querySelector("#button2");
// var choiceThreeEl = document.querySelector("#button3");
// var choiceFourEl =document.querySelector("#button4");


// start page 
var body = document.body;
var MainEl=document.createElement("main");
var divEl = document.createElement("div");
var H1El = document.createElement ("h1");
var pEl= document.createElement("p");
var buttonEl = document.createElement ("button");
divEl.className = "startpage";
H1El.textContent = "Timed Quiz";
pEl.textContent = "Start your quiz here";
buttonEl.textContent ="click to start";
buttonEl.id ="start";
body.appendChild(MainEl);
MainEl.appendChild(divEl);
divEl.appendChild(H1El);
divEl.appendChild(pEl);
divEl.appendChild(buttonEl);

// question page
var questionH1El = document.createElement("h1");
var questionUlEl = document.createElement("ul");
var questionLi1El = document.createElement("li");
var questionLi2El = document.createElement("li");
var questionLi3El =document.createElement("li");
var questionLi4El = document.createElement("li");
var questionPEl = document.createElement("p");
questionH1El.textContent = "What is the javascript command to create a html element?"
questionPEl.textContent= "";
questionUlEl.appendChild(questionLi1El);
questionUlEl.appendChild(questionLi2El);
questionUlEl.appendChild(questionLi3El);
questionUlEl.appendChild(questionLi4El);
questionLi1El.textContent="these are choices";
questionLi2El.textContent="this is the second choice";
questionLi3El.textContent="this is the third choice";
questionLi4El.textContent="this is the fourth choice";
questionUlEl.className=".choices"; 
questionLi1El.id ="choice1"

var nextPage = function() {
 console.log("next page fired");
H1El.replaceWith(questionH1El);
pEl.replaceWith(questionUlEl);
buttonEl.replaceWith(questionPEl);

}
// choice selectors
var choice1 = document.querySelector("#choice1")
questionLi1El.addEventListener("click",goodchoice); 


var goodchoice = function () {
  console.log("choice fired ")
}




// timer 
var startButtonEl= document.querySelector("#start");
var counterEl= document.querySelector("#count");


var timerRun = false;
var startgame = function () {
    if (timerRun ===false) {
        timerRun = true;
        var counter = 5;
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
startButtonEl.addEventListener("click", nextPage); 






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
