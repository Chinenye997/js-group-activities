//PART 1: GROUP DISCUSSION
//1a. Math.random() is used when a program needs to generate a random number or make a random choice.
//1b. Program that uses randomness includes:
//- Games
//-Lottery or raffle programs
//-Security
//-Quizzes
//-Random Generators

//2.We use .includes() method to check if text contains a certian word

//3. .slice() extracts a portion of a string and returns another string.
// .split() breaks a string into an array of smaller pieces based on a separator.


//PART 2:
//Snippet A:
//5
//4
//5

//Snippet B:
//true
//["I", "love", "JavaScript"]


//Snippet C:
//10
//3

//PART 3:
//1. Error in Math.Round()
//2. Error in the split() line
// Corrected complete code
let score = 87.6;
let rounded = Math.round(score);

console.log("Rounded score: " + rounded);

let sentence = "Learning to code is fun";
let firstWord = sentence.split(" ")[0];

console.log(firstWord);


//PART 4: COLLABORATIVE TECHNICAL CHALLENGE
//Step 1: The program should ask a student for their name and exact numeric score.
let score = Number(prompt("Enter your score:"));
//Step 2: The program will need student's name and exact numeric score
let roundedScore = Math.round(score);
//Step 3: Processing involves: Number(), Math.round(), .trim(), .toUpperCase(), 
name.trim()
name.trim().toUpperCase()

//Step 4:GRACE, your rounded score is 90.
//Step 5: 
//Ask the student to enter their name.
//Ask the student to enter their score.
//Convert the score from a string to a number.
//Round the score using Math.round().
//Remove extra spaces from the student's name.
//Convert the name to uppercase.
//Use a template literal to create the final message.
//Display the message using console.log() or alert().

//Step 6: Write code
let studentName = prompt("Enter your name:");
let exactScore = Number(prompt("Enter your exact score:"));

let cleanName = studentName.trim().toUpperCase();
let roundedScore = Math.round(exactScore);

let message = `${cleanName}, your rounded score is ${roundedScore}.`;

console.log(message);

//Step 7:
//BISI, your rounded score is 59.

//Step 8:
let studentName = prompt("Enter your name:");
let exactScore = Number(prompt("Enter your exact score:"));

let cleanName = studentName.trim().toUpperCase();
let roundedScore = Math.round(exactScore);

let message = `${cleanName}, your rounded score is ${roundedScore}.`;
console.log(message);

//PART 5: Extension Challenge 
let studentName = prompt("Enter your name:");
let exactScore = Number(prompt("Enter your exact score:"));

let cleanName = studentName.trim().toUpperCase();

let bonus = Math.floor(Math.random() * 6);

let finalScore = exactScore + bonus;

let roundedScore = Math.round(finalScore);

let message = `${cleanName}, your score is ${roundedScore}. You received a bonus of ${bonus} point(s).`;

console.log(message);

