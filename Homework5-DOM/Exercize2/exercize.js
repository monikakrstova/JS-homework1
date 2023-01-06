let weight;
function weightInChicken (input){
   weight = input / 0.5;
   return weight;
}
let myTitle = document.getElementById("title");
myTitle.innerText = `WEIGHT CALCULATOR IN CHICKENS`;
let myResult = document.getElementById("content");
let input = parseInt(prompt("please enter your weight in kilograms:"));
//console.log(weightInChicken(input));


if (!isNaN(input)){
    myResult.innerText = `Your weight in chickens is ${weightInChicken(input)}.`
} else {
    myResult.innerText = `Sorry! Wrong input`
}


