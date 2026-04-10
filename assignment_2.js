// 31-03-2026
//Assignment
//SECTION A
// QUESTION 1
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(number => 
    console.log(number * 2));

// QUESTION 2

const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(detail =>
    console.log("Hello" , detail + "!")
);

//SECTION B
//QUESTION 3
const details = [1, 2, 3, 4, 5];
let result = details.map((number) => {
    return number * number;
});
console.log(details)    
console.log(result)

//QUESTION 4
const prices = [100, 200, 300];
// const discountedPrice = 0.10;

let discountPrice = prices.map((number) => {
    return number * 0.9;
});

console.log(prices)
console.log(discountPrice)

//QUESTION 5
const given = [5, 12, 8, 20, 3];
let givenResult = given.filter((number) => {
    return number > 10
});

console.log(given)
console.log(givenResult)

//QUESTION 6
const ages = [15, 22, 17, 30, 18];
let ageResult = ages.filter((number) => {
    return number >= 18
});

console.log(ages)
console.log(ageResult)


