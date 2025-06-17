// ===============================
// Day 4: Async/Await and Advanced Promises
// ===============================

// 1. Basic fetch using Promise chaining (then/catch) - previous topic

// fetch("https://fakeapi.net/products")
//   .then((res) => res.json()) // Parse JSON from response
//   .then((data) => {
//     console.log("Data fetched with .then():", data);
//   })
//   .catch((err) => {
//     console.error("Fetch error:", err);
//   });

// 2. Async/Await Syntax

/*
  Async/Await is syntactic sugar over Promises, making async code easier to read.
  An async function returns a Promise implicitly.
*/

async function hello() {
  return "Hello world";
}

//return object of promise
console.log(hello());

// Calling async function returns a Promise
hello().then((res) => {
  console.log("Async function result:", res);
});

async function fetchData() {
  try {
    // Await pauses execution until the Promise resolves
    let response = await fetch("https://fakeapi.net/products");
    let data = await response.json();
    console.log("Data fetched with async/await:", data);
  } catch (error) {
    // Catch fetch or parsing errors
    console.error("Error while fetching data:", error);
  }
}

fetchData();

// 3. Custom Promise with timeout and condition

/*
    Generates a random number between 0-9, waits 5 seconds,
    then resolves if even or rejects if odd.
  */

let promise1 = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log("Generated random number:", randomNumber);

  setTimeout(() => {
    if (randomNumber % 2 === 0) {
      resolve("Success: The number is even!");
    } else {
      reject("Error: The number is odd!");
    }
  }, 5000);
});

//return promise object with pending state as it will be printed before the promise is resolved i.e promise take 5 sec to either resolve or reject
console.log(promise1);

promise1
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch((err) => {
    console.error(err);
  });

// 4. Resolving multiple promises using Promise.all

/*
    Promise.all waits for all promises to resolve,
    then returns an array of their results.
  */

let task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 done"), 1000)
);
let task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 done"), 2000)
);
let task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 done"), 3000)
);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("All promises resolved!");
    console.log(results); // ["Task 1 done", "Task 2 done", "Task 3 done"]
  })
  .catch((err) => {
    // If any promise rejects, catch here
    console.error("Error in Promise.all:", err);
  });
