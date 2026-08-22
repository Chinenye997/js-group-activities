//PART 1
//No. 1
//A vending machine is similar to a function because both receive inputs, process them, and produce an output.

//No. 2
//Parameter = placeholder
//Argument = actual value

//No. 3
//Avoid repetition
//Save time
//Make code easier to read
//Make code easier to maintain
//Make it easier to fix errors

//No.4 
//Nothing happens when the program runs.
//Declaring a function only tells JavaScript what the function should do. The code inside it doesn't execute until the function is called.

//No.5
//Yes! A function can have multiple parameters.

//PART 2:
//Snippet A:
//Hello, Ifeoma!
//Hello, David!

//Snippet B:
//11
//NaN

//Snippet C:
//Before calling function
//Hi there!
//After calling function

//PART 3: DEBUGGING CHALLENGE
//Error:
//Capitalization/Naming Mismatch: The function is declared with a lowercase c as calculateArea, but called on the last line with an uppercase C as CalculateArea(5, 10). JavaScript is case-sensitive, so this throws a ReferenceError: CalculateArea is not defined.
//Missing Return Value: calculateArea logs the result directly using console.log rather than returning the value with return, which limits its reusability if you need to capture or calculate with that value later.

//Correct Code:
function calculateArea(length, width) {
  return length * width;
}

function displayMessage(msg) {
  console.log(msg);
}

displayMessage("Area calculator ready");
console.log(calculateArea(5, 10)); // Fixed casing to match function declaration

//PART 4:COLLABORATIVE TECHNICAL CHALLENGE
//Step 1 — Understand the Problem
//Tip Calculation Function: Computes the tip amount based on the initial bill total and tip percentage.
//Display Function: Takes calculated figures and prints a user-friendly summary message to the console.

//Step 2 — Identify Inputs
//Tip Function: Needs billAmount (number) and tipPercentage (number).
//Display Function: Needs billAmount (number), tipAmount (number), and totalAmount (number).

//Step 3 — Identify Processing
//Tip calculation: tipAmount = billAmount * (tipPercentage / 100)
//Total calculation: totalAmount = billAmount + tipAmount

//Step 4 — Identify Outputs
//Tip Function: Returns tipAmount (number).
//Display Function: Logs formatted strings to the console (returns undefined).

//Step 5 — Plan the Solution
//Create three dedicated functions:
//calculateTip(bill, percentage) — calculates and returns tip.
//displaySummary(bill, tip, total) — formats and logs summary.
//splitBill(total, numberOfPeople) — calculates and returns amount per person (Extension).

//Step 6 & 7 — Code & Testing
// Step 6: Define Functions

// 1. Tip Calculator Function
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

// 2. Display Function
function displaySummary(billAmount, tipAmount, totalAmount) {
  console.log("--- Receipt Summary ---");
  console.log(`Bill Subtotal: $${billAmount.toFixed(2)}`);
  console.log(`Tip:           $${tipAmount.toFixed(2)}`);
  console.log(`Total Due:     $${totalAmount.toFixed(2)}`);
}

// Extension: Part 5 Function
function calculateSplit(totalAmount, numberOfPeople) {
  if (numberOfPeople <= 0) return totalAmount;
  return totalAmount / numberOfPeople;
}


// Step 7: Test the Program

let bill = 100;
let tipPercent = 15;
let groupSize = 4;

// Run Toolkit
let tip = calculateTip(bill, tipPercent);
let grandTotal = bill + tip;
let amountPerPerson = calculateSplit(grandTotal, groupSize);

// Output Results
displaySummary(bill, tip, grandTotal);
console.log(`Split (${groupSize} people): $${amountPerPerson.toFixed(2)} per person`);
