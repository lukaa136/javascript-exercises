const removeFromArray = function (array, ...deletedElement) {
  const newArray = [];

  array.forEach((element) => {
    if (!deletedElement.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

/* const removeFromArray = function (array, ...args) {
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
}; */

// Do not edit below this line
module.exports = removeFromArray;
