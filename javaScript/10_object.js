// OBJECTS 

//An object in JavaScript is a complex data type used to store collections of key-value pairs. 
//Unlike arrays, where elements are indexed, objects use
//keys (also called properties) to access values.
//Objects are the foundation of JavaScript programming. 
//From simple data storage to creating complex structures like classes and prototypes, 
//they provide immense flexibility. Let me know if you’d like to explore any specific area of objects in more depth!
// DO REMEMBER EVERY KEY IS TREATED AS A STRING

// 1. Creating Objects
    // 1.1 Using Object Literal (Preferred)
        let person = {
            name: "John",
            age: 30,
            isStudent: true,
        };
    //
    
    // 1.2  Using the Object Constructor
        let person1 = new Object();
        person1.name = "John";
        person1.age = 30;
    //

    // 1.3 Nested Objects
        let student = {
            name: "Alice",
            details: {
                age: 20,
                course: "Math",
            },
        };
        console.log(student.details.course); // "Math"
    //
//

// 2. Accessing Properties
    // 2.1 Dot Notation
        console.log(person.name); // "John"
    //
    
    // 2.2 Bracket Notation
        //Useful for dynamic keys or when the property name includes special characters OR symbol.
        let key = "age";
        console.log(person[key]); // 30
    
        let obj = { "first-name": "John" };
        console.log(obj["first-name"]); // "John"
    //
//

// 3. Adding, Updating, and Deleting Properties
    // 3.1 Adding New Properties
        person.gender = "Male";
        console.log(person); // { name: "John", age: 30, gender: "Male" }
    //

    // 3.2 Updating Properties
        person.age = 31;
        console.log(person.age); // 31
    //

    // 3.3 Deleting Properties
        delete person.isStudent;
        console.log(person); // { name: "John", age: 31 }
    //
//

// 4. Checking for Properties
    // 4.1 Using in
        console.log("age" in person); // true
        console.log("isStudent" in person); // false
    //

    // 4.2 Using hasOwnProperty()
        console.log(person.hasOwnProperty("name")); // true
    //
//

// 5. Iterating Over Objects
    // 5.1 Using for...in
        //Iterates over all enumerable properties.
        for (let key in person) {
            console.log(key, person[key]);
        }
        // Output:
        // name John
        // age 31
        // gender Male
    //
    
    // 5.2 Using Object.keys()
        //Returns an array of the object's keys.
        console.log(Object.keys(person)); // ["name", "age", "gender"]
    // 

    // 5.3 Using Object.values()
        //Returns an array of the object's values.
        console.log(Object.values(person)); // ["John", 31, "Male"]
    //
    
    // 5.4 Using Object.entries()
        //Returns an array of key-value pairs.
        console.log(Object.entries(person));
    // [["name", "John"], ["age", 31], ["gender", "Male"]]
//

// 6. Advanced Features
    // 6.1 Methods in Objects
        //A method is a function defined as a property of an object.
        let calculator = {
            add: function (a, b) {
            return a + b;
         },
        };
        console.log(calculator.add(5, 3)); // 8
    //

    // 6.2 this Keyword
        //Refers to the object on which the method was called.
        let person = {
            name: "Alice",
            greet: function () {
            console.log(`Hello, my name is ${this.name}`);
          },
        };
        person.greet(); // "Hello, my name is Alice"
    //
//
 
 // 7. Copying Objects
    // 7.1 Shallow Copy with Object.assign()
        let original = { name: "John" };
        let copy = Object.assign({}, original);
        copy.name = "Alice";
        console.log(original.name); // "John"
        console.log(copy.name); // "Alice"
    //
    
    // 7.2 Spread Operator
        let copy = { ...original };
    //
//

// 8. Object Destructuring
    //Extract properties into variables.
        let { name, age } = person;
        console.log(name, age); // "Alice", 31
    //
//

// 9. Merging Objects
    // 9.1 Using Object.assign()
        let object1 = { a: 1 };
        let object2 = { b: 2 };
        let merged = Object.assign({}, obj1, obj2);
        console.log(merged); // { a: 1, b: 2 }
    //

    // 9.2 Using Spread Operator
        let merge = { ...obj1, ...obj2 };
    //
//

// 10. Comparing Objects
    //Objects are compared by reference, not value.
        let ob1 = { a: 1 };
        let ob2 = { a: 1 };
        console.log(obj1 === obj2); // false
        //To compare values, convert objects to strings or iterate over keys and values.
    //
//

// 11. Special Object Properties
    // __proto__
        //Points to the prototype of an object. Useful for inheritance.
        let ob = {};
        console.log(ob.__proto__); // Points to Object prototype
    //

    //Computed Properties
        //Dynamic property names.
        let key1 = "dynamicKey";
        let objec = { [key1]: "value" };
        console.log(obj.dynamicKey); // "value"
    //

    // Symbols as Keys
        //Symbol is a unique, immutable value that can be used as an object key.
        let sym = Symbol("id");
        let obje = { [sym]: 123 };
        console.log(obj[sym]); // 123
    //
//

// 12. Practical Use Cases
    //Counting Elements
        let fruits = ["apple", "banana", "apple"];
        let count = {};
        fruits.forEach((fruit) => {
        count[fruit] = (count[fruit] || 0) + 1;
    });
    console.log(count); // { apple: 2, banana: 1 }

    //Object-Freezing
      //Prevents adding, deleting, or modifying properties.
        let object = { name: "John" };
        Object.freeze(object);
        object.name = "Alice"; // No effect
        console.log(obj.name); // "John"
    //
//












