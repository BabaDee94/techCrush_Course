// //ONLINE BOOK STORE ASSIGNMENT.
// const customerName = "Esther";
// let customerAge = 33;
// const bookTitle = "Introduction to JavaScript By TechCrush";
// let bookPrice = 5000;
// let quantity = 5;
// let isStudent = true;
// console.log(customerName);
// console.log(customerAge);
// console.log(bookTitle);
// console.log(quantity);
// console.log(isStudent);

// // Task 2: Use Arithmetic Operators
// let totalPrice = bookPrice * quantity;
// console.log(totalPrice);
// // Task 3: Use Comparison Operators
// let isAdult = customerAge >= 18;
// let buyingManyBooks = quantity >= 3;
// let isBookFiveThousand = bookPrice === 5000;
// console.log(isAdult);
// console.log(buyingManyBooks);
// console.log(isBookFiveThousand);
// // Task 4: Use a Non-Primitive Data Type
// let customerOrder = { customerName: "Esther", bookTitleTitle: "Introduction to JavaScript By TechCrush", quantity: "5", totalPrice: "25000"};
// console.log(customerOrder);


// Good evening 
// This is the full details of the assignment from the portal 


// *1. Substring & Slice*
// - Given `const str = "Nigeria is awesome";`
// - Extract "Nigeria" using `substring()`.
// - Extract "awesome" using `slice()`.
// - Get "is" using `slice()`.

const str = "Nigeria is awesome";
let substringStr = str.substring(0, 7);
let sliceStr = str.slice(11, );
let sliceStrIs = str.slice(8, 11);

console.log(substringStr);
console.log(sliceStr);
console.log(sliceStrIs);

// *2. Split*
// - Given `const names = "John,Jane,Doe";`
// - Split into an array using comma `,`.
// - Join with space instead: `"John Jane Doe"`.
// - Given `const path = "/user/home/docs";`
// - Split by `/` → `["", "user", "home", "docs"]`
// - Get "home" using split & index.

const names = "John,Jane,Doe";
let nameSplit = names.split(",");
let nameSplitSpace = nameSplit.join(" ");

console.log(nameSplit);
console.log(nameSplitSpace);

const path = "/user/home/docs";
const parts = path.split("/"); 
const home = parts[2];

console.log(parts);
console.log(home); 




// *3. Mix*
// - Given `const email = "user@example.com";`
// - Get username (`user`) using `split()`.
// - Check if it's a `.com` domain using `endsWith()`.
// - Replace `@` with `AT` using `replace()`.

const email = "user@example.com";
const username = email.split("@")[0];
const isCom = email.endsWith(".com");
const replacedEmail = email.replace("@", "AT");

console.log(username);    
console.log(isCom);        
console.log(replacedEmail);


