// Slicing and Splicing in JavaScript

// Slicing
// The slice method creates a new array containing a portion of an existing array, 
// selected from start to end (end not included). The original array is not modified.

Syntax:

array.slice(start, end);

// start: The beginning index (inclusive). If omitted, defaults to 0.
// end: The ending index (exclusive). If omitted, the slice includes all elements to the end of the array.
// Example:

let fruitss = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let someFruits = fruits.slice(1, 3);  // ["Banana", "Cherry"]

// In this example, someFruits contains elements from index 1 to 2 of the fruits array.

// Splicing
// The splice method changes the contents of an array by removing, replacing, 
// or adding elements in place. The original array is modified.

// Syntax:

// array.splice(start, deleteCount, item1, item2, ...);

// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove. If 0, no elements are removed.
// item1, item2, ...: Elements to add to the array, starting from the start index. If omitted, no elements are added.
// Example:

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
fruits.splice(2, 1, "Blackberry", "Cranberry");  // ["Apple", "Banana", "Blackberry", "Cranberry", "D