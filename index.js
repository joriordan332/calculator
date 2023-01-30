const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equalsButton');
const clear = document.querySelector('.clearButton');
const decimal = document.querySelector('.decimal')
const clearLastDigit = document.querySelector('.clearLastDigit')

let displayResult = "";
let currentNum = "";
let previousNum = "";
let operator = "";


//event listener that displays the numbers clicked on the calculator display apart from the operator buttons
numbers.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.value == '+' || event.target.value == '-' || event.target.value == '/' || event.target.value == '*' || event.target.value == '=' || event.target.value == '.'  ) {
    return false
  } if (currentNum !== null && currentNum !== '' && display.textContent.length <= 8) { // if the variable currentNum isn't empty then clear the textContent for the next number
      displayResult = display.textContent += event.target.value;
  } if (currentNum != "" && operator != "") { // if currentNum & the operator has a value then previousNum is assigned the value of the displayResult
      previousNum = displayResult
  } if (currentNum == null || currentNum == '' && display.textContent.length <= 8){  // if currentNum doesn't have a value then the textContent is whichever button is clicked
      currentNum += event.target.value;
      display.textContent = currentNum
  } if (operator === "/" && previousNum === "0" ) { // if user tries to divide 0 by anything display a snarky error message
    alert("You can't divide by zero");
    currentNum = "";
    previousNum = ""
    operator = "";
    display.textContent = "";
  }
 });
});

operators.forEach(button => {
  button.addEventListener('click', (event) => {
    if (display.textContent === '') { //if an operator is clicked before a value is put in the text box no value is assigned to the variable
      return false;
    } if (operator === "" && displayResult != "") { // if an operator button is clicked and operator is empty and displayResult isn't empty then currentNum is assigned the same value as displayResult
        currentNum = displayResult;
    } if (currentNum != "" && operator != "" && previousNum != "") {
        currentNum = display.textContent = (operate(operator, currentNum, previousNum))
    } 
      operator = event.target.value;
      display.textContent = ""
   })
})

equalsButton.addEventListener('click', (event) => {
  if (operator === "") {
    displayResult = display.textContent
  } if (currentNum != "" && operator != "" && previousNum != "") {
  previousNum = displayResult
  display.textContent = (operate(operator, currentNum, previousNum)).toFixed(2)
  console.log(operate(operator, currentNum, previousNum))
  }
})

clear.addEventListener('click', (event) => {
  display.textContent  = "0";
  currentNum = "";
  previousNum = "";
  operator = "";
})

decimal.addEventListener("click", () => {
  addDecimal();
});

function addDecimal() {
  if (!display.textContent.includes(".")) {
    display.textContent += "."
 }
}
clearLastDigit.addEventListener("click", () => {
  lastDigit();
});

function lastDigit() {
 if (display.textContent != "") {
  displayResult = display.textContent.slice(0, -1);
  display.textContent = displayResult;
 }
}

//functions for add, subtractm multiply & divide
function add(...addNums) {
  let plus = addNums.reduce ((currentNum, previousNum) => (currentNum + previousNum))
  return plus
};

function subtract(...subNums) {
  let sub = subNums.reduce((currentNum, previousNum) => (currentNum - previousNum)) 
  return sub;
};

function multiply(...multi) {
  let times = multi.reduce((currentNum, previousNum) => (currentNum * previousNum))
  return times;
};

function divide(...share) {
  let division = share.reduce((currentNum, previousNum) => (currentNum / previousNum))
  return division;
};

//operate function that takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, currentNum, previousNum){
  switch(operator) {            
    case '+':
      return add(+currentNum, +previousNum);
      break;
    case '-':
      return subtract(currentNum, previousNum);
      break;
    case '*':
      return multiply(currentNum, previousNum);
      break;
    case '/':
      return divide(currentNum, previousNum);
      break;
  }
};
