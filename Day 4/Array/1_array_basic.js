console.clear();
// Arrays - multple value or items store in a sigle variable, store multiple data of different type like number , string , boolean , objects, and also an array

//  How create an array

let myEmptyArray = []; //empty array
let myNumberArray = [1, 2, 3, 5, 6, 7]; //  Array with same type of data
let mixedArray = [1, -2, "This is an array", true]; // Array with different type of data

//   Display an array
console.log(myNumberArray);

//   length method to check the length of an array
console.log("Length of given array is ",myNumberArray.length);

// How access Array items using index number
console.log(myNumberArray[5]);

// indexof() give index number of an item in array
console.log("Index is ",mixedArray.indexOf("This is an array"));
console.log(myNumberArray.indexOf(8)); //  8 is not present in array so it give -1 in output

// Modifying array
mixedArray[2] = "KaaluuBhai"; // Change in array
console.log(mixedArray);

// Iterating Through an Array :

// Using for loop :
for (let i = 0; i < myNumberArray.length; i++) {
//   myNumberArray[i] *= 2;
  console.log(myNumberArray[i]*2);
}

// using foreach() loop :
myNumberArray.forEach(function (value, index) {
  console.log("Index :", index + " Value :", ++value);
});
