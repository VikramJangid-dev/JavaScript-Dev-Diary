console.clear();
// Objects Destructure

/*
It is used to extract values from objects and assign them to variables.
*/

const course = {
  coursename: "js Learn",
  price: "499",
  courseInstructor: "jangid",
  language: "Hinglish",
  Rateing: 5,
};

// without destructure we use dot operator

console.log("Without Destructure \n", course.coursename);
console.log("\n");

// with Destructuring object
// Syntaxt const {property_name, prop2 , ...propN} = object_name

const { coursename } = course;

console.log("With Destructure \n", coursename);
console.log("\n");

// Access multiple or single variable
console.log("Access multiple or single variable");

const { language, Rateing } = course;

console.log(language);
console.log(Rateing);
console.log("\n");

// Renaming Varibale during destructuring
console.log("Renaming Varibale during destructuring");

const { courseInstructor: instructor, language: lag } = course;

console.log(`Course Instructor : ${instructor}, Language : ${lag}`);
console.log("\n");

// ==========================================================================================================

/*
    -> Extract values from function parameters, making it easier to work   
        with the properties of an object passed to a function.
    -> Passing object property as parameters to function
*/

function greeting({ firstname, lastname }) {
  console.log(`Hello ${firstname} ${lastname} ,  welcome to the js learning !!`);
}

const user = {
  firstname: "Vikram",
  lastname: "Jangid",
};

greeting(user);
