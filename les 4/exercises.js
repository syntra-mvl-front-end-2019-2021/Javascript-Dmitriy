// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) {
  let x = 0;
  anArray = sentence.split(" ");
  console.log(anArray);
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] === word) {
      x = x + 1;
    }
  }
  return x;
}

// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) {
  letterP = 0;
  let points = 0;
  let totalPoints = 0;
  let pointsArray = [];
  let anArray = word.toLowerCase().split("");
  console.log(anArray);
  for (let i = 0; i < anArray.length; i++) {
    pointsArray.push(scrabbleScore(anArray[i]));
  }
  console.log(pointsArray);

  for (i = 0; i < pointsArray.length; ++i) {
    points += pointsArray[i];

    for (let j = 0; j < letterMultipliers.length; j++) {
      if (letterMultipliers[j].index === pointsArray.indexOf(pointsArray[i])) {
        letterP =
          pointsArray[i] * letterMultipliers[j].multiplier - pointsArray[i];
      }
      totalPoints = (letterP + points) * wordMultiplier;
    }
  }
  return totalPoints;
}

console.log(
  scrabbleScoreCalculator(
    "koekjesmonsters",
    [
      { index: 4, multiplier: 2 },
      { index: 1, multiplier: 3 },
    ],
    3
  )
);


function scrabbleScore(letter) {
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "l":
    case "n":
    case "r":
    case "s":
    case "t":
      return 1;
      break;

    case "d":
    case "g":
      return 2;
      break;

    case "b":
    case "c":
    case "m":
    case "p":
      return 3;
      break;

    case "f":
    case "h":
    case "v":
    case "w":
    case "y":
      return 4;
      break;

    case "k":
      return 5;
      break;
    case "j":
    case "x":
      return 8;
      break;

    case "q":
    case "z":
      return 10;
      break;
  }
}

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true
function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";


  for (let i = 0; i < sentence.length; i++) {


      let num = alphabet.indexOf(sentence[i]);


      if (sentence[i] == alphabet[num]) {
          alphabet = alphabet.replace(sentence[i], '') 
      } 

  }

  if (alphabet.length == 0) {
      return true;    
  }
  else {
      return false;
  }

}


   



console.log(isPangram('The quick brown fox jumps over the lazy dog'))




// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', [stream', 'pigeon', 'maters'] → ['stream', 'maters']
function findAnagrams(word, possibleAnagrams) {
  
}

