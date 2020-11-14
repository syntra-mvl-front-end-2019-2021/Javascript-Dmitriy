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
// Create a new 30,000 size array, with each cell initialized with the value of 0. Memory can expand.
const MEMORY_SIZE = 30000;
const memory = new Array(MEMORY_SIZE).fill(0);
// Instruction pointer (Points to the current INSTRUCTION)
let ipointer = 0;
// Memory pointer (Points to a cell in MEMORY)
let mpointer = 0;
// Address stack. Used to track addresses (index) of left brackets
let astack = [];

let program = "";
let input = "";
let output = "";

/** Interpreter code */

function resetState() {
    // Clear memory, reset pointers to zero.
    memory.fill(0);
    ipointer = 0;
    mpointer = 0;
    output = "";
    input = "";
    program = "";
    astack = [];
}

function sendOutput(value) {
    output += String.fromCharCode(value);
}

function getInput() {
    // Set a default value to return in case there is no input to consume
    let val = 0;

    // If input isn't empty
    if (input) {
        // Get the character code of the first character of the string
        val = input.charCodeAt(0);
        // Remove the first character from the string as it is "consumed" by the program
        input = input.substring(1);
    }

    return val;
}

function interpret() {
    let end = false;

    while (!end) {
        switch (program[ipointer]) {
            case '>':
                if (mpointer == memory.length - 1)
                /* If we try to access memory beyond what is currently available, expand array */
                    memory.push(0, 0, 0, 0, 0);
                mpointer++;
                break;
            case '<':
                if (mpointer > 0)
                    mpointer--;
                break;
            case '+':
                memory[mpointer]++;
                break;
            case '-':
                memory[mpointer]--;
                break;
            case '.':
                sendOutput(memory[mpointer]);
                break;
            case ',':
                memory[mpointer] = getInput();
                break;
            case '[':
                if (memory[mpointer]) { // If non-zero
                    astack.push(ipointer);
                } else { // Skip to matching right bracket
                    let count = 0;
                    while (true) {
                        ipointer++;
                        if (!program[ipointer]) break;
                        if (program[ipointer] === "[") count++;
                        else if (program[ipointer] === "]") {
                            if (count) count--;
                            else break;
                        }
                    }
                }
                break;
            case ']':
                //Pointer is automatically incremented every iteration, therefore we must decrement to get the correct value
                ipointer = astack.pop() - 1;
                break;
            case undefined: // We have reached the end of the program
                end = true;
                break;
            default: // We ignore any character that are not part of regular Brainfuck syntax
                break;
        }
        ipointer++;

    }
    console.log(output);
    return output;
}