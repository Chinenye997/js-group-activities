//PART 1: GROUP DISCUSSION
//Comparison of the Function Declarations

//1. function square(num) (Function Declaration)

//Syntax: Named function created using the function keyword.

//Key Feature: Hoisting. JavaScript moves function declarations to the top of their scope before code execution. This means square(5) can be called before its definition in the code file.

//2. const square2 = function(num) (Function Expression)

//Syntax: An anonymous function assigned to a constant variable.

//Key Feature: Not Hoisted. The variable declaration const square2 is hoisted, but its assignment is not. You cannot call square2(5) before this line in the code without throwing a ReferenceError.

//3. Third Version: Arrow Function (Implicit) (Commonly included in this set)

//Syntax: const square3 = (num) => num * num;

//Key Feature: Concise Syntax & Implicit Return. ES6 arrow functions remove the function keyword and curly braces (for single expressions), automatically returning the calculated value. They also lexically bind the this keyword.

//No.2 
//Pros and Cons of Arrow Functions
//Why Choose an Arrow Function:

//Concise Syntax: Fewer lines of code and cleaner read for short functions (like array methods map, filter).

//Lexical this Binding: Arrow functions don't create their own this context; they inherit this from the parent scope, eliminating common bugs in callbacks and event handling.

//Downsides to Always Using Arrow Functions:

//No Hoisting: They cannot be called before they are defined in code.

//Not Suitable for Object Methods: Because they don't have their own this, using them as methods inside objects breaks access to object properties via this.

//No arguments Object: They lack the built-in arguments object available in regular functions.

//3. Calling an Anonymous Function Stored in a Variable

//Call it by writing the variable

//4. Concise Arrow Function Syntax ((num) => num * num)
//Implicit Return: When an arrow function consists of a single expression, JavaScript allows you to omit the curly braces {} and the return keyword.
//The engine automatically evaluates the expression following => and returns its value.

//PART 2: Predict the Output 
//Snippet A:
//12

//Snippet B:
//12
//0

//Snippet C:
//My name is Zainab and I am 22 years old.

//PART 3: DEBUGGING CHALLENGE
//Error 1 (Casing Mismatch): The function is defined using camelCase as greetUser, but called on line 6 with a lowercase u as greetuser("Emeka"). JavaScript is case-sensitive, so this throws a ReferenceError: greetuser is not defined.
//Error 2 (Missing Semicolons & Formatting): While the arrow function const subtract = (a, b) => a - b; is syntactically correct, it is missing a trailing semicolon at the end of the assignment line and at the end of the console.log statement.

//Correct Code:
// 1
const greetUser = (name) => {
  console.log("Welcome, " + name);
};

greetUser("Emeka"); // Fixed casing to match declaration

// 2
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Added semicolons

//Part 4: Collaborative Technical Challenge
//Step 1 — percentToDecimal: Converts a percentage number into its equivalent decimal form.
//calculateArea: Multiplies dimensions to find the total surface area of a rectangle.
//celsiusToFahrenheit: Converts temperature measured in Celsius to Fahrenheit.

//Step 2 — Identify Inputs
//percentToDecimal: percent (number)
//calculateArea: length (number), width (number)
//celsiusToFahrenheit: celsius (number)

//Step 3 — Identify Processing
//Decimal Conversion: percent / 100
//Area Calculation: length * width
//Fahrenheit Conversion: (celsius * 9 / 5) + 32

//Step 4 — Identify Outputs
//Each function returns a computed single numerical value. Results will be output using console.log() statements with descriptive labels.

//Step 5 — Plan the Solution
//We will write 4 concise arrow functions:
//percentToDecimal = (percent) => percent / 100
//calculateArea = (length, width) => length * width
//celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32
//fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9 (Extension)

//Step 6 & 7 — Code & Testing
// Step 6: Math Helper Toolkit Functions

const percentToDecimal = (percent) => percent / 100;
const calculateArea = (length, width) => length * width;
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

// Part 5 Extension
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;


// Step 7: Test the Program

console.log("--- Math Helper Tests ---");

// Test 1: Percentage to decimal (25)
console.log(`25% as decimal: ${percentToDecimal(25)}`);

// Test 2: Rectangle area (4, 9)
console.log(`Area (4x9): ${calculateArea(4, 9)}`);

// Test 3: Celsius to Fahrenheit (35)
console.log(`35°C to °F: ${celsiusToFahrenheit(35)}°F`);

// Test 4: Celsius to Fahrenheit (100)
console.log(`100°C to °F: ${celsiusToFahrenheit(100)}°F`);

// Test 5: Rectangle area (10, 5)
console.log(`Area (10x5): ${calculateArea(10, 5)}`);

// Part 5: Extension Test (Undo check)
const originalTemp = 25;
const convertedF = celsiusToFahrenheit(originalTemp);
const reversedC = fahrenheitToCelsius(convertedF);

console.log("\n--- Part 5 Extension Test ---");
console.log(`Original Celsius: ${originalTemp}°C`);
console.log(`Converted to Fahrenheit: ${convertedF}°F`);
console.log(`Converted back to Celsius: ${reversedC}°C`);

//Step 8 — Improve the Solution & Discussion

//Writing these mathematical helpers as concise arrow functions feels more natural because:

//One-Liners: The implicit return eliminates boilerplate code (function, return, {}), allowing pure mathematical expressions to read like standard formulas.

//Readability: Inline arithmetic becomes straightforward and quick to scan, reducing visual clutter in utility toolkits.

