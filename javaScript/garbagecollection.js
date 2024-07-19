// Garbage collection (GC) is a form of automatic memory management. 
// In programming languages like JavaScript, garbage collection helps to
//  reclaim memory occupied by objects that are no longer in use, preventing 
//  memory leaks and optimizing the use of available memory.

// How Garbage Collection Works
// Allocation: When a program creates an object, the memory for this object is allocated.
// Reachability: The garbage collector determines whether an object is still needed by checking if it is reachable. 
// An object is considered reachable if it can be accessed in some way by the running code.
// Marking: The garbage collector periodically identifies all reachable objects starting from the root 
// (e.g., global variables, the current stack).
// Sweeping: Objects that are no longer reachable are marked for deletion. The memory used by these objects is then reclaimed.
// Compaction: Optionally, the garbage collector may also compact the memory by moving reachable objects together 
// to make space for new allocations more contiguous.
// Relevance to Keyed Collections
// WeakMap and WeakSet
// WeakMap and WeakSet are special kinds of collections that do not prevent their
//  keys (in the case of WeakMap) or values (in the case of WeakSet) from being garbage collected.
// WeakMap: The keys must be objects, and if no other references to the key object exist, 
// the key-value pair will be removed automatically from the WeakMap.
// WeakSet: Similar to WeakMap, but it stores objects directly as values, 
// and if no other references to an object exist, the object will be removed from the WeakSet.
// Benefits
// Memory Management: WeakMaps and WeakSets help manage memory more efficiently by allowing objects to be garbage 
// collected when they are no longer needed, even if they are still referenced by the collection.
// Prevent Memory Leaks: By not preventing garbage collection, these structures help avoid memory leaks 
// that can occur when objects are retained in memory longer than necessary.
// Example of Garbage Collection in WeakMap
// Consider the following example where an object is added to a WeakMap:

let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, 'some value');

console.log(weakMap.has(obj)); // true

// Now, remove all references to the object
obj = null;

// The object previously referenced by `obj` is now eligible for garbage collection
// If the garbage collector runs, the key-value pair will be removed from the WeakMap
// In this example:

// obj is used as a key in the WeakMap.
// When obj is set to null, the only reference to the original object is in the WeakMap.
// Since WeakMap does not prevent garbage collection, the original object can be garbage collected, 
// and the entry will be removed from the WeakMap.
// Summary
// Garbage collection is an essential mechanism in JavaScript for automatically managing memory by 
// reclaiming unused objects. WeakMap and WeakSet leverage this mechanism by not preventing the garbage 
// collection of their keys or values, respectively, thus facilitating better memory management and helping avoid memory leaks.






