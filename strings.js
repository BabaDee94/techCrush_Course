//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length);

let listOfSiblings = "Oluwakemi, Kayode, Sarah, Olumide, Blessing, Taiwo & Kehinde, Eniola and Ayomide"
console.log(listOfSiblings.length);
// Note: String length count all the text in the strings including the space; array count in groups

//They are two type of function: User defined(they are created by the users e.g add function) and inbuilt function(Js gave the right to use it, so it is identify as METHOD) METHOD: are inbuilt function from Js.
//toUppercase and lowerCase Method
let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLocaleLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//Trim
let str = "     Hello, World!       "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)


let signupName = "  Adedayo"
let signinName = "Adedayo"


if (signupName === signinName){
    console.log("Welcome back, Adedayo")
}else {
    console.log("Invalid login information") 
}
//removing the trim
if ((signupName.trim()) === signinName){
    console.log("Welcome back, Adedayo")
}else {
    console.log("Invalid login information") 
}

//Naming convention type
//1. separating name with underscore is called SNAKE CASING e.g is_come
//1. separating name by Capitalizing every word is called CAMEL CASING e.g isCome


//IndexOf and includes
//THEY ARE SEARCH METHOD
//indexof will return -1 if nothing is found.
//indexof will return the first occurrence/match in the string 
//indexof return number, and it expecting a parameter i.e what you're searching for.
//index start count from zero
let user_email = "olexcoded@yahoo@techcrush.com"
let email_index = user_email.indexOf("@")// Note if the value then it gives you -1
console.log(email_index)            //Index return NUMBER

//includes return Boolean
//
let emailContainer_at = user_email.includes("@")//return datatype : boolean
console.log(emailContainer_at)


//STARTWHITH AND ENDWITH
//Return datatype is boolean
let userName = "techCrush Adedayo 6"
let starts = userName.startsWith("techCrush")
console.log(starts)

let ends = userName.endsWith("6")
console.log(ends)



//25/03/2025

//SLICE AND SUBSTRING ---RETURN DATATYPE IS A STRING 
//THEY CUT OUT A PORTION OF A STRING
// NOTE: INDEX START COUNTING FROM 0 WHILE .LENGTH STARTS WITH 1.
//SUBSTRING SEE NEGATIVE VALUE AS 0
//SLICE CAN TAKE NEGATIVE VALUE BUT START FROM THE BACK.

let testString = "my name is Adedayo!";
let slicedString = testString.slice(0, 11);
let substringString = testString.substring(0, 10);
console.log(slicedString);
console.log(substringString);

//REPLACE AND REPLACE ALL
//REPLACE: SWAPS OUT TEXT INSIDE A STRING; ONLY THE FIRST MATCH IT FINDS
//REPLACE ALL: CHANGE EVERY MATCH

let text = "Olu is a techie. Olu loves coding and Olu loves cooking";
let replaceText = text.replace("Olu", "He");
let replaceAllText = text.replaceAll("Olu", "He");
console.log(replaceText);
console.log(replaceAllText);


//SPLIT
//IS USE TO CONVERT SPRING TO ARRAY of smaller strings
//return type for split METHOD  is and ARRAY
//whatsoever you are separating with as to be in the expression
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentences = sentence.split(" ")
console.log(splitSentences)

let example = "She is a girl, she is a teacher, she is eating"
console.log(example.split(""))















//ASSIGNMENT
//Difference between .toLocalUpperCase and to.UpperCase