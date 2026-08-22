//PART 1: GROUP DISCUSSION
//No.1
//A ternary operator is a shorter way of writing a simple if/else statement. 
// It has three parts: condition ? valueIfTrue : valueIfFalse

//No. 2
//Not directly. A ternary operator is designed for two possible outcomes: one when the condition is true and one when it is false.

//No. 3:A ternary operator can become confusing when there are many conditions or nested ternary operators.

//PART 2:Predict the Output
//Snippet 1: 
//Answer: Pass
//Because 72 >= 50 is true.

//Snippet 2:
//Answer: Your cart is empty
//Because cartTotal is 0, so cartTotal > 0 is false.

//Snippet 3:
//Answer: Stock status: Available
//Because stock > 0 is true.

//PART 3: Debugging Challenge
//The error:
//1. Missing colon (:) in the first ternary operator
//2. Missing question mark (?) in the second ternary operator
//Corrected Copy
let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold";
console.log(feeling);

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`);