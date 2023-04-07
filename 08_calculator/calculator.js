const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  result = 0
	for(let i = 0; i < nums.length; i++){
    result += nums[i];
  }
  return result;
};

const multiply = function(nums) {
  result = 1
	for(let i = 0; i < nums.length; i++){
    result *= nums[i];
  }
  return result;
};

const power = function(n ,e) {
	return n ** e 
};

const factorial = function(n) {
	if(n === 0){
    return 1;
  }

  return n * factorial(n-1);
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
