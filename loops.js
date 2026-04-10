//For loops
// synthax
// for(start; condition; update){
//     code to run;
// }


for(let i = 0; i <5; i++){
    // console.log(i)
}

// i++ is called increment

let arrayOfNames = ["Esther", "Adina", "John", "Doe", "Love"]
    console.log(arrayOfNames.length)
// Note that the .length property is responsible for the number of character returned. 
for (let i = 0; i< arrayOfNames.length; i++){
    console.log(arrayOfNames[i])
}
// The i can be replace by name.
// this is in the case we don't know the number, and to return one by one

for (let greetings = 0; greetings <3; greetings++){
    console.log("Hello World")
}

for (let x = 2; x<=26; x *=2){
    console.log(x)
}