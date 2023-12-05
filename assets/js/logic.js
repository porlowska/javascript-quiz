// loop trouth the questions, with if satements so if time is less than 0 it exits the loop and it takes us to iniatals total socre and submit and then it takes us to highsocre html

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
let finalScore = document.getElementById("final-score")
let score = 0;
let questionNumber = 0;


buttonStart.addEventListener("click", start); 

function start(event){
    event.stopPropagation()
    time.innerHTML = 30;
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
        btn.addEventListener("click", () => {chooseAnswer(answer)})
        questionAnswer.appendChild(btn);
        });
} 
//questionAnswer.addEventListener("click", chooseAnswer)

function chooseAnswer(selectedAnswer){
console.log(questionNumber)
// store value that was pressed by the button 
    if(selectedAnswer === questions[questionNumber].correct){
        feedbackScreen.classList.remove("hide");
        feedbackScreen.textContent = "Correct!"; //provides feedback
        soundCorrect.play();
        soundCorrect.currentTime=0; //to be able to play "correct" sound
        score ++ //add points for each correct answer 
        
        
    }else{
        feedbackScreen.classList.remove("hide")
        feedbackScreen.textContent = "Wrong!"  //provides feedback
        soundIncorrect.play();
        soundIncorrect.currentTime=0; //to be able to play "incorrect" sound
        if (time.innerHTML > 5){
            time.innerHTML-=5; //minus time
        }else {
            time.innerHTML = 0

        }
        
        
}
        questionNumber = getRandom(questions.length) //get random question
        setTimeout(startQuestions,1000)
        
        
}


function endGame(){
    time.innerHTML = 0
    if(questionScreen.className === "start"){
        questionScreen.className = "hide";
        feedbackScreen.classList = "hide";
        endScreen.className = "start"
        finalScore.textContent = score
        // let initials = 

        // localStorage.setItem()

    }
}
function getRandom(max){
    return Math.floor(Math.random()*max) // we need the length of the array -1 this wont include last num
}

