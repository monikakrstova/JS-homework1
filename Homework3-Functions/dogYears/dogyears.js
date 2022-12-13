function dogYears (humanYears) {
    let dogYears = humanYears * 7;
    return dogYears;
}

function humanYears (dogYears) {
    let humanYears = dogYears / 7;
    return humanYears;
}

let personChoice = prompt(`Enter HY for human yaers and DY for dog years.`).toLowerCase();
let userInput = Number(prompt(`Please insert value:`));

if (personChoice === "hy") {
    console.log(`${userInput} dog years is ${humanYears(userInput)} human years.`).toFixed(2);
}else if (personChoice=== "dy") {
    console.log(`${userInput} human years is ${dogYears(userInput)} dog years.`).toFixed(2);
}else {
    console.log(`Invalid input.`)
}