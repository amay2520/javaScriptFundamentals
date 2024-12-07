// In JavaScript, the try...catch statement is used to handle 
// exceptions (errors) that occur during the execution of a block of code. 
// This mechanism allows you to handle errors gracefully and provide fallback logic when an error is encountered.
//  The basic syntax includes the try, catch, finally, and sometimes throw statements. 
//  Here's a detailed explanation of each component with examples:


try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will run regardless of the result
}

// try Block
// The try block contains the code that may throw an error. If an error occurs within this block,
//  the control is transferred to the catch block.

// catch Block
// The catch block contains code that will be executed if an error occurs in the try block. 
// The error object, which contains information about the error, can be accessed in this block.

// finally Block
// The finally block contains code that will be executed regardless of whether an error occurred or not.
//  It is optional but useful for cleanup tasks.

// throw Statement
// The throw statement is used to create a custom error. You can throw any expression, typically an error object.


try {
  let result = riskyOperation(); // Assume this function may throw an error
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

// Using finally Block

try {
  let result = riskyOperation(); // Assume this function may throw an error
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This will run regardless of whether an error occurred or not.');
}

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

// Asynchronous Code with try...catch
// When dealing with asynchronous code (e.g., async/await), you can still use try...catch for error handling.


async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error.message);
  } finally {
    console.log('Fetch attempt finished.');
  }
}

// fetchData();
// Key Points
// Error Propagation: If an error is thrown inside a try block, the remaining code in 
// that block is skipped and control is transferred to the catch block.

// Error Object: The error object in the catch block contains information about the error, 
// such as its message and stack trace.

// Rethrowing Errors: You can rethrow an error inside the catch block to propagate it
//  further up the call stack.

// finally Block: The finally block is useful for cleanup code that must run regardless of whether an error occurred.
// By understanding and utilizing try...catch effectively, you can make your JavaScript code more robust and resilient
//  to unexpected errors