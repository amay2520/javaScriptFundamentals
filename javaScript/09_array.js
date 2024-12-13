// Arrays in JavaScript are a type of object used to store multiple values in a single variable.
// Arrays are zero-indexed, meaning the first element is at index 0, 
// the second element is at index 1, and so on. Below, we cover each aspect of arrays in detail, 
// including methods and operations.
// NOTE - Everytime you do any operation on array you are manipulating original array

// DECLARING ARRAYS
    // 1. Using Square Brackets (Recommended)
        let fruits = ["Apple", "Banana", "Cherry"];
    //

    // 2. Using the Array Constructor
        let numbers = new Array(10, 20, 30);
    //
//

// ARRAY CHARACTERISTICS
    //1. Index-Based: Each element in an array is accessed using its index, starting from 0.
        let colors = ["Red", "Green", "Blue"];
        console.log(colors[0]); // "Red"
        console.log(colors[2]); // "Blue"
    //

    //2. Dynamic: Arrays can grow or shrink dynamically. You can add or remove elements as needed.

    //3. Mixed Data Types: An array can contain elements of different types 
        //(strings, numbers, objects, other arrays, etc.).
        let mixedArray = ["Hello", 42, true, { key: "value" }, [1, 2, 3]];
    //
//

// COMMON ARRAY METHODS
    // 1. Adding and Removing Elements
        //1.1 push(element): Adds an element to the end of the array.
            let fruit = ["Apple"];
            fruit.push("Banana");
            console.log(fruit); // ["Apple", "Banana"]
        //

        //1.2 pop(): Removes the last element from the array.
            let frui = ["Apple", "Banana"];
            frui.pop();
            console.log(frui); // ["Apple"]
        //
        
        //1.3 unshift(element): Adds an element to the beginning of the array.
            let mobile = ["Apple"];
            fruits.unshift("samsung");
            console.log(mobile); // ["samsung", "Apple"]
        //

        //1.4 shift(): Removes the first element from the array.
            let mobiles = ["samsung", "Apple"];
            mobiles.shift();
            console.log(mobiles); // ["Apple"]
        //
    //

    // 2. Accessing Elements
        //2.1 length: Returns the number of elements in the array.
            let fructose = ["Apple", "Banana", "Cherry"]; 
            console.log(fructose.length); // 3 
        //

        //2.2 Access by index: 
            let fructos = ["Apple", "Banana"]; 
            console.log(fructos[1]); // "Banana"
        //
    //

    // 3. Searching in Arrays
        // 3.1 indexOf(element): Returns the first index of the element or -1 if not found.
            let fruitss = ["Apple", "Banana"];
            console.log(fruitss.indexOf("Banana")); // 1
            console.log(fruitss.indexOf("Cherry")); // -1
        //
    
        // 3.2 includes(element): Returns true if the element exists, false otherwise.
            let a = ["Apple", "Banana"];
            console.log(fruits.includes("Banana")); // true
            console.log(fruits.includes("Cherry")); // false
        //
    //

    // 4. Iterating Over Arrays
        // 4.1 for Loop
            let fruitsss = ["Apple", "Banana", "Cherry"];
            for (let i = 0; i < fruitsss.length; i++) {
            console.log(fruits[i]);
            }
        //

        // 4.2 forEach(callback)
            let fru = ["Apple", "Banana", "Cherry"];
            fruits.forEach((fruit) => {
                console.log(fruit);
            });

            let fru1 = ["Apple", "Banana", "Cherry"];
            fru1.forEach((fru1, index) => {
            console.log(`${index}: ${fru1}`);
            }); // Output:
            // 0: Apple
            // 1: Banana
            // 2: Cherry
        //
    //

    // 5. Manipulating Elements
        // 5.1 splice(start, deleteCount, ...items): Adds/removes/replaces elements.
            let fru2 = ["Apple", "Banana", "Cherry"];
            fru2.splice(1, 1, "Orange");
            console.log(fruits); // ["Apple", "Orange", "Cherry"]
        //
        
        // 5.2 slice(start, end): Extracts a portion of the array, create new array
            let fru3 = ["Apple", "Banana", "Cherry"];
            let sliced = fru3.slice(1, 3);
            console.log(sliced); // ["Banana", "Cherry"]
        //
    //

    // 6. Transforming Arrays
        // 6.1 map(callback): Creates a new array by applying a function to each element.
            let number = [1, 2, 3];
            let squares = number.map((num) => num * num);
            console.log(squares); // [1, 4, 9]
        //
            
        // 6.2 filter(callback): Creates a new array with elements that pass the test.
            let num = [1, 2, 3, 4];
            let evenNumbers = numbers.filter((num) => num % 2 === 0);
            console.log(evenNumbers); // [2, 4]
        //
    //

    // 7. Combining or Flattening
        // 7.1 concat(array): Combines arrays into a new array.
            let arr1 = [1, 2];
            let arr2 = [3, 4];
            console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
        //
        
        // 7.2 flat(depth): Flattens nested arrays.
            let nested = [1, [2, [3]]];
            console.log(nested.flat(2)); // [1, 2, 3]
        //

        // 7.3 spread operator(...)
            let ar = [1,2,3]
            let ar1 = [4,5,6]
            console.log(...ar,...ar1)
        //
    //
//

// SPECIAL CASES
    // 1. Empty Arrays
        //Declaring an empty array:
        let empty = [];
        console.log(empty.length); // 0
    //

    // 2. Multidimensional Arrays
        let matri = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        console.log(matri[1][2]); // 6
    //

    // 3. Checking If It's an Array
        //Use Array.isArray().
        let f = ["Apple"];
        console.log(Array.isArray(f)); // true
        console.log(Array.isArray("Not an array")); // false
    //

    // 4. Sorting
        //sort(): Sorts an array alphabetically.
        let fru4 = ["Banana", "Apple", "Cherry"];
        console.log(fru4.sort()); // ["Apple", "Banana", "Cherry"]
    //
