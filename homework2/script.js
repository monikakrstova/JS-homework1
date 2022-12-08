
let birthYear = prompt(`Please enter the year you were born:`);
let inputBirthYear = parseInt(birthYear);
chineseZodiac = ((inputBirthYear-4) % 12);
console.log(chineseZodiac)
if (chineseZodiac == 0){
    console.log(`You Chinese Zodiac sign is Rat`);
}else if(chineseZodiac == 1) {
    console.log(`You Chinese Zodiac sign is Ox`);
}else if(chineseZodiac == 2) {
    console.log(`You Chinese Zodiac sign is Tiger`);
}else if(chineseZodiac == 3) {
    console.log(`You Chinese Zodiac sign is Rabbit`);
}else if(chineseZodiac == 4) {
    console.log(`You Chinese Zodiac sign is Dragon`);
}else if(chineseZodiac == 5) {
    console.log(`You Chinese Zodiac sign is Snake`);
}else if(chineseZodiac == 6) {
    console.log(`You Chinese Zodiac sign is Horse`);
}else if(chineseZodiac == 7) {
    console.log(`You Chinese Zodiac sign is Goat`);
}else if(chineseZodiac === 8) {
    console.log(`You Chinese Zodiac sign is Monkey`);
}else if(chineseZodiac == 9) {
    console.log(`You Chinese Zodiac sign is Rooster`);
}else if(chineseZodiac == 10) {
    console.log(`You Chinese Zodiac sign is Dog`);
}else if(chineseZodiac == 11) {
    console.log(`You Chinese Zodiac sign is Pig`);
}
