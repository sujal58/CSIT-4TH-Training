# Document Object Model (DOM)

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; thus, programming languages like JavaScript can interact with the page dynamically.

---

# Day 6 – JavaScript DOM Manipulation

This lesson focuses on how to access and manipulate HTML elements using JavaScript by leveraging the DOM API.

---

## Topics Covered

- Understanding the `document` object and its role in DOM manipulation
- Accessing elements by:
  - ID (`getElementById`)
  - Tag name (`getElementsByTagName`)
  - Class name (`getElementsByClassName`)
  - CSS selectors (`querySelector` and `querySelectorAll`)
- Differentiating between the collections returned by these methods (Element, HTMLCollection, NodeList)
- Looping through array-like collections (`HTMLCollection` and `NodeList`)
- Modifying element content using `textContent`, `innerText`, and `innerHTML`
- Styling elements dynamically using `.style` property
- Adding, removing, and toggling CSS classes via the `classList` API

---

## Assignment

```javascript
// Counter App
// Create a web page with:

// A counter display (starts at 0)

// Two buttons: "Increase" and "Decrease"

// On button click, update the counter value using JavaScript.

// Change the counter color to green if positive, red if negative.