//

// 1. Advanced Array Creation
    // 1.1 Dynamic Arrays
        //JavaScript arrays are dynamic. You can create an array with a specific length but without assigned values.
        //Using Array(length)
        let emptyArray = new Array(5);
        console.log(emptyArray); // [ <5 empty items> ]
        console.log(emptyArray.length); // 5
        
        //Assigning values to specific indices:

        emptyArray[2] = "Hello";
        console.log(emptyArray); // [ <2 empty items>, "Hello", <2 empty items> ]
    //
//

// 2. Access and Mutation
    //2.1 Accessing Out-of-Bounds Indices
        //When accessing indices outside the range of an array, undefined is returned.
        let arr5 = [10, 20, 30];
        console.log(arr5[5]); // undefined
    //

    //2.2 Mutating the Array Length
        //Changing the length property can shrink or expand an array.
    
        //2.2.1 Shrink the Array
            let arr = [1, 2, 3, 4];
            arr.length = 2; 
            console.log(arr); // [1, 2]
        //
    
        //2.2.2 Expand the Array
            let arr = [1, 2];
            arr.length = 5;
            console.log(arr); // [1, 2, <3 empty items>
        //
    //
//

// 3. Iteration Techniques
    //Advanced Iteration with forEach
    //Breaking the Loop: You cannot use break in forEach. Instead, use a normal for loop or some()/every().
    let arr = [10, 20, 30];
    arr.forEach((num) => {
        if (num === 20) {
        // break; // Throws error: Illegal break statement
    }
        console.log(num);
    });

    //map() for Transformation
    //Creates a new array by applying a function to each element.
    //Original array remains unchanged.
    let nu = [1, 2, 3];
    let square = numbers.map((nu) => nu ** 2);
    console.log(square); // [1, 4, 9]
    console.log(number); // [1, 2, 3]

    //Chaining Iterative Methods
    //You can chain filter(), map(), and reduce() for complex transformations.

    let numb = [1, 2, 3, 4, 5];
    let result = numb
    .filter((num) => num % 2 === 0) // Keep even numbers
    .map((num) => num * num); // Square them
    console.log(result); // [4, 16]
//

// 4. Special Cases in Array Methods
    // 4.1 Behavior of splice
        //Remove elements and modify the original array.
        //Returns the removed elements as an array.
        let arr = [1, 2, 3, 4];
        let removed = arr.splice(1, 2); 
        console.log(arr); // [1, 4]
        console.log(removed); // [2, 3]
    //

    // 4.2 Edge Case: Deleting All Elements with splice
        let arr = [1, 2, 3];
        arr.splice(0); 
        console.log(arr); // []
    //
    
    // 4.3 Edge Case: splice to Insert Without Deletion
        let arr = [1, 2, 3];
        arr.splice(1, 0, "a", "b"); 
        console.log(arr); // [1, "a", "b", 2, 3]
    //
//

// 5. Searching and Sorting
    //find() vs filter()
    //find(callback): Returns the first matching element.
    //filter(callback): Returns all matching elements.

    let arr = [10, 20, 30, 40];
    let firstEven = arr.find((num) => num % 2 === 0);
    console.log(firstEven); // 10

    let allEvens = arr.filter((num) => num % 2 === 0);
    console.log(allEvens); // [10, 20, 30, 40]

    //Sorting Edge Cases
    //Default sort() converts elements to strings and sorts alphabetically.

    let arr = [30, 100, 2, 22];
    arr.sort(); 
    console.log(arr); // [100, 2, 22, 30] (lexicographical order)

    // To sort numerically, provide a comparator function.

    arr.sort((a, b) => a - b); 
    console.log(arr); // [2, 22, 30, 100]
//

// 6. Combining and Flattening
    //Deep Flattening with flat()
        //flat() flattens only one level by default. Use a parameter for deeper levels.
        let nest = [1, [2, [3, [4]]]];
        console.log(nest.flat(1)); // [1, 2, [3, [4]]]
        console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
    //
//

// 7. Converting Arrays
    // 7.1 Convert Array to String
        //Use join(separator):
        let arr = ["Red", "Green", "Blue"];
        console.log(arr.join(", ")); // "Red, Green, Blue"
    //

    // 7.2 Convert String to Array
        //Use split(delimiter):
        let str = "a,b,c";
        console.log(str.split(",")); // ["a", "b", "c"]
    //
//

// 8. Advanced Uses of reduce()
    //8.1 Summing Array Elements
        let numbers1 = [1, 2, 3, 4];
        let sum = numbers1.reduce((total, num) => total + num, 0);
        console.log(sum); // 10
    //
    
    //8.2 Flatten Nested Arrays
        let neste = [[1, 2], [3, 4]];
        let flat = neste.reduce((acc, val) => acc.concat(val), []);
        console.log(flat); // [1, 2, 3, 4]
    //

    //8.3 Counting Occurrences
        let fruit1 = ["apple", "banana", "apple", "orange"];
        let count = fruit1.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc;
        }, {});
        console.log(count); // { apple: 2, banana: 1, orange: 1 }
    //
// 

//9. Handling Sparse Arrays
    //Sparse arrays have "holes" (missing indices). These holes can cause unexpected behavior.
        let arr = [1, , 3]; // Sparse array
        console.log(arr.length); // 3
        console.log(arr[1]); // undefined
    //
//

// 10. Multidimensional Arrays
    // Accessing and Updating

    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    console.log(matrix[1][2]); // 6
    matrix[2][0] = 10;
    console.log(matrix[2]); // [10, 8, 9]
//

















