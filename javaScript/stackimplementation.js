class Node {
    constructor(value){
        this.value =value
        this.next = null
    }
}

// CREATE CLASS FOR STACK 

class Stack {
    constructor(){
        this.first = null
        this.next = null
        this.size = 0 
    }

    // CREATE A PUSH METHOD 

    push(val){
        var newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    // CREATE A POP METHOD 

    pop() {
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        else {
            this.first = this.first.next 
            this.size--
            return temp.value
        }
    }
}

const stck = new Stack
stck.push("value1");
stck.push("valie2")
stck.push("value3")
// stck.push(22)
console.log(stck.first) 
// console.log()
console.log(stck.last) // Node { value: 'value1', next: null }
console.log(stck.size) 