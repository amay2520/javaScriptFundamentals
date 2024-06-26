# JavaScript Concepts and Data Structures

Welcome to the JavaScript Concepts and Data Structures repository! This repository serves as a comprehensive guide and reference for various JavaScript concepts, including data structures, methods, and general programming principles. Each topic is explained with notes and accompanied by code examples to help solidify your understanding.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [JavaScript Basics](#javascript-basics)
  - [Variables](#variables)
  - [Data Types](#data-types)
  - [Operators](#operators)
- [Control Structures](#control-structures)
  - [Conditional Statements](#conditional-statements)
  - [Loops](#loops)
- [Functions](#functions)
- [Objects and Arrays](#objects-and-arrays)
  - [Objects](#objects)
  - [Arrays](#arrays)
- [Advanced Concepts](#advanced-concepts)
  - [Closures](#closures)
  - [Promises and Async/Await](#promises-and-async-await)
- [Data Structures](#data-structures)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Linked List](#linked-list)
  - [Tree](#tree)
  - [Graph](#graph)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository is designed to help you learn and understand the core concepts of JavaScript through concise notes and practical code examples. Whether you're a beginner or looking to brush up on your JavaScript skills, this repository has something for you.

## Getting Started

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/js-concepts-datastructures.git
cd js-concepts-datastructures
```
### JavaScript Basics

## Variables

var, let, and const
```
var x = 10;
let y = 20;
const z = 30;
```

## Data Types

String, Number, Boolean, Null, Undefined, Symbol, Object
```
let str = "Hello, World!";
let num = 42;
let bool = true;
let nothing = null;
let undef;
let sym = Symbol('symbol');
let obj = { name: "John", age: 30 };
```
## Operators

 Arithmetic, Assignment, Comparison, Logical, etc.
 ```
let a = 10 + 5; // Arithmetic
a += 5; // Assignment
let isEqual = (a === 20); // Comparison
let isBothTrue = (true && false); // Logical
```

## Control Structures

Conditional Statements
```
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is 10 or less");
}
```

## Loops

for loop
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
while loop
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
## Functions
## Function Declaration
```
function add(a, b) {
  return a + b;
}
```

## Function Expression
```
const subtract = function(a, b) {
  return a - b;
};
```
## Arrow Function
```
const multiply = (a, b) => a * b;
```
### Objects and Arrays

## Objects
```
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Alice
```
## Arrays
```
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add to the end
numbers.pop(); // Remove from the end
console.log(numbers[0]); // Access first element
```
### Advanced Concepts
## Closures
```
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
## Promises and Async/Await
```
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result)); // Done!

async function asyncFunction() {
  let result = await promise;
  console.log(result); // Done!
}

asyncFunction();
```
### Data Structures
## Stack
```
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```
## Queue
```
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
```
## Linked List
```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  remove(value) {
    if (this.head === null) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next === null) return;
    current.next = current.next.next;
  }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.remove(10);
```
## Tree
```
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
```
## Graph
```
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }
  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
```
### Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you have any suggestions or find any bugs.

### License
This project is licensed under the MIT License - see the LICENSE file for details.


