const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equalsButton')
const clear = document.querySelector('.clear')

let displayResult = "";
let num1 = "";
let num2 = "";
let operator = "";

//event listener that displays the numbers clicked on the calculator display apart from the operator buttons
numbers.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*' || event.target.value == '=') {
    return false
  } if (num1 !== null && num1 !== '') { // if the variable num1 isn't empty then clear the textContent for the next number
      display.textContent = "";
      displayResult = display.textContent += event.target.value;
  } if (num1 != "" && operator != "") { // if num1 & the operator has a value then num2 is assigned the value of the displayResult
      num2 = displayResult
  } if (num1 == null || num1 == ''){  // if num1 doesn't have a value then the textContent is whichever button is clicked
      displayResult = display.textContent += event.target.value; 
  } if (num1 === "0" && operator === "/") { // if user tries to divide 0 by anything display a snarky error message
    alert("Nice try");
    num1 = "";
    operator = "";
    display.textContent = "";
  }

  });
});

operators.forEach(button => {
  button.addEventListener('click', (event) => {
    if (display.textContent === '') { //if an operator is clicked before a value is put in the text box no value is assigned to the variable
      return false;
    } if (operator === "" && displayResult != "") { // if an operator button is clicked and operator is empty and displayResult isn't empty then num1 is assigned the same value as displayResult
        num1 = displayResult;
    } if (num1 != "" && operator != "" && num2 != "") {
        num1 = display.textContent = (operate(operator, num1, num2))
    } 
      operator = event.target.value;
   })
})

equalsButton.addEventListener('click', (event) => {
  if (operator === "") {
    displayResult = display.textContent
  } if (num1 != "" && operator != "" && num2 != "") {
  num2 = displayResult
  display.textContent = (operate(operator, num1, num2)).toFixed(2)
  console.log(operate(operator, num1, num2))
  }
})

clear.addEventListener('click', (event) => {
  display.textContent  = "";
  num1 = "";
  num2 = "";
  operator = "";
})

//functions for add, subtractm multiply & divide
function add(...addNums) {
  let plus = addNums.reduce ((num1, num2) => (num1 + num2))
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

//operate function that takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, num1, num2){
  switch(operator) {            
    case '+':
      return add(+num1, +num2);
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