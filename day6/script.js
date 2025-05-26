// Day 6 - JavaScript DOM Manipulation with Detailed Explanation

// 1. Accessing the full document object
console.log("Full document:", document);

// 2. Accessing elements by Tag Name (returns HTMLCollection)
let h1_tag = document.getElementsByTagName("h1");
console.log("By Tag Name (h1):", h1_tag); // Array-like collection

// 3. Accessing by ID (returns single element)
let hello_id = document.getElementById("hello");
console.log("By ID (#hello):", hello_id);

// Styling the element directly
hello_id.style.color = "red";
hello_id.style.fontSize = "32px";

// 4. Accessing by Class Name (returns HTMLCollection)
let classItems = document.getElementsByClassName("desc");
console.log("By Class Name (.desc):", classItems);

// Access individual items using index
console.log("First .desc element:", classItems[0].textContent);

// Loop through class-based elements (HTMLCollection is array-like)
for (let item of classItems) {
  item.style.fontStyle = "italic";
}

// 5. Accessing using querySelector (returns first matching element)
let queryItem = document.querySelector(".hello");
console.log("By querySelector (.hello):", queryItem);

// 6. Accessing using querySelectorAll (returns NodeList - array-like)
let queryAll = document.querySelectorAll(".desc");
console.log("By querySelectorAll (.desc):", queryAll);

// Looping through NodeList using forEach
queryAll.forEach((item, index) => {
  item.textContent += ` [Index: ${index}]`; // Adding index info to text
});

// 7. Working with text content and HTML
console.log("textContent:", hello_id.textContent); // Includes hidden text
console.log("innerText:", hello_id.innerText); // Visible text only
console.log("innerHTML:", hello_id.innerHTML); // Includes HTML tags inside

// 8. Class manipulation
hello_id.classList.add("nepathya"); // Adds the class
console.log("Class after add:", hello_id.className);

hello_id.classList.remove("nepathya"); // Removes the class
console.log("Class after remove:", hello_id.className);

hello_id.classList.toggle("hello"); // Toggles the 'hello' class
console.log("Class after toggle:", hello_id.className);




