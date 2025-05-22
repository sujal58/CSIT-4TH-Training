// Day 4 - JavaScript Functions

// Function - Reusable block of code used to perform a specific task

// 1. Basic function with no parameters and no return value
function greet() {
  console.log("hello");
}
greet(); // Output: hello

// 2. Function with parameters (including default parameter)
function greet_user(username, sirname = "baha") {
  console.log("hello " + username + " " + sirname);
}
greet_user("jacob", "rana"); // Output: hello jacob rana

// 3. Function with return value
function return_result(a, b) {
  return a + b;
}
let result = return_result("hi ", "hello");
console.log(result); // Output: hi hello

// 4. Basic calculator using switch-case
function basic_calculator(num1, num2, opr) {
  switch (opr) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      if (num2 === 0) {
        console.log("num2 can't be zero");
      } else {
        console.log(num1 / num2);
      }
      break;
    default:
      console.log("Invalid operator");
  }
}
basic_calculator(1, 2, "*"); // Output: 2

// 5. Arrow function (anonymous function)
let result_op = (a, b) => {
  return a + b;
};
console.log(result_op(2, 3)); // Output: 5

// 6. Function hoisting
say_hello();
function say_hello() {
  console.log("hello");
}

// ------------------------
// Assignment 1
// ------------------------
// Task: Check how frequent a number appears in an array
// 4 times = frequent
// 3 times = common
// 1 time  = rare

function countFrequency(array) {
  let frequencyMap = {};

  // Count frequency
  for (let num of array) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Print frequency categories
  for (let key in frequencyMap) {
    let count = frequencyMap[key];
    if (count >= 4) {
      console.log(`${key} is frequent`);
    } else if (count === 3) {
      console.log(`${key} is common`);
    } else if (count === 1) {
      console.log(`${key} is rare`);
    }
  }

  return frequencyMap;
}

let sampleArray = [1, 2, 3, 1, 2, 1, 1, 3, 2, 4];
let freq = countFrequency(sampleArray);
console.log("Frequency Map:", freq);
