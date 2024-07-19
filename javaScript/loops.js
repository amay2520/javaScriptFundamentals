// JavaScript provides several types of loops to handle repetitive tasks. 
// Each type of loop has specific use cases and syntax. Let's go through each one with examples and their typical use cases.
// 
// 1. for Loop
// The for loop is the most commonly used loop. It has three parts: initialization, condition, and increment/decrement.

for (initialization; condition; increment/decrement) {
  // code to be executed
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// Use Case:
// When the number of iterations is known beforehand.
// Iterating over arrays with a specific index.
// 
// 2. while Loop
// The while loop executes its statements as long as the specified condition is true.

Syntax:

while (condition) {
  // code to be executed
}

let j = 0;
while (j < 5) {
  console.log(i);
  j++;
}
// // Output: 0 1 2 3 4

// Use Case:
// When the number of iterations is not known beforehand.
// Useful when you want to continue looping as long as a certain condition holds true.

// 3. do...while Loop
// The do...while loop is similar to the while loop, but it executes the block of code once before checking the condition.

do {
  // code to be executed
} while (condition);

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0 1 2 3 4

// Use Case:
// When you need to ensure the loop body is executed at least once regardless of the condition.
// 
// 4. for...in Loop
// The for...in loop iterates over the enumerable properties of an object.

for (variable in object) {
  // code to be executed
}

const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// Use Case:
// Iterating over properties of an object.
// Not recommended for iterating over arrays due to possible unexpected behavior with indices and prototype properties.

// 5. for...of Loop
// The for...of loop iterates over iterable objects (like arrays, strings, maps, sets).


for (variable of iterable) {
  // code to be executed
}

const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
// Output: 1 2 3 4 5

// Use Case:
// Iterating over elements of an array or any iterable object.
// Preferred for arrays and iterable objects because it simplifies the syntax and avoids pitfalls of for...in.

// 6. forEach Loop (Array Method)
// The forEach method executes a provided function once for each array element.

array.forEach(callback(currentValue, index, array), {
  // code to be executed
});

const arri = [1, 2, 3, 4, 5];
arri.forEach(value => {
  console.log(value);
});
// Output: 1 2 3 4 5

// Use Case:
// When you need to execute a function for each element in an array.
// Simplifies iteration with a cleaner syntax compared to traditional for loops.

// Summary
// for Loop: Use when the number of iterations is known beforehand.
// while Loop: Use when the number of iterations is not known and depends on a condition.
// do...while Loop: Use when you need to execute the loop body at least once regardless of the condition.
// for...in Loop: Use for iterating over object properties (not recommended for arrays).
// for...of Loop: Use for iterating over iterable objects like arrays, strings, maps, and sets.
// forEach Loop: Use for executing a function for each element in an array, providing a clean and concise syntax.
// Each loop has its own advantages and specific use cases, making it important to choose the right loop based on the task at hand.