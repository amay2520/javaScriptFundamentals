// Closures in JavaScript can be thought of as functions that "remember" 
// the environment in which they were created.

// Here's a simple explanation:

// Outer Function: You have a function that creates a local variable and defines an inner function.
// Inner Function: This inner function has access to the variables of the outer function even 
// after the outer function has finished executing.

function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
myClosure(); // "I'm outside!" is logged to the console

// outerFunction creates a variable outerVariable and defines innerFunction which logs outerVariable.
// outerFunction returns innerFunction.
// When outerFunction is called, it runs and returns innerFunction, which is stored in myClosure.
// When myClosure() is called, it logs outerVariable because it remembers the environment where it was created.

// Key Points:
// Closure: The combination of the function and the lexical environment within which that function was declared.
// Lexical Environment: The variables and scope where the function was created.
