"use strict";

let result = process.argv
  .slice(2)
  .reduce((acc, value) => (acc += Number(value)), 0);

console.log(result);
