class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// CREATE A QUEUE 

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // Create an entry for elements named enqueue

    enqueue(val) {
        var newNode = new Node(val) 
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    // Create a delete point for variable val

    dequeue() {
        if(!this.first)
            return null
        var temp = this.first 
        if(this.first == this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const quickQueue = new Queue

quickQueue.enqueue("value1")
quickQueue.enqueue("value2")
quickQueue.enqueue("value3")

console.log(quickQueue.first) /* 
        Node {
            value: 'value1',
            next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
        }
    */
console.log(quickQueue.last) // Node { value: 'value3, next: null }
console.log(quickQueue.size) // 3

quickQueue.enqueue("value4")
console.log(quickQueue.dequeue()) // value1
console.log(quickQueue.dequeue())
console.log(quickQueue.dequeue())
console.log(quickQueue)
console.log(quickQueue.size)