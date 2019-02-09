/*
    Stack: Last in First out + First in Last out
    EX: Call Stack
        array + push() + pop()
        push to the top and pop from the top
*/

class Stack {

  // use array to store items
  constructor() {
    this.items = [];
  }
  // Functions to be implemented 
  // push(item) 
  push(element) {
    this.items.push(element);
  }
  // pop() 
  pop(element) {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  // peek(): return the top element but not remove it 
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty() 
  isEmpty() {
    return this.items.length === 0;
  }
  // printStack() 
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack());

// returns 30 
console.log(stack.peek());

// returns 30 and remove it from stack 
console.log(stack.pop());

// returns [10, 20] 
console.log(stack.printStack());