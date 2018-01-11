"use strict";

module.exports = (...numbers) => {
  let result = numbers.reduce((acc, number) => acc + number);
  return result / numbers.length;
};
