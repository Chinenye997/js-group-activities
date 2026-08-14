/*Activity 9: Functions Expressions and Arrow
Functions*/

// An anonymous function is simply a function that doesn't have its own name.eg

const square2 = function(num){
    return num * num;
};
square2(5);

// ================= No 2 ================
/*A programmer might choose an arrow function because it provides a shorter and cleaner way to write functions. However, arrow functions are not always the best choice, especially when regular function behavior is needed or when the shorter syntax makes the code harder to understand.*/

// ============== No 3 ===============
const greet = function(name){
    console.log("Hello " + name);
};
greet("Gift"); // output = Hello Gift

// eg2
const add = function(a, b){
    return a + b;
};
console.log(add(2, 4)); // output = 6


// =================== No4 =====================
const square3 = (num1) =>{
    return num1 * num1;
};
console.log(square3(4)); // output = 16

// Part 2: Predict the Output
// Snippet A

const multiply = function(a, b){
    return a * b;
};
console.log(multiply(3, 4)); // output = 12

// Snippet B
const double = num => num * 2;

console.log(double(6));
console.log(double(0));
// output = 0

// Snippet C
const introduce = (name, age) =>{
    console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("Zainab", 22); // output = My name is Zainab and I am 22 years old.


// Part 3: Debugging Challenge
//1
const greetUser = (name) =>{
    console.log("Welcome, " + name)
}
greetUser("Emeka"); // output = Welcome, Emeka

// 2
const subract = (a, b) => a - b; // this ; was fix
console.log(subract(10, 4)); // this ; was fix 


// Part 4: Collaborative Technical Challenge / Part 5: Extension Challenge
const percentageToDecimal = (percentage) => percentage/100;
const rectangleArea = (length, width) => length * width;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahreheit) => (fahreheit - 32) * 5/9;
console.log(percentageToDecimal(25));
console.log(rectangleArea(4, 9));
console.log(celsiusToFahrenheit(35));
console.log(celsiusToFahrenheit(100));
console.log(rectangleArea(10, 5));

let fahreheit = celsiusToFahrenheit(35);
let celsius = fahrenheitToCelsius(fahreheit);

console.log(fahreheit);
console.log(celsius);