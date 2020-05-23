// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) {
  let x = 0;
  anArray = sentence.toLowerCase().split(" ");
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
  let letterP = 0;
  let points = 0;
  let totalPoints = 0;
  let pointsArray = [];
  let anArray = word.toLowerCase().split("");
  console.log(anArray);
  for (let i = 0; i < anArray.length; i++) {
    pointsArray.push(scrabbleScore(anArray[i]));
  }
  console.log(pointsArray);

  for (i = 0; i < pointsArray.length; i++) {
    points += pointsArray[i];
    if (letterMultipliers == 0){
      totalPoints = points * wordMultiplier
    }

    
  }

  for (let i in letterMultipliers) {
    console.log(letterMultipliers[i].index)
    console.log(letterMultipliers[i].multiplier)

    if (letterMultipliers[i].index === pointsArray.indexOf(pointsArray[i])) {
     points = pointsArray[i] * letterMultipliers[i].multiplier
    } 
    totalPoints =   points * wordMultiplier

  }
  return totalPoints;
}

// console.log(
//   scrabbleScoreCalculator(
//     "koekjesmonsters",
//     [
//       { index: 4, multiplier: 2 },
//       { index: 1, multiplier: 3 },
//     ],
//     3
//   )
// );

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
      alphabet = alphabet.replace(sentence[i], "");
    }
  }

  if (alphabet.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', [stream', 'pigeon', 'maters'] → ['stream', 'maters']
function findAnagrams(word, possibleAnagrams) {}

// function palindrome(str) {
//   let array = str.split(" ").join("");
//   let anArray = array.replace(/[^a-zA-Z0-9 ]/g, "");
//   let rev = [];
//   let an = [];

//   console.log(anArray);

//   for (let i = anArray.length - 1; i >= 0; i--) {
//     rev.push(anArray[i]);
//     console.log(rev);

//   }
//   console.log(rev);

//   for (let i = 0; i < anArray.length; i++) {

//     an.push(anArray[i])
//   }

//   x = an.indexOf(an[i])
//   y = rev.indexOf(rev[i])

//   if(an[x] == rev[y])
//   {
//     return true
//   }
//   else {return false}
// }

// console.log(palindrome("almostomla"));

// function convertToRoman(num) {
//   let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//   let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let romanized='';

//   for (let i=0;i<decimals.length;i++){
//  while (decimals[i]<=num){
//    romanized += romanNumerals[i];
//    num -= decimals[i];
//  }
//  }
//  return romanized;
//  }

//  convertToRoman(36);

// function rot13(str) {
//   let x = [];
//   let anArray = str.toLowerCase().split("").join("");
//   console.log(anArray);
//   for (let i = 0; i < anArray.length; i++) {
//     x.push(tweedefunctie(anArray[i]));

//     if (anArray[i] == undefined) {
//       x.push(anArray[i]);
//     } else {
//       x.push(tweedefunctie(anArray[i]));
//     }
//   }

//   return x;
// }
// console.log(rot13("SERR PBQR PNZC!"));

// function tweedefunctie(letter) {
//   switch (letter) {
//     case "a":
//       return "N";
//       break;
//     case "b":
//       return "O";
//       break;
//     case "c":
//       return "P";
//       break;
//     case "d":
//       return "Q";
//       break;
//     case "e":
//       return "R";
//       break;
//     case "f":
//       return "S";
//       break;
//     case "g":
//       return "T";
//       break;
//     case "h":
//     case "H":
//       return "U";
//       break;
//     case "i":
//       return "V";
//       break;
//     case "j":
//     case "J":
//       return "W";
//       break;
//     case "k":
//       return "X";
//       break;
//     case "l":
//       return "Y";
//       break;
//     case "m":
//       return "Z";
//       break;
//     case "n":
//       return "A";
//       break;
//     case "o":
//       return "B";
//       break;
//     case "p":
//       return "C";
//       break;
//     case "q":
//       return "D";
//       break;
//     case "r":
//       return "E";
//       break;
//     case "s":
//     case "S":
//       return "F";
//       break;
//     case "t":
//       return "G";
//       break;
//     case "u":
//       return "H";
//       break;
//     case "v":
//       return "I";
//       break;
//     case "w":
//     case "W":
//       return "J";
//       break;
//     case "x":
//       return "K";
//       break;
//     case "y":
//       return "L";
//       break;
//     case "z":
//       return "M";
//       break;
//     case " ":
//       return " ";
//       break;

//     default:
//       break;
//   }
// }
