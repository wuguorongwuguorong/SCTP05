const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Enter your weight: "));
let height = parseFloat(prompt("Enter your height: "));
let bmi = weight/height**2;
if (weight && height) {
    console.log("BMI =", weight/height**2);
} else {
    console.log("Sorry, double check your width and height");
}

if(bmi <18.5){
    console.log("Underweight");
}
else if( bmi <=25){
    console.log("Normal Weight") 
}
else if( bmi <=30){
    console.log("OverWeight")
}
else {
    console.log("Obese")
}