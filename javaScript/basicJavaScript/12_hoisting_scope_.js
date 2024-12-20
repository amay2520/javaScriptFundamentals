// SCOPE determines the accessibility (visibility) of variables, functions, and objects in different parts of your code.
    // 1.scope means   { }  its not object when we talk about functions

    // 1.1 Global Scope
        //Variables declared outside of any function or block have global scope.
        //Accessible anywhere in the code.

        let globalVar = "I am global";

        function displayGlobal() {
            console.log(globalVar); // Output: I am global
        }
        displayGlobal();
    //

    // 1.2 Function Scope
        //Variables declared with var inside a function are function-scoped.
        //They are accessible only within the function.

        function demoFunctionScope() {
            var funcScopedVar = "I am function scoped";
            console.log(funcScopedVar); // Output: I am function scoped
        }
        demoFunctionScope();
        console.log(funcScopedVar); // Error: funcScopedVar is not defined
    //
    
    // 1.3 Block Scope
        // Variables declared with let or const are block-scoped.
        // Accessible only within the block {} they are declared in.

        {
            let blockScopedVar = "I am block scoped";
            const anotherBlockVar = "Block scoped too";
            console.log(blockScopedVar); // Output: I am block scoped
        }
        console.log(blockScopedVar); // Error: blockScopedVar is not defined
    // 

    // 1.4 Lexical Scope
        //A function’s scope is determined by its location in the source code.
        //Functions have access to variables in their own scope and in parent (outer) scopes.

        function outerFunction() {
          let outerVar = "I am outer";
        
          function innerFunction() {
            console.log(outerVar); // Output: I am outer
          }
          innerFunction();
        }
        outerFunction();
    //
//                  

//2. Temporal Dead Zone (TDZ)
    //The TDZ is the time between the entering of a block and the actual declaration of a variable with let or const.
    {
      // TDZ starts here
      console.log(x); // Error: Cannot access 'x' before initialization
      let x = 10; // TDZ ends here
    }
//

// 3. Hoisting
    //What is Hoisting?
    //Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compile phase.
    //Only declarations (not initializations or assignments) are hoisted.

    // 3.1 Variable Hoisting
        //var: Hoisted and initialized to undefined until the code assigns a value.
        //let and const: Hoisted but are not initialized, and remain in the Temporal Dead Zone (TDZ) 
        // until the execution reaches the declaration.
    
        // With var:
        console.log(x); // Output: undefined
        var x = 5;
        console.log(x); // Output: 5

        // With let and const:
        console.log(y); // Error: Cannot access 'y' before initialization
        let y = 10;

        console.log(z); // Error: Cannot access 'z' before initialization
        const z = 15;
    //

    // 3.2 Function Hoisting
        // Function Declarations are fully hoisted, allowing them to be called before they’re defined.
        // Function Expressions (including arrow functions) are not hoisted.
        
        // 3.2.1 Function Declaration:
            greet(); // Output: Hello!
            function greet() {
                console.log("Hello!");
            }
        //

        // 3.2.2 Function Expression:
            greet(); // Error: Cannot access 'greet' before initialization

            const greet = function () {
                console.log("Hi!");
            };
        //
    //
//

// 4. Closures and Scope
    //A closure is a function that remembers the variables from its lexical scope, even after the outer function has finished executing.
    function createCounter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    const counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    // Here, counter maintains access to the count variable due to closure.
//

// 5. Hoisting and Scope Together
    // Example 1: Hoisting with Global and Function Scope

        console.log(a); // Output: undefined (hoisted but not initialized)
        var a = 10;

        function test() {
            console.log(b); // Output: undefined (hoisted but not initialized)
            var b = 20;
        }
        test();
    //

    // Example 2: Hoisting with Block Scope
        {
          console.log(c); // Error: Cannot access 'c' before initialization
          let c = 30;
        }
    //

    // Example 3: Function Hoisting and Scope
        console.log(myFunc()); // Output: Hello!

        function myFunc() {
            return "Hello!";
        }
    //
//

// Best Practices for Hoisting and Scopes
// Declare variables and functions at the top of their scope to avoid confusion.
// Use let and const instead of var to avoid scope-related bugs.
// Understand closures and their relationship with lexical scope for cleaner, modular code.
// Avoid accessing variables in the Temporal Dead Zone (TDZ).

// HOISTING IS A CONCEPT WHRE VARIABLE IS CALLED BEFORE INITIALIZATION DUE TO WHICH VARIABLE IS THERRE 
// BUT WITHOUT INITIALIZATION IT LOG OUT ReferenceError AS IN JAVASCRIPT MEMORY IS ALLOCATED BEFORE 
// EXECUTION RESULTS IN UNDEFINED VALUE TO VARIABLE TILL INITIALIZATION SO WHEN WE CALL VARIABLE
// BEFORE INITIALIZATION THE CONCEPT IS CALLED HOISTING.