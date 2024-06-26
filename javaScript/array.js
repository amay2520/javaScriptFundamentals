// Arrays in JavaScript are a type of object used to store multiple values in a single variable.
// Arrays are zero-indexed, meaning the first element is at index 0, 
// the second element is at index 1, and so on. Below, we cover each aspect of arrays in detail, 
// including methods and operations.

// Creating Arrays :

// Using Array Literals:

let fruits = ["Apple", "Banana", "Cherry"];

// Using the Array Constructor:

let fruits1 = new Array("Apple", "Banana", "Cherry");

// Creating Empty Arrays:

let emptyArray = [];
let emptyArray2 = new Array();

// Creating Arrays with a Fixed Size:

let fixedSizeArray = new Array(5);  // Creates an array with 5 empty slots

// Accessing and Modifying Elements

// Accessing Elements:

let firstFruit1 = fruits[0];  // "Apple"

// Modifying Elements:

fruits[1] = "Blueberry";  // ["Apple", "Blueberry", "Cherry"]

// Common Properties

// Length: Returns the number of elements in the array.

let length = fruits.length;  // 3

// Iterating Over Arrays

// Using a for Loop:

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach:

fruits.forEach(fruit => {
    console.log(fruit);
});

// Using for...of:

for (let fruit of fruits) {
    console.log(fruit);
}

// Array Methods

// Adding and Removing Elements:

// push: Adds one or more elements to the end of an array.

fruits.push("Date");  // ["Apple", "Blueberry", "Cherry", "Date"]

// pop: Removes the last element from an array.

let lastFruit = fruits.pop();  // "Date"

// unshift: Adds one or more elements to the beginning of an array.

fruits.unshift("Apricot");  // ["Apricot", "Apple", "Blueberry", "Cherry"]

// shift: Removes the first element from an array.

let firstFruit = fruits.shift();  // "Apricot"

// Finding and Filtering Elements:

// indexOf: Returns the first index at which a given element can be found, or -1 if it is not present.

let index = fruits.indexOf("Banana");  // -1

// includes: Determines whether an array contains a certain element.

let hasBanana = fruits.includes("Banana");  // false

// find: Returns the value of the first element that satisfies the provided testing function.

let foundFruit = fruits.find(fruit => fruit.startsWith("B"));  // "Blueberry"

// filter: Creates a new array with all elements that pass the test implemented by the provided function.

let filteredFruits = fruits.filter(fruit => fruit.length > 5);  // ["Blueberry", "Cherry"]

// Transforming Arrays:

// map: Creates a new array with the results of calling a provided function on every element.

let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());  // ["APPLE", "BLUEBERRY", "CHERRY"]

// reduce: Applies a function against an accumulator and each element to reduce it to a single value.

let concatenatedFruits = fruits.reduce((acc, fruit) => acc + fruit, "");  // "AppleBlueberryCherry"

// Combining Arrays:

// concat: Merges two or more arrays.

let moreFruits = ["Date", "Elderberry"];
let allFruits = fruits.concat(moreFruits);  // ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// join: Joins all elements into a string.

let fruitString = fruits.join(", ");  // "Apple, Blueberry, Cherry"

// Sorting and Reversing Arrays:

// sort: Sorts the elements of an array.

fruits.sort();  // ["Apple", "Blueberry", "Cherry"]

// reverse: Reverses the order of the elements in an array.

fruits.reverse();  // ["Cherry", "Blueberry", "Apple"]

// Slicing and Splicing Arrays:

// slice: Returns a shallow copy of a portion of an array.

let someFruits = fruits.slice(1, 3);  // ["Blueberry", "Apple"]

// splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

fruits.splice(1, 2, "Blackberry", "Cranberry");  // ["Cherry", "Blackberry", "Cranberry"]

// Advanced Usage
// Multidimensional Arrays:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Destructuring Arrays:

let [first, second, third] = fruits;  // first = "Cherry", second = "Blackberry", third = "Cranberry"

// Spread Operator:

let newFruits = ["Elderberry", ...fruits];  // ["Elderberry", "Cherry", "Blackberry", 








// forEach and for...of Loops in JavaScript
// forEach Loop
// The forEach method executes a provided function once for each array element. 
// It's a functional programming method that allows you to iterate over array elements easily.


// array.forEach(callback(currentValue, index, array){
//     // function code
// });

// callback: The function to execute on each element.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array forEach was called upon.
// Example:

let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// In this example, the forEach method iterates over each element in the fruits array and logs the index and the element.

// for...of Loop
// The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, String, etc.). 
// It provides a more concise and readable syntax for array iteration compared to the traditional for loop.

Syntax:

for (variable of iterable) {
    // statement
}

// variable: A variable that holds the current value from the iterable.
// iterable: An object that has iterable properties (like an array).
// Example:

let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Cherry

// In this example, the for...of loop iterates over each element in the fruits array and logs each element.

// Key Differences
// Purpose:

// forEach: Specifically designed for arrays and is a method of the Array prototype.
// for...of: Can be used with any iterable object, not just arrays.
// Control Flow:

// forEach: You cannot use break or continue within a forEach loop.
// for...of: You can use break and continue to control the loop.
// Callback Context:

// forEach: Requires a callback function.
// for...of: Directly provides the value in each iteration without needing a callback.
// Use forEach when you need to perform an action for every element in an array and don't 
// need to break or continue the loop. Use for...of when you need a more general and flexible loop 
// structure that can work with various iterable objects and control the loop flow with break or continue.






