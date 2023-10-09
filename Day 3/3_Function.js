console.clear();
//  Functions

// function decleration
function fun1() {
  console.log("This is a function");
}

// function call
fun1();

// Type of Functions

//  1.Function Statements
// syntax :  function fun() { code }

function printname() {
  console.log("I am Nammed function");
}
printname();

//  2.Function Expressions
// syntax :  var fun_variable = function () { code };

var funExpression = function () {
  console.log("I am Expression function");
};
funExpression();

//  3. Anonymous function (callback function)
// syntax :  function() { code }
var anonymous = function () {
  console.log("this is anonymous function");
};

//  4. Arrow Function
// () => { code }

var funArrow = () => {
  console.log("I am Arrow function");
};
funArrow();

// Arrow function without parameter

var arrowFunction = () => {
  console.log("this is arrow function without parameter");
};
arrowFunction();

// Arrow function with parameter

var arrowFunction2 = (val) => {
  console.log("this is arrow function with 'val' parameter", val);
};
arrowFunction2(50);

//================= Function with Argument ===============

function sum(a,b){
    return a+b;
};
let ans = sum(2,4);
console.log("Sum is ",ans);

//================ Function with Multiple Argument ==============

//   Arguments in function ("arguments")
//   Arguments in function : "arguments" -> collect multiple argument 
//   arguments in function is an object not an actual array
//   it store multiple aguments in indexed manner

function mult(){
    let product = 1;
    for(let value of arguments){
        product = value * product;
    }
    return product;
}

console.log('Mutilply : ' + mult(4,2,5,6)); 