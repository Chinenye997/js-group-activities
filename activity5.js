/*Activity 5 — Decision Makers
Part 1 — Group Discussion ============ No 1 ==============*/

// if(isRaining){
//     console.log("Take an umbrella");
// }

//A program makes a decision when it checks a condition and chooses what action to take based on whether the condition is true or false.

//============== No 2 ========================
// = means Assign
let age1 = 10;
console.log(age1); // this means assign 10 inside age 


// == means LOOSE COMPARISON
let num = 5; // number
let num2 = "5"; // string
console.log(num == num2); // this means Are these two values equal? if their eual print true

// === means STRICT COMPARISON

let cup = 5; // number
let cutter = "5"; // string
console.log(cup === cutter); // Are the values equal AND are they the same data type? = false

// eg 2
let ages = 16;
if(ages === 16){
    console.log("Exactly 16."); // output = Exactly 16. means true
}


// ================ No 3 =====================
/* 3. If you have an if, an else if, and an else, can more than one block run? Discuss
and explain your reasoning.*/

let ageNumber = 20;
if(ageNumber < 16){
    console.log("Child");
}
else if(ageNumber < 18){
    console.log("Teenager")
}
else{
    console.log("Adult");
}
 // Answer = Adult because agenumber is not lessthen 20, and javaScript run from top to bottom.



 // ================= No 4 =====================
 /*4. How do && (AND) and || (OR) change the way a condition behaves? Can your
group come up with an everyday sentence that uses "and" versus "or"
logically?*/

// Answer - I will go outside if it is sunny AND I have finished my work. Means that the both conditions must be true for it to print true && operator, but if any of the coditions is false then the answer become false.
// eg &&

let isSunny = true;
let workFinished = true;

if(isSunny && workFinished){
    console.log("Go outside.");
}
else{
    console.log("Print it only Sunny");
}

// eg2 
/*let age2 = 25;
let hasID = true;
if(age2 >= 18 && hasID === true){
    console.log("You can enter.");
}
else{
    console.log("Wait you're not allow to enter.");
}*/


// Answer - I will drink tea OR coffee. At least one of the conditions must be true. 
// eg || 
let hasTea = true;
let hasCoffee = false;

if(hasTea || hasCoffee){
    console.log("Take more");
}
else{
    console.log("Don't take again");
}

// eg 2

let paymentMethod = "card";
if(paymentMethod === "card" || paymentMethod === "cash"){
    console.log("Payment accepted.");
}
else{
    console.log("Account not found.");
}


// Part 2: Predict the Output
// Snippet A
let temperature = 15;
if(temperature > 30){
    console.log("It's hot!");
}
else if(temperature > 15){
    console.log("It's warm.");
}
else{
    console.log("It's cool.");
}
// output = It's cool.

// Snippet B
let age = 20;
let hasID = false;
if(age >= 18 && hasID){
    console.log("You may enter.");
}
else{
    console.log("Entry denied.");
}
// output = Entry denied.

// Snippet C
let password = "1234";
if(password === "00000"){
    console.log("Password changed!");
}
else{
    console.log("No change.");
}
// output = No change.

// Part 3: Debugging Challenge
let hour = 14;
if(hour < 12){
    console.log("Good morning!");
}
else if(hour < 18){
    console.log("Good afternoon!"); // output = Good afternoon!
}
else{
    console.log("Good evening!"); // this ; was fix
}

// Part 4: Collaborative Technical Challenge

let userAge = Number(prompt("Enter you age:"));
let day = prompt("Is it weekday or weekend?");
if(userAge < 13){
    ticketPrice = 5;
}
else if(userAge >= 64){
    ticketPrice = 6;
}
else if(day === "weekend"){
    ticketPrice = 8;
}
else{
    ticketPrice = 10;
}

console.log(`Your ticketPrice is $${ticketPrice}`);

// Are there overlapping conditions that could cause confusion? Discuss how to order your conditions to avoid mistakes.

// This could cause confusion cause the weekady came at the first condition, so it not going to take the child price age instead it ticketprice of 8
/*if (day === "weekday") {
    ticketPrice = 8;
} else if (age < 13) {
    ticketPrice = 5;
}*/