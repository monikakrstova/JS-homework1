// let calculation = [];

// function getLastCalculationPart() {
//   return calculation[calculation.length - 1];
// }

// function getIsLastPartADigit() {
//   const lastCalculationPart = getLastCalculationPart();
//   const isLastPartADigit =
//     lastCalculationPart !== undefined && lastCalculationPart.type === "digit";
//   return isLastPartADigit;
// }

// function clear() {
//   calculation = [];
// }

// function deleteLastPart() {
//   calculation = calculation.slice(0, -1);
// }

// function pickDigit(digit) {
//   calculation.push({
//     type: "digit",
//     value: String(digit),
//   });
// }

// function pickOperator(operator) {
//   if (!getIsLastPartADigit()) {
//     return;
//   }

//   if (operator === "=") {
//     const result = calculateExpression();
//     console.log(result, "bingo");
//     return;
//   }

//   calculation.push({
//     type: "operator",
//     value: operator,
//   });
// }

// function getNumberFromCalculationParts(calculationParts) {
//   const numberStringValue = calculationParts.reduce()
//     (result, part) => ${result}${part.value},
//     ""

//   return Number(numberStringValue);
// }

// function calculateExpression() {
//   const operatorIndex = calculation.findIndex(
//     (part) => part.type === "operator"
//   );

//   if (operatorIndex === -1) {
//     return "Error";
//   }

//   const operator = calculation[operatorIndex].value;
//   const operandLeftParts = calculation.slice(0, operatorIndex);
//   const operandRightParts = calculation.slice(operatorIndex + 1);

//   const operandLeftValue = getNumberFromCalculationParts(operandLeftParts);
//   const operandRightValue = getNumberFromCalculationParts(operandRightParts);

//   switch (operator) {
//     case "+":
//       return operandLeftValue + operandRightValue;
//     case "-":
//       return operandLeftValue - operandRightValue;
//     case "/":
//       return operandLeftValue / operandRightValue;
//     case "*":
//       return operandLeftValue * operandRightValue;

//     default:
//       return "Issue";
//   }
// }

// function renderInput() {
//   return calculation.map((calculationPart) => calculationPart.value).join("");
// }
