// Day 4 - JavaScript Array Basics

// Creating arrays
let arr = [];
let arr2 = new Array(); // Another way to create an array

// Inserting elements into an array using push()
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push("hello");

console.log("After push:", arr); // [1, 2, 3, 4, "hello"]

// Removing the last element using pop()
arr.pop();
console.log("After pop:", arr); // [1, 2, 3, 4]

// Removing the first element using shift()
arr.shift();
console.log("After shift:", arr); // [2, 3, 4]

// Adding element at the start using unshift()
arr.unshift("hi");
console.log("After unshift:", arr); // ["hi", 2, 3, 4]

// Check if an element exists in the array using includes()
console.log("Includes 'hi':", arr.includes("hi")); // true

// Get index of an element using indexOf()
console.log("Index of 3:", arr.indexOf(3)); // 2

// Get the length of the array
console.log("Length of array:", arr.length); // 4

// Loop through the array using for...in
console.log("Looping through array indices:");
for (let i in arr) {
  console.log(i); // Prints indices
}

// Task: Reverse an array
let new_arr = [1, 2, 3, 4, 5];
let reversed = []; // Expected result: [5, 4, 3, 2, 1]

for (let i = new_arr.length - 1; i >= 0; i--) {
  reversed.push(new_arr[i]);
}

console.log("Reversed array:", reversed);
