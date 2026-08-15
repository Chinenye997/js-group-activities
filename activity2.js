//  PART 1: GROUP DICUSSION
//  1a. The + sign is used for both addition and concatenation (joining strings) in Jscript
//  1b. Javascript uses + for addition when the next variable is a number and uses it for concatenation when the next or both variable are strings.

//  2."Hello, " + name + "! You are " + age + " years old."
//  There are too many + signs in this, thereby making it complicated for users to comprehend
//  `Hello, ${name}! You are ${age} years old.`
// This is more preferable and understandable as it is in plain english and the $(name) indicates that variables will still be added there

//  3.  JavaScript sees the + operator with a string involved, it treats the operation as string concatenation rather than mathematical addition
//  so 5 + "5" will become = 55 instead of "10"


//PART 2:
// SNIPPET A
let a = 10;
let b = "5";

console.log(a + b);
//  since a is just a number and b is a string.JS will treat this as a string concatenation and produce is as
// 10 + "5" = 105

//  AND

console.log(a - b);
//  The - operator is only used for mathematical subtraction. JavaScript converts "5" to the number 5.

// Ans: 10 - "5" → 5

// SNIPPET B
let price = 20;
let quantity = 3;

console.log(`Total cost: $${price * quantity}`);

// JS calculates - 20 × 3 = 60 
// Total cost: $60

//PART 3: DEBUGGING CHALLENGE
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;
console.log("Welcome, " + fullname + "!");

//There are two errors:

//  There is a missing + between "" and lastName.
//  fullName was declared with a capital N, but fullname was used in console.log().

//FIXING IT:
let firstName = "Tunde";
let lastName = "Okafor";

let fullName = firstName + " " + lastName;

console.log("Welcome, " + fullName + "!");

//  PART 3:
let itemPrice = "15";
let total = itemPrice + 5;

console.log(`Your total is $${total}`);

// The Problem
//  itemPrice is stored as a string

// Fixing it:
let itemPrice = Number("15");
let total = itemPrice + 5;

console.log(`Your total is $${total}`);

//  PART 4:
// Step 1: The goal is to design a program that calcuates a total cost, displays a wel formatted receipt by asking the user for name of an item, quantity and price per unit.

//  Step 2: Item, Price and Quantity 

//  Step 3: Total = Quantity x Unit price

//  Step 4: Item name, Price, Quantity and Total cost

//  Step 5: Consultation process
//  Ask the user for the item name.
//  Ask for the item price.
//  Convert the price to a number.
//  Ask for the quantity.
//  Convert the quantity to a number.
//  Multiply the price by the quantity.
//  Format the total to two decimal places.
//  Use a template literal to create the receipt.
//  Display the receipt using alert() or console.log().

//  Step 6: Write code
let itemName = prompt("What is the item name?");
let itemPrice = Number(prompt("What is the price?"));
let quantity = Number(prompt("How many are you buying?"));

let total = itemPrice * quantity;

console.log(
  `Item: ${itemName} | Price: $${itemPrice.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
);

//  Step 7: Testing the Program



//  PART 5





