//  Object

// Object literals
//  Create an Object
let myObject = {
  name: "jangid",
  id: 11111,
  fun1: function () {
    console.log("this is a function in object");
  },
};

// ---------------------------------------------------------------------------------

//  Access Object

console.log(myObject.name);
console.log(myObject["id"]);

myObject.fun1(); // Function call using object

// ---------------------------------------------------------------------------------

//  Modifying object

myObject.name = "javascript";
console.log(myObject.name);

// ---------------------------------------------------------------------------------

// object freeze -> restricted to change in object

// Object.freeze(myObject);
// myObject.name = "vikram"
// console.log(myObject);

// ---------------------------------------------------------------------------------

// methods in objects

myObject.greeting = function () {
  console.log("Buy best myObjects here.");
};
myObject.greeting2 = function () {
  console.log(`Buy ${this.company} best myObject with ${myObject.material}`);
};

myObject.greeting();
myObject.greeting2();
