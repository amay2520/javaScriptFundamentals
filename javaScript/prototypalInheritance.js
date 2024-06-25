// Prototypal Inheritance in JavaScript
// Prototypal inheritance is a feature in JavaScript used to share properties and methods between objects.
//  In essence, when an object inherits from another object, it gains access to the parent object's properties and methods.

// The Prototype Chain
// In JavaScript, each object has a prototype. When you try to access a property or method on an object, 
// JavaScript first looks at the object itself. If the property or method is not found, 
// it looks at the object's prototype, and so on, up the prototype chain until it reaches Object.prototype, 
// which is the top of the prototype chain. If the property or method is not found anywhere in the chain, undefined is returned.

// Creating Objects and Using Prototypes
// Basic Example Using Object.create
// The Object.create method can be used to create a new object with a specified prototype.

// Define a prototype object
const personPrototype = {
    greet: function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
};

// Create a new object with personPrototype as its prototype
const john = Object.create(personPrototype);
john.firstName = "John";
john.lastName = "Doe";

// Access properties and methods
john.greet();  // Outputs: Hello, John Doe

// Using Constructor Functions
// Constructor functions are used to create objects and set up inheritance.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
};

const jane = new Person("Jane", "Smith");
jane.greet();  // Outputs: Hello, Jane Smith

// In this example, the greet method is defined on Person.prototype. 
// All instances created with new Person will have access to this method.

// Prototype Chain Example
// Let's create a more complex example to illustrate the prototype chain.

// Define a constructor function
function Animal(kingdom) {
    this.kingdom = kingdom;
}

Animal.prototype.describe = function() {
    console.log("This is a " + this.kingdom + " animal.");
};

// Define another constructor function that inherits from Animal
function Dog(name, breed) {
    Animal.call(this, "mammal"); // Call the parent constructor with `this`
    this.name = name;
    this.breed = breed;
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property correctly
Dog.prototype.constructor = Dog;

// Add a method to Dog's prototype
Dog.prototype.bark = function() {
    console.log(this.name + " says woof!");
};

const buddy = new Dog("Buddy", "Golden Retriever");
buddy.describe();  // Outputs: This is a mammal animal.
buddy.bark();      // Outputs: Buddy says woof!

// In this example:

// Animal is a constructor function with a method describe on its prototype.
// Dog is another constructor function that calls the Animal constructor.
// Dog's prototype is set to an instance of Animal's prototype using Object.create.
// The constructor property of Dog.prototype is set correctly to Dog.
// A new method bark is added to Dog.prototype.
// When buddy.describe() is called, JavaScript first looks for describe on buddy. It doesn't find it,
//  so it looks up the prototype chain and finds describe on Animal.prototype.

// ES6 Class Syntax
// ES6 introduced class syntax, which simplifies creating constructor functions and setting up inheritance.


class Animal {
    constructor(kingdom) {
        this.kingdom = kingdom;
    }

    describe() {
        console.log("This is a " + this.kingdom + " animal.");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super("mammal");  // Call the parent constructor
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " says woof!");
    }
}

const buddy1 = new Dog("Buddy", "Golden Retriever");
buddy.describe();  // Outputs: This is a mammal animal.
buddy.bark();      // Outputs: Buddy says woof!

// In this example:

// Animal is defined as a class with a constructor and a describe method.
// Dog extends Animal, calling super to invoke the parent constructor.
// The bark method is defined in Dog.
// Conclusion
// Prototypal inheritance in JavaScript is a powerful mechanism for sharing properties and methods across objects. 
// Understanding how the prototype chain works and how to set up inheritance using 
// both traditional and ES6 class syntax is crucial for writing effective and efficient JavaScript code. 
// This deep dive into prototypes and inheritance should provide a strong foundation for further exploration and application.