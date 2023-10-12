//  Create an element
const myBtn = document.createElement("button");

// Add Content
myBtn.innerHTML = "Click ME!!!";

//  Insert in DOM HTML
document.querySelector(".Mainbox").append(myBtn);

// Add() Class :
myBtn.classList.add("mybtn_style");
myBtn.classList.add("btn_bg1");
myBtn.classList.add("btn_bg2");

// toggle() method :
myBtn.classList.toggle("btn_bg1");

// Remove() Class :
myBtn.classList.remove("btn_bg2");

// Navigating Methods :
const preElem = myBtn.previousElementSibling;
console.log(preElem.parentElement);

// const newLi = preElem.appendChild(document.createElement("li")).classList.add("list-items");

// const preElemChildCount = preElem.childElementCount;
// console.log(preElemChildCount);

//  Remove Elements : parent.removeChild() , elem_name.remove()

// document.querySelector(".Mainbox").removeChild(preElem);
// myBtn.remove();
