/***********************
 * Type Conversion vs Type Coercion in JavaScript
 ***********************/

/*
  TYPE CONVERSION (Explicit)
  You manually convert a value from one type to another.
 */

// String Conversion
console.log(String(123)); // "123"
console.log(String(true)); // "true"

// Number Conversion
console.log(Number("456")); // 456
console.log(Number(false)); // 0

// Boolean Conversion
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// Parsing strings to numbers
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

/*
 TYPE COERCION (Implicit)
 JavaScript automatically converts types behind the scenes.
*/

// String and Number
console.log("5" + 1); // "51" (1 is coerced to string)
console.log("5" - 1); // 4   ("5" is coerced to number)
console.log("5" * "2"); // 10  (both are coerced to numbers)

// Boolean Coercion
console.log(true + 1); // 2   (true → 1)
console.log(false + 1); // 1   (false → 0)

// null and undefined
console.log(null + 5); // 5   (null → 0)
console.log(undefined + 1); // NaN (undefined → NaN)

// Comparison with Coercion
console.log(0 == false); // true
console.log("5" == 5); // true
console.log(null == undefined); // true

// === avoids coercion (strict equality)
console.log("5" === 5); // false
console.log(0 === false); // false

/**
 * SUMMARY
 * - Type Conversion = You do it explicitly.
 * - Type Coercion = JavaScript does it for you.
 * - Prefer === and !== to avoid surprises in comparisons.
 */




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
