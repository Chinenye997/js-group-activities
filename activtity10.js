//PART 1: Group Discussions
//No.1
//I think variables connect to the most concepts because almost every JavaScript program uses variables to store information. Variables are used with calculations, conditions, loops, functions, strings, arrays, and objects.

//No. 2
//JavaScript is a programming language that allows us to make websites and applications interactive and dynamic. It can take user input, perform calculations, make decisions, repeat tasks, manipulate information, and respond to user actions.

//No.3
//Breaking a program into small functions makes the code easier to understand, test, debug, and maintain. Each function can handle one specific task and can be reused whenever that task is needed.

//No.4
//Debugging taught me that mistakes are a normal part of programming. Instead of guessing, I should read the error carefully, check the code step by step, identify the problem, fix it, and test the program again.

//No.5
//I feel most confident with variables, conditionals, and functions because I understand how they work together to build programs. I am still a little shaky with loops and combining several concepts together, but practicing more examples will help me become more comfortable.

///PART 2: PREDICT THE OUTCOME
//Snippet A:
//Discount: $12
//Final total: $108

//Snippet B:
//1 is odd
//2 is even
//3 is odd
//4 is even

//Snippet C:
//Welcome, KELECHI!

//Step 1 — Understand the ProblemThe program acts as a point-of-sale checkout system. It collects item details from the user via prompts, parses the string inputs into numbers, calculates subtotal and shipping costs based on order threshold, and logs a formatted receipt to the console.

//Step 2 — Identify Inputs
// itemName: String (name of the product)
// priceInput: String converted to Number (price per item)
// quantityInput: String converted to Number/Integer (number of units ordered)

// Step 3 — Identify Processing
// Type Conversion: Parse priceInput using parseFloat() and quantityInput using parseInt().
// Subtotal Calculation: subtotal = price * quantity
// Shipping Decision: Apply a threshold 
// Grand Total Calculation: grandTotal = subtotal + shippingFee

//Step 4 — Identify Outputs
// A clean receipt printed to the console displaying:
// Item Name, Price, and Quantity
// Calculated Subtotal
// Shipping Fee status (Free vs. amount charged)
// Final Total Due

// Step 5 — Plan the Solution 
// Prompt user for itemName, itemPrice, and itemQuantity.
// Convert itemPrice to a floating-point number and itemQuantity to an integer.
// Pass itemPrice and itemQuantity to calculateSubtotal() to retrieve subtotal.
// Determine shipping cost using a ternary expression based on subtotal.
// Sum subtotal and shippingCost to get grandTotal.
// Pass all calculated values into generateReceipt() to print a template literal formatted output.

// Step 6 & 7 — Code & Testing
// Step 6: Code Implementation

// Helper Functions
const calculateSubtotal = (price, qty) => price * qty;
const getShippingFee = (subtotal) => (subtotal >= 50 ? 0 : 5.0);

const generateReceipt = (item, price, qty, subtotal, shipping, total) => {
  const shippingText = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  
  return `
========================================
            ORDER RECEIPT             
========================================
Item:          ${item}
Unit Price:    $${price.toFixed(2)}
Quantity:      ${qty}
----------------------------------------
Subtotal:      $${subtotal.toFixed(2)}
Shipping:      ${shippingText}
----------------------------------------
TOTAL DUE:     $${total.toFixed(2)}
========================================
  `;
};

// Main Checkout Process Function
function runCheckout() {
  // Collect inputs
  const rawItem = prompt("Enter item name:") || "Item";
  const rawPrice = prompt("Enter price per item:");
  const rawQty = prompt("Enter quantity:");

  // Type Conversion
  const price = parseFloat(rawPrice);
  const qty = parseInt(rawQty, 10);

  // Input Validation Guard
  if (isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
    console.log("Error: Please enter valid positive numbers for price and quantity.");
    return;
  }

  // Processing
  const subtotal = calculateSubtotal(price, qty);
  const shipping = getShippingFee(subtotal);
  const grandTotal = subtotal + shipping;

  // Output
  const receipt = generateReceipt(rawItem, price, qty, subtotal, shipping, grandTotal);
  console.log(receipt);
}

// Execute Checkout
runCheckout();

//Step 8 — Improve the Solution
//Refactoring Repeated Logic: Currency formatting (.toFixed(2)) and receipt string building were modularized into dedicated helper functions (getShippingFee and generateReceipt), keeping the execution clean.
//Readability: Variable names (subtotal, shipping, grandTotal) strictly represent their values, making the program easy to follow for new developers.