//configuration
const nMoves = 3;

//elements
const inputElement = document.getElementById('input-id');
const enterButtonElement = document.getElementById("go-id");
const squareElement = document.getElementById("square-id");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
//global variables

let count = 0;
//functions
function game() {
    const color = inputElement.value;
    if (color == squareElement.style.backgroundColor) {
        alert('This color has been used!')
    } else {
        squareElement.style.backgroundColor = color;
        count++;
        if (count == nMoves) {
            finishGame();
        }
        inputElement.value = '';
    }
}



function startGame() {
    count = 0;
    enterButtonElement.disabled = false;
    inputElement.readOnly = false;
    squareElement.style.backgroundColor = "white";
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}


function finishGame() {
    enterButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Game over!"
}

//Actions
squareElement.innerHTML = 'A';

enterButtonElement.addEventListener("click", game );
playAgainButtonElement.addEventListener("click", startGame )
startGame();