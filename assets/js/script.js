// score page
var scorePageEl = document.querySelector('#highscore');

var scorepage = function () {
  console.log("score page fired");
  var scorePageH1El = document.createElement('h1');
  scorePageH1El.textContent = 'High Score';
  H1El.replaceWith(scorePageH1El);
  var scorePageUlEl = document.createElement ("ul");
  var scorePageLiEl = document.createElement('li')
  pEl.replaceWith(scorePageUlEl);
  scorePageUlEl.appendChild(scorePageLiEl);
  scorePageLiEl.textContent ="This is a score";
  scorePageButtonDivEl= document.createElement('div');
  scorePageButton1El= document.createElement ('button');
  scorePageButton2El= document.createElement('button');
  buttonEl.replaceWith(scorePageButtonDivEl);
  scorePageButtonDivEl.appendChild(scorePageButton1El);
  scorePageButtonDivEl.appendChild(scorePageButton2El);
  
  
}




// start page 
var body = document.body;
var MainEl=document.createElement("main");
var divEl = document.createElement("div");
var H1El = document.createElement ("h1");
var pEl= document.createElement("p");
var buttonEl = document.createElement ("button");
divEl.className = "startpage";
H1El.textContent = "Timed Quiz";
H1El.className = "texttop";
pEl.textContent = "The follow questions will test your knowledge related to javascript. A timer will start as soon as you click on the start button. Each wrong answer will subtract 10 seconds from the timer. At the end of the test, the time left will be recorded as your score.";
pEl.id = "homepagep"
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
var questionLi1El = document.createElement("button");
var questionLi2El = document.createElement("button");
var questionLi3El =document.createElement("button");
var questionLi4El = document.createElement("button");
var questionPEl = document.createElement("p");
questionH1El.textContent = "What is the javascript command to create a html element?"
questionPEl.textContent= "";
questionUlEl.appendChild(questionLi1El);
questionUlEl.appendChild(questionLi2El);
questionUlEl.appendChild(questionLi3El);
questionUlEl.appendChild(questionLi4El);
questionLi1El.textContent="this is the first choice";
questionLi2El.textContent="this is the second choice";
questionLi3El.textContent="this is the third choice";
questionLi4El.textContent="this is the fourth choice";
questionUlEl.className=".choices"; 
questionLi1El.id ="choice1";
questionLi2El.id ="choice2";
questionLi3El.id ="choice3";
questionLi4El.id ="choice4";

var nextPage = function() {
  console.log("next page fired");
  H1El.replaceWith(questionH1El);
  pEl.replaceWith(questionUlEl);
  buttonEl.replaceWith(questionPEl);
  // choice listener
  questionUlEl.addEventListener('click', pagetwo)

}


// question page two
var pagetwo = function (event) {
  var targetEl = event.target; 
  console.log(event.target);
  if (targetEl.matches('#choice1')||targetEl.matches('#choice2')||targetEl.matches('#choice3')) {
    questionPEl.textContent ='wrong';
  } else {
    questionPEl.textContent='correct';
  }
  
  setTimeout(() => {
    
    console.log("anotherquestion fired")
    pagethree();
    questionPEl.textContent ="";
  }, 1000);
  
}

// question page three
var question2H1El = document.createElement("h1");
var question2UlEl = document.createElement("ul");
var question2Li1El = document.createElement("button");
var question2Li2El = document.createElement("button");
var question2Li3El =document.createElement("button");
var question2Li4El = document.createElement("button");
var question2PEl = document.createElement("p");
question2H1El.textContent = "which of the following is not a commonly use data type?"
question2PEl.textContent= "";
question2UlEl.appendChild(question2Li1El);
question2UlEl.appendChild(question2Li2El);
question2UlEl.appendChild(question2Li3El);
question2UlEl.appendChild(question2Li4El);
question2Li1El.textContent="this is the2 first choice";
question2Li2El.textContent="this is the2 second choice";
question2Li3El.textContent="this is the2 third choice";
question2Li4El.textContent="this is the2 fourth choice";
question2UlEl.className=".choices"; 
question2Li1El.id ="choice1";
question2Li2El.id ="choice2";
question2Li3El.id ="choice3";
question2Li4El.id ="choice4";

var pagethree= function() {
  console.log('page three fired')
  questionH1El.replaceWith(question2H1El);
  questionUlEl.replaceWith(question2UlEl);
  questionPEl.replaceWith(question2PEl);
  question2UlEl.addEventListener('click', turnpage);

}

var turnpage = function(event) {
  target2El= event.target;
  if (target2El.matches('#choice1')||target2El.matches('#choice2')||target2El.matches('#choice3')) {
    question2PEl.textContent ='wrong';
  } else {
    question2PEl.textContent='correct';
  }
  setTimeout(() => {
    
    console.log("3question fired")
    inputscore();
    question2PEl.textContent ="";
  }, 1000);
}

// save score and initial 
var question3H1El = document.createElement("h1");
var questionScoreEl = document.createElement
var inputscore =function (){
  question2H1El.replaceWith(question3H1El);
  question3H1El.textContent = 'All done!'

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

var saveTasks = function() {
  // localStorage can only store strings . stringfy convers other type of date into strings
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
  var savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) {
    return false;
  }

  savedTasks = JSON.parse(savedTasks);
  // loop through savedTasks array
  for (var i = 0; i < savedTasks.length; i++) {
  // pass each task object into the `createTaskEl()` function
      createTaskEl(savedTasks[i]);
  }
}










startButtonEl.addEventListener("click", startgame);
startButtonEl.addEventListener("click", nextPage); 

scorePageEl.addEventListener('click',scorepage);







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
