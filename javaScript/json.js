// JSON (JavaScript Object Notation) is a lightweight data-interchange 
// format that is easy for humans to read and write, and easy for machines to parse and generate. 
// It is often used for transmitting data in web applications between a server and a client.
// 
// JSON Syntax
// Objects: Represented as key-value pairs enclosed in curly braces {}. 
// Keys are strings, and values can be strings, numbers, objects, arrays, booleans, or null.


// {
//   "name": "John",
//   "age": 30,
//   "isStudent": false,
//   "address": {
//     "city": "New York",
//     "zipcode": "10001"
//   },
//   "courses": ["Math", "Science"]
// }

// Arrays: Ordered lists of values enclosed in square brackets [].

// ["apple", "banana", "cherry"]
// JSON Functions in JavaScript
// JSON.stringify()
// The JSON.stringify() function converts a JavaScript object or value to a JSON string.


// JSON.stringify(value, replacer, space)
// value: The value to convert to a JSON string.
// replacer (optional): A function or array that transforms the results.
// space (optional): A string or number that's used to insert white space into the output JSON string for readability.

// let obj = { name: "John", age: 30, city: "New York" };
// let jsonString = JSON.stringify(obj);
// console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'

// With pretty printing
let prettyJsonString = JSON.stringify(obj, null, 2);
console.log(prettyJsonString);
// {
//   "name": "John",
//   "age": 30,
//   "city": "New York"
// }

// JSON.parse()
// The JSON.parse() function parses a JSON string, constructing the JavaScript value or object described by the string.


JSON.parse(text, reviver)

// text: The JSON string to parse.
// reviver (optional): A function that transforms the results.

let jsonString = '{"name":"John","age":30,"city":"New York"}';
let obj = JSON.parse(jsonString);
console.log(obj); // { name: 'John', age: 30, city: 'New York' }

// With a reviver function
let jsonStringWithDate = '{"name":"John","birthdate":"1990-01-01T00:00:00Z"}';
let objWithDate = JSON.parse(jsonStringWithDate, (key, value) => {
  if (key === 'birthdate') return new Date(value);
  return value;
});
console.log(objWithDate.birthdate); // Mon Jan 01 1990 00:00:00 GMT+0000 (Coordinated Universal Time)

// Use Cases
// Data Exchange: JSON is commonly used to exchange data between a web server and a client. For instance, in RESTful APIs, data is often sent and received in JSON format.
// Configuration Files: JSON is used in configuration files (e.g., package.json in Node.js).
// Serialization: JSON is used to serialize data structures or objects in JavaScript.
// Summary
// JSON: A lightweight data-interchange format that's easy to read and write for humans, and easy to parse and generate for machines.
// JSON.stringify(): Converts a JavaScript object or value to a JSON string.
// JSON.parse(): Parses a JSON string to construct the JavaScript value or object described by the string.
// These features make JSON a powerful tool for data manipulation and exchange in web development.