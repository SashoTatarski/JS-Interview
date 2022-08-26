class Node {
    constructor(value) {
       this.value = value;
    }
    leftChild = null;
    rightChild = null;
 }
 
 class Tree {
    root = null;
    // Method for finding Min in Binary Search tree
    // findMin(root) {
    //    if (root === null)
    //       return;
 
    //    if (root.leftChild === null)
    //       return console.log(root.value);
 
    //    let current = root.leftChild;
    //    if (current.leftChild === null)
    //       return console.log(current.value);
 
    //    this.findMin(current);
 
    // }
 
    findMin(root) {
       if (this.isLeaf(root))
          return root.value;
 
       let left = this.findMin(root.leftChild);
       let right = this.findMin(root.rightChild);
 
      
       return Math.min(Math.min(left, right), root.value);
    }
 
    height(root) {
       if (root === null)
          return -1;
 
       if (this.isLeaf(root))
          return 0;
 
       return (1 + Math.max(this.height(root.leftChild), (this.height(root.rightChild))));
    }
 
    traversePreOrder(root) {
       if (root === null)
          return;
 
       console.log(root.value);
       this.traversePreOrder(root.leftChild);
       this.traversePreOrder(root.rightChild);
    }
 
    traverseInOrder(root) {
       if (root === null)
          return;
 
       this.traverseInOrder(root.leftChild);
       console.log(root.value);
       this.traverseInOrder(root.rightChild);
    }
 
    traversePostOrder(root) {
       if (root === null)
          return;
 
       this.traversePostOrder(root.leftChild);
       this.traversePostOrder(root.rightChild);
       console.log(root.value);
    }
 
    find(value) {
       if (this.isEmpty())
          return console.log(false);
 
       if (value === this.root.value)
          return console.log(true);
 
       traverse(value, this.root);
       function traverse(value, current) {
          if (value < current.value) {
             if (current.leftChild.value === value)
                return console.log(true);
             current = current.leftChild;
          }
          else {
             if (current.rightChild.value === value)
                return console.log(true);
 
             current = current.rightChild;
          }
 
          if (current.leftChild === null && current.rightChild === null)
             return console.log(false);
 
          traverse(value, current);
       }
    }
 
    insert(value) {
       let node = new Node(value);
 
       if (this.isEmpty()) {
          this.root = node;
          return
       }
 
       insert(value, this.root, node);
       function insert(value, current, node) {
          if (value < current.value) {
             if (current.leftChild === null) {
                current.leftChild = node;
                return;
             }
             current = current.leftChild;
          }
          else {
             if (current.rightChild === null) {
                current.rightChild = node;
                return;
             }
 
             current = current.rightChild;
          }
 
          insert(value, current, node);
       }
    }
 
    isEmpty() {
       return this.root == null;
    }
 
    isLeaf(node) {
       return node.leftChild === null && node.rightChild === null;
    }
 
 }
 
 const tree = new Tree();
 tree.insert(7);
 tree.insert(4);
 tree.insert(9);
 tree.insert(1);
 tree.insert(6);
 tree.insert(8);
 tree.insert(10);
 
 console.log(tree.findMin(tree.root));
 
 
 
 
 // class Node {
 //    constructor(value) {
 //       this.value = value;
 //    }
 
 //    leftChild = null;
 //    rightChild = null;
 // }
 
 // class Tree {
 //    root = null;
 
 //    insert(value) {
 //       let node = new Node(value);
 
 //       if (this.isEmpty()) {
 //          this.root = node;
 //          return
 //       }
 
 //       let current = this.root;
 //       while (true) {
 //          if (value < current.value) {
 //             if (current.leftChild === null) {
 //                current.leftChild = node;
 //                break;
 //             }
 //             current = current.leftChild;
 //          }
 //          else {
 //             if (current.rightChild === null) {
 //                current.rightChild = node;
 //                break;
 //             }
 //             current = current.rightChild;
 //          }
 //       }
 //    }
 
 //    isEmpty() {
 //       return this.root == null;
 //    }
 
 // }
 
 // const tree = new Tree();
 // tree.insert(7);
 // tree.insert(4);
 // tree.insert(9);
 // tree.insert(1);
 // tree.insert(6);
 // tree.insert(8);
 // tree.insert(10);
 
 
 
 
 
 