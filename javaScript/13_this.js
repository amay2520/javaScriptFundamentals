//The this keyword is one of the most important and sometimes confusing concepts in JavaScript. 
//It behaves differently depending on how and where it is used. 

// 1. What is this?
  // this refers to the execution context of the function, i.e., the object that is currently calling the function.
  // Its value depends on:
  // Where the function is defined.
  // How the function is invoked.
//

// 2. Global Context
  // In the global execution context:
    //In non-strict mode, this refers to the global object (window in browsers or global in Node.js).
    console.log(this); // In browsers, Output: `window`
  //

  //In strict mode, this is undefined.
    "use strict";
    console.log(this); // Output: `undefined`
  //
//

// 3. Inside a Function
  // Non-Strict Mode:
    //this refers to the global object.
    function showThis() {
      console.log(this); // Output: `window` (global object)
    }
    showThis();
  //
  
  //Strict Mode:
    //this becomes undefined.
    "use strict";
    function showThis() {
      console.log(this); // Output: `undefined`
    }
    showThis();
  //
//

//4. Inside a Method
  //When a function is a method of an object, this refers to the object that owns the method.
  const obj = {
    name: "JavaScript",
    greet: function () {
      console.log(this.name);
    },
  };
  obj.greet(); // Output: JavaScript
//

// 5. Arrow Functions
  //Arrow functions do not have their own this. Instead, they inherit this from their lexical scope 
  // (the context in which they were defined).
  const obj1 = {
    name: "JavaScript",
    greet: () => {
    console.log(this.name); // `this` is not `obj`, it refers to global `this`
    },
  };
  obj1.greet(); // Output: `undefined` (in strict mode) or global `this.name`
//

// 6. Constructors and Classes
  // When using a constructor function or class, this refers to the instance being created.
  function Person(name) {
    this.name = name;
  }
  const person1 = new Person("Alice");
  console.log(person1.name); // Output: Alice

  //In ES6 classes:

  class Animal {
    constructor(type) {
      this.type = type;
    }
    describe() {
      console.log(this.type);
    }
  }
  const dog = new Animal("Dog");
  dog.describe(); // Output: Dog
//

// 7. Explicit Binding: call, apply, and bind
  //You can explicitly set the value of this using call, apply, or bind.

  call:
  //Invokes a function with a specific this value and arguments passed individually.
  function showThis(arg) {
    console.log(this.name, arg);
  }
  const obj2 = { name: "JavaScript" };
  showThis.call(obj2, "is awesome!"); // Output: JavaScript is awesome!

  apply:
  //Works like call, but arguments are passed as an array.

  showThis.apply(obj2, ["is powerful!"]); // Output: JavaScript is powerful!
  
  bind:
  //Returns a new function with this permanently bound to the specified value.
  const boundFunc = showThis.bind(obj2, "rocks!");
  boundFunc(); // Output: JavaScript rocks!
//

// 8. Event Listeners
 // In event listeners:
  //this refers to the element that received the event.
  const button = document.querySelector("button");
    button.addEventListener("click", function () {
    console.log(this); // Output: the button element
  });
  
  //Using an arrow function:
  button.addEventListener("click", () => {
    console.log(this); // Output: global object or `undefined` in strict mode
  });
//

// 9. Edge Cases and Exceptions
  //9.1 Losing this in Callbacks
    //When passing a method as a callback, it can lose its original context.
    const obj3 = {
      name: "JavaScript",
      greet: function () {
        console.log(this.name);
      },
    };
  setTimeout(obj3.greet, 1000); // Output: undefined (or global object in non-strict mode)
  
  //  To fix:
  //Use bind:
  setTimeout(obj3.greet.bind(obj), 1000); // Output: JavaScript

  //9.2 Default Binding in Nested Functions
    //In nested functions, this may not behave as expected because they default to the global object or undefined.
    const obj4 = {
      name: "JavaScript",
      greet: function () {
        function inner() {
          console.log(this.name); // `this` points to global, not `obj`
        }
        inner();
      },
    };

    obj4.greet(); // Output: undefined (or global object in non-strict mode)
    //To fix:

    //Use an arrow function:
    const obj5 = {
      name: "JavaScript",
      greet: function () {
      const inner = () => {
          console.log(this.name); // Arrow function inherits `this` from `greet`
        };
        inner();
      },
    };
    obj5.greet(); // Output: JavaScript
  //

  // 9.3 this with setTimeout
  setTimeout(function () {
    console.log(this); // Output: global object or `undefined` in strict mode
  }, 1000);

  // To preserve `this`:
  setTimeout(() => {
    console.log(this); // Inherits from lexical scope
  }, 1000);
//

//10. Special Cases
  //10.1 this in eval
    //this inside eval behaves the same as in the surrounding scope.
    console.log(eval("this")); // Global object or `undefined` in strict mode
  //

  //10.2 this in with
    //Using with can create confusion for this and is discouraged.
    const obj6 = { a: 10 };
      with (obj6) {
      console.log(this); // Refers to global object, not `obj`
    }
  //
//

// Summary Table

// Context	                    Value of this

// Global Scope	                Global object (window or global), or undefined in strict mode
// Function	                    Global object, or undefined in strict mode
// Object Method	              The object the method belongs to
// Arrow Function	              Inherits this from the enclosing lexical scope
// Constructor Function	        The instance of the object being created
// Explicit Binding	            Whatever is passed to call, apply, or bind
// Event Listener	              The element that received the event (except for arrow functions)