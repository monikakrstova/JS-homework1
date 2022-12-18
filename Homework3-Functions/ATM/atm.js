//function atm() {
//   var withdraw;
//   withdraw = parseInt(
//     prompt(`Please enter the amount you want to withdrawn:`)
//   );
//   let availableBalance = 26000;
//   let moneyLeft = availableBalance - withdrawn;
//   if (withdraw !== "" && withdraw !== null && !isNAN(withdraw));
//     if (withdraw >= 26000) {
//     console.log("Not enough money.");
//     } else if (withdraw <= 2600) {
//     console.log(
//       `Your withdrawn amount is ${withdraw}, and your available balance is ${moneyLeft(availableBalance)}.`
//     );
//     } else {
//     console.log(`Thank you for using our ATM.`)
//   } {
//   console.log(`ERROR, Please try again.`)
//   return moneyLeft;
// }
let availableBalance = 26000;
function deposit () {
  var depositAmount = parseInt(prompt("How much money do you want to deposit?"));
  if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
    if (depositAmount >= 50) {
      if (depositAmount <= availableBalance) {
        currentBalance -= depositAmount;
        alert("Transaction successful!");
        alert("Your ramaining balance is $" +currentBalance);
      } else {
        alert("You do not have sufficient funds!");
        depositAmount ()
      } 
    } else {
      alert ("You must deposit at least $50");
      depositAmount ();
    }
  } else {
    alert ("ERRPR: please enter a number!")
    depositAmount ();
  }
}