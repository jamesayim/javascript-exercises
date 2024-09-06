const add = function(...num) {
	let sum = 0;
    num.forEach((num) => {
        sum += num;
    });
    return Number(sum);
};

const subtract = function(...num) {
	let deduction = num[0];
    num.forEach((num, index) => {
        if (index !== 0) {
            deduction -= num;
        }
    });
    return Number(deduction);
};

const sum = function(num) {
	const result = num.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return Number(result);
};

const multiply = function(num) {
	const result = num.reduce((multiplier, currentValue) => {
        return multiplier * currentValue;
    });
    return Number(result);
};

const power = function(num, power) {
	const result = num ** power;
    return result;
};

const factorial = function(num) {
	if (num <= 0) return 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
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
