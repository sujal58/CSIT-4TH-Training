// ==========================
// PART 1: EVENT HANDLING BASICS
// ==========================

const clickBtn = document.getElementById("clickBtn");
const greetBtn = document.getElementById("greetBtn");
const inputBox = document.getElementById("inputBox");
const logArea = document.getElementById("log");

// Reusable log function (pre-ES6 style function)
function log(message) {
  logArea.innerHTML += `<p>${message}</p>`;
}

// Basic Events
clickBtn.addEventListener("click", function () {
  log("Click event triggered");
});

clickBtn.addEventListener("dblclick", function () {
  log("Double-click event triggered");
});

clickBtn.addEventListener("mouseover", function () {
  log("Mouse over event triggered");
});

inputBox.addEventListener("keyup", function (e) {
  log(`Key released: ${e.key}`);
});

inputBox.addEventListener("focus", () => {
  log("Input focused");
});


clickBtn.addEventListener("mouseup", () => {
  log("Mouse up event triggered");
});

// ==========================
// PART 2: ES6 FEATURES
// ==========================

// --------------------------
// 1. Arrow Functions
// --------------------------

const showMessage = (msg) => {
  log(`Arrow function: ${msg}`);
};

greetBtn.addEventListener("click", () => {
  showMessage("Hello from arrow function");
});

// --------------------------
// 2. let and const
// --------------------------

let clickCounter = 0;
const instructor = "Teacher";

clickBtn.addEventListener("dblclick", () => {
  clickCounter++;
  log(`Counter incremented: ${clickCounter}`);
});

// --------------------------
// 3. Template Literals
// --------------------------

const greet = (name) => {
  log(`Welcome, ${name}`);
};

greet(instructor);

// --------------------------
// 4. Default Parameters + Destructuring
// --------------------------

const showUser = ({ name = "Guest", age = 18 } = {}) => {
  log(`User: ${name}, Age: ${age}`);
};

greetBtn.addEventListener("dblclick", () => {
  const user = {
    name: "Alice",
    age: 25,
  };
  showUser(user);
});

// --------------------------
// 5. Spread and Rest Operators
// --------------------------

const calculateTotal = (...nums) => {
  return nums.reduce((sum, num) => sum + num, 0);
};

const values = [10, 20, 30];
log(`Total using spread: ${calculateTotal(...values)}`);

// --------------------------
// 6. Array Methods: forEach and map
// --------------------------

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  log(`Fruit ${index + 1}: ${fruit}`);
});

const fruitLengths = fruits.map((fruit) => fruit.length);
log(`Fruit name lengths: ${fruitLengths.join(", ")}`);

// --------------------------
// 7. Classes and this keyword
// --------------------------

class ClickTracker {
  constructor() {
    this.total = 0;
  }

  increment() {
    this.total++;
    log(`Clicks tracked by class: ${this.total}`);
  }
}

const tracker = new ClickTracker();

clickBtn.addEventListener("mouseup", () => {
  tracker.increment();
});
