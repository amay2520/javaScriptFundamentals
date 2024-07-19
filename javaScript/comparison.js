// In JavaScript, ==, ===, and Object.is() are used to compare values, 
// but they have different behaviors and use cases. Let's explore each one in detail.
// 
// == (Loose Equality)
// The == operator performs loose equality comparison. It checks for equality after converting 
// both values to a common type (type coercion).

// Characteristics:
// Converts the operands to the same type before making the comparison.
// Can produce unexpected results due to type coercion.

console.log(5 == '5'); // true (number 5 is converted to string '5')
console.log(null == undefined); // true (null and undefined are considered equal)
console.log(false == 0); // true (false is converted to 0)
console.log([] == ''); // true (empty array is converted to empty string)
console.log([1,2] == '1,2'); // true (array is converted to a string)

// === (Strict Equality)
// The === operator performs strict equality comparison. It checks for equality without converting the operands.
// 
// Characteristics:
// No type coercion is performed.
// Both the type and the value must be the same for the comparison to return true.

console.log(5 === '5'); // false (different types)
console.log(null === undefined); // false (different types)
console.log(false === 0); // false (different types)
// console.log([] === ''); // false (different types)
// console.log([1,2] === '1,2'); // false (different types)
console.log(5 === 5); // true (same type and value)
console.log('hello' === 'hello'); // true (same type and value)

// Object.is()
// The Object.is() method determines whether two values are the same value. 
// It is similar to === but has special handling for NaN and signed zeros.

// Characteristics:
// No type coercion is performed.
// Handles NaN and signed zeros (-0 and +0) correctly.

console.log(Object.is(5, '5')); // false (different types)
console.log(Object.is(null, undefined)); // false (different types)
console.log(Object.is(false, 0)); // false (different types)
console.log(Object.is([], '')); // false (different types)
console.log(Object.is([1,2], '1,2')); // false (different types)
console.log(Object.is(5, 5)); // true (same type and value)
console.log(Object.is('hello', 'hello')); // true (same type and value)
console.log(Object.is(NaN, NaN)); // true (NaN is considered equal to NaN)
console.log(Object.is(0, -0)); // false (different signs)
console.log(Object.is(-0, -0)); // true (same type and value)

// Summary
// == (Loose Equality): Checks for equality with type coercion. 
// Use it when you are okay with type conversion during comparison.
// 
// === (Strict Equality): Checks for equality without type coercion.
//  Use it when you need to ensure both type and value are the same.
// 
// Object.is(): Similar to === but with special handling for NaN and signed zeros. 
// Use it when you need precise comparison, especially for NaN and zero values.