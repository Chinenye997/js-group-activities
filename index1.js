/*
Activity 1: The Digital Memory Box
Topics Covered
● Introduction to JavaScript
● console.log()
● alert()/prompt()
● confirm()
● Variables
● Data Types
*/


/*======================Activity solution=========================*/
// Part 1: Group Discussion


/*1. Imagine you're building a program that needs to remember a user's name so
it can greet them later. How would a variable help the program do this?
2. What's the difference between console.log(), alert(), prompt(), and confirm()?
When might a programmer choose one over another?
3. If you declared a variable with let instead of const, what would that let you do
that you couldn't do otherwise? Why might a programmer choose const on
purpose, even though let seems more flexible?
4. JavaScript has several basic data types (numbers, strings, booleans, etc.).
Why do you think a programming language needs different types instead of
just one type for everything?
5. If two people on your team pick different variable names for the same piece of
information (e.g., userName vs name1), what problems could that cause later?
*/

//========= No1 ==============
let userName = "Chinenyenwa"; // this when the variable was declare
console.log(userName); // call the variable to ouput the value "chinenyenwa."

console.log("Welcome " + userName) // this could be calld this way "Welcome chinenyenwa"


//========= NO2 =============
console.log("Hello world!"); // This means to print "Hello world!" to the console. (which developers use to see messages, errores, and other infro about the program executed)


 //alert("My first javascript code!"); // This means to show a pop-up alert box with the message "My first javascript code!" to the user.


 //prompt("What is your full-name?"); // This is used to show the user a prompt box that asks for their full-name. Also, allow them toinput the information.


 //confirm("Are you sure you want to continue?"); // This is used to show the user a confirmation box that asks if they are sure they want to continue. It allows them to choose between "OK" and "Cancel".


 //========= NO2b =============
 
 //========= NO3 =============
 // let and const
 // let = a box whose content can change eg
 let age = 20; // first value
 age = 21;     // second value. It allow
 // The box originally contained 20 and later change to 21. So let allow to reassined value.


 // const = a box whose content can not be reassigned. IT can only be use when you don't want to reassigned a value. eg

 const country = "Nigerian"; // can not be reassigned the value because const javascript will complain, 
 // eg
 /*const age = 20;
 age = 21;*/ // Not allow 

 // ========== No 4 =============
 //JavaScript needs to know what kind of information each one represents.
// That's where data types come in.
/* eg Name → "Chi"
Age → 25
IsStudent → true*/

//string

let userName = "Gift"; 
let country = "Nigeria";
let hobby = "Reading";
let greeting = "Hello World";
// this string datatype it is represent in "", '', ``

// Number: A number represents numerical values. eg
let age = 25;
let price = 2000;
let temperature = 30;

// Boolean: It is represent by true or false eg
let isLoggedIn = true;
let isAdmin = false;

// Why can't everything just be a string? or number

let age = "20"; // this will be treat as string not number. output = "20" string 

let age = 20;
console.log(age + 5); // output = 20 number
/*They look almost identical to us.
But JavaScript treats them differently.*/


// =========== No 5 ==============
let customer  = "Gift";
let name1 = "Gift";
let PersonName = "Gift";

/*They might all be talking about the same thing.

This can make the code confusing.

Imagine joining a project and seeing:*/

// This is defcult to understand (Not good)
let x = "Gift";
let n1 = "25";
let abc = "Nigerian";

// Another one
// This is easy to read nd understand (Good)
let firstName = "Gift";
let userAge = 12;
let userConutry = "Nigerian";


/* =====================================================
So on this part1 activity 1 let put together everything
========================================================*/

const conutry = "Nierian";
let userName = prompt("What is your name.?");
let userAge = prompt("How old are you?");

console.log(conutry);
console.log(userName);
console.log(userAge);

alert("Welcome " + userName + "!");
 

// ============= Part2 =========================
//Part 2: Predict the Output :
// A. What will this code output? 
let age = 25;
console.log(age) ; 
// output = 25


 
 // B. What will this code output? 
let isRaining = true;
console.log("Is it raining " + isRaining); 
// output = Is it raining true



 // C. What will this code output?  

let favoriteNumber ;
Console.log(favoriteNumber);
// output = undefined. Because it was just decleared by no vaule was assign to it, so it return undefined.

// ============= Part3 ====================
 
/*Part 3: Debugging Challenge 

Discuss as a group: What's wrong with this code? Once you've identified the issues, fix them and explain how the corrected version works.   

let userName = "Amera"
console.log(userName);

const favriteColor = "Blue";
console.log(favriteColor); */

let userName = "Amera"; // Their were not 
console.log(userName);

const favriteColor = "Blue";
console.log(favriteColor); // has not error 


// ============ No4 =======================
/*Our plan:
Ask the user for their name.
Store the name in a variable called userName.
Ask the user for their age.
Store the age in a variable called userAge.
Calculate the birth year by subtracting the user's age from 2026.
Store the result in a variable called birthYear.
Display a welcome message with the user's name.
Display their birth year.*/

let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let favoriteHobby  = prompt("What is your favorite hobby?");

let birthYear = 2026 - Number(userAge);

console.log("Wellcome " + userName + "!");
console.log("You are born in " + birthYear + ".");
console.log("Your favorite hobby is " + favoriteHobby + ".");


// Part 5: Extension Challenge
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let favoriteHobby  = prompt("What is your favorite hobby?");
let favoriteHobby = "Reading"; // "Reading" is text, so it's a string.                   

let birthYear = 2026 - Number(userAge);

console.log("Wellcome " + userName + "!");
console.log("You are born in " + birthYear + ".");
console.log("Your favorite hobby is " + favoriteHobby + ".");