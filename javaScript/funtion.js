// In JavaScript, functions are fundamental building blocks used to encapsulate reusable code. 
// Functions can be classified in various ways based on their definition, scope, and purpose. 
// Here's an in-depth look at functions in JavaScript, including their types, use cases, and 
// everything you need to know about them.

// Types of Functions

// Function Declaration
// Function Expression
// Arrow Function
// Anonymous Function
// Immediately Invoked Function Expression (IIFE)
// Constructor Function
// Generator Function
// Callback Function
// Higher-Order Function
// Pure Function

// 1. Function Declaration
// A function declaration defines a named function that can be invoked anywhere in 
// the code after its definition, thanks to hoisting.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// 2. Function Expression
// A function expression defines a function and assigns it to a variable. 
// Unlike function declarations, function expressions are not hoisted.


const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // 3

// 3. Arrow Function
// Arrow functions provide a concise syntax for writing functions. 
// They do not have their own this context and are often used in callbacks and array methods.

const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // 12

// 4. Anonymous Function
// An anonymous function is a function without a name.
//  They are often used in places where functions are passed as arguments, such as event handlers or callbacks.


setTimeout(function() {
  console.log('This runs after 2 seconds');
}, 2000);

// 5. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is defined. 
// It is useful for creating a new scope to avoid variable conflicts.


(function() {
  console.log('IIFE is executed immediately');
})();

// 6. Constructor Function
// Constructor functions are used to create objects. They are invoked using the new keyword.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // Alice

// 7. Generator Function
// Generator functions allow you to pause and resume function execution using the yield keyword. 
// They are defined with an asterisk * after the function keyword.

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// 8. Callback Function
// A callback function is passed as an argument to another function and is executed after some operation has been completed.


function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData(function(data) {
  console.log(data); // Data received
});

// 9. Higher-Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as a result.


function higherOrderFunction(fn) {
  fn();
}

higherOrderFunction(() => {
  console.log('Callback function executed');
});

// 10. Pure Function
// A pure function always produces the same output for the same input and has no side effects.


function pureFunction(a, b) {
  return a + b;
}

console.log(pureFunction(2, 3)); // 5

// Use Cases of Functions
// Code Reusability: Functions allow you to encapsulate code logic that can be reused multiple times throughout your program.
// Modularity: Breaking down complex problems into smaller, manageable functions makes your code easier to understand and maintain.
// Abstraction: Functions help in abstracting implementation details, exposing only the necessary interface to the users.
// Asynchronous Programming: Functions, especially callback functions and promises, are crucial for handling asynchronous operations in JavaScript.
// Event Handling: Functions are used to define event handlers for responding to user interactions in web applications.
// Everything About Functions in JavaScript
// Parameters and Arguments: Functions can take parameters (placeholders) and arguments (actual values).


function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('John'); // Hello, John!

// Default Parameters: You can define default values for parameters.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
// Rest Parameters: Allows you to represent an indefinite number of arguments as an array.

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6

// Destructuring Parameters: Allows you to unpack values from arrays or properties from objects into distinct variables.


function printCoordinates({ x, y }) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates({ x: 10, y: 20 }); // X: 10, Y: 20

// Function Scope: Functions create their own scope. Variables declared within a 
// function are not accessible outside of it.


function scopedFunction() {
  let message = 'Hello';
  console.log(message);
}

scopedFunction(); // Hello

// console.log(message); // Error: message is not defined
// Closures: Functions can capture and remember the environment in which they were created.


function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner(); // I am outside!

// Arrow Functions and this Context: Arrow functions do not have their own this context and inherit this from the parent scope.


const obj = {
  value: 42,
  regularFunction: function() {
    console.log(this.value);
  },
  arrowFunction: () => {
    console.log(this.value);
  }
};

obj.regularFunction(); // 42
obj.arrowFunction(); // undefined (or global object value in non-strict mode)

// Function Properties: Functions in JavaScript are objects and can have properties and methods.

function myFunction() {}
myFunction.description = "This is a function";
console.log(myFunction.description); // This is a function

// By understanding and utilizing these different types of functions and their use cases, you 
// can write more efficient, modular, and maintainable code in JavaScript.






