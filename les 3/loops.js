//while(voorwaard){
  //iets om te doen
//}
console.log('while loop')

let teller = 1;
let getal = 10;

while(teller <=10){
  console.log(getal-teller);
  teller++;
}

//for (index;voorwaarde ; bewerling){
  //doe iets
//}
console.log('for loop')
for (let i = 0; i<=10; i++){
  console.log(getal-i)
}

let anArray =[4,5,6];

for (let i = 0; i<=anArray.length; i++){
console.log('item '+ i + ':' + anArray[i]);
}

//for (waarde in array){
  // iets 
//}

for(let arrayIndex in anArray)
{
  console.log('item '+ arrayIndex + ':' + anArray[arrayIndex]);
}

let anObject = {
  test: 'testval',
  testTwo: 'testValTwo'
}