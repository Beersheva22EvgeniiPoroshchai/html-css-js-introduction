
const questionAnswers = [['question1', 'ans1'], ['question2', 'answ2'], ['question3', 'answer3']];
//const questionAnswers = ['question', 'ans'];
const word = questionAnswers[Math.floor(Math.random() * questionAnswers.length)];


const inputLetterElement = document.getElementById("input-id-letter");
const enterLetterButtonElement = document.getElementById("enter-letter-button-id");

const inputWordElement = document.getElementById("input-id-word");
const enterWordButtonElement = document.getElementById("enter-word-button-id");

//const divElement = document.getElementById("letter");

const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

const containerElement = document.getElementById("container-id");

let count = 0;
//let nMoves = 1;


function startGame() {

    let i = 0;
const wordArray = Array.from(word[1]);

const divsArray = wordArray.map(letter => `<div id="letter-${i++}" class="letter black">${letter}</div>`); 
containerElement.innerHTML = divsArray.join('');

}




startGame();
enterLetterButtonElement.addEventListener("click", gameLetter)


function gameLetter() {
  let nMoves = getNMoves();
   let inputLetter = inputLetterElement.value;
    for (let index = 0; index < word[1].length; index++) { 
    const div = document.getElementById(`letter-${index}`)
    if (inputLetter == word[1][index]) {
        div.classList.remove('black');
    }
    
}
count++;
  
  if (nMoves == count) {
    
    gameWord();

    finishGame();
        }
        inputElement.value = '';
    }


    function getNMoves() {
        let num;
        num = Math.trunc(((word[1].length)/2));
        console.log(num);
        return num;
    }


function finishGame() {
    // enterButtonElement.disabled = true;
    // inputElement.readOnly = true;
    // playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Game over!"
}

//Actions










