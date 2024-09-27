const prompt = require("prompt-sync")();

let setDate = prompt("Enter Date:");
let year = setDate.slice(0,4);
let month = setDate.slice(5,7);
let day = setDate.slice(-2);

console.log("Year:" + year);
console.log("Month:" + month);
console.log("Day:" + day);

console.log.replace("month","monthly");


