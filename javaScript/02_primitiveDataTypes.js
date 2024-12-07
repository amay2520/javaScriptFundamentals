//************************************************************* */

// EVERY dataType declares here are immutable means once they    |
// declres and assigned a value that value holds a memory bit and|
// that memory bit cannot be re assigned when we redecalre value |
// of variables means :- let name = "amay" and let name = "john" |
// has probably same variable name but holds different value so  |
// memory assigned to them is also different and immutbale in any|
// case like let surname  = name; even though surname will asign |
// a value john but this john got different memory address then  |
// first johm because primitve data types are immutable in natute|


//   1.STRING

let name = 'john';
var surName = "doe";
const middleName = 'Kumar';

// Here it is STRING which can be written inside double or single |
// quotes and can be defined with all keywords.                   |
                                                            

// 2. NUMBER

let number = 23;
var num = 1.24;
const pie = 3.1444444444444444444444444444444444444444444444444;


// Here all comes under number wether its int float long or double|
// and we can decalre it with any keyword                         |


// 3. BOOLEAN

let Name = true;
var surName = false;
const choose = TandF ; 

// Boolean got two value either TRUE or FALSE and it can be      |
// decleared with any keyword.                                   |


// 4. NULL 

let value = null;
var a = null;
const b = null ; 

// Null means empty or void and NULL can be used with any keyword type of is object|


// 5. UNDEFINED 

let c = undefined ; 
var a = undefined;
const d  = undefined; 

// Can be declaed with any keyword and it means value is not     |
// provided or assigned to the variable it generally can be seen |
// in case of HOISTING.                                          |


// 6. Symbol

// The Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). 
// It represents a unique and immutable identifier that can be used as a key for object properties. 
// Symbols are often used to create unique property keys that won't collide with keys from other code.

Usage

const symbol1 = Symbol();
const symbol2 = Symbol('description'); // description is optional

console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol(description)

// Using symbols as object keys
const obj = {
    [symbol1]: 'value1',
    [symbol2]: 'value2'
};

console.log(obj[symbol1]); // 'value1'
console.log(obj[symbol2]); // 'value2'

// 7. BigInt

// The BigInt is a primitive data type introduced in ECMAScript 2020 (ES11). 
// It is used to represent integers with arbitrary precision, allowing you to work with 
// numbers larger than the Number.MAX_SAFE_INTEGER (which is 1253 to −1253).


const bigInt1 = 1234567890123456789012345678901234567890n; // Adding 'n' at the end to denote a BigInt
const bigInt2 = BigInt("1234567890123456789012345678901234567890");

console.log(bigInt1); // 1234567890123456789012345678901234567890n
console.log(bigInt2); // 1234567890123456789012345678901234567890n

// Arithmetic operations with BigInt
const sum = bigInt1 + bigInt2;
console.log(sum); // 2469135780246913578024691357802469135780n

// BigInt cannot be mixed with Number type
// const number = 10;
console.log(bigInt1 + BigInt(number)); // Works fine
// console.log(bigInt1 + number); // TypeError: Cannot mix BigInt and other types
// These data types add more flexibility and robustness to JavaScript, 
// allowing for unique property keys and handling of very large integers respectively.


// Type	        Category	    Examples//

// Number	    Primitive	    42, 3.14, NaN
// BigInt	    Primitive	    12345678901234567890n
// String	    Primitive	    "Hello", 'World'
// Boolean	    Primitive	    true, false
// Undefined	Primitive	    undefined
// Null	        Primitive	    null
// Symbol	    Primitive	    Symbol("id")
// Object	    Non-Primitive	{}, [], function() {} which we learn singly
