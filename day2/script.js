// ======================================================
//  1. Arithmetic & Comparison Operators
// ======================================================

let x = 25;
let y = 5;

console.log("Addition:", x + y); // 30
console.log("Subtraction:", x - y); // 20
console.log("Multiplication:", x * y); // 125
console.log("Division:", x / y); // 5
console.log("Modulus (Remainder):", x % y); // 0
console.log("Exponentiation:", x ** y); // 9765625

// Comparison Operators
console.log("Is x equal to y?", x == y); // false (values are not equal)
console.log("Is x strictly equal to y?", x === y); // false (values and types must match)
console.log("Is x greater than y?", x > y); // true

// ======================================================
// 2. Logical Operators
// ======================================================

let isAdult = true;
let hasLicense = false;

// Logical AND (&&): both conditions must be true
console.log("Can drive?", isAdult && hasLicense);
// false because although isAdult is true, hasLicense is false

// Logical OR (||): at least one condition must be true
console.log("Can apply?", isAdult || hasLicense);
// true because isAdult is true, even though hasLicense is false

// Logical NOT (!): reverses the boolean value
console.log("Is NOT adult?", !isAdult);
// false because isAdult is true, and !true is false

// ======================================================
// 3. Conditional Statements - Grade Checker
// ======================================================

let marks = 75;

if (marks >= 80) {
  console.log("Excellent");
} else if (marks >= 60) {
  console.log("Good");
} else if (marks >= 40) {
  console.log("Average");
} else {
  console.log("Fail");
}

// ======================================================
// 4. User Input (Browser Only) - Age Check
// ======================================================

// NOTE: This works in browsers only due to the use of `prompt()`
/*
let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
*/

// For Node.js users, you can uncomment and use prompt-sync:
/*
const prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
*/

// ======================================================
// 5. Switch Statement - Fruit Example
// ======================================================

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  case "mango":
    console.log("King of fruits");
    break;
  default:
    console.log("Unknown fruit");
}
