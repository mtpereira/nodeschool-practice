"use strict";

let inputs = process.argv.slice(2);
let minimum = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${minimum}`);
