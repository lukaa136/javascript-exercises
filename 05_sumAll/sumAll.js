const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (num1 < num2) {
    largestNum = num2;
    smallestNum = num1;
  } else {
    largestNum = num1;
    smallestNum = num2;
  }
  let counter = 0;
  for (let i = smallestNum; i <= largestNum; i++) {
    counter += i;
  }
  return counter;
};

// Do not edit below this line
module.exports = sumAll;
