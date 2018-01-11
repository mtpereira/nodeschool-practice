"use strict";

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function escapeTags(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function html(strings, ...subs) {
  let result = "";
  for (let i = 0; i < subs.length; i++) {
    result += strings[i] + escapeTags(subs[i]);
  }
  result += strings[strings.length - 1];
  return result;
  // result = strings[0] + escapeTags(name) + strings[1] + escapeTags(message) + strings[2]
}
