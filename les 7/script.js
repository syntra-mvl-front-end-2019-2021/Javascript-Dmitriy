
// let wordsToScramble = document.getElementById("user-input");
// let scramble = document.getElementById('submit-btn');
// let scrambleContainer = document.getElementById("result-container");

// let wordCountContainer = document.getElementById('word-count');
// let letterCountContainer = document.getElementById('letter-count');


// function string(){

//   return  wordsToScramble.value;

// }

// txt = string()

// function x(txt){
//   return scrambleContainer.innerText   = txt
// }
// e = x(txt)
// function y(e){
//   return  e.split(' ')
// }
// wordsToScrambleArray = y(e)


// console.log(wordsToScrambleArray)







// function scrambleYoStuff() {
  
//   let randomArray = [];

//   for (i = 0; i < wordsToScrambleArray.length; i++) {
//     let random = wordsToScrambleArray[
//               Math.floor(Math.random() * wordsToScrambleArray.length)
//             ];
//         if (randomArray.indexOf(random) == -1) {
//       randomArray.push(random);
//     } else i--;
//   } 
 

 
// }




// function realtime() {
//   x(txt)  
// }

// wordsToScramble.addEventListener('input', realtime);




// var txtWord = document.getElementById("word");
// var btn = document.getElementById("submit");


// function random() {

//   // Separate all the letters into an array
//   var letterArray = txtWord.value.split("");
  
//   // create an new array from scrambled letters in the original array
//   var scrambledArray = [];
  
//   var len = letterArray.length;
//   for (var start = 0; start < len; start++) {
//     // Get a random number between 0 and the highest array index and put it in the new array
//     var num = Math.floor(Math.random() * letterArray.length)
//     scrambledArray.push(letterArray[num]);
    
//     // Remove letter from original array
//     letterArray.splice(num,1);
//   }
//   console.log(scrambledArray.join(""));
// }

// btn.addEventListener("click", random);


