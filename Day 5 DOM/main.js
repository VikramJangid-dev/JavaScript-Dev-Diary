console.log(window);

// -> HTML Structure of the DOM or webpage
console.log(document);

// -> document is a object which have differet properties
console.dir(document);

// Manipulation of DOM : Example

// document.getElementById("heading").innerHTML="Basic of DOM"

// =================================================================================

// Selection In DOM

const myHeading = document.getElementById("heading");

// give an html Element
console.log(myHeading);

// getElement by classname

const topHeading = document.getElementsByClassName("title");
console.log(topHeading[0].innerText);

// Selecting by tagName

const allH2 = document.getElementsByTagName("h2"); // create HTMLCOllection[]
console.log(allH2);

// =================================================================================

// Select Attributes

// display id attribute
console.log(myHeading.id);

// display  - class attribute
console.log(myHeading.className);

// console.log(myHeading[type = "className"]);

// getAttribute
const headClassName = myHeading.getAttribute("class");
console.log(headClassName);

// setAttribute
myHeading.setAttribute("class", "firstHeading");
console.log(myHeading.getAttribute("class"));

// =================================================================================

// Change HTML content

console.log(myHeading.innerHTML); // display text inside element with tags or attributes

console.log(myHeading.innerText); // display text visible on screen

console.log(myHeading.textContent); // display all text inside element

// myHeading.innerHTML = "Day 1 in DOM"; // Change in html

// =================================================================================

// Apply Style

// allH2.style.color = "Red";  // Error because it is HTMLcollection

// If we want to add style to "allh2" so Convert HTMLCollection to Array.from()
// HTMLCollection is not a pure Array
// After convertion you can access all properties or method applicable on array

Array.from(allH2).forEach(function (h2) {
  h2.style.color = "orange";
});

// =================================================================================

// QuerySelector -> it select first element

const ListLi = document.querySelector("li"); // select first li
console.log(ListLi.innerHTML);
// ListLi.style.color = "black";
// ListLi.style.backgroundColor = "orange";


// Queryselecotor all -> Select all item with name className , tags 
// Working With NodeList

const myLiList = document.querySelectorAll("li"); // Create NodeList
console.log(myLiList);

// Apply style to all li items using foreach() Nodelist have property
myLiList.forEach(function (li) {
  li.style.color = "black";
});

// Working with HTMLCollection

const li_class = document.getElementsByClassName("list-items"); // Create HTMLCollection

// li_class.style.backgroundColor = "royalblue" // through an error

// convert li_class HTMLCollection into Array

Array.from(li_class).forEach((li) => {
  li.style.backgroundColor = "royalblue";
  li.style.margin = "10px";
});
