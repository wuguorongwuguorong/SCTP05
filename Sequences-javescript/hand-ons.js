const prompt = require("prompt-sync")();

let fileName =  prompt("Enter file name:");
let ext_file = null;
let ext_file1 = null;

console.log(fileName.slice(-3))
console.log(fileName.length);

let indexOfDot = fileName.indexOf(".");
let extension = fileName.slice(indexOfDot + 1);

if (fileName.slice(-3) == "jpg" || fileName.slice(-3) == "png" ){
    console.log("It is an image file")
} 
else{
    console.log("It is not an image file")
}
//2nd method
let chunk = fileName.split('.');
let extension2 = chunk[1];

//3rd method: using with ensWith
if(fileName.endsWith("jpg") || fileName.endsWith("png")){
    console.log("It is an image")
}else {
    console.log("It is not an image")
}

let text = "Hello planet earth, you are a great planet.Hello planet earth, you are a great planet";
let result = text.lastIndexOf("planet", 50);
console.log(text.length)
console.log(result)