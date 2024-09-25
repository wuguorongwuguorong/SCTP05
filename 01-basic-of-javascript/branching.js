const prompt=require("prompt-sync")();

let age = parseInt(prompt("Enter your age here:"));

if (age <= 12){
    console.log("You only need to pay $6" );
}

else{
    console.log("You are required to pay $12");
}