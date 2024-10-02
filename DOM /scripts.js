let inputweight =document.querySelector("#weight");

let inputheight =document.querySelector("#height");

let button = document.querySelector("#calculate")

button.addEventListener("click",function() {
   let weightTextBox =document.querySelector("#weight");
   let weight = Number(weightTextBox.value);

   let height =Number(document.querySelector("#weight").value);

   let bmi =weight/ height **2;

   let resultDiv =document.querySelector("results");
   resultdive.innerHTML = `Your BMI is ${bmi}`;"

   alert(bmi);
});