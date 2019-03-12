// every element has a priority, is a node
//Methods: enqueue, dequeue, by comparing the priority not value
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue { //similar to Min Heap
  constructor() {
    this.values = [];
  }
  //insert element to a heap
  //add to the end, bubble up
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index]; //the value to compare
    while (true) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (index === 0) {
        break;
      } //edge case when it gets to the root
      if (element.priority < this.values[parentIdx].priority) {
        this.values[index] = this.values[parentIdx];
        this.values[parentIdx] = element;
        index = parentIdx;
      } else if (element.priority >= this.values[parentIdx].priority) {
        break;
      }
    }
  }



  dequeue() {
    if (this.values.length === 1) {
      return this.values.pop();
    }
    const lastValue = this.values.pop();
    var max = this.values[0];
    this.values[0] = lastValue;
    this.bubbleDown();
    return max;
  }
  bubbleDown() {
    var value = this.values[0];
    var currentIndex = 0;
    while (true) {
      let leftChildIdx = currentIndex * 2 + 1;
      let rightChildIdx = currentIndex * 2 + 2;
      let swap = null; //index for the child to swap with value
      let leftChild, rightChild;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < value.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild.priority = this.values[rightChildIdx].priority;
        if ((swap === null && rightChild.priority < value.priority) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = value;
      currentIndex = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("a", 1);
ER.enqueue("b", 5);
ER.enqueue("a", 2);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());