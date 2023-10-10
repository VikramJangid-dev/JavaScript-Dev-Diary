console.clear();

// Array Methods --> push, pop, shift, unshift, splice

let myArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Original Array \n", myArray);

myArray.push(2); // insert a value at end
console.log("insert a value at end by push ", myArray);

myArray.pop(); // delete a value from last
console.log(" delete a value from last by pop ", myArray);

myArray.unshift(10); // insert value at start
console.log("insert value at start by unshift ", myArray);

myArray.shift(); // delete value from start
console.log("delete value from start by shift ", myArray);

myArray.splice(3, 3); // delete value from between myArray
console.log("delete value from between by splice", myArray);

