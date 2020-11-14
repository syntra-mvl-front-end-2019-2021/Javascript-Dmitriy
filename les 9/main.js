function initArray(arrayLength) {
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    array.push(0);
  }
  console.log(array)

  return array;

}


function isBrainFuckInstruction(char) {
  const brainFuckInstr = "+-><.,[]";
  return brainFuckInstr.includes(char);
}

/**
 * cleanProgram
 * @param {string} program
 * @returns {string[]}
 */
function cleanProgram(program) {
  const cleanProg = program.split("");

  return cleanProg.filter(isBrainFuckInstruction);
}

function resValIn (result, val, index) {
  function pairRes(pairResult, pair) {
    // pairResult = { valid: true, pairs: [[5,8], [2,11]] } pair = [2,11]
    if (!pairResult.valid && pair.length === 1) {
      pair.push(index);
      pairResult.valid = true;
    }
    pairResult.pairs.push(pair);
    return pairResult;
  }
  // index = 11 val = ']' result = { valid: true, pairs: [[5,8], [2,11]] }
  if (result.valid) {
    if (val === "[") {
      result.pairs.push([index]);
    }
    if (val === "]") {
      result = result.pairs.reduceRight(pairRes
        ,
        { valid: false, pairs: [] }
      );
    }
  }
  return result;
}

function genBracketPairs(code) {
const bracketPairs = code.reduce(resValIn
,
{ valid: true, pairs: [] }
);

bracketPairs.valid =
bracketPairs.valid &&
bracketPairs.pairs.filter(function (pair) {
  return pair.length === 1; // waarom 1
}).length === 0; // waarom 0

return bracketPairs;
}


function findBrotherIndex(bracketPairs, curIndex) {
  // bracketPairs = {valid: true, pairs: [[1,2],[4,5]]} curIndex = 4
  return bracketPairs.pairs.reduce((result, pair) => {
      // result = -1 pair = [4,5]
      let foundIndex = pair.indexOf(curIndex); // 0
      if (foundIndex === -1) {
          return result;
      }
      return pair[1 - foundIndex]; // if foundIndex = 1 -> 0 else if foundIndex = 0 -> 1
  }, -1);
}

/**
 * interpretBrainfuck
 * @param {string} program
 * @param {number[]}inputArray
 * @param {number} arrayLength
 * @returns {string}
 */
function interpretBrainFuck(program, inputArray, arrayLength) {
  const array = initArray(arrayLength);
  let result = "";
  let pointer = 0;
  const cleanProg = cleanProgram(program);
  let instrIndex = 0;
  const bracketPairs = genBracketPairs(cleanProg);

  if (!bracketPairs.valid) {
    return "SYNTAX ERROR";
  }

  console.log(bracketPairs);

  while (instrIndex < cleanProg.length) {
    const instruction = cleanProg[instrIndex];

    switch (instruction) {
      case "+":
        if (array[pointer] === 255) {
          return "INCORRECT VALUE";
        }
        array[pointer]++;
        instrIndex++;
        break;
      case "-":
        if (array[pointer] === 0) {
          return "INCORRECT VALUE";
        }
        array[pointer]--;
        instrIndex++;
        break;
      case ">":
        if (pointer === arrayLength - 1) {
          return "POINTER OUT OF BOUNDS";
        }
        pointer++;
        instrIndex++;
        break;
      case "<":
        if (pointer === 0) {
          return "POINTER OUT OF BOUNDS";
        }
        pointer--;
        instrIndex++;
        break;
      case ".":
        result += String.fromCharCode(array[pointer]);
        instrIndex++;
        break;
      case ",":
        array[pointer] = inputArray.shift();
        instrIndex++;
        break;
      case "[":
        if (array[pointer] === 0) {
          instrIndex = findBrotherIndex(bracketPairs, instrIndex) + 1;
        } else {
          instrIndex++;
        }
        break;
      case "]":
        instrIndex = findBrotherIndex(bracketPairs, instrIndex);
        break;
    }
  }

  return result;
}

// function higherThanFive(num) {
//   return num > 5;
// }
// Array.prototype.myFilter = function (callbackFunction) {
//   let array = [];
//   for (let i = 0; i < this.length; i++) {
//     const result = callbackFunction(this[i]);
//     if (result) {
//       array.push(this[i]);
//     }
//   }

//   return array;
// };

// const testArray = [1,2,3,4,5,6,7,8]

// console.log('myFilter',testArray.myFilter(higherThanFive));
// console.log('filter',testArray.myFilter(higherThanFive));

// function doSomething(val) {
//   console.log("val is " + val);
// }
// Array.prototype.myForEach = function (callbackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     callbackFunction(this[i]);
//   }
// };
// const forEachTest = ["test", "testz", "tasty"];
// console.log(forEachTest.myForEach(doSomething));
// console.log(forEachTest.forEach(doSomething));

// function timesTwo(num){
//   return num*2;
// }
// function timesFififity(num){
//   return num*50
// }
// Array.prototype.myMap = function (callbackFunction) {
//   const array = [];
//   for (let i = 0; i < this.length; i++) {
//       array.push(callbackFunction(this[i]));

//   }

//   return array;
// };
// const mapTestArray = [1,2,3,4,5,6]

// console.log('map',mapTestArray.map(timesTwo))
// console.log('myMap',mapTestArray.myMap(timesFififity))

// function sumAllNumbers(sum,num){
//   return sum + num
// }

// function highestNum(accumulator,arrayVal){
//     if(accumulator>arrayVal){
//       return accumulator
//     }
//     return arrayVal
//   }

// const reduceTestArray = [1,2,3,4,5,6]

// console.log('reduce', reduceTestArray.reduce(sumAllNumbers,0))

// Array.prototype.myReduce = function (callbackFunction,init) {
// let accumulator = init

//   for(i=0;i<this.length;i++){
//    const returnVal  = callbackFunction(accumulator,this[i])
//    accumulator = returnVal
//   }
// return accumulator
// }
// console.log('myreduce', reduceTestArray.myReduce(highestNum))
