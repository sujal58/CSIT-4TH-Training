// =========================
// Basic Console Output
// =========================
console.log("Hello world!");

// =========================
// Variable Declarations
// =========================
let a = 1;
var b = "hello";
const PI = 3.12;

// =========================
// Block Scope vs Global Scope
// =========================

// Example 1: let is block-scoped
let x = 10;
{
  let x = 20; // New variable inside block
}
console.log("Value of x (let):", x); // 10

// Example 2: var is function/global-scoped
var y = 10;
{
  var y = 20; // Overrides outer y
}
console.log("Value of y (var):", y); // 20

// =========================
// Constants
// =========================
const address = "manigram";
// Uncommenting below will throw an error
// const address;
// address = "butwal";
// console.log(address);

// =========================
// Function Scope: let vs var
// =========================
function printAge() {
  // Using let
  let age = 10;
  console.log("Using let:");
  console.log("Outer age:", age);

  if (true) {
    let age = 20; // Block-scoped
    console.log("Inner age (let):", age);
  }

  console.log("Outer age again:", age);

  // Using var
  var year = 1990;
  console.log("\nUsing var:");
  console.log("Outer year:", year);

  if (true) {
    var year = 2000; // Function-scoped, overrides outer
    console.log("Inner year (var):", year);
  }

  console.log("Outer year again:", year);
}
printAge();

// =========================
// Test: var and let default behavior
// =========================
var testVar = 10;
{
  var testVar = 20;
}
console.log("testVar (var):", testVar); // 20

let z;
console.log("let z:", z); // undefined

var y2;
console.log("var y2:", y2); // undefined

// =========================
// JavaScript Data Types
// =========================

// 1. String
let message = "Hello world!";
console.log("Type of message:", typeof message); // string

// 2. Number
let num = 20;
console.log("Type of num:", typeof num); // number

// 3. Boolean
let isVerified = true;
console.log("Type of isVerified:", typeof isVerified); // boolean

// 4. Null
let name = null;
console.log("Type of name (null):", typeof name); // object (quirk in JS)

// 5. Undefined
let cast;
console.log("Type of cast:", typeof cast); // undefined

// 6. BigInt
let score = 99999999999n;
console.log("Type of score (BigInt):", typeof score); // bigint
