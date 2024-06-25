// ITS ALSO KNOWN AS IMPLICIT TYPE CASTING 
// Implicit Type Coercion
// Implicit type coercion happens automatically when JavaScript encounters values of different 
// types in operations where it expects them to be the same type. 
// This automatic conversion can sometimes lead to unexpected results, 
// so it's important to understand the common scenarios where it occurs.

// Common Cases of Implicit Coercion

// String and Number Operations

// Arithmetic Operations: When a string is used with operators like -, *, /, J
// avaScript converts the string to a number.


console.log('5' - 2); // 3
console.log('5' * 2); // 10
console.log('5' / 2); // 2.5

// Concatenation: When the + operator is used with a string and a number,
//  JavaScript converts the number to a string.


console.log(5 + '2'); // '52'
console.log('Hello' + 5); // 'Hello5'

// Boolean Context

// Truthy and Falsy Values: In conditions and boolean contexts,
//  values are coerced to true or false.


if (1) console.log('1 is truthy'); // '1 is truthy'
if (0) console.log('0 is truthy'); // (no output, 0 is falsy)
if ('') console.log('Empty string is truthy'); // (no output, empty string is falsy)
if ('Hello') console.log('Non-empty string is truthy'); // 'Non-empty string is truthy'

// Equality Comparison

// Loose Equality (==): This operator converts the operands to the same type before comparing.

console.log(5 == '5'); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Strict Equality (===): No type coercion occurs; both type and value must be the same.

console.log(5 === '5'); // false
console.log(0 === false); // false
console.log(null === undefined); // false

// Implicit type coercion is automatic and occurs in operations and comparisons.
// Common scenarios include arithmetic operations, string concatenation, boolean contexts, and equality comparisons.
// Understanding implicit coercion helps avoid unexpected behavior in your code.