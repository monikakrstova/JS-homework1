let myHeader = document.getElementById("myTitle");
// console.log(myHeader);
// console.log(myHeader.innerText);
// console.log(myHeader.outerText);

myHeader.innerText = "";
myHeader.innerText = `Yea! This is the new header!`;

let myParagraph = document.getElementsByClassName("paragraph");
let secondParagraph = document.getElementsByClassName("second")
myParagraph[0].innerText = `This is the changed paragraph.`;
//secondParagraph[1].innerText = `jvnd`;

console.log(myParagraph);
console.log(myParagraph[0]);
console.log(myParagraph[1]);

//let nextSibling = myParagraph,nextElementSibling;

//nextSibling.innerText = "";
//nextSibling.innerText = `This is the changed paragraph.`;


//HOMEWORK PART2

let myList = document.getElementById("list");
let numberArray = [1, 26, 365, -27, 39, 52, 14, 76];

myList.innerHTML = "";

for (let number of numberArray) {
    myList.innerHTML += `<li>${number}</li>`;
}
    function sum(array){
    let sum = 0;
    let counter = 0;
    for (let i=0; i<array.length; i++){
        sum +=array[i];
    }
    counter ++;
    return sum;
 };
 result=sum(numberArray);


 myList.innerHTML += `The sum of numberArray is ${result}.`;