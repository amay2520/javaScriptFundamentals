//In JavaScript, a Map is a collection of key-value pairs where keys can be of any data type. 
//It provides more flexibility than plain objects, especially when working with non-string keys. 

//1. What is a Map?
    //A Map is an ordered collection of unique key-value pairs where:
    //Keys can be of any type (primitives, objects, functions).
    //The order of entries is based on the order of insertion.
    let myMap = new Map([iterable]);
    
    Example:
    let map = new Map();
    map.set('name', 'Alice');
    map.set(42, 'age');
    map.set(true, 'isActive');
    console.log(map); // Output: Map(3) { 'name' => 'Alice', 42 => 'age', true => 'isActive' }
//

//2. Properties of Map
    //size: Returns the number of key-value pairs in the Map.
    Example:
    let map1 = new Map();
    map1.set('name', 'Alice');
    console.log(map1.size); // Output: 1
//

//3. Methods of Map
    //3.1 Adding and Updating: set()
    //    Adds or updates a key-value pair in the Map.
        
        Example:

        let map2 = new Map();
        map2.set('color', 'blue');
        map2.set('color', 'red'); // Updates the value
        console.log(map2); // Output: Map(1) { 'color' => 'red' }
    //

    //3.2 Accessing: get()
        //Retrieves the value for a specific key.

        Example:
        let map3 = new Map([['name', 'Alice']]);
        console.log(map3.get('name')); // Output: Alice
        console.log(map3.get('age')); // Output: undefined (key doesn't exist)
    //

    //3.3 Checking Existence: has()
        //Checks if a key exists in the Map.

        Example:
        let map4 = new Map([['name', 'Alice']]);
        console.log(map4.has('name')); // Output: true
        console.log(map4.has('age')); // Output: false
    //

    //3.4 Removing: delete()
        //Removes a key-value pair. Returns true if the key was found and removed, false otherwise.

        Example:
        let map5 = new Map([['name', 'Alice']]);
        console.log(map5.delete('name')); // Output: true
        console.log(map5); // Output: Map5(0) {}
    //

    //3.5 Clearing: clear()
        //Removes all key-value pairs from the Map.

        Example:
        let map6 = new Map([['name', 'Alice'], ['age', 25]]);
        map6.clear();
        console.log(map6); // Output: Map(0) {}
    //
//

//4. Iterating Over Map
    //Maps maintain the order of their entries, and you can iterate over them using various techniques.

    //4.1 Using for...of

        let map7 = new Map([['name', 'Alice'], ['age', 25]]);
        for (let [key, value] of map7) {
          console.log(`${key}: ${value}`);
        }
        // Output:
        // name: Alice
        // age: 25
    //

    //4.2 Using forEach()
        let map8 = new Map([['name', 'Alice'], ['age', 25]]);
        map8.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });
        // Output:
        // name: Alice
        // age: 25
    //

    //4.3 Extracting Keys, Values, and Entries
        //keys(): Returns an iterator for keys.
        //values(): Returns an iterator for values.
        //entries(): Returns an iterator for key-value pairs.

        Example:
        let map9 = new Map([['name', 'Alice'], ['age', 25]]);
        console.log([...map9.keys()]);   // Output: ['name', 'age']
        console.log([...map9.values()]); // Output: ['Alice', 25]
        console.log([...map9.entries()]); // Output: [['name', 'Alice'], ['age', 25]]
    //
//

//5. Map vs Object
    //Feature	                    Map	                            Object
    //Key Type	                    Can be any type	                Must be a string or symbol
    //Iteration	                    Direct support for iteration	Requires Object.keys() or similar
    //Insertion                     Order	Maintained	            Not guaranteed (depends on key type)
    //Size	                        size property	                Must calculate using Object.keys()
    //Performance for Lookups	    Generally faster	            Slower for large collections
//

//6. Use Cases for Map
    //6.1 Associating Metadata with Objects

        let obj1 = { id: 1 };
        let obj2 = { id: 2 };

        let map10 = new Map();
        map10.set(obj1, 'Admin');
        map10.set(obj2, 'User');

        console.log(map10.get(obj1)); // Output: Admin
    //

    //6.2 Counting Occurrences

        let arr = ['a', 'b', 'a', 'c', 'b', 'a'];
        let countMap = new Map();

        arr.forEach((char) => {
          countMap.set(char, (countMap.get(char) || 0) + 1);
        });

        console.log(countMap); // Output: Map(3) { 'a' => 3, 'b' => 2, 'c' => 1 }
    //

    //6.3 Caching Results
        let cache = new Map();

        function fetchData(id) {
          if (cache.has(id)) {
            return cache.get(id); // Return cached data
          }
      
          let data = `Data for ${id}`; // Simulated fetch
          cache.set(id, data);
          return data;
        }

        console.log(fetchData(1)); // Fetches and caches
        console.log(fetchData(1)); // Returns cached result
    //
//

//7. WeakMap
    //A WeakMap is a variant of Map that allows only object keys and does not prevent garbage collection.

    //Use Case: Storing metadata or references to objects without preventing garbage collection.
        let weakMap = new WeakMap();
        let obj = {};
        weakMap.set(obj, 'some value');
        console.log(weakMap.get(obj)); // Output: some value
    //
    
    //Key Differences:

    //Keys must be objects.
    //No size property or iteration methods.
//

//8. Edge Cases and Observations
    //NaN as Key:
        //Maps treat all NaN values as the same key.

        let map11 = new Map();
        map11.set(NaN, 'Not a Number');
        console.log(map11.get(NaN)); // Output: Not a Number
    //

    //Object Reference as Key:
        //Objects are unique by reference.
        let map12 = new Map();
        let obj3 = {};
        let obj4 = {};
        map12.set(obj3, 'Value 1');
        map12.set(obj4, 'Value 2');
        console.log(map.size); // Output: 2
    //

    //Order Preservation:
        //Maps retain insertion order, even for keys added or removed later.
    //
//

//9. Conclusion
    //A Map is a highly versatile and powerful data structure in JavaScript, offering advantages over
    //plain objects in various scenarios like key flexibility, guaranteed order, and optimized performance for large datasets.
//