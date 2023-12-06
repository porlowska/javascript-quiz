let buttonStart = document.getElementById("start");
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("questions");
let questionTitle = document.getElementById("question-title")
let questionAnswer = document.getElementById("choices")
let soundCorrect = new Audio("assets/sfx/correct.wav");
let soundIncorrect = new Audio("assets/sfx/incorrect.wav");
let feedbackScreen = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let buttonSubmit = document.getElementById("submit");
let score = 0;
let questionNumber = 0;


buttonStart.addEventListener("click", start); 

function start(event){
    event.stopPropagation()
    time.innerHTML = 10;
    if (startScreen.className === "start" && questionScreen.className === "hide"){ // screen changes from start screen to questions screen 
        startScreen.className = "hide";
        questionScreen.className = "start";
        }
    timer() //starts timer
    startQuestions();
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
    if (feedbackScreen.classList.contains("feedback")){
        feedbackScreen.classList.add("hide")
        questionAnswer.innerHTML = ""; //clear previous choices
    }
    questionTitle.textContent = questions[questionNumber].title;
    questions[questionNumber].answers.forEach(answer => { 
        let btn = document.createElement("button");
        btn.innerHTML = answer;
        btn.setAttribute("class", "choice button")
        btn.addEventListener("click", () => {chooseAnswer(answer)}) // so the parameter is pased to the next function
        questionAnswer.appendChild(btn);
        });
}

function chooseAnswer(selectedAnswer){
    if(selectedAnswer === questions[questionNumber].correct){
        feedbackScreen.classList.remove("hide");
        feedbackScreen.textContent = "Correct!"; //provides feedback
        soundCorrect.play(); //plays sound 
        soundCorrect.currentTime=0; //to be able to play "correct" sound
        score ++ //add points for each correct answer 
        
        
    }else{
        feedbackScreen.classList.remove("hide")
        feedbackScreen.textContent = "Wrong!"  //provides feedback
        soundIncorrect.play();
        soundIncorrect.currentTime=0; //to be able to play "incorrect" sound
        if (time.innerHTML > 5){
            time.innerHTML-=5; //minus 5s for each wrong answer
        }else {
            time.innerHTML = 0
        }
    }
    questionNumber = getRandom(questions.length) //gets index number of next random question
    setTimeout(startQuestions,500) // allows the feedback to be displayed for 0.5s before running next question
                                    // because start questions is nested here it will also take the variable of question number from here instead of the global scope
}


function endGame(){
    time.innerHTML = 0
    if(questionScreen.className === "start"){
        questionScreen.className = "hide";
        feedbackScreen.classList.add("hide");
        endScreen.className = "start"
        finalScore.textContent = score
    }
    buttonSubmit.addEventListener("submit", function(e){
        e.preventDefault();
    })
    buttonSubmit.addEventListener("click", ()=>highScores(score))
}

let initials = document.getElementById("initials").value

function highScores(){
    let initials = document.getElementById("initials").value
    let scoreBoard = new Object();
    scoreBoard.initials = initials;
    scoreBoard.score = score;
    localStorage.setItem("score", JSON.stringify(scoreBoard))
    if(endScreen.className = "start"){
        endScreen.className = "hide"
        window.location.href = "/Users/porlowska/bootcamp/Challange/javascript-quiz/highscores.html"
    }
}

function getRandom(max){
    return Math.floor(Math.random()*max) // we need the length of the array -1 this wont include last num
}