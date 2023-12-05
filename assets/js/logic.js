// loop trouth the questions, with if satements so if time is less than 0 it exits the loop and it takes us to iniatals total socre and submit and then it takes us to highsocre html

let buttonStart = document.getElementById("start");
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("questions");
// let soundCorrect = new Audio("../sfx/correct.wav");
// let soundIncorrect = new Audio("../sfx/correct.wav");
let feedbackScreen = document.getElementById("feedback");
let finalScore = 0;

buttonStart.addEventListener("click", (e) => start(e)); 

function start(event){
    event.stopPropagation()
    console.log({ event })
time.innerHTML = 30;
    if (startScreen.className === "start" && questionScreen.className === "hide"){ // screen changes from start screen to questions screen 
        startScreen.className = "hide";
        questionScreen.className = "start";
    }
    timer() //starts timer 
    startQuestions() //starts questions function
};

function timer(){
    let timerInterval = setInterval(function(){
        time.innerHTML--;                                   // it will count from 30s
        if (time.innerHTML <= 0){              // it will stop then the time runs out OR when anser is wring and timer will go over -0
            clearInterval(timerInterval)
            endGame()                           // end game screen!
        }
    },1000)
    };                                        // countdown by 1 second

function startQuestions(){
    let questionTitle = document.getElementById("question-title")
    let questionAnswer = document.getElementById("choices")
    if (feedbackScreen.classList == "feedback")
        feedbackScreen.classList = "hide"
    
    for(var i=0; i< questions.length; i++){
        questionTitle.textContent = questions[i].title;
        console.log({ question: questions[i] })
        questionAnswer.innerHTML = questions[i].answers.forEach(answer => { 
            console.log({ answer })
            let btn = document.createElement('button');
            btn.innerHTML = answer;
            document.body.appendChild(btn);
            document.remove
        });
        if ()
        questionAnswer.addEventListener("click", chooseAnswer())
    }
function chooseAnswer(){
    console.log("Hello")
// if(questions[i].answers == questions[i].correct){
            //     soundCorrect.play();
            //     soundCorrect.currentTime=0; //to be able to play "correct" sound
            //     feedbackScreen.classList.remove("hide")
            //     feedbackScreen.textContent = "Correct!" //provides feedback
            //     finalScore ++ //add points for each correct answer 
            //     //next q
                
            // }else{
            //     soundIncorrect.play();
            //     soundIncorrect.currentTime=0; //to be able to play "incorrect" sound
            //     feedbackScreen.classList.remove("hide")
            //     feedbackScreen.textContent = "Wrong!"  //provides feedback
            //     //minus time
            //     //next q
            // }
}

    


    //loop throught all questions and shows the answer
        // in the loop  ich chouce should have a button 
        //feedbac upon clicking on the button
        //correct new qursion +1 point sound
        //false new question 0 points - 5 time  sound
}

function endGame(){

}

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


