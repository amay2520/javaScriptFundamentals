// "Strict mode" in JavaScript is a way to opt into a restricted variant of JavaScript. I
// t makes it easier to write "secure" JavaScript by throwing errors for potentially problematic syntax and behavior. 
// This mode can be enabled globally for an entire script or locally for individual functions.

// Enabling Strict Mode
// Global Strict Mode

// To enable strict mode globally, you add "use strict"; at the beginning of your script.


"use strict";
// Entire script is in strict mode
var x = 3.14;
// Local Strict Mode

// To enable strict mode for a specific function, you add "use strict"; at the beginning of the function body.


function myFunction() {
  "use strict";
  // Function is in strict mode
  let y = 3.14;
}

// Key Features and Restrictions in Strict Mode
// Eliminates this coercion

// In strict mode, this remains undefined in functions that are called as functions (rather than methods).


function myFunction() {
  "use strict";
  console.log(this); // undefined
}
myFunction();

// Disallows Undeclared Variables

// In strict mode, using a variable without declaring it throws an error.

"use strict";
x = 3.14; // Error: x is not defined

// Prevents Duplicate Parameter Names

// In strict mode, having duplicate parameter names in a function declaration throws an error.


"use strict";
function sum(a, a, c) { // Error: Duplicate parameter name not allowed in this context
  return a + a + c;
}
// Prohibits Octal Literals

// Octal literals (numbers prefixed with 0) are not allowed in strict mode.

"use strict";
let num = 010; // Error: Octal literals are not allowed in strict mode
// Throws Errors on Assignment to Non-Writable Properties

// In strict mode, assigning a value to a non-writable property throws an error.


"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9; // Error: Cannot assign to read-only property 'x' of object
// Disallows with Statements

// The with statement is not allowed in strict mode because it makes code harder to predict and optimize.


"use strict";
()=>{math}; { // Error: Strict mode code may not include a with statement
  
    let x = cos(2);
}
// Disallows Deleting Plain Names

// Deleting a variable, function, or argument in strict mode results in an error.

"use strict";
let x = 3.14;
// delete x; // Error: Delete of an unqualified identifier in strict mode.

// Restricts eval

// The eval function is more restricted in strict mode. 
// Variables and functions declared inside eval do not leak into the surrounding scope.
// 

"use strict";
eval("var x = 2;");
console.log(x); // Error: x is not defined

// Secures arguments

// The arguments object behaves differently in strict mode. 
// Changes to the arguments object do not affect the corresponding named arguments and vice versa.


function myFunction(a, b, c) {
  "use strict";
  a = 42;
  console.log(arguments[0]); // remains the original value
}
// myFunction(1, 2, 3); // 1

// Use Cases for Strict Mode
// Better Error Checking

// Strict mode catches common coding mistakes and throws errors, helping you to debug and improve your code quality.

// Enhanced Performance

// Strict mode allows JavaScript engines to perform optimizations, as it imposes more constraints, making the code easier to analyze.

// Security

// Strict mode eliminates some silent errors and makes it easier to write "secure" JavaScript,
//  by preventing actions that are likely to be erroneous or unsafe.

// Future-proofing Code

// Strict mode is designed to be forward-compatible with future versions of JavaScript, 
// ensuring that your code adheres to current best practices and standards.

// Examples of Strict Mode in Action
// Example 1: Eliminating this coercion

function Person(name) {
  "use strict";
  this.name = name; // Error: Cannot set property 'name' of undefined
}
Person("Alice");

// Example 2: Preventing Undeclared Variables

function calculateArea(radius) {
  "use strict";
  pi = 3.14; // Error: pi is not defined
  return pi * radius * radius;
}
console.log(calculateArea(10));

// Example 3: Catching Duplicate Parameter Names

function sum(a, b, a) {
  "use strict";
  return a + b + a; // Error: Duplicate parameter name not allowed in this context
}
// By using strict mode, you can write more robust, maintainable, and secure JavaScript code.