const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
	return sum;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach((num) => {
    total *= num;
  })
  return total;
};

const power = function(num, power) {
  let numRaised = num;
  for (let i=1; i < power; i++) {
    numRaised *=num;
  }
  return numRaised;
};

const factorial = function(num) {
  let factNum = 1;
	if (num == 0) {
    return 1;
  } else {
    for (let i= num; i > 0; i--) {
      factNum *= i
    }
  }
  return factNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
