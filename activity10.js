// Activity 10: Build-a-Program Challenge
/*1. Looking back at everything you've learned this course, which concept do you
think connects to the most other concepts? Why?*/
/*Answer = function.
Reason; is because it contain so many things we learnt so far. eg variables, calculations, conditionals, loops etc.
*/ 

// =============== No 2 ===================
// JavaScript allows a proram to store information, make decisions, repeat actions, and perform calculations. Also it make website interactive by responding to what users do.


// ======================== No 3 =======================
// Breaking a large program into smaller functions makes the code easier to read, test, debug, and reuse. Each function can focus on one specific task instead of having everything mixed together.


// ===================== No 4 =====================
/*Debugging taught us to read the error carefully, trace what the code is doing, and identify the exact part causing the problem before changing anything. We also learned that understanding why the error happened is more useful than just fixing it.*/


// ======================== No 5 ======================
/*We feel most confident with variables, conditionals, loops, and basic functions. We still need more practice with arrow functions and some of the more advanced function concepts.*/


// Part 2: Predict the Output
// Snippet A
const getDiscount = (total) => total >= 100 ? total * 0.1 : 0; // this was fix

let orderTotal = 120;
let discount = getDiscount(orderTotal);
console.log(`Discount: $${discount}`); // Discount: $12
console.log(`final total: $${orderTotal - discount}`); // final total: $108



// Snippet B
function classifyNumbers(limit){
    for(let i = 1; i <= limit; i++){
        console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd.`)
    }
}
classifyNumbers(4); 



// Snippet C
const formatName = (name) => name.trim().toUpperCase();

let rawInput = " Kelechi ";
console.log(`Welcome, ${formatName(rawInput)}!`); // Welcome, KELECHI!



// Activity 10 — Part 4: Order Checkout Program

let itemName = prompt("Enter the item name:");

let price = Number(prompt("Enter the price:"));

let quantity = Number(prompt("Enter the quantity:"));


function calculateSubtotal(price, quantity) {
    return price * quantity;
}


let subtotal = calculateSubtotal(price, quantity);

let shipping = subtotal >= 50 ? 0 : 5;

let finalTotal = subtotal + shipping;


console.log(`
Item: ${itemName}
Price: $${price.toFixed(2)}
Quantity: ${quantity}
Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}
Final Total: $${finalTotal.toFixed(2)}
`);