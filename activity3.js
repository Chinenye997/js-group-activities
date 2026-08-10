/*Part 1: Group Discussion
1. prompt() always returns text, even if the user types a number. Why might this
cause problems in a program, and how could you fix it?
2. What's the difference between Number(), parseInt(), and parseFloat()? Can
your group think of a situation where you'd want one over the others?
3. If you called .toUpperCase() on a variable, does it change the original variable,
or does it just give you a new value? Discuss and test your prediction.
4. Why might a program need to check the length of a string a user typed in?
5. What real-world scenario can you think of where converting string to a
number (or a number to string) would be essential?
*/

// Part 1
// ================ No 1 =====================
/*// let age = prompt("How old are you!"); 
// console.log(age + 5) // this will output a string.

let age = Number(prompt("How old are you?"));
console.log(age + 5); // output number */


// ================== No 2 ======================
// Number() convert the entire value into a number eg
//Number("25"); output = 25
/*let age = Number(prompt("Enter your age:"));

// parseInt() Use when you want whole number eg
//parseInt("25.42"); // output = 25
let age = parseInt(prompt("How many items?"));

// parseFloat() Converts to a decimal number eg
//parseFloat(23.21); // output = 23.21
let age = parseFloat(prompt("Enter the price:"))*/

// ================ No 3 ======================
/*let name = "gift";
console.log(name.toUpperCase()); // this give an upperCase version.
console.log(name); // using this method dosen't change the original variable, it give you a new value = GIFT, gift. But 

let name = "gift";
name = name.toUpperCase(); // You can change what the variable contains, by usin this method. 
console.log(name); // output = GIFT*/


// ================= No 4 =====================
// javaScript allow us to find a length of a string using .length eg
/*let name = "Gift";
console.log(name.length); // output 4

// eg 2

let userName = prompt("Enter username:");
console.log(userName.length);*/

// ================= No 5 =========================
/*Converting Number to string or string to Number*/
/*let orderNumber = 12345;
let orderText = String(orderNumber);

console.log(orderText);

let quantity = prompt("How many pens do you want?"); // output string.

let price = 100;
let total = price * quantity; 
let quantity = Number(prompt("Enter quantity:"));*/ // output number 



// Part 2: Predict the Output
// Snippet A

let input = "42";
let converted = Number(input);
console.log(input + 8); // output 458 join
console.log(converted + 8); // output 53 add

// Snippet B
let name = " Chidinma ";
console.log(name.trim()); // output Chidinma
console.log(name.length); // outout 10

// Snippet C
let word = "javaScript";
console.log(word.toUpperCase()); //JAVASCRIPT
console.log(word); // javaScript


// Part 3: Debugging Challenge
// 1
let userAge = prompt("Enter your age")
let nextYearAge = userAge + 1;
console.log("Next year you will be " + nextyearAge); // this should be nextYearAge not nextyearAge

// 2
let city = "lagos"
console.log(city.ToUpperCase()); // this should be toUpperCase not ToUpperCase.


// Part 4: Username Generator
