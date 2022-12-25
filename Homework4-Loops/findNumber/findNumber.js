function findNumber (number, array){
    let occurences=0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number){
            occurences++;
        }
    }
    return occurences;
}
let input = parseInt(prompt("Enter a number:"));
numberArray = [1, 2, 6, 2, 3, 8, 1, 6];
console.log(`There are ${findNumber(input, numberArray)} occurencies of ${input} in the array.`);