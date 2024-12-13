//Strings in JavaScript
//A string in JavaScript is a sequence of characters enclosed in 
//either single quotes ('), double quotes ("), or backticks (`). 
//Strings are used to represent and manipulate text.

//METHODS TO DECLARE STRINGS

    // 1. SINGLE QUOTES
        let singleQuoteString = 'Hello, World!';
    //

    // 2. DOUBLE QUOTES
        let doubleQuoteString = "Hello, World!";
    //

    //3. TEMPLATE LITREALS [BACKTICKS]
        //Allows embedding expressions. 
        //Used for multi-line strings.

        let name = 'Alice';
        let greeting = `Hello, ${name}!`;
    //
//

// TEMPLATE LITREALS
    //Template literals make strings more powerful by allowing:

    //1. Variable Interpolation
        let name1 = "Alice";
        let age = 25;
        console.log(`My name is ${name1} and I am ${age} years old.`);
    //

    //2. Multi-Line Strings
        let poem = `Roses are red,
        Violets are blue,
        JavaScript is fun,
        And so are you!`;
    //
//

// STRING CHARACTERISTICS

    // 1. Strings are immutable, meaning once created, they cannot be changed. 
    //However, you can create a new string based on operations.

    let original = "Hello";
    original[0] = "J"; // This won't work
    console.log(original); // "Hello"

    // 2. Strings are indexed. You can access characters using their index (starting from 0).

    let str = "JavaScript";
    console.log(str[0]); // "J"
    console.log(str[4]); // "S"
//

// STRING METHODS
    //1. length
        //Returns the number of characters in the string.
        let text = "Hello!";
        console.log(text.length); // 6
    //

    //2. charAt(index)
        //Returns the character at the specified index.
        let text1 = "JavaScript";
        console.log(text1.charAt(4)); // "S"
    //

    //3. includes(substring)[BOOLEAN]
        //Checks if a string contains a specified substring.
        let sentence = "I love programming.";
        console.log(sentence.includes("love")); // true
    //

    //4. indexOf(substring) [INDEX]
        //Returns the first index of the substring or -1 if not found.
        let text2 = "Banana";
        console.log(text2.indexOf("a")); // 1
    //

    //5. lastIndexOf(substring)
        //Returns the last index of the substring.
        let text3 = "Banana";
        console.log(text3.lastIndexOf("a")); // 5
    //

    //6. slice(start, end)
        //Extracts a section of a string.
        let text4 = "JavaScript";
        console.log(text4.slice(0, 4)); // "Java"
    //
    
    //7. substring(start, end)
        //Similar to slice, but does not accept negative indices.
        let text5 = "JavaScript";
        console.log(text5.substring(4, 10)); // "Script"
    //

    //8. toUpperCase() and toLowerCase()
        //Converts the string to uppercase or lowercase.
        let text6 = "Hello";
        console.log(text6.toUpperCase()); // "HELLO"
        console.log(text6.toLowerCase()); // "hello"
    //

    //9. trim()
        //Removes whitespace from both ends of the string.
        let text7 = "   Hello World!   ";
        console.log(text7.trim()); // "Hello World!"
    //

    //10. replace(searchValue, newValue)
        //Replaces the first occurrence of searchValue with newValue.
        let text8 = "I love JavaScript.";
        console.log(text8.replace("JavaScript", "coding")); // "I love coding."
    //
    
    //11. replaceAll(searchValue, newValue)
        //Replaces all occurrences of searchValue.
        let text9 = "Banana, Banana, Banana";
        console.log(text9.replaceAll("Banana", "Apple")); // "Apple, Apple, Apple"
    //
    
    //12. split(delimiter)
        //Splits the string into an array based on the delimiter.
        let sen = "Hello,World,JavaScript";
        console.log(sen.split(",")); // ["Hello", "World", "JavaScript"]
        //NOTE - IF WORDS ARE SPLIT BY ANY OTHER SYMBOL - , / THEN SPLIT FUNCTION WILL TAKE THAT AS A PARAMETER
    //

    //13. concat()
        //Concatenates two or more strings.
        let first = "Hello";
        let second = "World";
        console.log(first.concat(" ", second)); // "Hello World"
    //

    //14. startsWith(substring) and endsWith(substring)[BOOLEAN]
        //Checks if the string starts or ends with the specified substring.
        let word = "JavaScript";
        console.log(word.startsWith("Java")); // true
        console.log(word.endsWith("Script")); // true
    //

    //15. repeat(count)
        //Repeats the string count times.
        let word1 = "Hi!";
        console.log(word1.repeat(3)); // "Hi!Hi!Hi!"
    //

    //Method	    Accepts Negative Values	     Behavior with Negative Values
    //slice()	            ✅	                Counts from the end of the string.
    //substring()	        ❌	                Converts negative values to 0.
    //charAt()	            ❌	                Returns an empty string ('').
    //indexOf()	            ❌	                Does not consider negatives; searches normally.
    //lastIndexOf()	        ❌	                Searches normally, ignores negatives.
    //repeat()	            ❌	                Throws an error if the count is negative.
    //startsWith()	        ❌	                Ignores negatives and starts from index 0.
    //endsWith()	        ❌	                Ignores negatives and checks up to the string end.
//

