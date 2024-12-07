// EXPLICIT TYPE CONVERSION

// Type casting means conversion of one data 
// type to another explicitly. 
// In JavaScript some of the most common 
// methods to convert a datatype to either string 
// using String(), to boolean using Boolean(), 
// or to number using Number().

const { get } = require("express/lib/response");
const { stringToBytes } = require("qrcode-generator");

// JavaScript is a loosely typed language and most 
// of the time JavaScript implicitly converts a value 
// to the right type but there are also cases when 
// we need to explicitly do type conversions.

// CASE 1 :

var score = 33;
console.log(typeof score); // number

// Here we provide number as an input and when we try to 
// get it's datatype we get number as an output

// CASE 2 :

var score ="33";
console.log(typeof(score)); // string
console.log(score); // "33"
var score = Number(score);
console.log(score); //33
console.log(typeof score);// number

// this is called type conversion in explicit manner

// CASE 3 : 

var score = "33abc";
var score = Number(score);
console.log(typeof score);//number
console.log(score); // NaN

// here score is converted into number but abc is string
// so when we cosole out score we get NaN that is not a number
// because internally a string containing alphabets doesnot getconverted to numbers

// for NaN as score we get NaN
// for null we get 0
// for undefined we get NaN
// for boolean we get 0 or 1
// we can convert in string too using String()

var score = 42;
console.log(typeof score);// number
console.log(score);
var score = String(score);
console.log(typeof score);// string
console.log(score);

// for NaN as score we get NaN
// for null we get null
// for undefined we get undefined
// for boolean we get boolean

// The parseInt() function converts its first
//  argument to a string, parses that string,
//   then returns an integer or NaN.

// The parseFloat() function parses an argument 
// (converting it to a string first if needed) and 
// returns a floating point number.

// // The toString() method returns a 
// string representing the object, i.e., 
// it tries to convert object to string.