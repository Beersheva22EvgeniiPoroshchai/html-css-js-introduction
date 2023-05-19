//configuration
const words = ['music', 'mouth', 'mouse', 'movie', 'match', 'model', 'motor', 'magic', 'maker', 'media'];
//const word = 'music';
const nMoves = 5;
const word = words[Math.floor(Math.random() * words.length)];


//elements
const inputElement = document.getElementById("input-id");
const enterButtonElement = document.getElementById("go-id");

const firstElement = document.getElementById("first");
const secondElement = document.getElementById("second");
const thirdElement = document.getElementById("third");
const fourthElement = document.getElementById("fourth");
const fifthElement = document.getElementById("fifth");

const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

//global variables
let count;

//functions
function game() {

    const wordUser = inputElement.value;

    if (wordUser.length < 5 || wordUser.length > 5) {
        alert('The word must contain 5 (five) letters!');
        wordUser = inputElement.value;
    }

    if (wordUser == word) {
        checkAndFillLetters(wordUser);
        winGame();

    } else {
        checkAndFillLetters(wordUser);
        count++;

        if (count == nMoves) {
            finishGame();
        }
        inputElement.value = '';
    }
}


function checkAndFillLetters(wordUser) {
    firstElement.innerHTML = wordUser[0];
    if (wordUser[0] == word[0]) {
        firstElement.style.backgroundColor = 'green';
    } else {
        firstElement.style.backgroundColor = 'grey';
        for (let index = 0; index < word.length; index++) {
            if (wordUser[0] == word[index]) {
                firstElement.style.backgroundColor = 'yellow';
            }
        }
    }

    secondElement.innerHTML = wordUser[1];
    if (wordUser[1] == word[1]) {
        secondElement.style.backgroundColor = 'green';
    } else {
        secondElement.style.backgroundColor = 'grey';
        for (let index = 0; index < word.length; index++) {
            if (wordUser[1] == word[index]) {
                secondElement.style.backgroundColor = 'yellow';
            }

        }
    }


    thirdElement.innerHTML = wordUser[2];
    if (wordUser[2] == word[2]) {
        thirdElement.style.backgroundColor = 'green';
    } else {
        thirdElement.style.backgroundColor = 'grey';
        for (let index = 0; index < word.length; index++) {
            if (wordUser[2] == word[index]) {
                thirdElement.style.backgroundColor = 'yellow';
            }

        }
    }

    fourthElement.innerHTML = wordUser[3];
    if (wordUser[3] == word[3]) {
        fourthElement.style.backgroundColor = 'green';
    } else {
        fourthElement.style.backgroundColor = 'grey';
        for (let index = 0; index < word.length; index++) {
            if (wordUser[3] == word[index]) {
                fourthElement.style.backgroundColor = 'yellow';
            }
        }
    }


    fifthElement.innerHTML = wordUser[4];
    if (wordUser[4] == word[4]) {
        fifthElement.style.backgroundColor = 'green';
    } else {
        fifthElement.style.backgroundColor = 'grey';
        for (let index = 0; index < word.length; index++) {
            if (wordUser[4] == word[index]) {
                fifthElement.style.backgroundColor = 'yellow';
            }

        }
    }
}



function startGame() {
    count = 0;
    enterButtonElement.disabled = false;
    inputElement.readOnly = false;
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}


function finishGame() {
    enterButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Game over!"
}


function winGame() {
    enterButtonElement.disabled = true;
    inputElement.value = '';
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "It's correct word! Congratulations! You're the winner! "
}

//Actions
enterButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame)
startGame();