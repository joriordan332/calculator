const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equalsButton')
const clear = document.querySelector('.clear')

let displayResult = "";
let num1 = "";
let num2 = "";
let operator = "";
let operatorTwo = "";

numbers.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*' || event.target.value == '=') {
    return false
  } if (num1 !== null && num1 !== '') {
      display.textContent = "";
      displayResult = display.textContent += event.target.value;
  } if (num1 != "" && operator != "") {
      num2 = displayResult
  } if (num1 == null || num1 == ''){
      displayResult = display.textContent += event.target.value; 
  } else if (num1 != "" && operator != "" && num2 != "") {
    
  } 
  });
});


operators.forEach(button => {
  button.addEventListener('click', (event) => {
    if (displayResult === "") {
      operator = "";
    }
    if (operator === "" && displayResult != "") {
      num1 = displayResult;
      operator = event.target.value;
  } if (num1 != "" && operator != "" && num2 != "") {
      displayResult =display.textContent = (operate(operator, num1, num2))
      console.log(operate(operator, num1, num2))
    }
   })

})

equalsButton.addEventListener('click', (event) => {
  num2 = displayResult
  display.textContent = (operate(operator, num1, num2))
  console.log(operate(operator, num1, num2))
})

clear.addEventListener('click', (event) => {
  display.textContent  = "";
  num1 = "";
  num2 = "";
  operator = "";
})

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

