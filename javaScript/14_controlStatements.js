// Control statements in JavaScript determine the flow of program execution based on conditions or loops. 
// They include conditional statements, loops, and control flow modifiers.

//1. Conditional Statements
    //1.1 if Statement
        //Executes a block of code if the condition evaluates to true.
        Syntax:
        if (condition) {
          // code to execute if condition is true
        }

        Example:

        let age = 18;
        if (age >= 18) {
          console.log("You are eligible to vote.");
        }
    //

    //1.2 if-else Statement
        //Executes one block of code if the condition is true, and another if it's false.
        Syntax:
        if (condition) {
            // code if condition is true
        } else {
            // code if condition is false
        }

        Example:

        let age1 = 16;
        if (age1 >= 18) {
          console.log("You can vote.");
        } else {
          console.log("You are too young to vote.");
        }
    //

    //1.3 if-else if-else Ladder
        //Allows multiple conditions to be checked in sequence.

        Syntax:
        if (condition1) {
          // code if condition1 is true
        } else if (condition2) {
          // code if condition2 is true
        } else {
          // code if none of the above conditions are true
        }

        Example:
        let marks = 85;
        if (marks >= 90) {
          console.log("Grade: A+");
        } else if (marks >= 75) {
          console.log("Grade: A");
        } else if (marks >= 50) {
          console.log("Grade: B");
        } else {
          console.log("Fail");
        }
    //
    
    //1.4 switch Statement
        //Evaluates an expression and matches it against multiple cases. 
        // It’s a cleaner alternative to multiple if-else if statements.

        Syntax:
        switch (expression) {
          case value1:
            // code for value1
            break;
          case value2:
            // code for value2
            break;
          default:
            // code if no cases match
        }

        Example:
        let day = "Monday";
        switch (day) {
          case "Monday":
            console.log("Start of the workweek.");
            break;
          case "Friday":
            console.log("End of the workweek.");
            break;
          default:
            console.log("Midweek days.");
        }
    //
//

//2. Loops
    // 2.1 for Loop
        //Used when the number of iterations is known.
        Syntax:
        for (initialization; condition; increment/decrement) {
          // code to execute
        }

        Example:
        for (let i = 1; i <= 5; i++) {
          console.log(i);
        }
    //

    // 2.2 while Loop
        //Used when the number of iterations is unknown and depends on a condition.
        Syntax:
        while (condition) {
            // code to execute
        }
        
        Example:
        let i = 1;
        while (i <= 5) {
          console.log(i);
          i++;
        }
    //

    // 2.3 do-while Loop
        //Similar to while, but ensures the code runs at least once before checking the condition.
        Syntax:    
        do {
          // code to execute
        } while (condition);

        Example:
        let j = 1;
        do {
          console.log(j);
          j++;
        } while (j <= 5);
    //

    // 2.4 for...in Loop
        //Used to iterate over the keys of an object.
        Syntax:
        for (key in object) {
          // code to execute
        }

        Example:

        const obj = { name: "John", age: 30, city: "New York" };
        for (let key in obj) {
          console.log(key + ": " + obj[key]);
        }
    //

    // 2.5 for...of Loop
        //Used to iterate over iterable objects like arrays, strings, or sets.

        Syntax:
        for (element of iterable) {
          // code to execute
        }

        Example:                        
        const array = [10, 20, 30];
        for (let value of array) {
          console.log(value);
        }
    //
//

// 3. Control Flow Modifiers
    // 3.1 break
        //Exits a loop or switch statement prematurely.
        Example:
        for (let i = 1; i <= 5; i++) {
          if (i === 3) break; // stops the loop at i = 3
          console.log(i);
        }
        // Output: 1, 2
    //

    // 3.2 continue
        //Skips the current iteration of a loop and moves to the next one.
        Example:
        for (let i = 1; i <= 5; i++) {
          if (i === 3) continue; // skips i = 3
          console.log(i);
        }
        // Output: 1, 2, 4, 5
    //

    // 3.3 return
        //Exits a function and optionally returns a value.
        Example:
        function checkAge(age) {
          if (age < 18) return "Too young";
          return "Welcome!";
        }
        console.log(checkAge(20)); // Output: Welcome!
    //
//

// 4. Nested Control Statements
    //You can nest control statements (e.g., if inside loops or loops inside loops).
    Example: 
    
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        if (i === j) continue;
        console.log(`i: ${i}, j: ${j}`);
      }
    }
//

//5. Ternary Operator
    //A shorthand for if-else.
    Syntax:
    condition ? expression1 : expression2;
    Example:

    let age2 = 20;
    let message = age2 >= 18 ? "Adult" : "Minor";
    console.log(message); // Output: Adult
//

//Key Differences Between Loops
//Loop Type	      Use Case	                                                Key Difference
//for	          Known number of iterations	                            All parameters are in one line (init, condition, update).
//while	          Unknown iterations, runs as long as the condition holds	May not run if the condition is false initially.
//do-while	      Runs at least once	                                    Checks condition after running.
//for...in	      Iterates over object keys	                                Not for arrays unless iterating over indices.
//for...of	      Iterates over values in iterable objects	                Cannot iterate over object keys directly.