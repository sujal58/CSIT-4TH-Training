// ----------------------
// Day 3: Prompt & Loops
// ----------------------

//  1. Prompt Example (Basic Input)
let userNamePrompt = prompt("Enter your name:");
console.log("Hello, " + userNamePrompt);

//  Note:
// prompt() always gives string input. If you want a number, you must parse it:
// Example:
// let num = prompt("Enter a number:");
// console.log(typeof num);         // string
// let parsed = parseInt(num);
// console.log(typeof parsed);      // number

// ----------------------
//  2. Switch Case Assignment with Parsing
// ----------------------
/*

----Task:

----Ask the user to enter a day (e.g., Monday).

-----Ask the user to enter the time in 24-hour format (e.g., 14).

------Based on the input:

-------compare the given time and print "Good Afternoon" || "Good Evening" || "Good Morning", print:


Also print the day entered if it's valid.

Handle invalid day input gracefully.
*/

// ----------------------
//  3. for Loop Examples
// ----------------------

//  Task 1: Print even numbers from 1 to 20
console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  Task 2: Basic pyramid pattern
console.log("Simple Pyramid Pattern:");
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}

//  Task 3: Center-aligned pyramid pattern with spaces
console.log("Center-Aligned Pyramid Pattern:");
let row = 5;
for (let i = 1; i <= row; i++) {
  let pattern = "";
  for (let j = 1; j <= row - i; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  console.log(pattern);
}

// ----------------------
//  4. while Loop Example
// ----------------------

//  Task 4: Print numbers from 10 to 1
console.log("Countdown from 10 to 1:");
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// ----------------------
//  5. do...while Loop Example
// ----------------------

//  Task 5: Ask for name until user enters something
let nameInput;
do {
  nameInput = prompt("Enter your name (required):");
} while (!nameInput);

console.log("Welcome, " + nameInput);
