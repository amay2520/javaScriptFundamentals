// Object Creation

//1. Object Literals:
// The simplest way to create an object is using an object literal.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
};


//2. Object Constructor:
// Objects can also be created using the Object constructor.


const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 30;
person1.isEmployed = true;
person1.greet = function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
};


// Constructor Functions:
// Custom constructor functions can be used to create multiple objects with similar properties and methods.

function Person(firstName, lastName, age, isEmployed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isEmployed = isEmployed;
    this.greet = function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
}

const johny = new Person("John", "Doe", 30, true);
const janey = new Person("Jane", "Smith", 25, false);


// Class Syntax:
// ES6 introduced the class syntax, which simplifies the creation of constructor functions and inheritance.

class Person {
    constructor(firstName, lastName, age, isEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isEmployed = isEmployed;
    }

    greet() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}

const johney = new Person("John", "Doe", 30, true);

// Property Access
// Properties of objects can be accessed and modified using dot notation or bracket notation.

// Dot Notation:

console.log(person.firstName);  // Outputs: John
person.age = 31;
console.log(person.age);  // Outputs: 31

// Bracket Notation:

console.log(person["lastName"]);  // Outputs: Doe
person["isEmployed"] = false;
console.log(person["isEmployed"]);  // Outputs: false

// Methods

// A method is a function that is a property of an object. Methods can be added to objects in various ways.

// Object Literals:

const person = {
    firstName: "John",
    greet: function() {
        console.log("Hello, " + this.firstName);
    }
};

// Prototype Methods:
// Adding methods to the prototype allows all instances to share the same method, saving memory.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
};

const johna = new Person("John", "Doe");
johna.greet();  // Outputs: Hello, John Doe

// Prototypes and Inheritance
// Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects 
// inherit their properties and methods from their prototype.

// Prototype Chain:
// When you access a property or method, JavaScript first looks at the object itself. If it doesn’t find it, it looks at the object's prototype, and so on, up the prototype chain.

const obj = {};
console.log(obj.toString()); // toString is inherited from Object.prototype

// Inheritance:
// Constructor functions and the class syntax allow for inheritance.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
}

class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(this.firstName + " is working as a " + this.jobTitle);
    }
}

const john = new Employee("John", "Doe", "Developer");
john.greet(); // Outputs: Hello, John Doe
john.work();  // Outputs: John is working as a Developer

// Built-in Object Methods
// JavaScript provides several built-in methods for working with objects.

// Object.keys():
// Returns an array of a given object's own property names.

const keys = Object.keys(person);
console.log(keys); // Outputs: ["firstName", "lastName", "age", "isEmployed", "greet"]

// Object.values():
// Returns an array of a given object's own enumerable property values.

const values = Object.values(person);
console.log(values); // Outputs: ["John", "Doe", 31, false, function() {...}]


// Object.entries():
// Returns an array of a given object's own enumerable property [key, value] pairs.

const entries = Object.entries(person);
console.log(entries); // Outputs: [["firstName", "John"], ["lastName", "Doe"], ...]

// Object.assign():
// Copies properties from one or more source objects to a target object.

const additionalInfo = { gender: "male" };
const updatedPerson = Object.assign({}, person, additionalInfo);
console.log(updatedPerson);

// Deep Cloning and Merging
// When working with objects, you might need to create a deep clone or merge objects.

// Deep Cloning:
// Deep cloning creates a copy of an object where all nested objects are also copied.


const personCopy = JSON.parse(JSON.stringify(person));

// Shallow Cloning and Merging:
// Object.assign() and spread operator create shallow copies or merge objects.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2); // { a: 1, b: 3, c: 4 }
const spreadMergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

// Conclusion
// Understanding objects is fundamental in JavaScript because they are used to structure data and functionality.
// From basic property access to complex inheritance, objects provide a versatile and 
// powerful way to organize and manage your code. Mastery of objects, including prototypes and inheritance,
// is crucial for effective JavaScript programming.