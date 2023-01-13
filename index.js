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