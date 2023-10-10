console.clear();


/*
        1. Spread operator"..." 
        2. concat()
        3. flat()
*/


let mixedArray = [1, -2, "This is an array", true]; // Array with different type of data
let myArray = [1, 2, 3, 4, 5, 6, 7];

// concat() Method -> concatenating two arrays :

console.log("concatenating two arrays");
var jointArray = myArray.concat(mixedArray); // returns a new array by merging two or more values/arrays.
console.log(jointArray);

// -> concatenating a value and array

console.log("concatenating a value and array");
var jointArray2 = myArray.concat("using concat", mixedArray);
console.log(jointArray2);



/*
    Spread Operator "..."  
        -> Merge two or array using spread operator in new array
        -> arr = [...arrName, ...ArrrName]
*/

const arr1 = [1, 23, 4, 6, 8];
const arr2 = [10, "javascript", -20];
console.log(arr1);
console.log(arr2);

const mergeArray = [...arr1, ...arr2];
// const mainArray = [...arr1, 1000, ...arr2]; // add value with arrays
console.log(mergeArray);



/*
    Flat()  Method :
        -> if we have  array like these => [1,2,3,[1,2,3],[4,5,6,[7,8]]]
*/

const multiVerseArray = [1, 2, 3, [1, 2, 3], [4, 5, [6, 7, 8]]];

const realArray = multiVerseArray.flat(3);
console.log(realArray);
