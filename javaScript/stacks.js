// Stacks in JavaScript
// A stack is a linear data structure that follows the Last In, First
//  Out (LIFO) principle. This means that the last element added to the stack will 
//  be the first one to be removed. Stacks are used in various applications, i
//  ncluding function call management, undo mechanisms in text editors, and expression evaluation.

// Basic Operations
// Push: Add an element to the top of the stack.

// Pop: Remove the top element from the stack.

// Peek: View the top element of the stack without removing it.

// isEmpty: Check if the stack is empty.

// size: Get the number of elements in the stack.

// Implementation of a Stack in JavaScript
// We can implement a stack using an array or a linked list. Below is the implementation using an array:

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";  // Return a message if the stack is empty
        }
        return this.items.pop();
    }

    // View the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";  // Return a message if the stack is empty
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Push Operation:
// The push method adds an element to the top of the stack.

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.items);  // Output: [10, 20]

// Pop Operation:
// The pop method removes the top element from the stack. If the stack is empty, it returns an "Underflow" message.

stack.pop();  // Output: 20
console.log(stack.items);  // Output: [10]

// Peek Operation:
// The peek method returns the top element of the stack without removing it.
//  If the stack is empty, it returns a "No elements in Stack" message.

console.log(stack.peek());  // Output: 10

// isEmpty Operation:
// The isEmpty method checks if the stack is empty and returns a boolean value.

console.log(stack.isEmpty());  // Output: false

// size Operation:
// The size method returns the number of elements in the stack.

console.log(stack.size());  // Output: 1

// clear Operation:
// The clear method removes all elements from the stack.

stack.clear();
console.log(stack.items);  // Output: []
console.log(stack.isEmpty());  // Output: true

// Applications of Stacks
// Function Call Management:
// Stacks are used to manage function calls in programming languages. 
// When a function is called, its execution context is pushed onto the stack.
//  When the function returns, its execution context is popped from the stack.

// Undo Mechanism in Text Editors:
// Stacks are used to implement undo features in text editors. 
// Each action performed by the user is pushed onto a stack. When the user triggers an undo, 
// the most recent action is popped from the stack and reverted.

// Expression Evaluation:
// Stacks are used to evaluate expressions, particularly postfix (Reverse Polish Notation) expressions. 
// Operands are pushed onto the stack, and operators pop operands from the stack to perform operations.

// Balancing Parentheses:
// Stacks are used to check for balanced parentheses in expressions. 
// An opening parenthesis is pushed onto the stack, and a closing parenthesis pops the stack. 
// If the stack is empty at the end of the process, the parentheses are balanced.

// Browser History:
// Stacks are used to implement the back feature in web browsers. 
// Each visited page is pushed onto a stack. When the back button is pressed, 
// the current page is popped from the stack and the previous page is displayed.