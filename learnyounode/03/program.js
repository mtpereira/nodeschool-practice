"use strict";

const fs = require("fs");

let path = process.argv[2];

let lines = fs.readFileSync(path, "utf8").split("\n").length - 1;
console.log(lines);
