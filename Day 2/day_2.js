// Varibales

// var (variable - EJ55)

var userName = "vjangid";
console.log(userName);

// let (add in E6)
let userId = 12131;
console.log(userId);

// const (constant)

const dhula = "Ram";
const dhulan = "Ramiya";
// dhula = "kaalu"; // give error (aap constant variable pe value assign ni kr skte)
console.log(dhula + " weds " + dhulan);

// Perimetive and Reference Value

// Perimetive types Value [eg: integer , float , boolean , string]
// Real value copy hoti hain

var a = 20;
var b = a;
b = b + 2; // does not change a
console.log("This is a " + a);
console.log("This is b " + b);

// Reference types values [eg:  function (),  Array[], objects{}]
// reference value ka refernce(memory location) copy hota hain varibale mai, not the value

var arr1 = [1, 2, 3, 4, 5]; // Array  creation
var arr2 = arr1;
console.log("This is arr 1", arr1);
console.log("This is arr 2", arr2);

arr2.pop(); // pop() : remove the last item from array
arr2.pop();

console.log("This is arr 1", arr1);
console.log("This is arr 2", arr2);

//  Example for -> Reference type
let loginUser = { name: "jangid" }; //object
let copyUser = loginUser;
copyUser.name = "vikram";
console.log(copyUser.name);
console.log(loginUser.name);

//  Array with different data types

const mixtureArray = [1, "kaalu", true];
console.log(mixtureArray);

//  How to copy reference type values

//     SPREAD OPERATOR  (...)
// syntax : (...variable_name)

// Array & copy array

let numberArr = [1, 2, 3, 4, 5]; // Array creation
let copyArr = [...numberArr]; // shallow copy array using spread operator

console.log("This is originalArray ",numberArr);
console.log("This is copiedArr ",copyArr);

copyArr.pop();

console.log("This is copiedArr ",copyArr);
console.log("This is originalArray ",numberArr); // does not change

// Object & copy object

let userData = { name: "kaalu" }; // object creation
let copyObject = { ...userData }; // copy

console.log("This is OriginalObject " + userData.name);

copyObject.name = "Goora";  // change the copyObject name property

console.log("This is copiedObject " +copyObject.name);
console.log("This is OriginalObject " + userData.name);
