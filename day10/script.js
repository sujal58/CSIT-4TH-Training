// =========================
// JavaScript Promises Examples with Explanations
// =========================

// 1. Basic Promise creation and usage

/*
  A Promise is an object representing the eventual completion or failure of an asynchronous operation.
  It has two possible outcomes:
  - resolve(value): if the operation succeeds
  - reject(reason): if the operation fails

  Here we create a Promise to simulate checking if a cake is available.
*/

const myPromise = new Promise((resolve, reject) => {
  const isCakeAvailable = false; // Change to true to simulate success

  if (isCakeAvailable) {
    resolve("Cake is available! Promise resolved.");
  } else {
    reject("Cake is not available! Promise rejected.");
  }
});

// This logs the Promise object (initially pending)
console.log(myPromise);

// Handling the promise result using then and catch
myPromise
  .then((message) => {
    // This callback runs if promise is resolved
    console.log("Then:", message);
  })
  .catch((error) => {
    // This callback runs if promise is rejected
    console.log("Catch:", error);
  });

// 2. Promise chaining

/*
  Promise chaining allows you to run multiple async operations sequentially.
  Each then() returns a new Promise, allowing you to chain further .then() or .catch() calls.
*/

// Simulated async function to fetch user data
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate fetching user info after 1 second
      resolve({ userId, name: "Alice" });
    }, 1000);
  });
}

// Simulated async function to fetch orders for a user
function fetchOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate fetching orders after 1 second
      resolve(["Order1", "Order2", "Order3"]);
    }, 1000);
  });
}

// Chain the async calls: first fetch user, then fetch orders for that user
fetchUser(101)
  .then((user) => {
    console.log("User fetched:", user);
    return fetchOrders(user); // Return another promise
  })
  .then((orders) => {
    console.log("Orders fetched:", orders);
  })
  .catch((error) => {
    // Catch any errors in the whole chain
    console.error("Error:", error);
  });

// 3. Using Fetch API with Promises

/*
  The Fetch API returns a Promise that resolves to the Response object.
  We must check if the response is OK (status 200-299), then parse it as JSON.
*/

fetch("https://fakeapi.net/products")
  .then((response) => {
    if (!response.ok) {
      // If response status is not OK, reject with an error
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse JSON data from the response
  })
  .then((products) => {
    console.log("Products fetched from API:", products);
  })
  .catch((error) => {
    // Handle network or parsing errors
    console.error("Fetch error:", error);
  });

// 4. Promise.all example

/*
  Promise.all runs multiple promises in parallel and returns a new Promise.
  It resolves when all input promises resolve,
  or rejects immediately if any input promise rejects.
*/

const promise1 = Promise.resolve(3); // Immediately resolved promise with value 3
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "foo")); // Resolves with "foo" after 2 seconds
const promise3 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
); // Fetch user data from API

// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    // values is an array with results from each promise in order
    console.log("Promise.all resolved with values:", values);
  })
  .catch((error) => {
    // If any promise rejects, catch here
    console.error("Promise.all error:", error);
  });
