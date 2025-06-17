// ==================================================
// JavaScript Array Methods: map(), filter(), reduce()
// ==================================================

console.log("\n========= MAP Examples =========\n");

// Example 1: Double the values in an array
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// Example 2: Extract names from an array of user objects
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];
let userNames = users.map((user) => user.name);
console.log("User Names:", userNames);

// Example 3: Format array of numbers into strings with currency
let prices = [100, 200, 300];
let formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log("Formatted Prices:", formattedPrices);

console.log("\n========= FILTER Examples =========\n");

// Example 1: Filter out odd numbers
let mixedNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Example 2: Filter users by age
let adults = users.filter((user) => user.age >= 25);
console.log("Users aged 25 or more:", adults);

// Example 3: Filter words longer than 4 characters
let words = ["cat", "elephant", "dog", "dolphin"];
let longWords = words.filter((word) => word.length > 4);
console.log("Long Words:", longWords);

console.log("\n========= REDUCE Examples =========\n");

// Example 1: Sum of array values
let nums = [10, 20, 30];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// Example 2: Product of all numbers
let product = nums.reduce((acc, val) => acc * val, 1);
console.log("Product:", product);

// Example 3: Count word frequency in an array
let animals = ["cat", "dog", "cat", "bird", "dog", "cat"];
let frequency = animals.reduce((acc, animal) => {
  acc[animal] = (acc[animal] || 0) + 1;
  return acc;
}, {});
console.log("Animal Frequency:", frequency);
