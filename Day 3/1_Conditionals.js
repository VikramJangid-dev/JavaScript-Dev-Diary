console.clear();
//  Conditionals Statement

// if statment

var age = 32;
if (age >= 18) {
  console.log("You are eligible for vote");
}

// if else statement

let marks = 55;
if (marks >= 60) {
  console.log("You have passed the Exam");
} else {
  console.log("You failed.");
}

// if else if ladder  : add multiple conditions

marks = 80;
if (marks >= 90) {
  console.log("You got 1st Rank");
} else if (marks < 90 && marks >= 60) {
  console.log("You got 2nd Rank");
} else {
  console.log("failed");
}

// Ternary operator
// Syntax : condition? statement1 : statement 2

let name = "kaalu";

console.log(name !== "kaalu" ? "Wrong name" : `Welcome, ${name}`);
name = "kaali";
console.log(name !== "kaalu" ? "Wrong name" : `Welcome, ${name}`);

// Switch Case

var day = 8;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thrusday");
    break;

  case 6:
    console.log("friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Write Day between 1 to 7");
    break;
}

// Truthy and Falsy values

// truthy values in js are value which is always true except some values like
//  false, 0, null, undefined, " " (empty string),NaN these are falsy values which i always False

let num = 2;
let str = "hello";
let bol = true;

if (num) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}
