//25/03/2026 class work.
// *Task*: Given this string:
// const msg = "  Hello, WORLD!  ";
// Do the following (write code):
// 1. Remove extra spaces.
// 2. Check if it starts with "Hello".
// 3. Check if it ends with "WORLD!".
// 4. Convert to lowercase.
// 5. Find position of "WORLD".
// 6. Replace "WORLD" with "Nigeria".
// 7. Replace all "L" with "1".
// 8. Get characters from position 3 to 8.

//SOLUTION
// const msg = "   Hello, World";
// let trimmedMsg = msg.trimStart();
// let startMsg = msg.startsWith("Hello")
// let endMsg = msg.endsWith("World")
// let msgCase = trimmedMsg.toLocaleLowerCase();
// let msgPosition = msg.indexOf("World")
// let changedMsg = msg.replace("World", "Nigeria")
// let changeAllMsg = msg.replaceAll("l", "1")
// let msgCharacter = msg.slice(3, 8)
// let msgCharacter2 = msg.substring(3, 8)

// console.log(trimmedMsg)
// console.log(startMsg)
// console.log(endMsg)
// console.log(msgCase)
// console.log(msgPosition)
// console.log(changedMsg)
// console.log(changeAllMsg)
// console.log(msgCharacter)
// console.log(msgCharacter2)


//3/03/2026
//question 1

const numbers = [1, 2, 3, 4, 5];
let numberResult = numbers.map((number) => {
    return number * 2;
});

console.log(numbers)
console.log(numberResult);

const scores = [250, 300, 350, 200, 400, 180, 160]
let scoresResult = scores.filter((number) => {
    return number >= 300;
});

// let scored = scores.map((number) => {
//     return number >= 300;
// });

console.log(scoresResult)
console.log(scored)

const sum = [2000, 3000, 400, 100, 600];
let sumResult = sum.reduce((number) => {
    return number
})

console.log(sumResult)

let color = ["Blue", "Yellow", "Red"];

