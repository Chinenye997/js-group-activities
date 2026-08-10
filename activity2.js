/*Part 1: Group Discussion
1. What's the difference between the + operator used for math and the +
operator used for joining strings? How does JavaScript decide which one to
do?
2. Compare this line written two ways: "Hello, " + name + "! You are " + age + "
years old." vs `Hello, ${name}! You are ${age} years old.` Which do you find
easier to read, and why?
3. What would happen if you tried to add a number and a string together, like 5 +
"5"? Discuss your predictions before checking.
4. Why do you think template literals use backticks (`) instead of regular quotes?*/


// ================== No 1 ===========================
//let age = 20;
//let extraYear = 4;

// console.log(age + extraYear); // this means addition. Number

//  let firstName = "Gift";
// let lastNmae = "Chinenyenwa";

//console.log(firstName + " " + lastNmae); // this means join. concatenation

// =========== No 2 ========================

// concatenation
let name = "Gift";
let age = 24;
console.log("Hello, " + name + "! You are" + age + " years old.");

// template literals
let userName = "Chi";
let yearsOld = 25;
console.log(`Hello, ${userName}! you are ${yearsOld} yers old.`); // This is better to read and write


// ============== No 3 ==========================

console.log(5 + "5"); // js treat this as a string. So it join the two together = output 55

console.log(5 + 5); // js treat this as a number. So it add the two together = output 10


// =============== No 4 ===================

/*The backticks tell JavaScript: This is a template literal, so I may want to insert variables or expressions using ${}. eg*/

console.log(`Hello, ${userName}! you are ${yearsOld} years old.`);

// You can also 
console.log(`Next year, you will be ${yearsOld + 1}.`)


/*Part 2: Predict the Output
Snippet A*/

let a = 10;
let b = "5";

console.log(a + b); // output = 105
console.log(a - b); // output = 0

// Snippet B

// let price = 20;
// let quantity = 3;
// console.log(`Total cost: $${price * quantity}`); // the output is going to be = Total cost: $60

// Snippet C

let x = 4;
let y = 2;
console.log("Result: " + x + y); // output = Result = 42 
console.log("Result: " + (x + y)); // output = Result = 6

// Part 3: Debugging Challenge

let firstName = "Tundo "; // Their were no space here before
let lastName = "Okafor";
let fullName = firstName + lastName  ;
console.log("Welcome, " + firstName + lastName );

// ============= No 4 ==============================
//Part 4: Collaborative Technical Challenge
// Part 4: Receipt Generator

/*Before coding, let's write our steps in plain English.

Ask the user for the item name.
Ask the user for the price.
Ask the user for the quantity.
Convert the price into a number.
Convert the quantity into a number.
Multiply the price by the quantity.
Store the result in a total variable.
Use a template literal to create the receipt.
Display the receipt using console.log().*/

let itemName = prompt("Enter the item name: ");
let price = Number (prompt("Enter the price: "));
let quantity = Number(prompt("Enter the quantity: "));
let discount = Number(prompt("Enter discount amount: "));

let total = price * quantity;
let finalTotal = total - discount; 

let receipt = `${itemName} - $${price.toFixed(2)} * ${quantity} = $${finalTotal.toFixed(2)}`;
console.log(receipt); 
