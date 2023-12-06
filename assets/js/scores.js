let highscoresBoard = document.getElementById("highscores");
let clear = document.getElementById("clear");

let allScores = []

renderScores()

function renderScores(){ //pulls all info form local storage 
let storedScore = JSON.parse(localStorage.getItem("score"));
    if (storedScore !== null) {
    allScores = Object.values(storedScore);
    }
getScores();
}

function getScores(){
    highscoresBoard.innerHTML = "";
    for (var i=0; i<allScores.length; i++){
        let scoreList = allScores[i];
        var li = document.createElement("li");
        li.textContent = allScores
        highscoresBoard.appendChild(li)
    }
}

clear.addEventListener("click", ()=>{
    localStorage.clear();
    highscoresBoard.textContent = "no highscore!"
});



