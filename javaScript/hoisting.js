//                                    ***********HOISTING*************
// ~ Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// ~ Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, 
//   but the value is always undefined. ("Declaration hoisting")
// ~ The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
// ~ The side effects of a declaration are produced before evaluating the rest of the code that contains it.

// Below are the examples of HOISTING as you see 
// in javascript we have memory allocation to the variables and function
// before executing them that is why in:


// FIRST CASE :
// We have declaration and initialization and then we call so we have
// output as expected
var x = 7 ;
function name () {
    console.log("aavs");
}

name();
console.log(x);
// For the above piece of code output is straight:
// aavs
// 7


// SECOND CASE :
// here we have function which is not hoisted because it can be call anywhere and declares anywhere
// but in case of x output is undefined because we call x before we initializes a value to the variable
// due to which an empty var x is log out which result in undefined as memory is allocated to it
// but no initialization is there in memory.
name();
console.log(x);

var x = 7 ;
function name () {
    console.log("aavs");
}
// for the above code its :
// aavs
// undefined

// CASE THIRD :
// Here we have same output for function but uncaught ReferenceError for x
// because when hoisted there should be any variable by the name of x which in this 
// case we dont have it in here
name();
console.log(x);

function name () {
    console.log("aavs");
}
// for the above code:
// aavs
// Uncaught ReferenceError

// CASE FOURTH :
// as it is arrow function it also holds in a variable 
// name const so we have reference error because memory is allocated to 
// variable but again we call variable before initialization that is why we have ReferenceError.
name();
console.log(x);

var x = 7 ;
const name = () => {
    console.log("aavs");
};

// for this code its:
// undefined 
// ReferenceError cannot access name before initialization

// HOISTING IS A CONCEPT WHRE VARIABLE IS CALLED BEFORE INITIALIZATION DUE TO WHICH VARIABLE IS THERRE 
// BUT WITHOUT INITIALIZATION IT LOG OUT ReferenceError AS IN JAVASCRIPT MEMORY IS ALLOCATED BEFORE 
// EXECUTION RESULTS IN UNDEFINED VALUE TO VARIABLE TILL INITIALIZATION SO WHEN WE CALL VARIABLE
// BEFORE INITIALIZATION THE CONCEPT IS CALLED HOISTING.