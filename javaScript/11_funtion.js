// In JavaScript, functions are fundamental building blocks used to encapsulate reusable code. 
// Functions can be classified in various ways based on their definition, scope, and purpose. 
// Here's an in-depth look at functions in JavaScript, including their types, use cases, and 
// everything you need to know about them.

// Use Cases of Functions
// Code Reusability: Functions allow you to encapsulate code logic that can be reused multiple times throughout your program.
// Modularity: Breaking down complex problems into smaller, manageable functions makes your code easier to understand and maintain.
// Abstraction: Functions help in abstracting implementation details, exposing only the necessary interface to the users.
// Asynchronous Programming: Functions, especially callback functions and promises, are crucial for handling asynchronous operations in JavaScript.
// Event Handling: Functions are used to define event handlers for responding to user interactions in web applications.
// Everything About Functions in JavaScript
// Parameters and Arguments: Functions can take parameters (placeholders) and arguments (actual values).


// 1. Function Declaration
  //A named function defined using the function keyword.
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Output: Hello, Alice!
//

// 2. Function Expression
  //A function assigned to a variable, optionally named.
  const add = function (a, b) {
  return a + b;
  };
  console.log(add(5, 3)); // Output: 8
//

// 3. Anonymous Function
  //A function without a name, typically used as a callback.
  setTimeout(function () {
    console.log("Anonymous function executed!");
  }, 1000);
  // Output (after 1 second): Anonymous function executed!
//

// 4. Arrow Function
  //A concise function syntax introduced in ES6.
  const multiply = (a, b) => a * b;
  console.log(multiply(4, 5)); // Output: 20
//

// 5. Immediately Invoked Function Expression (IIFE)
  // A function that runs immediately after it’s defined.
  (function () {
  console.log("IIFE executed!");
  })();
  // Output: IIFE executed!
//

// 6. Higher-Order Function
  //A function that takes another function as an argument or returns a function.
  function process(callback) {
    callback();
  }

  process(() => {
    console.log("Callback executed!");
  });
  // Output: Callback executed!
//

// 7. Recursive Function
  //A function that calls itself to solve a problem.
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120
//

// 8. Generator Function
  //A function that can pause and resume its execution, indicated by function* and using yield.
  function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generateNumbers();
  console.log(generator.next().value); // Output: 1
  console.log(generator.next().value); // Output: 2
//

// 9. Async Function
  //A function that allows asynchronous code using async and await.
  async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  }
  fetchData();
//

// 10. Default Parameter Function
  // A function with default values for parameters.
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet());        // Output: Hello, Guest!
  console.log(greet("Alice")); // Output: Hello, Alice!
//

// 11. Rest Parameter Function
  // A function that can take an indefinite number of arguments.
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
//

// 12. Constructor Function
  // A function used to create objects, typically used with new.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const john = new Person("John", 25);
  console.log(john.name); // Output: John
//

// 13. Method
  // A function inside an object.
  const person = {
    name: "Alice",
    greet() {
      return `Hello, ${this.name}`;
    },
  };
  console.log(person.greet()); // Output: Hello, Alice
//

// 14. Getter and Setter Functions
  //Special functions to get and set object properties.

  Getter
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  console.log(person1.fullName); // Output: John Doe

  Setter
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
  };
  person2.fullName = "Jane Smith";
  console.log(person2.firstName); // Output: Jane
  console.log(person2.lastName);  // Output: Smith
//

// 15. Currying Function
  // A function that takes multiple arguments one at a time.
  function add(a) {
    return function (b) {
      return a + b;
    };
  }
  const addFive = add(5);
  console.log(addFive(3)); // Output: 8
//

// 16. Variadic Function
  // A function that accepts a variable number of arguments, handled using arguments or rest parameters.
  function logArgs() {
    for (let arg of arguments) {
      console.log(arg);
    }
  }
  logArgs(1, 2, 3, 4); // Output: 1 2 3 4
//



// Type	                        Purpose
// Function Declaration	        Standard way to define named functions.
// Function Expression	        Assign functions to variables.
// Anonymous Function	          Functions without a name, often for callbacks.
// Arrow Function	              Concise ES6 syntax for functions.
// IIFE	                        Execute immediately when defined.
// Higher-Order Function        Take or return other functions.
// Recursive Function	          Call itself for repeated tasks.
// Generator Function	          Pause and resume using yield.
// Async Function	              Handle asynchronous operations with await.
// Default Parameter Function	  Provide default values for parameters.
// Rest Parameter Function      Accept indefinite arguments using ....
// Constructor Function	        Create objects with new.
// Method	                      Functions inside objects.
// Getter/Setter Function	      Access and modify object properties.
// Currying Function	          Break arguments into smaller functions.
// Variadic Function	          Accept any number of arguments.


