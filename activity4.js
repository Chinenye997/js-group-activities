/*Activity 4: Text and Numbers
Topics Covered
String Methods, Math Methods
Learning Objective
Students should be able to select the right built-in method for a task, whether
working with text or numbers, and explain what each method actually does.
Part 1: Group Discussion
1. Why might a program need Math.random()? What kinds of programs use
randomness?
2. If you wanted to check whether a piece of text contains a certain word (like
checking if an email contains "@"), what string method might help?
3. Compare .slice() and .split(). What does each one actually produce?
*/

// ================ No 1 ==========================
 /*Math.random() is useful when a program needs to generate unpredictable results, such as in games, dice simulations, random selections, card shuffling, or lottery-style programs.*/

 // ================= No 2 =======================
 /*2. If you wanted to check whether a piece of text contains a certain word (like
checking if an email contains "@"), what string method might help?*/
// Answer = .inculdes() - ask; Does this string contain this particular text? eg

let email = "chi@gmail.com";
console.log(email.includes("@")); // output = true

// eg 2
 let name = "chi";
 console.log(name.includes("Chi")); // output = false


//=============== No 3 =====================
/*Compare .slice() and .split(). What does each one actually produce?*/
let program = "javaScript";
console.log(program.slice(0, 4)); // output = java

let sentences = "I love JavaScript";
console.log(sentences.split(" ")) // output = [ 'Chi', 'Njeze' ]


// Part 2: Predict the Output
// Snippet A
console.log(Math.round(4.5)); // output = 5
console.log(Math.floor(4.9)); // output = 4
console.log(Math.ceil(4.1));// output = 5

// Snippet B
let phrase = "I love javaScript";
console.log(phrase.includes("love")); // output = true
console.log(phrase.split(" ")); // output = [ 'I', 'love', 'javaScript' ]

// Snippet C
let num = 7;
console.log(Math.max(num, 10, 3)); // output = 10
console.log(Math.min(num, 10, 3)); // output = 3


// Part 3: Debugging Challenge

/* let score = 87.6;
let rounded = Math.Round(score);
console.log("Rounded score:" rounded);

let sentence = "Learning to code is fun"
let firstWorld = sentence.split(" ")[0]
console.log(firstworld);*/

// Discuss the errors as a group before fixing them.
/*
let rounded = Math.round(score); The Math.Round is not correct
console.log("Rounded score:" rounded); what is missing is + sign
let firstWorld = sentence.split(" ")[0] this is correct
console.log(firstworld); the firstworld written in the console is not correct
*/

let scores = 87.6;
let rounded = Math.round(scores);
console.log("Rounded score:" + rounded); // output = Rounded score:88

let sentence = "Learning to code is fun";
let firstWorld = sentence.split(" ")[0];
console.log(firstWorld); // output = Learning

//Part 4 — Grade Rounder and Reporter

let studentName = prompt("Enter student's name:");
let score = Number(prompt("Enter student's score:"));
studentName = studentName.trim().toUpperCase();
let roundedScore = Math.round(score);
let message = `${studentName} score ${roundedScore}.`;
console.log(message);


// Part 5: Extension Challenge
