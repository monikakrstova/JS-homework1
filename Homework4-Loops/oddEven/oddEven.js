function findNumber(array, type){
    let result = [];
    if (type === "even"){
        for (let num of array ) {
            if (num % 2 === 0){
                result.push(num);
            }

        }
    return result;
} else if (type === "odd"){
    for (let num of array){
        if (num % 2 !== 0){
            result.push(num);
        }
    }
    return result;
}else {
    console.log("The type was not correct. Please enter odd or even");
    return null;
    }
}


//const newArray = findNumber([1, 1, 2, 2, 5, 6], "odd");
const newArray = findNumber([1, 1, 2, 2, 5, 6], "even");
console.log(newArray);