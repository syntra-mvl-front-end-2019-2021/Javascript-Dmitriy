const randomWords = [
  'condition',
  'bottom',
  'lineage',
  'trip',
  'reporter',
  'paper',
  'colorful',
  'agent',
  'justify',
  'torture',
  'cap',
  'earthflax',
  'payment',
  'research',
  'picture',
  'garage',
  'honor',
  'memorial',
  'planet',
  'biography',
  'profound',
  'rumor',
  'gear',
  'bedroom',
  'orthodox',
  'penalty',
  'grief',
  'promote',
  'roof',
  'suite',
  'moving',
  'killer',
  'museum',
  'essay',
  'fever',
  'dignity',
  'shadow',
  'enjoy',
  'kill',
  'shy',
  'counter',
  'pawn',
  'button',
  'bullet',
  'skin',
  'rate',
  'shop',
  'consider',
  'other',
  'prospect',
];



const hangManImage = document.querySelector('#image');
const solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');


const gameState = {
  word: [],
  hangman: 1,
  turn: 1,
  lettersFound: 0,
  won: false,
  lost: false,
};

function initGame() {
  // choose a random word > save in gamestate
  for (i = 0; i < randomWords.length; i++) {
         gameState.word = randomWords[
                  Math.floor(Math.random() * randomWords.length)
                ];

              }
console.log(gameState.word)
  // reset gamestate

  gameState = {
    word: [],
    hangman: 1,
    turn: 1,
    lettersFound: 0,
    won: false,
    lost: false,
  }

  // update solutionContainer > insert div.solution-letter per letter

  


  // empty winOrLoseContainer.innerHTML
  winOrLoseContainer.innerHTML = " "
  // remove success and failed classes from .letter

  
let letter = document.querySelectorAll('.letter');

letter.forEach(function(el) {
  el.classList.remove('success', 'failed');
});


            }

function clickLetter(event) {
  // check if event.target is .letter
  // check if event.target has success or failed class
  // ---
}

// hangManImage.setAttribute('src', 'images/hangman02.png');



