//1. What is Error Handling?
  //Error handling is the process of responding to runtime errors in your code. 
  //Without proper error handling, errors can stop your program abruptly.

  //JavaScript provides:

  //try: Wraps the code that may throw an error.
  //catch: Handles the error if one occurs in the try block.
  //finally: Executes code regardless of whether an error occurs or not.
  //throw: Used to manually create and throw errors.
//

//2. Structure of Try-Catch
  try {
    // Code that might throw an error
  } catch (error) {
    // Code to handle the error
  } finally {
    // Code that will always run (optional)
  }
//

//3. What is throw?
  //The throw keyword allows you to create and throw an error manually. 
  // The thrown error can be of any type: a string, a number, an object, or an Error instance.
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Error caught:", error.message); // Output: Error caught: Something went wrong!
  }
//

//4. The catch Block
  //The catch block captures the thrown error and provides an error object with details:

  //name: Type of the error (e.g., SyntaxError, TypeError).
  //message: A description of the error.
  //stack: A string with the call stack (useful for debugging).

  try {
    JSON.parse("{ invalid json }");
  } catch (error) {
    console.log("Name:", error.name); // Output: SyntaxError
    console.log("Message:", error.message); // Output: Unexpected token i in JSON at position 2
    console.log("Stack:", error.stack); // Detailed stack trace
  }
//

//5. Using finally
  //The finally block executes regardless of whether an error occurred in the try block or not. 
  //It's commonly used for cleanup tasks.
  try {
    console.log("Trying...");
    throw new Error("Oops!");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("Finally: This always runs.");
  }
  // Output:
  // Trying...
  // Caught: Oops!
  // Finally: This always runs.
//

