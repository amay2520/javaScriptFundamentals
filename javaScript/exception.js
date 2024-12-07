// Exception handling in JavaScript allows you to manage and respond to runtime errors gracefully,
//  without crashing the program. It involves the use of the try, catch, finally, and throw statements. 
//  Here's an in-depth look at how to handle exceptions in JavaScript:

// Components of Exception Handling
// try Block
// catch Block
// finally Block
// throw Statement

// 1. try Block
// The try block contains code that might throw an exception. If an error occurs in this block, 
// control is passed to the corresponding catch block.


try {
  // Code that might throw an exception
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  // Code to handle the exception
  console.error('An error occurred:', error.message);
}

// 2. catch Block
// The catch block contains code that will execute if an exception is thrown in the try block. 
// The error object, which provides details about the exception, is passed to this block.

try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

// 3. finally Block
// The finally block contains code that will execute regardless of whether an exception was thrown or not. 
// This block is optional but useful for cleanup tasks.


try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This will run regardless of whether an error occurred or not.');
}

// 4. throw Statement
// The throw statement allows you to create custom exceptions.
//  You can throw any expression, but it's common to throw an instance of the Error class or a subclass.


function checkNumber(num) {
  if (isNaN(num)) {
    throw new Error('Not a number');
  } else {
    console.log('The number is', num);
  }
}

try {
  checkNumber('abc'); // This will throw an error
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  console.log('Execution finished.');
}

// Advanced Examples
// Nested try...catch Blocks

try {
  try {
    let result = anotherRiskyOperation(); // Assume this function may throw an error
    console.log(result);
  } catch (innerError) {
    console.error('An inner error occurred:', innerError.message);
    throw innerError; // Rethrow the error to be handled by the outer catch
  }
} catch (outerError) {
  console.error('An outer error occurred:', outerError.message);
} finally {
  console.log('This will run after both try-catch blocks.');
}

// Custom Error Types
// You can define custom error types by extending the Error class, allowing for more specific error handling.


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required");
  }
  if (!user.age || user.age < 0) {
    throw new ValidationError("Valid age is required");
  }
  console.log("User is valid");
}

try {
  validateUser({ name: "", age: -1 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}

// Asynchronous Code with try...catch
// When dealing with asynchronous code, such as async/await, you can still use try...catch for error handling.


async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
}

(async () => {
  try {
    let data = await fetchData("https://api.example.com/data");
    console.log(data);
  } catch (error) {
    console.error("Error in fetching data:", error.message);
  }
})();

// Key Points
// Error Propagation: If an error is thrown inside a try block, the remaining code in that block is skipped, 
// and control is transferred to the catch block.

// Error Object: The error object in the catch block contains information about the error, 
// such as its message and stack trace.

// Rethrowing Errors: You can rethrow an error inside the catch block to propagate it further up the call stack.

// finally Block: The finally block is useful for cleanup code that must run regardless of whether an error occurred.

// By mastering exception handling in JavaScript, you can write more robust and maintainable code, 
// ensuring that your applications can handle unexpected situations gracefully.