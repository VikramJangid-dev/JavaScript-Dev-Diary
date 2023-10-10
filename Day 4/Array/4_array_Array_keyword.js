console.clear();

//  "Array" keyword

// isArray -> check wether value or item is array or not
console.log(Array.isArray("jangid"));

// form -> covert to array
console.log(Array.from("jangid"));

// interesting - read more abut it
console.log(Array.from({ name: "jangid" })); // output is empty array

//  Array.of -> same as Array.from
let num1 = 30;
let num2 = 60;
let num3 = 90;

console.log(Array.of(num1, num2, num3));
