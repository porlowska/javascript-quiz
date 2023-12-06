let highscoresBoard = document.getElementById("highscores");
let clear = document.getElementById("clear");

let allScores = []

renderScores()

function renderScores(){ //pulls all info form local storage 
let storedScore = Object.entries(localStorage);
    if (storedScore !== null) {
    allScores = Object.entries(localStorage);
    } else{
        highscoresBoard.textContent = "no highscore!"
    }
getScores();
}

function getScores(){ // creates list items with scores pulled from local storage 
    highscoresBoard.innerHTML = "";
    for (var i=0; i<allScores.length; i++){
        let scoreList = allScores[i];
        var li = document.createElement("li");
        li.textContent = allScores[i]
        highscoresBoard.appendChild(li)
    }
}

clear.addEventListener("click", ()=>{ // clears the local storage and deltes the scores, also dispalys message of no scores
    localStorage.clear();
    highscoresBoard.textContent = "no highscore!"
});



