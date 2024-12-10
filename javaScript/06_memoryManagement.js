// What is Memory Management?
// Memory management in JavaScript is about how memory is allocated, used, and freed. 
// JavaScript does this automatically using Garbage Collection, ensuring efficient memory usage.

// Types of Memory in JavaScript

// 1. Stack Memory
    // Stores primitive values like number, string, boolean, null, undefined, and symbol.
    // Data is stored directly in the stack.
    // Small and fast.
    // Example 1 (Direct Storage in Stack):


    let a = 10;  // 10 is directly stored in the stack
    let b = a;   // b gets its own copy of 10
    b = 20;
    console.log(a); // Output: 10 (a remains unchanged)
//

// 2. Heap Memory
    // Stores non-primitive values like objects, arrays, and functions.
    // Only references to these objects are stored in the stack; the actual data resides in the heap.
    // Allows dynamic and flexible data storage.
    // Example 2 (Reference in Stack, Object in Heap):


    let obj1 = { name: "John" }; // Object stored in heap, reference in stack
    let obj2 = obj1;             // obj2 stores the same reference as obj1
    obj2.name = "Doe";
    console.log(obj1.name);  
    // Output: Doe (both obj1 and obj2 point to the same object)
//

//                  Direct          vs.     Reference Storage
// Type	Stored in	Example	Behavior
// Primitive	    Stack	let x = 5;	Direct storage
// Non-Primitive	Heap (object)	let obj = { key: "value" };	Reference stored in stack

// Memory Lifecycle

    // Allocation: Reserve memory for variables or objects.
    // Usage: Access and manipulate the data.
    // Deallocation: Memory is freed when no longer needed (handled by Garbage Collection).

    // Detailed Examples
    // Primitive (Direct Storage Example):

    let name1 = "Alice"; // 'Alice' directly stored in stack
    let name2 = name1;   // A copy of 'Alice' is stored in stack
    name2 = "Bob";
    console.log(name1);  // Output: Alice (name1 is unaffected)

    // Non-Primitive (Reference Example):

    let arr1 = [1, 2, 3]; // Array stored in heap, reference in stack
    let arr2 = arr1;      // arr2 references the same array
    arr2.push(4);
    console.log(arr1);    // Output: [1, 2, 3, 4] (Both references point to the same array)
//