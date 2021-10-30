var counter = 60;


// score page
var scorePageEl = document.querySelector('#highscore');

var scorepage = function () {
  console.log("score page fired");
  // var scorePageH1El = document.createElement('h1');
  // scorePageH1El.textContent = 'High Score';
  // H1El.replaceWith(scorePageH1El);
  // var scorePageUlEl = document.createElement ("ul");
  // var scorePageLiEl = document.createElement('li')
  // pEl.replaceWith(scorePageUlEl);
  // scorePageUlEl.appendChild(scorePageLiEl);
  // scorePageLiEl.innerHTML= "Go back"
  // scorePageButtonDivEl= document.createElement('div');
  // scorePageButton1El= document.createElement ('button');
  // scorePageButton2El= document.createElement('button');
  // buttonEl.replaceWith(scorePageButtonDivEl);
  // scorePageButtonDivEl.appendChild(scorePageButton1El);
  // scorePageButtonDivEl.appendChild(scorePageButton2El);
  
  
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
questionPEl.className='feedback';
questionUlEl.appendChild(questionLi1El);
questionUlEl.appendChild(questionLi2El);
questionUlEl.appendChild(questionLi3El);
questionUlEl.appendChild(questionLi4El);
questionH1El.className = 'questions'
questionLi1El.textContent="Sushi";
questionLi2El.textContent="document.createThings();";
questionLi3El.textContent="iphone";
questionLi4El.textContent="document.createElement();";
questionLi1El.className ="choices";
questionLi2El.className ="choices";
questionLi3El.className ="choices";
questionLi4El.className ="choices";
questionLi1El.id ="choice1";
questionLi2El.id ="choice2";
questionLi3El.id ="choice3";
questionLi4El.id ="choice4";
questionUlEl.setAttribute('style', 'display:flex; flex-direction:column;justify-content:space-between;')



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
    
    counter= counter-10;
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
question2PEl.className='feedback';
question2H1El.className ='questions';
question2UlEl.appendChild(question2Li1El);
question2UlEl.appendChild(question2Li2El);
question2UlEl.appendChild(question2Li3El);
question2UlEl.appendChild(question2Li4El);
question2Li1El.textContent="strings";
question2Li2El.textContent="numbers";
question2Li3El.textContent="booleans";
question2Li4El.textContent="headphones";
question2UlEl.className=".choiceparent"; 
question2UlEl.setAttribute('style', 'display:flex; flex-direction:column;justify-content:space-between;')
question2Li1El.className = "choices";
question2Li2El.className = "choices";
question2Li3El.className = "choices";
question2Li4El.className = "choices";
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
     counter= counter-10;
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
var yourScoreEl = document.createElement('div');
var yourInitialEl = document.createElement('input')
var submitScore = document.createElement('button')
var inputscore =function (){
  question2H1El.replaceWith(question3H1El);
  question3H1El.textContent = 'All done!';
  question2UlEl.replaceWith(yourScoreEl);
  yourScoreEl.innerHTML = "<h3> Your Score is  "+count.textContent +" !</h3>" ;
   yourScoreEl.appendChild(yourInitialEl);
  yourScoreEl.appendChild(submitScore);
  submitScore.id ='submitscore'
  submitScore.textContent = "submit"
  yourInitialEl.placeholder = 'enter your initials';
 
  yourInitialEl.id = 'savedinitial'
  clearInterval(stopCount);
  submitScore.addEventListener('click', saveScore)
}

// timer 
var startButtonEl= document.querySelector("#start");
var counterEl= document.querySelector("#count");
// var timerRun = false;
var startgame = function () {
    // if (timerRun ===false) {
    //     timerRun = true;
        counter = 60;
        // take out var to make the variable global 
    stopCount = setInterval(() => {
     counterEl.textContent= counter; 
     counter--;
        console.log(counter)
        if (counter < 0) {
            clearInterval(stopCount);
            // timerRun=false;
            // scorePage();
        };
    }, 1000);
    // }
} 




var saveScore = function() {
  
  ScoreOject = {
    initial: yourInitialEl.value,
    time: count.textContent,
  }
  // localStorage can only store strings . stringfy convers other type of date into strings
  localStorage.setItem("ScoreOject", JSON.stringify(ScoreOject));
  
  var createHighscore = function() {
    
    var scoreH1El = document.createElement('h1');
    var scoreUlEl = document.createElement('ul');
    var scoreLiEl = document.createElement('li');
    question3H1El.replaceWith(scoreH1El);
    scoreH1El.textContent = 'High Score';
    yourScoreEl.replaceWith(scoreUlEl);
    scoreLiEl.innerHTML= ScoreOject.initial.slice(0,2) + ' has a score of ' + ScoreOject.time;
    scoreLiEl.id = "loadit"
    scoreUlEl.appendChild(scoreLiEl);
    scoreLiEl.className ='score-item';
    console.log(typeof ScoreOject.initial)
   
    
  }
  createHighscore();
  loadscore();
}



var loadscore = function (){
localStorage.getItem("ScoreOject");
console.log(ScoreOject);
}








startButtonEl.addEventListener("click", startgame);
startButtonEl.addEventListener("click", nextPage); 

scorePageEl.addEventListener('click',scorepage);








