// Day 5 Training - JavaScript

// ==================== Objects ==================== //
// Object - data structure used to store key-value pairs

let new_object = {}; // Using object literal syntax
let new_object2 = new Object(); // Using Object constructor

// Array example
let arr = ["ramu", 18, 123.45];

// Assigning properties to object
new_object.name = "ramu";
new_object.age = 18;
new_object.salary = 123.45;

console.log("Array:", arr);
console.log("New Object:", new_object);

// ==================== Object Methods ==================== //

let person = {
  firstname: "john",
  lastname: "doe",
  age: 18,
};

// entries() - returns an array of key-value pairs
let text = Object.entries(person);
console.log("Entries:", text);

// keys() - returns an array of keys
let key = Object.keys(person);
console.log("Keys:", key);

// values() - returns an array of values
let values = Object.values(person);
console.log("Values:", values);

// ==================== Anagram Function ==================== //
// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let countFrequency = {};

  for (let char of str1) {
    countFrequency[char] = (countFrequency[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!countFrequency[char]) return false;
    countFrequency[char]--;
  }

  return true;
}

// Test cases for areAnagrams
console.log("Anagram Test 1:", areAnagrams("listen", "silent")); // true
console.log("Anagram Test 2:", areAnagrams("hello", "world")); // false

// ==================== Object Access with Default ==================== //
let ob = {};
console.log("Access 'name' in empty object:", ob["name"] || 0); // 0

let count = {};
console.log("Access 'e' in empty object:", count["e"] || 0); // 0

// ==================== Destructuring ==================== //

// Array destructuring
let arr2 = ["sujal", "pandey"];
const [firstname, lastname] = arr2;
console.log("Destructured Array:", firstname, lastname);

// Object destructuring
let obj = {
  name: "sujal",
  age: 18,
};
const { name, age } = obj;
console.log("Destructured Object:", name, age);
