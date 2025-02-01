const convertToCelsius = function (fahrenheitDegrees) {
  let celciusDegrees = (fahrenheitDegrees - 32) * (5 / 9);
  if (parseInt(celciusDegrees) == celciusDegrees) {
    return celciusDegrees;
  }
  let rounded = celciusDegrees.toFixed(1);
  return parseFloat(rounded);
};

const convertToFahrenheit = function (celciusDegrees) {
  let fahrenheitDegrees = celciusDegrees * 1.8 + 32;
  if (parseInt(fahrenheitDegrees) == fahrenheitDegrees) {
    return fahrenheitDegrees;
  }
  let rounded = fahrenheitDegrees.toFixed(1);
  return parseFloat(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
