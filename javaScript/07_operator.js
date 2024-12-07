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

// 6. Bitwise Operators
// 7. Type Operators (typeof, instanceof)
// 8. Nullish Coalescing Operator (??)
// 9. Optional Chaining (?.)
// 10. Comma Operator (,)