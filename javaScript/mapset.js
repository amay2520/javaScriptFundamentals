// Keyed collections in JavaScript are data structures that store elements and allow for retrieval by key. 
// The primary keyed collections are Map and Set (along with their variations, WeakMap and WeakSet). 
// Let's explore each of these in detail, including their methods and use cases.

// Map
// A Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

// Key Features:
// Keys can be of any type, including objects, arrays, and functions.
// Maintains the order of insertion.
// Useful when you need key-value pairs where keys are not limited to strings.
// Common Methods:
// set(key, value): Adds or updates an element with a specified key and value.
// get(key): Returns the value associated with the key, or undefined if the key doesn't exist.
// has(key): Returns true if an element with the specified key exists, otherwise false.
// delete(key): Removes the specified element by key.
// clear(): Removes all elements from the Map.
// size: Returns the number of elements in the Map.
// forEach(callback, thisArg): Calls a callback function once for each key-value pair in the Map.
// keys(): Returns a new iterator object that contains the keys for each element.
// values(): Returns a new iterator object that contains the values for each element.
// entries(): Returns a new iterator object that contains an array of [key, value] for each element.

let map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set({ key: 'value' }, 'objectKey');

console.log(map.get('name')); // John
console.log(map.has('age')); // true
console.log(map.size); // 3

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// [object Object]: objectKey

// WeakMap
// A WeakMap is similar to a Map, but its keys must be objects, and it does not prevent garbage 
// collection of its keys. If there are no other references to an object used as a key, the object can be garbage collected.

// Key Features:
// Keys must be objects.
// Not enumerable (i.e., there is no way to get a list of keys).
// Useful for cases where you want to associate data with an object without preventing garbage collection.
// Common Methods:
// set(key, value): Adds or updates an element with a specified key and value.
// get(key): Returns the value associated with the key, or undefined if the key doesn't exist.
// has(key): Returns true if an element with the specified key exists, otherwise false.
// delete(key): Removes the specified element by key.

let weakMap = new WeakMap();
let obj1 = {};
weakMap.set(obj, 'value');

console.log(weakMap.get(obj)); // value
obj = null; // Now obj is eligible for garbage collection.

// Set
// A Set object lets you store unique values of any type, whether primitive values or object references.
// 
// Key Features:
// Values are unique, meaning no duplicates.
// Maintains the order of insertion.
// Useful when you need to ensure the uniqueness of elements.
// Common Methods:
// add(value): Adds a new element with the specified value to the Set.
// has(value): Returns true if the value exists in the Set, otherwise false.
// delete(value): Removes the specified element from the Set.
// clear(): Removes all elements from the Set.
// size: Returns the number of elements in the Set.
// forEach(callback, thisArg): Calls a callback function once for each value in the Set.
// keys(): Returns a new iterator object that contains the values for each element.
// values(): Same as keys().
// entries(): Returns a new iterator object that contains an array of [value, value] for each element.


let set = new Set();

set.add(1);
set.add(5);
set.add(1); // Duplicate, will not be added.

console.log(set.has(1)); // true
console.log(set.size); // 2

set.forEach(value => {
  console.log(value);
});
// Output:
// 1
// 5

// WeakSet
// A WeakSet is similar to a Set, but it only stores objects and does not prevent garbage collection of its items.
// 
// Key Features:
// Values must be objects.
// Not enumerable (i.e., there is no way to get a list of values).
// Useful for cases where you want to keep a collection of objects and do not want to prevent their garbage collection.
// Common Methods:
// add(value): Adds a new object to the WeakSet.
// has(value): Returns true if the object exists in the WeakSet, otherwise false.
// delete(value): Removes the specified object from the WeakSet.

let weakSet = new WeakSet();
let obj = {};

weakSet.add(obj);

console.log(weakSet.has(obj)); // true
obj = null; // Now obj is eligible for garbage collection.

// Use Cases
// Map: When you need a collection of key-value pairs with non-string keys, such as caching results based on object references.
// WeakMap: When you want to associate data with objects without preventing their garbage collection, such as metadata for DOM elements.
// Set: When you need a collection of unique values, such as tracking unique users or ensuring no duplicates in a list.
// WeakSet: When you need a collection of objects and want them to be garbage collected when there are no other references,
//  such as tracking objects that should not prevent their memory from being reclaimed.

