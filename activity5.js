//PART 1:Group Discussion
//No 1.
//A program makes a decision when it checks a condition and chooses what action to take based on whether the condition is true or false.

//No. 2
//= gives a value to a variable 
//== compares values after possible type conversion
//=== compares both value and type.

//No. 3
//No. In one if / else if / else chain, only one block runs.

//No 4.
//&& (AND) and || (OR) can change the way a condition behaves when both conditions are and MUST be true.

//PART 2:
//Snippet A:
//It's cool.

//Snippet B:
//Entry denied.

//Snippet C:
//No change.

//PART 3: Debugging Challenge
//The error: hour < 18
//The corrected version is:
let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

//PART 4:Collaborative Technical Challenge
//Step 1: The program should ask the customer for their age and whether they are watching the movie on a weekday or weekend. It will then use conditions to determine the appropriate ticket price.
//Step 2: The person's age and Whether it is a weekday or weekend
//Step 3: It needs to check if the :
//Person is a child, Senior, regular adult and if it is weekday
//Step 4: Your ticket price is ₦1500.
//Step 5:   The solution:
//Ask the user for their age.
//Convert the age from text to a number.
//Ask whether today is a weekday or weekend.
//Set a normal ticket price.
//Check the person's age.
//Apply the appropriate age discount.
//If it is a weekday, apply the weekday price.
//Display the final ticket price.
//Step 6 : Write code
let age = Number(prompt("Enter your age:"));
let day = prompt("Is it a weekday or weekend?").toLowerCase();

let price = 3000;

if (age < 13) {
    price = 1500;
} else if (age >= 60) {
    price = 2000;
} else {
    price = 3000;
}

if (day === "weekday") {
    price -= 500;
}

console.log(`Your ticket price is ₦${price}.`);

//Step 7:

//Step 8:
if (age < 13) {
    price = 1500;       // Children
} else if (age >= 60) {
    price = 2000;       // Seniors
} else {
    price = 3000;       // Adults
}




