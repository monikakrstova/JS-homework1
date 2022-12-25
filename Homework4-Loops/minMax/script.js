const numberArray = [27, -27, 0, 3, 567, -65];

function sumOfMinAndMax (array){
    let max = -Infinity;
    let min = +Infinity;
    let sum = 0;

    for (let num of array){
        if (num >= max){
            max = num;
        }
        if (num <= min){
            min = num;
        }
    }
    return sum = max + min;
}
console.log(sumOfMinAndMax(numberArray));