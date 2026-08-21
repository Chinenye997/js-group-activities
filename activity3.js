// Part 1: Group Discussion
//1.    The text is being converted to a number before doing mathematical calculations.

//2.    The difference between Number(), parseInt(), and parseFloat()
//a.    Number(): This converts the entire value into a number.
//b.    parseInt(): It converts a value into a whole number (integer) and stops when it reaches something that isn't part of the integer.
//c.    parseFloat() Converts a value into a number while keeping the decimal portion.

// 3.   No, strings are immutable in JavaScript.

//4.   A program may need to check the length of a user's input to make sure it meets certain requirements. it prevents users from entering extremely short passwrord

//5.   An example can be: an online shopping website where a customer enters:
//  Quanity 3. the value at first might be a string because it came from a form or promp(). the program will then need to convert it to a number.

//PART 2:
//Snippet A:  428 and 50
//Snippet B: trim() removes the spaces from the beginning and end:
//              .length counts everything, including the spaces.
//  So: Chidinma
//      12

//Snippet C: First Output
//converts JAVASCRIPT to capital letters
word.toUpperCase()

            //Second Output
console.log(word); // still maintains the original varibles - javascript

//PART 3:
//1.Debugging Challenge:
// Problem 1: prompt() returns a string
// Problem 2: Variable name doesn't match
// Solution:
let userAge = Number(prompt("Enter your age:"));

let nextYearAge = userAge + 1;

console.log("Next year you will be " + nextYearAge);

//Debugging 2:
LAGOS
//toUpperCase() converts the lowercase string "lagos" to uppercase.


//PART 4:
//Step 1:the finished program is expected to ask the user for their name and favourite number. then convert the name to lowercase, convert the number from text to a number, and combine both to create a username.
//Step 2: It will need two inputs. 1. First name entered as a string/text and 2. Favourite number entered using prompt()
//Step 3: to dentity the process
// 1.  removing unncessary space using .trim()
// 2. convert the name to lowercase using .toLowerCase():
// 3. converting the favourite number to text to a number by using Number() and then combine them using a template literal
//Step 4. The final output should be a username containing: lowercase first name + favorite number
//Step 5: Ask the user to enter their first name, favourite number, remove unwwanted spaces from begining to end of the name, convert to lowercase, convert favourite number from string to a number, combine lowercase and number. Finally display the generated username
// Step 6: Code wirting

let firstName = prompt("Enter your first name:");
let favoriteNumber = prompt("Enter your favorite number:");

// Remove extra spaces and convert name to lowercase
firstName = firstName.trim().toLowerCase();

// Convert favorite number from string to number
favoriteNumber = Number(favoriteNumber);

// Create username
let username = `${firstName}${favoriteNumber}`;

// Display username
console.log("Your username is:", username);

//Step 7: Testing 
//Test 1: Your username is: sarah7
//Test 2: Your username is: kunle12
//Test 3: Your username is: ada0
//Test 4: Your username is: femi3.5

//Step 8: ada0
//.trim() makes the program more reliable and produces cleaner usernames.

//PART 5:
let firstName = prompt("Enter your first name:");
let favoriteNumber = prompt("Enter your favorite number:");

// Remove extra spaces and convert name to lowercase
firstName = firstName.trim().toLowerCase();

// Check if the name is longer than 8 characters
if (firstName.length > 8) {
    firstName = firstName.slice(0, 8);
}

// Convert favorite number from string to number
favoriteNumber = Number(favoriteNumber);

// Create username
let username = `${firstName}${favoriteNumber}`;

// Display username
console.log("Your username is:", username);