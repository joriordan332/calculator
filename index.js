const buttons = document.querySelectorAll('button');
const plus = document.getElementById('plus');
const equals = document.getElementById('equals');
const display = document.querySelector('.display');

let displayResult = "";
let num1 = "";
let num2 = "";

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
  if (event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*' || event.target.value == '=') {
    return false
  } else {
  displayResult = display.textContent += event.target.value; 
  }
  });
});


plus.addEventListener('click', function(e){
  operator = '+';
  num1 = displayResult;
  return num1;
}) 


function add(...addNums) {
  let plus = addNums.reduce((num1, num2) => (num1 + num2))
  return plus
};

function subtract(...subNums) {
  let sub = subNums.reduce((num1, num2) => (num1 - num2))
  return sub;
};

function multiply(...multi) {
  let times = multi.reduce((num1, num2) => (num1 * num2))
  return times;
};

function divide(...share) {
  let division = share.reduce((num1, num2) => (num1 / num2))
  return division;
};

function operate(operator, num1, num2){
  switch(operator) {            
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
};

