//PART 1: Group Discussion
//No. 1
//a.Loops keep code clean, readable, and manageable by replacing hundreds of repeated lines with a single block.
//b. They allow your program to handle dynamic data sizes, running as many times as needed based on user input or API responses rather than a hardcoded number of lines.
//c. If you need to update the logic inside the iteration, you only change it in one place instead of editing every repeated line manually.

//No.2
//for Loop: A for loop bundles initialization, condition checking, and incrementing together, making it ideal when you know the exact number of iterations beforehand.
//while loop: checks a condition before each iteration and runs as long as that condition remains true, making it ideal when the number of iterations is unknown in advance.

//When to Prefer for: Iterating through fixed-length structures like arrays, strings, or counting fixed ranges (e.g., repeating an action 10 times).
//When to Prefer while: Waiting for specific external criteria to change (e.g., reading a file until the end-of-file marker is reached, or keeping a game loop running until a player clicks "Exit").

//No.3
//An infinite loop occurs when the loop's termination condition is never satisfied, causing the program to execute indefinitely and freeze or crash.

//Accidental Causes:
//Forgetting to update or increment the counter variable inside the loop body.
//Writing a condition that always evaluates to true.
//Comparing wrong variables or using incorrect logic operators in the condition.

//Debugging Checklist:
//Check the loop condition to ensure it can eventually evaluate to false.
//Verify that the loop control variable is actually modified inside the loop.
//Log or inspect the control variable's value on every turn to confirm it moves toward the exit condition.

//No. 4
//Fixing an Off-By-One Error (4 Runs Instead of 5)
//Check the boundary condition first.
//Common mistakes include using < instead of <= (e.g., starting at i = 1 with i < 5 runs only 4 times: 1, 2, 3, 4) or starting your counter at 1 when your condition assumes zero-based indexing (i = 0).

//No. 5
//Fixing an Off-By-One Error (4 Runs Instead of 5)
//Check the boundary condition first.
//Common mistakes include using < instead of <= (e.g., starting at i = 1 with i < 5 runs only 4 times: 1, 2, 3, 4) or starting your counter at 1 when your condition assumes zero-based indexing (i = 0).

//PART 2: PREDICT THE OUTCOME
//Snippet A:
//I
//2
//3
//4
//5

//Snippet B:
//Countdown: 3
//Countdown: 2
//Countdown: 1
//Liftoff!

//Snippet C:
//0
//2
//4
//6
//8

//PART 2: DEBUGGING CHALLENGE
//Error 1: Missing a semicolon ; at the end of total = total + i inside the loop body.
//Error 2: Infinite Loop! The variable count is initialized to 5, and the loop runs as long as count > 0. However, count is never decremented inside the loop block, so count remains 5 indefinitely, causing the loop to run forever and crash/freeze the runtime.
//Correct Code:

// 1
let total = 0;

for (let i = 1; i <= 5; i++) {
  total = total + i;
}

console.log("Total: " + total);


// 2
let count = 5;
while (count > 0) {
  console.log(count);
  count--; // Added decrement operator to prevent infinite loop
}
