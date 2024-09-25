const prompt = require('prompt-sync')();

let weight= Number(prompt("Enter your weight here:"))
let height =Number(prompt("Enter your height:"));

const BMI = (weight / height**2)

console.log("Your BMI is:",BMI.toFixed(2));