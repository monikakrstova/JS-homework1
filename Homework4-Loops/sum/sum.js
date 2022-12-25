function arrayToSum(array){
    let sum = 0;
    let counter = 0;
   for (let i = 0; i < array.length; i++){
        sum += array[i];  
        }
        counter++;
    
    return sum;
};
const array1 = [1, 2, 3, 4, 5];
const sum=arrayToSum(array1);
console.log(sum);

