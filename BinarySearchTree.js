// Binary Search Tree

//Insert: O(log n)
//Search: O(log n)
// Not garrenteed if the tree get really deep and not balanced, similar to linear time


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insert a node: interative or recursive 
  // interative:
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //Find a value if it is in the tree
  find(value) {
    //compare the current node with the given value, 
    //if equal-> reture true
    //if given value is smaller-> check if current.left exist, if not return false
    //if current.left exist then change current node to current.left
    //same to the right
    if (this.root === null) return false;
    var current = this.root;

    while (true) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        if (current.left !== null) {
          current = current.left;
        } else {
          return false;
        }
      } else if (value > current.value) {
        if (current.right !== null) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
console.log(tree.insert(3));
console.log(tree.find(16));