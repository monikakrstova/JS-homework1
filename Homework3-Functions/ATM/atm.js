let availableBalance = 26000;
let userInput = prompt(`Please enter the amount you want to withdrawn:`);
let requestMoney = parseFloat(userInput);
let moneyLeft;

function atm (availableBalance=26000, requestMoney){
    let moneyLeft = availableBalance - requestMoney;
    return moneyLeft;

}
if (requestMoney>=26000) {
    console.log("Not enough money.")
}else if (requestMoney<=2600){
    console.log(`Your withdrawn amount is ${requestMoney}, and your available balance is ${atm(moneyLeft)}.`)
}else {
    console.log(`ERROR, Please try again.`)
}
