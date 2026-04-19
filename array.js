let items = ["milk", "milo", "rice"]
console.log(items)
console.log(items[0])
console.log(items.length)

//Note: .length return number of characters that we have starting from 1.

//two type of array methods
//1. higher other array methods and array methods

//FOREACH METHOD
let fruits = ["apple", "banana", "orange", "grape", "mango"]
fruits.forEach(function(fruit){
    console.log("I eat " + fruit)
});

let names = ["Esther", "Adedayo", "Samuel"]
names.forEach(function(name){ //NAMED FUNCTION
    console.log("TECH_CRUSH_2026_COHORT_6 " + name)
});

//MAP METHOD
let scores = [ 90, 80, 70, 60, 50]
let newScore = scores.map( score => score + 5)
console.log(newScore)

//OR

let scores2 = [ 90, 80, 70, 60, 50]
let newScore1 = scores2.map(score => {
    console.log("I'm the Adedayo")
    return score + 5
})
console.log(newScore1)