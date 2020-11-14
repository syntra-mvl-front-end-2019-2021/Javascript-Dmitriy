/*
 * ARRAY MAP EXERCISES
 */

// Make an array of numbers that are doubles of the first array
// Example:
// input: [1,2,3]
// expected output: [2,4,6]

function doubleNumbers(arr) {
  let array = arr.map((i) => i * 2);

  return array;
}

// Take an array of numbers and make them strings
// Example:
// input: [1,2,3]
// expected output: ['1','2','3']
function toString(array) {
  return array.toString();
}

function stringItUp(arr) {
  let string = arr.map(toString);
  return string;
}

// Capitalize each of an array of names
// Example:
// input: ['jan', 'AN', 'Ben']
// expected output: ['Jan', 'An', 'Ben']

function capitalize(name) {
  let split = name.toLowerCase().split(" ");
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }
  return split.join(" ");
}

function capitalizeNames(arr) {
  cap = arr.map(capitalize);
  return cap;
}

// Make an array of strings of the names
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan', 'An']

function namesOnly(arr) {
  let names = arr.map(function (array) {
    return array.name;
  });
  return names;
}

// Make an array of strings of the names saying whether or not they can go to The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan is under age!!', 'An can go to The Matrix']
function bigBoyOrNah(age) {
  if (age.age < 18) {
    age = age.name + " is under age!!";
  } else {
    age = age.name + " can go to The Matrix";
  }
  return age;
}

function makeStrings(arr) {
  let sent = arr.map(bigBoyOrNah);
  return sent;
}

/*
 * ARRAY REDUCE EXERCISES
 */

// Turn an array of numbers into a total of all the numbers
// Example:
// input: [1,2,3]
// expected output: 6

function totall(accumulator, currentValue) {
  return accumulator + currentValue;
}

function total(arr) {
  array = arr.reduce(totall);

  return array;
}

// Turn an array of numbers into a long string of all those numbers.
// Example:
// input: [1,2,3]
// expected output: '123'
function str(accumulator, currentValue) {
  let currentVal = currentValue.toString();
  let accu = accumulator.toString();
  return accu + currentVal;
}

function stringConcat(arr) {
  array = arr.reduce(str);

  return array;
}

// Turn an array of voter objects into a count of how many people voted
// Example:
// input: [{name: 'Jan', age: 12, voted: false}, {name: 'An', age: 33, voted: true}, {name: 'Ben', age: 21, voted: true}]
// expected output: 2

function votes(accumulator, currentValue) {
  if (currentValue.voted) {
    accumulator++;
  }

  return accumulator;
}

function totalVotes(arr) {
  // arr.reduce(reducerfunction, initialValue)
  // 'initialValue' is starting value for accumulator
  array = arr.reduce(votes, 0);

  return array;
}

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// Example:
// input: [{ title: "Snoep", price: 500 }, { title: "Brood", price: 200 },]
// expected output: 700

function shoppingReducer(acc, curr) {
  return acc += parseInt(curr.price)
}

function shoppingSpree(arr) {
  return arr.reduce(shoppingReducer, 0)
}

// Given an array of arrays, flatten them into a single array
// Example:
// input: [[1,2,3],[6,5,4]]
// expected output: [1,2,3,6,5,4]

function concatArrays(acc, curr) {
  return acc.concat(curr)
}

function flatten(arr) {
  return arr.reduce(concatArrays, [])
}

/*
 * ARRAY FILTER EXERCISES
 */

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [6,5]

function fiveAndGreaterOnly(arr) {
  const result = arr.filter((x) => x >= 5);
  return result;
}

// Given an array of numbers, return a new array that only includes the even numbers.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [2,6,4]

function evensOnly(arr) {
  const result = arr.filter((x) => x % 2 == 0);
  return result;
}

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// Example:
// input: ['lange string', 'kort']
// expected output: ['kort']

function fiveCharactersOrFewerOnly(arr) {
  const result = arr.filter((x) => x.length <= 5);
  return result;
}

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// Example:
// input: [{name: 'Jan', age: 12, member: false}, {name: 'An', age: 33, member: true}, {name: 'Ben', age: 21, member: true}]
// expected output: [{name: 'Jan', age: 12, member: false}, {name: 'Ben', age: 21, member: true}]

function peopleWhoBelongToTheIlluminati(arr) {
  const result = arr.filter((x) => x.member);
  return result;
}

// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: [{name: 'An', age: 33}]

function ofAge(arr) {
  const result = arr.filter((x) => x.age >= 18);
  return result;
}
