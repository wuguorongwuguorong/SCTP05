const prompt = require("prompt-sync")();

let name = prompt("Enter Your name here:");
console.log("Welcome, ",name);

let age = prompt("Enter your age:");
console.log("Next year you will be", age++);

let anotherage = prompt("Enter your age again:");
anotherage = parseInt(anotherage);
console.log("Next year you will be:" ,anotherage+1);

