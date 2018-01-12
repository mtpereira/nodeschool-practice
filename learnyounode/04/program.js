"use strict";

const fs = require("fs");

let path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
  if (err) throw err;
  let lines = data.split("\n").length - 1;
  console.log(lines);
});
