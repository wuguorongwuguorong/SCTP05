const prompt = require("prompt-sync")();

let math = null;
let Science = null;
let english = null;

//function getScore (){
  //  if(math > 50 && Science > 50 && english > 50){
  //      console.log("Switch");
  //  }else if(math > 50 && english > 50){
  //      console.log("Voucher");
  //  }else{
   //     console.log("Nothing")
   // }
 
//}

//getScore();

while(true){
    math =parseInt(prompt("What your score for Math:"));
    science =parseInt(prompt("What your score for science:"));
    english =parseInt(prompt("What your score for english:"));

    if(math > 50 && Science > 50 && english > 50){
        console.log("Switch");
             
 } else if(math > 50 && english > 50){
    console.log("Vocuher");
    
 }
   else{
    console.log("Nothing")
   
   }
}