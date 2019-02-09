/*
Linked List:
a pointer to the head and one to the tail
store elements in sequential order, head to tail
Single linked lists: hold pointers to the next value
Double linked lists: pointer to both previous and next

Good: insert & delete
- Constent time insertion and deletion vs array is linear time
- Can grow as long as there's space

Bad: 
- find and edit element in linked list require linear time vs array indexing

Use:
- Can used to build Stack and Queue, just like array
- Express structure its middleware logic in a linked list fashion, 
when request is received it is piped from one middle ware to next
until a response is issued

Methods:
push: add to end
pop: remove from end (edge case of length 1 or 0)

*/


//Single linked list
class Node {
  constructor(element) {
    this.element = element; //data
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //insert(element), add to the end 
  push(value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      var current = this.head;
      var previous = current;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.tail = previous;

      this.length -= 1;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  shift(value) { //remove from beginning
    var oldhead = this.head
    if (this.length === 0) {
      return undefined;
    }
    var nextnode = oldhead.next;
    this.head = nextnode;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldhead;
  }
  unshift(value) {
    var newnode = new Node(value);
    if (this.length === 0) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      var counter = 0;
      var current = this.head;
      while (counter != index) {
        current = current.next;
        counter += 1;
      }
      return current;
    }
  }
  set(index, value) {
    var node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
}

var newLinkedList = new SingleLinkedList();
newLinkedList.push("a");
newLinkedList.push("b");
newLinkedList.push("c");
console.log(newLinkedList.get(2));
console.log(newLinkedList.set(0, 10));
console.log(newLinkedList);