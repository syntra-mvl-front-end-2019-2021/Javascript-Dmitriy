
// let wordsToScramble = document.getElementById("user-input");
// console.log(wordsToScramble.innerHTML);

// let wordsToScrambleArray = wordsToScramble.value.split(' ');
// console.log(wordsToScrambleArray);
// let randomArray = [];

// let scramble = document.getElementById('submit-btn');
// let scrambleContainer = document.getElementById("result-container");


//  function putStuffIn() 
//  {
//   scrambleContainer.textContent = `${event.target.value}`;
//  }





// function scrambleYoStuff() {
//   for (i = 0; i < wordsToScrambleArray.length; i++) {
//     let random =
//     wordsToScrambleArray[
//         Math.floor(Math.random() * wordsToScrambleArray.length)
//       ];
//     if (randomArray.indexOf(random) == -1) {
//       randomArray.push(random);
//     } else i--;
    
//   }
//   scrambleContainer.textContent = randomArray.join(' ')
 

// }



// wordsToScramble.addEventListener("change",putStuffIn);
// // scramble.addEventListener('click', scrambleYoStuff);


let wordsToScramble = document.getElementById("user-input");
console.log(wordsToScramble.innerHTML);

let wordsToScrambleArray = [];
console.log( wordsToScrambleArray);

x = wordsToScrambleArray.toString('')
y = x.split(' ')
console.log(y);






let randomArray = [];

let scramble = document.getElementById('submit-btn');
let scrambleContainer = document.getElementById("result-container");


 function putStuffIn() 
 {

  wordsToScrambleArray.push(wordsToScramble.textContent = `${event.target.value}`)
  
 }


function scrambleYoStuff() {
  for (i = 0; i < wordsToScrambleArray.length; i++) {
    let random =
    wordsToScrambleArray[
        Math.floor(Math.random() * wordsToScrambleArray.length)
      ];
    if (randomArray.indexOf(random) == -1) {
      randomArray.push(random);
    } else i--;
    
  }
  scrambleContainer.textContent = randomArray.join(' ')
 

}



wordsToScramble.addEventListener("change",putStuffIn);
scramble.addEventListener('click', scrambleYoStuff);