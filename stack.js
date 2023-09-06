class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    let index = this.stack.length;
    item
    // while(item >this.peek()){
    //     console.log(this.stack);
    //     console.log(item);
    //     index
    //     this.stack.pop()
    //     if (index==0){
    //         break;
    //     }
    //     index--;
    // }
    item
    console.log(this.stack);
    while (this.stack.length > 0 && item > this.stack[this.stack.length - 1]) {
      this.stack.pop();
    }
    this.stack
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  print(){
    for (let index = 0; index < this.stack.length; index++) {
      const element = this.stack[index];
      console.log(element)
    }
  }
}



// // Example usage:
// const stack = new Stack();
// stack.push(4);
// stack.push(2);
// stack.push(7);
// stack.push(4);
// console.log(stack)
// console.log(stack);



class MonotonicStack {
  constructor() {
    this.stack = [];
  }

  push(item){
      console.log(this.stack)
      item
      while(this.stack.length >0 &&item < this.stack[this.stack.length-1]){
      console.log(this.stack);
      this.stack.pop()
      }
      this.stack.push(item)
  }
  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Example usage:
const stack1 = new MonotonicStack();
stack1.push(2);
stack1.push(3);
stack1
stack1.push(7);
stack1.push(11);
stack1;
stack1.push(5);
stack1;

console.log(stack1.peek()); // Output: 7

stack1.pop();
console.log(stack1.peek()); // Output: 2

console.log(stack1.isEmpty()); // Output: false
