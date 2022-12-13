var currentYear;
let userInput = prompt(`Please enter your birth year:`);
let birthYear = Number(userInput);
let Year = new Date ().getFullYear()
function calculateAge (birthYear, currentYear=new Date ().getFullYear()) {
let age = currentYear - birthYear;
return age;
}


calculateAge (birthYear, currentYear);
console.log(`You are ${calculateAge (birthYear, Year)} years old.`);

console.log(calculateAge(1971));
console.log(calculateAge(2015));
console.log(calculateAge(1939));