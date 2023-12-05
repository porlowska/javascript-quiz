// loop trouth the questions, with if satements so if time is less than 0 it exits the loop and it takes us to iniatals total socre and submit and then it takes us to highsocre html

let buttonStart = document.getElementById("start") 
let time = document.getElementById("time")


buttonStart.addEventListener("click", start); 

function start(){
    time.innerHTML = 30
    timer() //starts timer 

 //hide start screen id="start-screen" change class form start to hidden    
//start question function 
};

function startQuestions(){
//hide start screen id="start-screen" change class form start to hidden 
//start question screens visible id="questions" class change to visible form hide (remove the classs attriblute or set to diferrent  )
//start timer
//
};
function timer(){
    let timerInterval = setInterval(function(){
        time.innerHTML--;                                    // it will count from 30s
        if (time.innerHTML <= 0){              // it will stop then the time runs out OR when anser is wring and timer will go over -0
            clearInterval(timerInterval)
        }
    },1000)
    };                                        // down by 1 second


    // set the timer 
    //and start it


//for (var i=0, i < questions.length, i++){

//}

// section 1
// start button that .eventListener(click, fuct)
// HIDE START SCREEN
// 1. tiggers the timer 
// 2. starts first question

//secton 2
//Display queation form the array of questions (only if time > 0)
// display 4 answers as buttons
//if correct is clicket - feedbackCORRECT soud CORRECT and point up and next question 
// if incorrect - feedback WRONG,sound WRONG, timer minus seconds 5or 10, next question, nopoint added,

// section 3
//if Last qaution or timer<=0
//stop clearthe timer, 
// count/display  the points/score final
// triger to input initials INPUT AND BUTTon
//submit page to beredirected to highscores // redirect to html page window object
//save initialsandscores in local storage

//section 4
//High scores
// sores higierst to lowest 
// saved inlocal storege
//page connected with main page to jump in between 


