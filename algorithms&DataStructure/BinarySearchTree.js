// Binary Search Tree
//space Complexity: O(n)

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
  //Searching Methods:
  //Which one is better?
  //Depends on the tree, if a well balanced tree, our queue will 
  //grow large and use a lot of space
  //so on a balanced(wide) tree it is better to use depth first tree
  // for a long tree, a breadth first will use less space 
  //while the time complexity are always the same O(logn)

  //for depth first search which way is better? pre,post,inorder
  // preorder: easier to recreat the tree


  //Breadth First Search: use a queue, 
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }


  //Depth First Search:
  //1. PreOrder, node-> left -> right
  DFSPreOrder() {
    //recursive way:
    //create variable to store nodes visited 
    //store the root
    //a helper function accepts a node, push the value to a list
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
  //PostOrder: data.push(node.value) 在visit left，right之后
  //InOrder： 在中间

}


var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));

console.log(tree.DFSPreOrder());

// module.exports = BinarySearchTree;
// const BinarySearchTree = require('./BinearySearchTree.js');