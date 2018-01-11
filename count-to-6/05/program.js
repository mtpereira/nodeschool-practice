"use strict";

let userArray = process.argv.slice(2);
let user = {}; // This ; is needed because the following line starts with []

[, user.username, user.email] = userArray;

console.log(user);
