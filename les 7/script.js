
let wordsToScramble = document.getElementById("user-input");
let scramble = document.getElementById('submit-btn');
let scrambleContainer = document.getElementById("result-container");

let wordCountContainer = document.getElementById('word-count');
let letterCountContainer = document.getElementById('letter-count');


function string(){

  return  wordsToScramble.value;

}

txt = string()

function x(txt){
  return scrambleContainer.innerText   = txt
}
e = x(txt)
function y(e){
  return  e.split(' ')
}
wordsToScrambleArray = y(e)


console.log(wordsToScrambleArray)







function scrambleYoStuff() {
  
  let randomArray = [];

  for (i = 0; i < wordsToScrambleArray.length; i++) {
    let random = wordsToScrambleArray[
              Math.floor(Math.random() * wordsToScrambleArray.length)
            ];
        if (randomArray.indexOf(random) == -1) {
      randomArray.push(random);
    } else i--;
  } 
 

 
}




function realtime() {
  x(txt)  
}

wordsToScramble.addEventListener('input', realtime);
