console.clear();

// Object methods

// Singleton object

// const userData = new Object()

// -------------------------------------------------------------------------

//  non-singlton object
// literals object
const userData = {};

userData.id = "1011abc";
userData.name = "jangid";
userData.isLoggedIn = false;

// console.log(userData);

// -------------------------------------------------------------------------

//  Object Nesting --> objects as a property in an object
const newUser = {
  email: "newuser@123gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vikram",
      lastname: "jangid",
    },
  },
};

// Accessing nested object

console.log(newUser.fullname.userfullname.firstname);

// -------------------------------------------------------------------------

// Merge  OR copy objects

/* 
  Object.assign() 
    -> static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
    syntax : var returnObject = Object.assign(target , source1 , source2...sourceN)
*/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// ---- Merge obj2 with obj1 (target - obj1)

const mergeObject = Object.assign(obj1, obj2);
console.log(mergeObject);

console.log(obj1 == mergeObject); // true

// ---- Merge object in empty obj and return in mergeObject

const mergeObject2 = Object.assign({}, obj1, obj2, obj3); // target-empty object
console.log(mergeObject2);

// console.log(obj1);


// -------------------------------------------------------------------------

// ---- Spread Operator "..."

const obj4 = { ...obj2, ...obj3 };
// console.log(obj4);


// -------------------------------------------------------------------------

// ---- Object.keys method

// -> display all keys of an object in array
console.log(Object.keys(userData));

// ---- Object.values method

// -> display all values of an object in array
console.log(Object.values(userData));

// iterate through object:

// Object.values(userData).forEach((values) => {
//   console.log(values);
// });


// -------------------------------------------------------------------------

// hasOwnProperty()

// instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).

console.log(  " Object.hasOwnProerty() Method : \n",  userData.hasOwnProperty("id")); // True

console.log(  " Object.hasOwnProerty() Method : \n",userData.hasOwnProperty("address")); // false


// -------------------------------------------------------------------------

// Object.hasOwn() --> supported in Browser

console.log(  " Object.hasOwn() Method : \n",  Object.hasOwn(userData, "isLoggedIn"));
