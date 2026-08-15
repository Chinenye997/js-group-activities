//  PART 1: GROUP DISCUSSION
//  1.  A variable stores a username in a container and use it whenever it is needed.
//  2a.  console.log() is displays info in the browser and used for checking values while delevoping.
//  2b.  alert() shows a message in a pop-up. It tells the user when something important needs to be done.
//  2c.  prompt() enters user's info and can be used for collecting users input.
//  2d.  confirm() request the user's final decision by asking the user to select "OK" or "Cancel" before taking action
//  3.   let is considered when a user might still make changes to value while const is safer to be used when a programmer is certain that the value won't be changed eventually.
//  4.   Javascript uses different tools to perform different task. For instance numbers are used for calculations. Strings store text and Booleans represent yes or no actions and one tool cannot deliver this tasks effectively.
//  5.   when two people on a team pick different variable names for the same piece of information it will definitely cause confusion and complication when updating the program.

//  PART 2: OUTPUT PREDICTION
// snippet A: = 25 and twenty-five
// Reason: age was declared with let, and the value might change later. Starts as 25, and later changed to the string "twenty-five".

// snippet B: = Is it raining? true
//  Reason: isRaining is a Boolean variable with the value true. 

// snippet C: = undefined 
// Reason: The variable favoriteNumber was declared, but no value was assigned to it.

//  PART 3: DEBUGGING CHALLENGE
//JScript is case-sensitive. userName, username, and USERNAME are three different names.

// PART 4: Collaborative Technical Challenge 
//  Step 1: The program will request a new user to input their name and age. Then will calculate the approximate year they were born and display a friendly welcome message containing their name and birth year.
//  Step 2: The program will need the User Name and Age
//  Step 3: The program will then calculate the possible birth year
//  Step 4: The program will display welcome message with the user name and year of birth
//  Step 5: Ask the user for their name.
//  Store the name in a variable called userName.
//  Ask the user for their age.
//  Store the age in a variable called userAge.
//  Convert the age from prompt() into a number.
//  Subtract the user's age from 2026 to calculate their birth year.
//  Store the result in a variable called birthYear.
//  Display a welcome message containing the user's name and birth year.
//  Step 6:
let userName = prompt("What is your name?");
let userAge = Number(prompt("How old are you?"));

let currentYear = 2026
let birthYear = currentYear - userAge;
alert("Welcome, " + userName + "! You were born around " + birthYear + ".");

//  Step 7:
let userName = prompt("userName");
let userAge = Number(prompt("age"));

let currentYear = 2026
let birthYear = currentYear - userAge;
alert("Welcome, " + userName + "! You were born around " + birthYear + ".");

let userName = prompt("Bola");
let userAge = Number(prompt("45"));

let currentYear = 2026
let birthYear = currentYear - userAge;
alert("Welcome, " + userName + "! You were born around " + birthYear + ".");


//Step 8: Our variables is very clear. When someone reads the code, what each variabe represents can immediately be understood

//  PART 5: prompt() collects the hobby as a string, which is exactly the appropriate data type for this information.
let userName = prompt("What is your name?");
let userAge = Number(prompt("How old are you?"));
let favoriteHobby = prompt("What is your favorite hobby?");

const currentYear = 2026;
let birthYear = currentYear - userAge;

alert(
  `Welcome, ${userName}! You were born around ${birthYear}, and your favorite hobby is ${favoriteHobby}.`
);

