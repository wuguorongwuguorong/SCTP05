const prompt = require("prompt-sync")();
//let mysNum = parseInt(prompt("Enter your number:"));

//while (mysNum < 100 ||  mysNum > 999){
//    mysNum = parseInt(prompt("Enter your number "));
//}

//console.log(mysNum)

let userinput =null;

while(true){
    userinput = parseInt(prompt("Enter your number:"));
    if (userinput >= 100 && userinput <=999){
        break;
    }
}
