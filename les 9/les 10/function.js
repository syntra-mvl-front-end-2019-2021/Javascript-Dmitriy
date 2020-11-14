function higherThanFive(num) {
  return num > 5;
}
Array.prototype.myFilter = function (callbackFunction) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    const result = callbackFunction(this[i]);
    if (result) {
      array.push(this[i]);
    }
  }

  return array;
};

const testArray = [1,2,3,4,5,6,7,8]

console.log('myFilter',testArray.myFilter(higherThanFive));
console.log('filter',testArray.myFilter(higherThanFive));

function doSomething(val) {
  console.log("val is" + val);
}
Array.prototype.myForEach = function (callbackFunction) {
  for (let i = 0; i < this.length; i++) {
    callbackFunction(this[i]);
  }
};
const forEachTest = ["test", "testz", "tasty"];
console.log(forEachTest.myForEach(doSomething));
forEachTest.forEach(doSomething);
