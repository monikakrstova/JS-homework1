function sum (x, y) {
    if (Number.isNaN(x) || Number.isNaN (y) || typeof x !== "number" || typeof y !== "number"){
        return "invalid input";
    }
    let result = x + y;
    return result;
}

let userInput = prompt("Enter first number:");
let userInput1 = prompt("Enter second number:");

let firstNumber = Number(userInput);
let secondNumber = parseFloat(userInput1);

console.log (`The result of the function sum is: ${sum(firstNumber, secondNumber)}`);

function subtract (x, y) { 
    if (Number.isNaN(x) || Number.isNaN (y) || typeof x !== "number" || typeof y !== "number"){
    return "invalid input";
}
let result = x - y;
return result;
}

console.log (`The result of the function subtract is: ${subtract(firstNumber, secondNumber)}`);


function multiply (x, y) {
    if (Number.isNaN(x) || Number.isNaN(y) || typeof x !== "number" || typeof y !== "number") {
        return  "invalid input";
    }
    let result = x * y;
    return result;
}

console.log(`The result of the function multiply is: ${multiply(firstNumber, secondNumber)}`);

console.log(`${sum (firstNumber, secondNumber)}`);

function division (x, y) {
    if (Number.isNaN(x) || Number.isNaN(y)){
        return "invalid input";
    }
    let result = x / y;
    return result;
}

console.log(`The result of the function division is: ${division(firstNumber, secondNumber)}`);

