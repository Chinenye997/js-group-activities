// Activity 8: Reusable Machines
// part 1 ============== No 1 =============
function greetUser(name){
    console.log("Hello " + name);
}
greetUser("Chi");


// ============= No 2 ============
// 2. Parameter vs Argument
// A parameter is the variable we create when defining the function. In the eg above (name) is the parameter

//An argument is the actual value we give the function when we call it. in the eg above greetUser("Chi"); "Chi" is the argument.


// =============== No 3 =================
// Because functions allow us to write code once and reuse it many times.eg

function sayHey(name){
    console.log("Hello " + name);
}
sayHey("Chi");
sayHey("Ada");
sayHey("Gift");

// ===================== No 4 ===================
// nothing will be displayed. eg
function userName(user){
    console.log("Hello! " + user);
}
// this needs to be called for it to display
//userName("Gift");

// ================== No 5 ================
// yes a function can have more hen one perematers. eg
function addNumber(number1, number2){
    console.log(number1 + number2);
}
addNumber(3, 2); // output = 5.

// if you don't provide all the arguments. depending on the one not provided, it will become NaN. eg
function addNum(number1, number2){
    console.log(number1 + number2);
}
addNum(3); // output = 3 and NaN

// eg 2
function introduce(name, age){
    console.log(`My name is ${name} and I am ${age} years old.`);
}
introduce("Gift", 20); // this needs to be provide in order to output the both result, else if only one was called then the other will be undefined.

// Part 2: Predict the Output
// Snippet A
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Ifeoma"); // output = Ifeoma!
greet("David"); // output = David!


// Snippet B
function addNumbers(a, b){
    console.log(a + b);
}
addNumbers(4, 7);// 11
addNumbers(10); // NaN


// Snippet C
function sayHi(){
    console.log("Hi there!");
}
console.log("Before calling function"); // output = Before calling function
sayHi(); // Hi there!
console.log("After calling function"); // After calling function.


// Part 3: Debugging Challenge
function calculateArea(length, width){
    console.log(length * width)
}

function displayMessage(msg){
    console.log(msg);
}
displayMessage("Area calculator ready"); // Area calculator ready
calculateArea(5, 10); // this was fix. output = 50



// Part 4: Collaborative Technical Challenge / Part 5: Extension Challenge

function calculateTip(billAmount, tipPercentage){
    let tip = billAmount * tipPercentage / 100;
    return tip;
}

function displayMessage(billAmount, tipAmount){
    console.log(`Your bill is $${billAmount} and your tip is $${tipAmount}`);
}

// add the 3 function
function splitBill(totalBill, numberOfPeople){
    return totalBill / numberOfPeople;
}

let bill = 100;
let tipAmount = calculateTip(bill, 15);
displayMessage(bill, tipAmount);

let totalBill = bill + tipAmount;

let amountPerPerson = splitBill(totalBill, 4);
console.log(`Each person pays $${amountPerPerson}.`);