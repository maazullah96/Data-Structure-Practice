class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    if (this.items.length == 0) return 'Underflow'
    return this.items.pop()
  }
  isEmpty() {
    return !this.items.length > 0
  }
  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1]
  }
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i])
    }
  }
}

// creating object for stack class
var stack = new Stack()

// testing isEmpty and pop on an empty stack
// Adding element to the stack
arr = [0, 0, 1, 2, 4]
for (let index = 0; index < arr.length; index++) {
  const element = arr[index]
  stack.push(element)
}

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
stack.print()
// returns false
console.log(stack.isEmpty())

// returns Underflow
console.log(stack.pop())
// console.log()

// stack.print()

class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    if (this.items.length == 0) return 'Underflow'
    return this.items.shift()
  }
  isEmpty() {
    return !this.items.length > 0
  }
  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1]
  }
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i])
    }
  }
}

// creating object for stack class
var queue = new Queue()

// testing isEmpty and pop on an empty stack
// Adding element to the stack
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

// returns false
console.log(queue.isEmpty())

// returns Underflow
console.log(queue.dequeue())

queue.print()
