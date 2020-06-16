let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");

let sumButt = document.getElementById('sum-submit-btn');
let sum = document.getElementById('sum-result-container');

let prodButt = document.getElementById('product-submit-btn');
let prod = document.getElementById('product-result-container');

let addInputBtn = document.getElementById('add-input-btn')
let removeInputBtn = document.getElementsByClassName('button is-danger delete-number-input')
let inputField = document.getElementById('input')

let inputContainer = document.getElementById("input-cont")
let container = document.getElementById('cont')
function calcSum () {

    sum.innerText = parseInt(inputOne.value) + parseInt(inputTwo.value);
    
}
function calcProd () {

  prod.innerText = parseInt(inputOne.value) * parseInt(inputTwo.value);
  
}

function addInput(){

    let extraInputField = inputField.cloneNode(true);

    inputContainer.appendChild(extraInputField);


}


addInputBtn.addEventListener('click',addInput);
sumButt.addEventListener('click', calcSum);
prodButt.addEventListener('click', calcProd);

