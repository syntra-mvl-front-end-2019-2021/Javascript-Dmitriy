const randomWords = [
  "condition",
  "bottom",
  "lineage",
  "trip",
  "reporter",
  "paper",
  "colorful",
  "agent",
  "justify",
  "torture",
  "cap",
  "earthflax",
  "payment",
  "research",
  "picture",
  "garage",
  "honor",
  "memorial",
  "planet",
  "biography",
  "profound",
  "rumor",
  "gear",
  "bedroom",
  "orthodox",
  "penalty",
  "grief",
  "promote",
  "roof",
  "suite",
  "moving",
  "killer",
  "museum",
  "essay",
  "fever",
  "dignity",
  "shadow",
  "enjoy",
  "kill",
  "shy",
  "counter",
  "pawn",
  "button",
  "bullet",
  "skin",
  "rate",
  "shop",
  "consider",
  "other",
  "prospect",
];

const hangManImage = document.querySelector("#image");
const solutionContainer = document.querySelector("#solution-container");
const winOrLoseContainer = document.querySelector("#win-lose-container");
const letterContainer = document.querySelector("#letter-container");
const letter = letterContainer.querySelectorAll(".letter");
const solutionLetter = solutionContainer.children;
let answer = [];

console.log(letter);
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

  gameState.word = randomWords[
    Math.floor(Math.random() * randomWords.length)
  ].toUpperCase();
  console.log(gameState.word);
  // reset gamestate
  gameState.hangman = 1;
  gameState.turn = 1;
  gameState.lettersFound = 0;
  gameState.won = false;
  gameState.lost = false;

  // update solutionContainer > insert div.solution-letter per letter

  for (let i = gameState.word.length; i > 1; i--) {
    solutionContainer.innerHTML += '<div class="solution-letter"></div>';
  }

  // empty winOrLoseContainer.innerHTML
  winOrLoseContainer.innerHTML = "";
  // remove success and failed classes from .letter

  letter.forEach(function (l) {
    l.classList.remove("success", "failed");
  });
  console.log(gameState.word.split(""));
}
function death() {
  hangManImage.src = "hangman0" + gameState.hangman + ".png";
}

function clickLetter(letter) {
  let randomLetter
  let clicked = letter.target.innerHTML
  console.log(clicked)
  let wordArr = gameState.word.split("");
  for (i = 0; i < wordArr.length; i++) {
    randomLetter = wordArr[i]
  }
  if (gameState.word.includes(clicked)) {
    letter.target.classList.add("success")

    let plh = wordArr.indexOf(clicked)
    let plhContainer = solutionLetter[plh]
    plhContainer.innerText = clicked
    answer.push(plhContainer.innerText)
    gameState.lettersFound++;

  } else if (randomLetter.indexOf(clicked) === -1) {
    letter.target.classList.add("failed")
    gameState.hangman++;
    death()
    winOrLose()
  }
  gameState.turn++
}

letter.forEach(function (letterbtn) {
  letterbtn.addEventListener("click", clickLetter);
});

function winOrLose() {
  if (gameState.hangman === 9) {
    winOrLoseContainer.innerHTML = "you lost"
  }
}
winOrLoseContainer.addEventListener("click", initGame)

initGame()
