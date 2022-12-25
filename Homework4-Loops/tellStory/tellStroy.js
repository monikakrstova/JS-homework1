
const array1 = ["John", "happy", "playing tennis"];
//console.log(`This is ${array1[0]}.${array1[0]} is a nice person. Today they are ${array1[1]}. They are ${array1[2]} all day.`);






// function tellStory(array){
//     for (let i = 0; i < array1.length; i++){
//         story = `This is ${x[0]}.${x[0]} is a nice person. Today they are ${x[1]}. They are ${x[2]} all day.`
//     }
//     return story;
// }

// console.log(tellStory(array1));

function tellStory(array){
    for (const el of array){
        if (typeof el !== "string"){
            return "Invalid"
        }
    }
    return `This is ${array[0]}.${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day.`;
}

console.log(tellStory(["Mendi", "Sad", "working"]));