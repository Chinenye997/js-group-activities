
// Part 1: Group Discussion
// 1. Imagine you're building a program that needs to remember a user's name so
// it can greet them later. How would a variable help the program do this?
// 2. What's the difference between console.log(), alert(), prompt(), and confirm()?
// When might a programmer choose one over another?
// 3. If you declared a variable with let instead of const, what would that let you do
// that you couldn't do otherwise? Why might a programmer choose const on
// purpose, even though let seems more flexible?
// 4. JavaScript has several basic data types (numbers, strings, booleans, etc.).
// Why do you think a programming language needs different types instead of
// just one type for everything?
// 5. If two people on your team pick different variable names for the same piece of
// information (e.g., userName vs name1), what problems could that cause later?


Part 1: Group discussions
let userName = "Zubby";

console.log() is used mainly by developers to see what's happening inside their program. Normally used when debugging or checking values.

alert() displays a message to the user in a popup, and it used when you need to immediately notify the user of something.

prompt() displays a dialog box that prompts the user for input, and used when you need simple text input from the user.

confirm() displays a dialog box with a message and two buttons (OK and Cancel), used when you need the user to confirm or cancel an action.

With let, you can give the variable a new value later. This is useful when the value is expected to change over time. Const cannot be reassigned and is used when you want to ensure that the variable's value remains constant throughout the program, which can help prevent accidental changes and make the code easier to understand.

A programming language needs different data types because different kinds of information need to be treated differently by the computer. A number, a name, and a yes/no answer are fundamentally different kinds of information, so the language needs a way to distinguish them.

If two developers use different variable names for the same piece of information, it can lead to confusion, more mistakes, and harder to understand, maintain, or work with.



Part 2: Predict the Output
Snippet A: 5. 25
Snippet B: Is it raining, true
Snippet C: undefined


Part 3: Debugging challenge

let userName = "Amara"
console.log(userName);

const favoriteColor = "blue";
console.log(favoriteColor);

the biggest issue here is that javascript is case sensitive. userName is not the same as username.
the code above is thhe correct snippet and it works by using let to create a variable called UserName and has Amara stored in it. same thing const creates a variable called favoriteColor and has blue stored in it. const cannt be reassigned unlike let which can be reasigned later.


Part 4: Collaborative technical challenge
Step 1 -
I think the program needs to use let to assign a variable called name and give the variable a value of the user's name. then the program can use console.log() to display a greeting message that includes the user's name and their year of birth.

Step 2 -
The program needs to store the user's name, age, and present year in variables.  These are the informations the program need from the user.

Step 3 -
Use the age to calculate the approximate year they were born by minusing their age from present year (2026)

Step 4 -
The program would display to the new user a greeting message by their name and tells them what year they were born, based on their age.

Step 5 -
The program needs to store the user's name and age in variables. then the program can use console. then assgn another variable called birthyear (2026-age). use log() to display a greeting message that includes the user's name and their year of birth.

// Step 6 - Write the Code: Use prompt() to collect the user's name and age, store them in variables, and use console.log() or alert() to greet them.
let userName = prompt("What is your name?");
let age = prompt("How old are you?");

console.log("Welcome, " + userName + "!");
console.log("You are " + age + " years old.");

// Step 7 — Test the Program: Try these test cases:
======================================================

// Step 8 — Improve the Solution: As a group, discuss: is your variable naming clear? Could someone else read your code and immediately understand what it does?
====================================================

// Part 5: Extension Challenge
// Modify your program so that it also stores the user's favorite hobby in a variable and includes it in the final greeting message. Discuss what data type the hobby should be stored as, and why.
=================================================


// Activity 2: Building Sentences with Code
// Part 1: Group Discussion
// 1. What's the difference between the + operator used for math and the + operator used for joining strings? How does JavaScript decide which one to do?
When both values are numbers, javaScript adds them (addition), but when one or both values are strings, + can join them together (concactenantion).

// 2. Compare this line written two ways: "Hello, " + name + "! You are " + age + " years old." vs `Hello, ${name}! You are ${age} years old.` Which do you find easier to read, and why?
I find the first one easier to read because it's plain easier haha! but the econd one is better when writing long sentences.

// 3. What would happen if you tried to add a number and a string together, like 5 + "5"? Discuss your predictions before checking.
JavaScript will join them as strings, rather than mathematically adding them and the output will be 55

// 4. Why do you think template literals use backticks (`) instead of regular quotes?
Template literals use backticks because javaScript need a way to create strings that could do more than regular quotes (' 'or" "`). The biggest advantage is that backticks allow you to easily insert variables and expressions directly inside a string using ${}.


Part 2: Predict the Output
Snippet A -
105 / 5

Snippet B -
