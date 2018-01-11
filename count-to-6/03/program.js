"use strict";

let inputs = process.argv.slice(2);
let result = inputs
  .map(str => str[0])
  .reduce((charAcc, char) => charAcc + char);

console.log(`[${inputs}] becomes "${result}"`);
