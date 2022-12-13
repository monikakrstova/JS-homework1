function dogYears (humanYears) {
    let dogYears = humanYears * 7;
    return dogYears;
}

function humanYears (dogYears) {
    let humanYears = dogYears / 7;
    return humanYears;
}

let personChoice = prompt(`Enter HY for human yaers and DY for dog years.`);
let userInput = Number(prompt(`Please insert value:`));

if (personChoice === "HY") {
    console.log(`${userInput} dog years is ${humanYears (userInput)} human years.`);
}else if (personChoice=== "DY") {
    console.log(`${userInput} human years is ${dogYears(userInput)} dog years.`)
}else {
    console.log(`Invalid input.`)
}