let anObject = {
  valOne:'test',  
  val_two:2, 

  'val space' : false,
  valObject: {
    subVal: 'test'
  },
  valFunction: function(a){
    console.log(this);
    return a+ this.val_two;

  }
}
console.log(anObject);

console.log(anObject['val space']);

let keyVal = 'val_two'

console.log(anObject[keyVal]);
console.log(anObject.valOne);
console.log(anObject.valFunction(3));

let person = {

  firstName = 'jan'
  LastName  = 'vanderwalle'
  fullName: function(){
    return this.firstName + ' ' + this.LastName;
  }
}
console.log(person.fullName());
console.log(object.keys(person));

let personKeys = Object.keys(person)
personKey [0];
personKeys.length;