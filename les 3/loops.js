// while ( voorwaarde ) {
// iets om te doen
// }


let teller = 1;
let getal = 10;
console.log('while loop');
while (teller <= 10) {
    console.log(getal - teller);
    teller++;
}


// for (index; voorwaarde; indexbewerking) {
//   doe iets    
// }
console.log('for loop;')
for (let i = 1; i <= 10; i++) {
    console.log(getal - i);
}

let anArray = [4,5,6];

for (let i = 0; i < anArray.length; i++) {
    console.log('item ' + i + ': ' + anArray[i] );
}

// for (waarde in array) {
//    doe iets
// }

for (let arrayIndex in anArray) {
    console.log('item ' + arrayIndex + ': ' + anArray[arrayIndex] );
}

let anObject = {
    test: 'testVal',
    testTwo: 'testValTwo'
}

for (let objectKey in anObject) {
    console.log('item ' + objectKey + ': ' + anObject[objectKey] );
}
var group = ["a","b","c","d"];
var groupLength = group.length;

for(var i = 0;i < groupLength;i++){
    var item = group[i];

    // Do something if is the last iteration of the array
    if((i + 1) == (groupLength)){
        console.log("Last iteration with item : " + item);
    }
}