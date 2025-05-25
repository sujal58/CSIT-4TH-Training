# Day 5 - JavaScript Training 🚀

This project contains JavaScript code and tasks completed during **Day 5** of JavaScript training. It covers:

- Object creation
- Object methods (`Object.keys`, `Object.values`, `Object.entries`)
- Frequency counting using objects
- Anagram checking using frequency map
- Array and object destructuring

---

## 🔧 Topics Covered

### 1. Objects in JavaScript

- Declaring objects using:
  - Object literal: `let obj = {};`
  - Object constructor: `let obj2 = new Object();`
- Adding key-value pairs dynamically

### 2. Object Methods

- `Object.entries(obj)` – Returns array of key-value pairs
- `Object.keys(obj)` – Returns array of keys
- `Object.values(obj)` – Returns array of values

### 3. Frequency Counter Pattern (for string problems)

#### Task:
> Write a function `areAnagrams(str1, str2)` that returns `true` if the two strings are anagrams (same letters in different orders), and `false` otherwise.

```js
areAnagrams("listen", "silent"); // true
areAnagrams("hello", "world");   // false
