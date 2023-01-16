const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    display.textContent += event.target.value
  });
});

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

