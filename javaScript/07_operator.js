// operators and expression are of 10 types in javaScript

// 1. Arithmetic Operators
    //  
        let a = 20
        let b = 30

        //+ Addition 
        console.log(a+b)

       // -	Subtraction
        console.log(a-b)

       // *	Multiplication
        console.log(a*b)

       // **	Exponentiation (ES2016)
        console.log(a**b)

       // /	Division
        console.log(a/b)

       // %	Modulus (Remainder)
        console.log(a/b)

       // ++ Increment
       console.log(a++ , b++)

       // -- Decrement
        console.log(a--, b--)
    //
//

// 2. Comparison Operators
    //
        // 1. === Strict equality	
            //Tests whether the left and right values are identical to one another	
            5 === 2 + 4
        //
        
        // 2. !== Strict-non-equality	
            //Tests whether the left and right values are not identical to one another	
            5 !== 2 + 3
        //
        
        //3. < Less than	
            //Tests whether the left value is smaller than the right one.	
            10 < 6
        //
        
        //4. > Greater than	
            //Tests whether the left value is greater than the right one.	
            10 > 20
        //
        
        //5. <= Less than or equal to	
            //Tests whether the left value is smaller than or equal to the right one.	
            3 <= 2
        //
        
        //6. >=	Greater than or equal to	
            //Tests whether the left value is greater than or equal to the right one.	
            5 >= 4
        //
    //
//

// 3. Logical Operators
    //
        // 1. Logical AND (&&)
            //The && operator returns true if both operands are true. 
            //Otherwise, it returns false. It also performs short-circuiting, 
            //which means if the first operand is false, the second operand is not evaluated.

            condition1 && condition2; //syntax

            //example
            let isLoggedIn = true;
            
            let hasPaymentMethod = true;
            if (isLoggedIn && hasPaymentMethod) {
              console.log("You can make a purchase.");
            } else {
              console.log("Please log in or add a payment method.");
            }
        //

        // 2. Logical OR (||)
            //The || operator returns true if at least one operand is true. 
            //It also performs short-circuiting, which means if the first operand is true, 
            //the second operand is not evaluated.

            condition1 || condition2; //syntax

            //example
            let isWeekend = false;
            let isHoliday = true;

            if (isWeekend || isHoliday) {
              console.log("You can take a break.");
            } else {
              console.log("It's a working day.");
            }
        //

        // 3. Logical NOT (!)
            //The ! operator negates the value of a boolean expression. 
            //If the operand is true, it returns false, and vice versa.

            !condition; //syntax
        
            //example 
            let isRaining = false;

            if (!isRaining) {
                console.log("You can go for a walk.");
            } else {
                console.log("Take an umbrella.");
            }
        //
    //
//

// 4. Assignment Operators
    //
        // 1. Assignment = 
        let x = 5
        //

        // 2. += Addition assignment	
            //Adds the value on the right to the variable value on the left, 
            //then returns the new variable value	
            x += 4;	
            x = x + 4;
        //
        
        //3. -=	Subtraction assignment	
            //Subtracts the value on the right from the variable value on the left, 
            //and returns the new variable value	
            x -= 3;	
            x = x - 3;
        //

        //4. *=	Multiplication assignment	
            //Multiplies the variable value on the left by the value on the right, 
            //and returns the new variable value	
            x *= 3;	
            x = x * 3;
        //
        
        //5. /=	Division assignment	Divides the variable value on the left by the value on the right, 
            //and returns the new variable value	
            x /= 5;	
            x = x / 5;
        //
    //
//

// 5. Ternary Operator (? :) or conditional operator
    // Inline decisions
    x > 10 ? "Yes" : "No"
//	

// 6. Bitwise Operators - Works with binary numbers simply you have to change number into binary
    //
        //1.Bitwise AND		
            // Returns a one in each bit position for which the corresponding bits of both operands are ones.
            a & b // always return RHS value
        //
        
        //2.Bitwise OR		
            //Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
            a | b // always return LHS value
        //

        //3.Bitwise XOR		
            //Returns a zero in each bit position for which the corresponding bits are the same. 
            //[Returns a one in each bit position for which the corresponding bits are different.]
            a ^ b 
        //
        
        //4.Bitwise NOT	
            //Inverts the bits of its operand.
            ~ a	
        //
        
        //5.Left shift		
            //Shifts a in binary representation b bits to the left, shifting in zeros from the right.
            a << b
        //
        
        //6.Right shift	
       	    //Shifts a in binary representation b bits to the right, discarding bits shifted off.
           a >> b
        //
    //
//

// 7. Type Operators (typeof, instanceof)
    //  
        //Feature	                    typeof	                    instanceof
        //Type Returned	                A string	                A boolean
        //Usage	                        Checks the type of a value	Verifies if an object belongs to a class/prototype
        //Works w Primitives	        Yes	                        No
        //Works w Objects	            Yes	                        Yes
        //Detects Classes/Prototypes	No	                        Yes
        //Special Case	                Returns "object" for null	Follows prototype inheritance
    //
//

// 8. Nullish Coalescing Operator (??)
    //
        //The nullish coalescing operator (??) is used to provide a default value for a 
        //variable when the value is null or undefined.
        //It is a concise and safer alternative to the logical OR (||) operator, 
        //especially when dealing with falsy values like 0, "" (empty string), or false.
        let result = value1 ?? value2;
        //Example 1: Providing Default Values

        let username = null;
        let displayName = username ?? "Guest";

        console.log(displayName); // Output: "Guest"

        //username is null.
        //?? returns the next value ("Guest") because username is nullish.
        //Avoids Falsy Issues: Handles only null and undefined while treating other falsy values (e.g., 0, false, "") as valid.
        //Cleaner Code: Provides a simpler way to assign default values without complex conditions.
        //Useful in Optional Chaining: Works seamlessly with the optional chaining operator (?.) 
        //to handle deeply nested nullish values.
    //
//

// 9. Optional Chaining (?.)
    //
      //The optional chaining operator (?.) provides a safe and concise way to access properties 
      //or call methods on objects that might be null or undefined. 
      //Instead of throwing an error when attempting to access a property of null or undefined, it returns undefined.

        obj?.property
        obj?.[expression]
        obj?.method()

        //Why Use Optional Chaining?
        //    Prevent Runtime Errors:
        //      Without ?., accessing a property or calling a method on null or undefined causes an error.
        //      With ?., you can avoid crashes by safely handling potentially missing properties.
        //Simplify Nested Checks:
        //    It eliminates the need for repetitive if statements or logical checks for each level in deeply nested objects.

        let user = {
            profile: {
              name: "Alice",
            },
          };
          
        console.log(user?.profile?.name); // Output: "Alice"
        console.log(user?.address?.city); // Output: undefined (no error)   
    //
//

// 10. Comma Operator (,)
    //The comma operator evaluates multiple expressions and returns the result of the last expression. 
    //It allows combining multiple expressions into a single statement, separated by commas.
    expression1, expression2, -  expressionN
    //Each expression is evaluated from left to right.
    //The final result is the value of the last expression (expressionN)
//