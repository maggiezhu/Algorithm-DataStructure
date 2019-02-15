//heaps are trees
// Binary heap:
//Max Binary Heap: the parent node is larger
// Min Binary heap: the parent node is smaller
// very compact, every left and right are filled before going to next level
// left node is filled first 
// no implied order of the siblings
// used to implement priority queue & graph trivasal

// Use array to store heap, root at 0, left, right, next level 
// for any index of an array n, 
// left child is at 2n+1 right child is at 2n+2
// have a child and find its parent: (n-1)/2 floor it


//Time Complexity: 
//insert: O(logn)
//remove:O(logn)
//search: O(n) vs binary search tree is O[logn]

// heap sort algorithm has space complexity of O(1), because we can do swaps on the original array without additional memory 
//heap sort has time complexity of O(nlog(n))

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  //insert element to a heap
  //add to the end, bubble up
  insert(element) {
    this.values.push(element);
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
      if (element > this.values[parentIdx]) {
        this.values[index] = this.values[parentIdx];
        this.values[parentIdx] = element;
        index = parentIdx;
      } else if (element <= this.values[parentIdx]) {
        break;
      }
    }
  }

  //remove from the root (max value)
  // remove the root, 
  //replace with most recently added
  //adjust (bubble down), swap with the larger child
  ExtractMax() {
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
        if (leftChild > value) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > value) || (swap !== null && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(3);
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());
console.log(heap.ExtractMax());