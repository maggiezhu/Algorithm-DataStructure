/*
Queue
linear 
First in First out 
*/
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length === 0)
      return "Underflow";
    return this.items.shift();
  }
  front() { //return 0 index element in the queue 
    if (this.isEmpty)
      return "empty queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.dequeue());
console.log(queue.dequeue());