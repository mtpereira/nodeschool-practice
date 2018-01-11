"use strict";

let name = process.argv[2];
let message = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(message);
