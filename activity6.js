// Activity 6: Shortcuts and Choices
// Ternary Operators (with review of Conditional Statements)

let age = 10;
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

// A ternary lets us write that same simple decision in one line. eg
console.log(age >= 18 ? "Adult" : "Minor");


// Part 2: Predict the Output
// Snippet A

let score = 72;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // pass

// Snippet B
let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "your cart is empty";
console.log(message); // your cart is empty


// Snippet C
let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`); // Stock status: Available



// Part 3: Debugging Challenge

let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold"; // this : fix 
console.log(feeling); // this ; was fix

let isMember = true; // this ; was fix
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}`); // this ` was fix