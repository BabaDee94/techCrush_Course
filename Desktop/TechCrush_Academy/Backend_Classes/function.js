//without parameter

function welcomeMessage(){
    console.log("Welcome back, Adedayo!")
}

welcomeMessage();

//with parameter
function goodbyeMessage(name){
    console.log("see you next time"  + name)
}

goodbyeMessage(" Adedayo")
//Note Name in line 7 is called a parameter while, Adedayo on line 11 is an Argument.

let x = 5
let y = 10
console.log(x + y)

function add(){
    let a = 5 
    let b = 10
    console.log(a)
    console.log(b)
    return a + b 
}

console.log(add())

function addition(a , b){
    return a + b
}

console.log(addition(2 , 3))
console.log(addition(2 , 7))

// comparison function return true or false.
function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isAdult(16))