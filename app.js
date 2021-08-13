import {add} from './utils.js'; 
import {subtract} from './utils.js'; 
import {multiply} from './utils.js'; 
import {divide} from './utils.js'; 

// import functions and grab DOM elements
const addInputEl1 = document.getElementById ('input-add1'); 
const addInputEl2 = document.getElementById('input-add2'); 
const addButtonEl = document.getElementById('add-button'); 
const addResultEl = document.getElementById('add-result'); 

const subtractInputEl1 = document.getElementById ('input-subtract1'); 
const subtractInputEl2 = document.getElementById('input-subtract2'); 
const subtractButtonEl = document.getElementById('subtract-button'); 
const subtractResultEl = document.getElementById('subtract-result'); 

const multiplyInputEl1 = document.getElementById ('input-multiply1'); 
const multiplyInputEl2 = document.getElementById('input-multiply2'); 
const multiplyButtonEl = document.getElementById('multiply-button'); 
const multiplyResultEl = document.getElementById('multiply-result'); 

const divideInputEl1 = document.getElementById ('input-divide1'); 
const divideInputEl2 = document.getElementById('input-divide2'); 
const divideButtonEl = document.getElementById('divide-button'); 
const divideResultEl = document.getElementById('divide-result'); 
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
addButtonEl.addEventListener('click', ()=>{
  const num1= Number(addInputEl1.value); 
  const num2 = Number(addInputEl2.value);

  const sum = add(num1, num2);

  addResultEl.textContent = sum;
});

subtractButtonEl.addEventListener('click', ()=>{
  const num1 = Number(subtractInputEl1.value); 
  const num2 = Number(subtractInputEl2.value);

  const sum = subtract(num1, num2);

  subtractResultEl.textContent = sum;
});

multiplyButtonEl.addEventListener('click', ()=>{
  const num1 = Number(multiplyInputEl1.value); 
  const num2 = Number(multiplyInputEl2.value);

  const sum = multiply(num1, num2);

  multiplyResultEl.textContent = sum;
});

divideButtonEl.addEventListener('click', ()=>{
  const num1 = Number(divideInputEl1.value); 
  const num2= Number(divideInputEl2.value);

  const sum = divide(num1, num2);

  divideResultEl.textContent = sum;
});

/*function add(num1,num2){
  return num1 + num2;
}

function subtract(num1,num2){
  return num1 - num2;
}

function multiply(num1,num2){
  return num1 * num2;
}

function divide(num1,num2){
  return num1 / num2;
}
*/