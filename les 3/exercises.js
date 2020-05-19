// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
function  getLargestItemInArray( array ){
//     largestVal = [0]
//     array.forEach(i => {
//     if( i > largestVal ) {
//      largestVal = i
//     }
//     })
//    return largestVal
//  

let largestVal = array.find(i => {
    return  i === Math.max(...array)
})


  return largestVal

  }


// Reverse order of array, e.g. [1,2,3] → [3,2,1]
function reverseArray(anArray) 
{
//   let rev = anArray.reverse();  
  let rev = []
  for (let i = anArray.length-1;i>=0;i--)
  {
    rev.push(anArray[i])
  }
return rev
}





// Make a sum of all elements, e.g. [1,2,3] → 6
// function arraySum(anArray) {
//     let x=0
//     anArray.forEach(i => {
//     x += i
//     })
            
//     return x;
    
//     }

function arraySum(anArray) {
  let sum = anArray.reduce((i, x) => {
    return i+x
    }, 0)
            
    return sum;
    
    }

// function arraySum(anArray) {
    
//     let x = 0;

//     for (i=0; i < anArray.length; ++i)
//         {
//             x += anArray[i];
//         }
//         return x;

// }

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {

  let x = ''
  anArray.forEach(i =>    
{
 x += i.substring(0,1)

})
return x
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo)
{
  let x = []

  let length = Math.max(arrayOne.length,arrayTwo.length)
  for ( let i = 0; i < length; ++i)
    {

   if(i < arrayOne.length)  // if == true --> voert de if uit/ if !== true voert if niet uit en gaat hij naar de volgende if
      {x.push(arrayOne[i])}
   if (i < arrayTwo.length) 
     {x.push(arrayTwo[i])}
   
  
  }
  return x
    }
    


// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
// function numberToDigitArray(aNumber) {

//   let anArray = Array.from(String(aNumber),Number)

//   return anArray;
// }
function numberToDigitArray(aNumber) {
    let digitStringArray = aNumber.toString().split(''); // ['2', '3', '4', '2']
    let result = [];

    for (let i in digitStringArray) {
        result.push(parseInt(digitStringArray[i]));
    }

    return result;
}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {
  
  let x = ''
  let test = aString.toLowerCase()
  let anArray = test.split(' ') 

  anArray.forEach(function(a, i)     
{
  
    if(i!==anArray.length-1)

    {
      x +=   a.substring(1) + a.substring(0,1) + 'ay '

    }

    else{

      x +=  a.substring(1) + a.substring(0,1) + 'ay'

    }


})
return x
}


// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {
  
// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;    
// }

function   translateToMorse(aString){
  
    x=''
    let array = aString.split('')
    let anArray = array.join("|")
    for ( let i = 0; i < anArray.length; i++)   
    {
      if (i > 0 && anArray[i - 1] == ' ') {

      } else {
          x += tweedefunctie(anArray[i])
      }
    }
    
     x += '|'
    return x
}

function tweedefunctie(letter)
{
  switch (letter)
  { 
      case 'a': 
          return "*_"; 
          break;
      case 'b': 
          return "_***"; 
          break;
      case 'c': 
          return "_*_*"; 
          break;
      case 'd': 
          return "_**"; 
          break;
      case 'e': 
          return "*"; 
          break;
      case 'f': 
          return "**_*"; 
          break;
      case 'g': 
          return "__*"; 
          break;
      case 'h': 
      case 'H':
          return "****"; 
          break;
      case 'i': 
          return "**"; 
          break;
      case 'j': 
      case 'J': 
          return "*___"; 
          break;
      case 'k': 
          return "_*_"; 
          break;
      case 'l': 
          return "*_**"; 
          break;
      case 'm': 
          return "__"; 
          break;
      case 'n': 
          return "_*"; 
          break;
      case 'o': 
          return "___"; 
          break;
      case 'p': 
          return "*__*"; 
          break;
      case 'q': 
          return "__*_"; 
          break;
      case 'r': 
          return "*_*"; 
          break;
      case 's': 
      case 'S': 

          return "***";
          break;
      case 't': 
          return "_"; 
          break;
      case 'u': 
          return "**_"; 
          break;
      case 'v': 
          return "***_"; 
          break;
      case 'w': 
      case 'W': 
          return "*__"; 
          break;
      case 'x': 
          return "_**_"; 
          break;
      case 'y': 
          return "_*__"; 
          break;
      case 'z': 
          return "__**"; 
          break;
     case '|':
       return  '|';
       break;
       case ' ':
        return ' ';
        break;
          
} 

}









// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {
    
    x=''
    let array = aString.split('')
    let anArray = array.join("|") 
    for ( let i = 0; i < anArray.length; i++)   
    {
      if (i > 0 && anArray[i - 1] == ' ') {

      } else {
          x += tweedefunctie(anArray[i])
      }
    }
    
     x += '|'
    return x
}

