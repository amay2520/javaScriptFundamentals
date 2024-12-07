// The throw statement in JavaScript is used to create a custom error. 
// You can throw any expression, such as a string, number, boolean, or an 
// instance of an Error object. When an error is thrown, the normal flow of the program is interrupted, 
// and control is transferred to the nearest catch block that can handle the error.


// throw expression;

// Throwing Different Types of Errors

// Throwing a String

function checkAge(age) {
  if (age < 18) {
    throw "Underage"; // Throwing a string
  } else {
    console.log("You are allowed to enter.");
  }
}

try {
  checkAge(15);
} catch (error) {
  console.error("Error:", error);
}

// Throwing a Number

function divide(a, b) {
  if (b === 0) {
    throw 42; // Throwing a number
  } else {
    return a / b;
  }
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error code:", error);
}

// Throwing an Error Object
// The Error object provides a more informative and standardized way to represent errors.
//  It has properties like name and message.


function readFile(filePath) {
  if (!filePath) {
    throw new Error("File path is required");
  }
  // Code to read the file
}

try {
  readFile(null);
} catch (error) {
  console.error(error.name + ": " + error.message);
}

// Custom Error Types
// You can create custom error types by extending the Error class. 
// This is useful when you want to define application-specific errors.


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

// Key Points

// Interrupting Execution: The throw statement immediately stops the execution of the current 
// function and propagates the error to the nearest catch block.

// Error Object: Using an Error object or custom error classes provides more context and standardization for errors.

// Custom Errors: Creating custom error types allows you to handle different error scenarios more effectively.

// Rethrowing Errors: You can catch an error and then rethrow it to propagate it further up the call stack if necessary.

// Example with Asynchronous Code
// When dealing with asynchronous code, the throw statement can also be used within async functions to handle errors.


async function fetchData(url) {
  if (!url) {
    throw new Error("URL is required");
  }

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

// In summary, the throw statement is a powerful tool in JavaScript for handling errors
//  and making your code more robust and maintainable by allowing you to define and manage different error conditions.