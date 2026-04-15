//STRING METHOD PRACTICE TEST

//SUBSTRING & SLICE
const str = "Coding is fun";
//Extract "Coding" using substring()

let codingExtracted = str.substring(0, 6)

console.log(codingExtracted)

//Extrat "FUn" using slice()
let strSlice = str.slice(10, 13)
console.log(strSlice)

//Get "is" using slice()
let getIs = str.slice(7, 9)
console.log(getIs)

//SPLIT: divide strings; join concat    
//Split in an array using comma
const color = "red,green,blue"
let splitComma = color.split(",")
console.log(splitComma)

//join with `-` instead
let joint = splitComma.join(" - ") //join is the opposite of split.
console.log(joint)

const url = "/api/v1/users"
//split by /
let slash = url.split("/")
console.log(slash)

//example
console.log("Adedayo Olumide Adenle".split(" ").join(" - "))

const urlIndex = "/api/v1/users"
//get A1 with split and index /
let slashIndex = url.split("/")
console.log(slashIndex[2])

const matricNumber = "TECHCRUSH-ADEDAYO-2026";
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1])

//MIX
const email = "test@school.edu"
const getTest = email.split("@")
console.log(getTest)//OR
console.log(getTest[0])

const getUserTest = getTest[0]
console.log(getUserTest)

//replace @ with AT
const replace = email.replace("@", "AT")
console.log(replace)