
function convertFahrenheitToCelsius (celsius) {
    let resultCelsius = (celsius * 1.8) + 32;
    return resultCelsius;
}
function convertCelsiusToFahrenheit(fahrenheit) {
    let resultFahrenheit= (5/9) * (fahrenheit-32);
    return resultFahrenheit;
}

let personChoice = prompt("Enter F for fahrenheit and C for celsius");
let input = parseInt(prompt(`Please insert value:`));

if (personChoice === "F"){
    console.log(`${convertCelsiusToFahrenheit(input)}C`);
}else if (personChoice === "C"){
    console.log(`${convertFahrenheitToCelsius(input)}F`);
}else {
    console.log(`Invalid input, please enter valid number.`);
}