//6. Common Use Cases
  //6.1 Input Validation
    function validateAge(age) {
      try {
        if (typeof age !== "number") {
          throw new TypeError("Age must be a number");
        }
        if (age < 0) {
          throw new RangeError("Age cannot be negative");
        }
        console.log("Valid age:", age);
      } catch (error) {
        console.error(`${error.name}: ${error.message}`);
      }
    }

    validateAge(-5); // Output: RangeError: Age cannot be negative
    validateAge("twenty"); // Output: TypeError: Age must be a number
    validateAge(25); // Output: Valid age: 25
  //

  //6.2 Retry Logic
    function fetchData() {
      let attempts = 0;
      while (attempts < 3) {
        try {
          attempts++;
          console.log(`Attempt ${attempts}: Fetching data...`);
          if (Math.random() < 0.5) {
            throw new Error("Network error");
          }
          console.log("Data fetched successfully!");
          return;
        } catch (error) {
          console.warn(`Error: ${error.message}`);
          if (attempts === 3) {
            console.error("Failed after 3 attempts");
          }
        }
      }
    }

    fetchData();
  //

  //6.3 Custom Errors
    //You can create custom error classes to handle specific scenarios.
    class ValidationError extends Error {
      constructor(message) {
        super(message);
        this.name = "ValidationError";
      }
    }

    try {
      let username = "";
      if (!username) {
        throw new ValidationError("Username cannot be empty");
      }
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
    // Output: ValidationError: Username cannot be empty
  //
//

//7. Nested Try-Catch
  //Errors can be caught and handled at different levels using nested try-catch.
  try {
    try {
      throw new Error("Inner error");
    } catch (innerError) {
      console.error("Caught inner error:", innerError.message);
      throw new Error("Outer error");
    }
  } catch (outerError) {
    console.error("Caught outer error:", outerError.message);
  }
  // Output:
  // Caught inner error: Inner error
  // Caught outer error: Outer error
//

//8. Asynchronous Error Handling
  //8.1 Errors in Callbacks
    //try-catch doesn't work for errors inside asynchronous callbacks.

    Incorrect:
    try {
      setTimeout(() => {
        throw new Error("Async error");
      }, 1000);
    } catch (error) {
      console.error("Won't catch this:", error.message);
    }

    //Solution: Use error handling inside the callback:

    setTimeout(() => {
      try {
        throw new Error("Async error");
      } catch (error) {
        console.error("Caught async error:", error.message);
      }
    }, 1000);
  //

  //8.2 Errors in Promises
    //try-catch doesn’t catch promise rejections. Use .catch() or async/await.
    With .catch();
    
    fetch("invalid_url")
    .then((response) => response.json())
    .catch((error) => console.error("Caught promise error:", error.message));
  
    //With async/await:
    async function fetchData() {
      try {
        let response = await fetch("invalid_url");
        let data = await response.json();
      } catch (error) {
        console.error("Caught async error:", error.message);
      }
    }
    fetchData();
  //
//

//9. Important Concepts
  //9.1 throw with Different Data Types
    //You can throw any data type, but it's recommended to use Error objects for clarity.
    try {
      throw "This is a string error";
    } catch (error) {
      console.log("Caught:", error);
    }

    try {
      throw { message: "This is an object error", code: 500 };
    } catch (error) {
      console.log("Caught:", error.message, "Code:", error.code);
    }
  //

  //9.2 Suppressing Errors with Finally
    //Avoid suppressing errors by writing code in finally that overrides the error flow.
    try {
      throw new Error("An error occurred");
    } catch (error) {
      console.log("Caught:", error.message);
    } finally {
      // Bad practice: suppresses error
      return "Suppressed by finally";
    }
  //
//

//10. Common Mistakes
  //Not Catching Promises: Promises must be explicitly caught using .catch() or try-catch with async/await.
  //Unnecessary Use of Finally: Use finally only for cleanup; avoid using it to suppress or alter errors.
  //Throwing Non-Error Objects: Always use Error objects for consistency and better debugging.
//

//11. Summary
  //try: For wrapping risky code.
  //catch: For handling errors.
  //finally: For cleanup (runs regardless of success or error).
  //throw: For manually throwing errors.
  //JavaScript's error-handling system ensures your application can gracefully recover from errors or provide meaningful feedback.
//









//1. Additional Error Handling Concepts
  //1.1 Custom Error Classes
    //While we touched on creating custom errors, it's essential to understand how to structure error 
    // classes for different domains or scenarios.

    //Example: Custom Error Hierarchy
    class ApplicationError extends Error {
      constructor(message) {
        super(message);
        this.name = "ApplicationError";
      }
    }

    class DatabaseError extends ApplicationError {
      constructor(message) {
        super(message);
        this.name = "DatabaseError";
      }
    }

    class ValidationError extends ApplicationError {
      constructor(message) {
        super(message);
        this.name = "ValidationError";
      }
    }

    // Usage
    try {
      throw new ValidationError("Invalid user input");
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
    // Output: ValidationError: Invalid user input
  //

  //1.2 Global Error Handling
    //Errors not caught in a try-catch block can be handled globally in browsers and Node.js:
    
    // In Browsers:

    window.onerror = function (message, source, lineno, colno, error) {
      console.error("Global Error Caught:", message, "at", source, ":", lineno);
    };

    throw new Error("Uncaught Error Example");
    // Output: Global Error Caught: Uncaught Error Example at ...
    
    //In Node.js:
    process.on("uncaughtException", (error) => {
      console.error("Uncaught Exception:", error.message);
    });

    throw new Error("Node.js uncaught error");
    // Output: Uncaught Exception: Node.js uncaught error
  //

  //1.3 Error Propagation
    //Errors can propagate through function calls. You can handle errors at any level of the call stack.
    function levelOne() {
      levelTwo();
    }

    function levelTwo() {
      throw new Error("Error from level two");
    }

    try {
      levelOne();
    } catch (error) {
      console.error("Caught error:", error.message);
    }
    // Output: Caught error: Error from level two
  //

  //1.4 Error Logging
    //In production systems, errors are often logged for debugging and monitoring purposes. Use logging libraries or services like:

    //console.error for basic debugging
    //Logging libraries like Winston, Bunyan
    //Error tracking tools like Sentry, LogRocket
    //Example: Using Winston for Logging
  //
//





//1. What is Error Handling?
  //Error handling ensures your application can gracefully deal with runtime errors without crashing unexpectedly. It:

  //Prevents abrupt application failure.
  //Helps provide meaningful feedback to users.
  //Simplifies debugging and maintenance.

  //JavaScript has robust built-in error-handling mechanisms, including:
    //Error Object
    //Try-Catch-Finally
    //Throw
    //Error Propagation
    //Global Error Handling
    //Custom Errors
    //Asynchronous Error Handling
  //
//

//2. Types of Errors in JavaScript
  //Syntax Errors: Occur when the code is written incorrectly.

  // Syntax Error Example
  console.log("Hello World) // Missing closing quote

  //Uncaught SyntaxError: Unexpected end of input

  //Runtime Errors: Occur when the code is syntactically correct but fails during execution.
  console.log(x); // x is not defined

  //Uncaught ReferenceError: x is not defined
  
  //Logical Errors: Errors in the program logic that lead to unintended behavior.
  function calculateArea(length, width) {
    return length + width; // Logic error (should be multiplication)
  }
  console.log(calculateArea(5, 10)); // Outputs 15 instead of 50
//

//3. Core Error Handling Constructs
  //3.1 Try-Catch
    //try block: Wraps the code that might throw an error.
    //catch block: Captures and handles errors.
    //finally block (optional): Executes regardless of an error occurring.

    try {
      let result = 10 / 0; // Division by zero doesn't throw an error in JS
      console.log(result);
      JSON.parse("{ invalid json }");
    } catch (error) {
      console.error("Caught error:", error.message);
    } finally {
      console.log("Cleanup code, if necessary.");
    }
  //

  //3.2 Throwing Errors
    //You can manually throw errors using the throw keyword. Errors can be any data type, 
    //though using Error objects is recommended for consistency.
    
    //Example: Throwing Custom Errors


    function checkEligibility(age) {
      if (age < 0) {
        throw new RangeError("Age cannot be negative");
      }
      if (age < 18) {
        throw new Error("Underage");
      }
      return "Eligible";
    }

    try {
      console.log(checkEligibility(-5)); // Throws RangeError
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  //

  //3.3 Error Object Properties
    //name: Type of the error (e.g., TypeError, SyntaxError).
    //message: Description of the error.
    //stack: The call stack trace (useful for debugging).

    //Example: Understanding Error Properties 
    try {
      nonExistentFunction();
    } catch (error) {
      console.log("Name:", error.name); // Name: ReferenceError
      console.log("Message:", error.message); // Message: nonExistentFunction is not defined
      console.log("Stack Trace:", error.stack);
    }
  //
//

//4. Common Pitfalls
  //Ignoring Asynchronous Errors: Forgetting to handle errors in async operations leads to silent failures.
  //Throwing Non-Error Objects: Always use Error objects for better debugging and consistency.
  //Overusing finally: Avoid putting logic in finally that might suppress or override errors.
//

//5. Best Practices
  //Always validate user inputs and external data.
  //Use custom error classes for domain-specific error handling.
  //Log errors to track and debug in production.
  //Use try-catch only where needed to avoid cluttering code.
  //Handle promise rejections with .catch() or async/await.
//


//Advanced Error Handling Topics
  //Customizing Error Messages and Properties

  //Adding more context or metadata to errors.
  //Example: Attach a code or severity level to an error.
  //Structured Error Handling for APIs

  //Handling errors in REST APIs and GraphQL.
  //Returning meaningful HTTP status codes (e.g., 400, 500) along with error messages.
  //Error Handling in Frameworks
    
  //Understanding how popular frameworks like Express.js (Node.js) or React.js handle errors internally and extend them.
  //Error Handling in Testing
    
  //Writing test cases for expected errors using tools like Jest or Mocha.
  //Mocking and asserting on thrown errors.
  //Middleware for Error Handling (Node.js)
    
  //Using Express.js error-handling middleware for centralized error management.
  //Retry Strategies
    
  //Retrying operations that failed due to transient errors, such as network failures.
  //Event Emitters and Errors
    
  //Managing errors in event-driven programming (e.g., Node.js EventEmitter).
  //Error Handling in Workers
    
  //Managing errors in Web Workers, Service Workers, or Node.js Worker Threads.
  //Localized Error Messages
    
  //Providing error messages in multiple languages for global applications.
  //Integration with Monitoring Tools
    
  //Using tools like Sentry, Rollbar, or Datadog for capturing and analyzing runtime errors.
  //Practical Exercises
  //If you want to dive deeper:
    
  //Build Scenarios: Write code that throws different types of errors (e.g., logical, async, API) and practice catching them.
  //Create Custom Libraries: Develop a custom error handler with logging, retry strategies, and error categorization.
  //Simulate Real-World Situations: Mimic API failures or simulate production-like errors for practice.
  //Error Handling Best Practices Recap
  //Never ignore errors: Ensure all possible errors are handled or logged.
  //Differentiate recoverable vs. non-recoverable errors.
  //Avoid over-relying on try-catch: Use it judiciously.
  //Test thoroughly: Simulate error scenarios in development to ensure robustness.
  //Write clear, actionable error messages.
//











