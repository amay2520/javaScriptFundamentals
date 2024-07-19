// Queues in JavaScript
// A queue is a linear data structure that follows the First In, First Out (FIFO) principle. 
// This means that the first element added to the queue will be the first one to be removed. 
// Queues are used in various applications, including task scheduling, breadth-first search algorithms, 
// and managing requests in web servers.

// Basic Operations
// Enqueue: Add an element to the end of the queue.
// Dequeue: Remove the front element from the queue.
// Front: View the front element of the queue without removing it.
// isEmpty: Check if the queue is empty.
// size: Get the number of elements in the queue.
// clear: Remove all elements from the queue.
// Implementation of a Queue in JavaScript
// We can implement a queue using an array. Below is a simple implementation:


class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";  // Return a message if the queue is empty
        }
        return this.items.shift();
    }

    // View the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";  // Return a message if the queue is empty
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

// Detailed Explanation of Queue Operations

// Enqueue Operation:
// Adds an element to the end of the queue.

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.items);  // Output: [10, 20]

// Dequeue Operation:
// Removes the front element from the queue. If the queue is empty, it returns an "Underflow" message.

queue.dequeue();  // Output: 10
console.log(queue.items);  // Output: [20]

// Front Operation:
// Returns the front element of the queue without removing it. 
// If the queue is empty, it returns a "No elements in Queue" message.

console.log(queue.front());  // Output: 20

// isEmpty Operation:
// Checks if the queue is empty and returns a boolean value.

console.log(queue.isEmpty());  // Output: false

// size Operation:
// Returns the number of elements in the queue.

console.log(queue.size());  // Output: 1

// clear Operation:
// Removes all elements from the queue.

queue.clear();
console.log(queue.items);  // Output: []
console.log(queue.isEmpty());  // Output: true

// Applications of Queues
// Task Scheduling:
// Queues are used to manage tasks in operating systems. Tasks are added to the queue and processed in the order they arrive.
// 
// Breadth-First Search (BFS):
// Queues are used to implement the BFS algorithm in graph and tree traversal.
// 
// Request Management in Web Servers:
// Queues manage incoming requests to web servers. Requests are processed in the order they arrive.
// 
// Print Queue:
// Printers use queues to manage print jobs. Jobs are printed in the order they are added to the queue.
// 
// Simulation of Real-World Queues:
// Queues simulate real-world scenarios, such as people standing in line or packets waiting to be processed in a network router.