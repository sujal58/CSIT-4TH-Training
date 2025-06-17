// =========================
// Asynchronous JavaScript: setTimeout, setInterval, clearTimeout, clearInterval
// =========================

// Example: Basic setTimeout usage
console.log("1");
console.log("2");
setTimeout(() => {
  console.log("Timeout called after 5 seconds");
}, 5000);
console.log("3");
console.log("4");

// ---------------------------------
// clearTimeout example
const timeoutId = setTimeout(() => {
  console.log("This will NOT run because timeout is cleared");
}, 3000);

// Cancel the above timeout before it fires
clearTimeout(timeoutId);
console.log("Timeout cleared before execution");

// ---------------------------------
// setInterval example: counting numbers every second
let count = 0;
const intervalId = setInterval(() => {
  console.log("Count:", count++);
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 5000);





// ---------------------------------
// Bonus: Delayed repeated greeting with clearTimeout example

let greetingCount = 0;
let greetingTimeoutId;

function delayedGreeting() {
  greetingTimeoutId = setTimeout(() => {
    console.log("Hello! This is greeting number", ++greetingCount);
    if (greetingCount < 5) {
      delayedGreeting(); // schedule next greeting
    }
  }, 1000);
}

// Start greetings
delayedGreeting();

// Stop greetings after 7 seconds
setTimeout(() => {
  clearTimeout(greetingTimeoutId);
  console.log("Greetings stopped by clearing timeout");
}, 7000);
