// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
// whether primitive or object references. 

//1. What is a Set?
    //A Set is a collection of values where:

    //Each value is unique (no duplicates allowed).
    //The insertion order of elements is preserved.

    //let mySet = new Set([iterable]);
    let set = new Set([1, 2, 3, 3]);
    console.log(set); // Output: Set(3) { 1, 2, 3 }
//

//2. Properties of Set
    //size: Returns the number of unique values in the Set.
    let set1 = new Set([1, 2, 3]);
    console.log(set1.size); // Output: 3
//

//3. Methods of Set
    //3.1 Adding Elements: add()
        //Adds a value to the Set. If the value already exists, it is ignored.
        let set2 = new Set();
        set2.add(1).add(2).add(2);
        console.log(set); // Output: Set2(2) { 1, 2 }
    //

    //3.2 Removing Elements: delete()
        //Removes a value from the Set. Returns true if the value was found and removed, false otherwise.
        let set3 = new Set([1, 2, 3]);
        console.log(set3.delete(2)); // Output: true
        console.log(set3); // Output: Set(2) { 1, 3 }
    //

    //3.3 Checking Elements: has()
        //Returns true if the value exists in the Set, false otherwise.
        let set4 = new Set([1, 2, 3]);
        console.log(set4.has(2)); // Output: true
        console.log(set4.has(4)); // Output: false
    //

    //3.4 Clearing Elements: clear()
        //Removes all elements from the Set.
        let set5 = new Set([1, 2, 3]);
        set5.clear();
        console.log(set5); // Output: Set(0) {}
    //

    //3.5 Iterating Elements
        //You can iterate over a Set using loops or iterator methods.
        //keys(), values(): Return an iterator of the Set values (both are identical for a Set).
        let set6 = new Set([1, 2, 3]);
        for (let value of set6.values()) {
            console.log(value); // Output: 1, 2, 3
        }
        
        //entries(): Returns an iterator of key-value pairs (both key and value are the same in a Set).
        let set7 = new Set([1, 2, 3]);
        for (let [key, value] of set7.entries()) {
            console.log(key, value); // Output: 1 1, 2 2, 3 3
        }
        
        //forEach(): Executes a callback for each element.
        let set8 = new Set([1, 2, 3]);
        set8.forEach((value) => {
            console.log(value); // Output: 1, 2, 3
        });
    //
//

//4. Common Use Cases for Sets
    //4.1 Removing Duplicates
        //Convert an array into a Set to remove duplicates.
        let numbers = [1, 2, 2, 3, 4, 4];
        let uniqueNumbers = [...new Set(numbers)];
        console.log(uniqueNumbers); // Output: [1, 2, 3, 4]
    //

    //4.2 Checking Existence in a Collection
        //Set provides faster lookups compared to arrays for large datasets.
        let largeSet = new Set([1, 2, 3, 4, 5]);
        console.log(largeSet.has(3)); // Output: true
    //

    //4.3 Set Operations
        //JavaScript does not have built-in support for set operations like union, intersection, and difference, but you can implement them:

        //Union: Combines two sets.e
        let setA = new Set([1, 2, 3]);
        let setB = new Set([3, 4, 5]);
        let union = new Set([...setA, ...setB]);
        console.log(union); // Output: Set(5) { 1, 2, 3, 4, 5 }
    
        //Intersection: Elements common to both sets.
        let intersection = new Set([...setA].filter(x => setB.has(x)));
        console.log(intersection); // Output: Set(1) { 3 }

        //Difference: Elements in setA but not in setB.

        let difference = new Set([...setA].filter(x => !setB.has(x)));
        console.log(difference); // Output: Set(2) { 1, 2 }
    //

    //4.4 WeakSet
        //A WeakSet is a variant of Set that allows only object references 
        //and does not prevent garbage collection.
        let weakSet = new WeakSet();
        let obj = {};
        weakSet.add(obj);
        console.log(weakSet.has(obj)); // Output: true
       
        //Key Differences:

        //Only objects can be stored.
        //No size property or iteration methods.
    //
        
//5. Edge Cases and Observations
        //NaN Behavior:
        //A Set treats all NaN values as the same.
        let set9 = new Set([NaN, NaN]);
        console.log(set9); // Output: Set(1) { NaN }

        //Value Types:
            //Objects are unique based on their reference.
            let set10 = new Set();
            set.add({});
            set.add({});
            console.log(set10.size); // Output: 2
        //

        //Order Preservation:
            //Values in a Set are iterated in the order of their insertion.
            let set11 = new Set([3, 1, 4, 2]);
            console.log([...set11]); // Output: [3, 1, 4, 2]
    //
//

//6. Conclusion
    //A Set is an efficient tool for managing collections of unique values and is
    // highly versatile for tasks like:

    //Deduplication.
    //Fast membership testing.
    //Simulating mathematical set operations.
//