class Node {
   constructor(value) {
      this.value = value;
   }
   leftChild = null;
   rightChild = null;
}

class Tree {
   root = null;

   countLeaves(node = tree.root) {
      if (node === null)
         return 0;

      if (this.isLeaf(node)) {
         return 1;
      }

      // we return, and propagate up to the root, the number of leaves from left and right subtrees.
      return this.countLeaves(node.leftChild) + this.countLeaves(node.rightChild);
   }
   // size() {
   //    let total = 0;
   //    for (let i = 0; i <= this.height(); i++) {
   //       total += this.getNodesAtDistance(i);
   //       //this.size();
   //    }
   //    return total;
   // }

   traverseBreadthFirst() {
      for (let i = 0; i <= this.height(); i++) {
         for (let value of this.getNodesAtDistance(i))
            console.log(value);
      }
   }

   getNodesAtDistance(distance) {
      let list = [];

      getNodesAtDistance(tree.root, distance, list);

      return list;

      function getNodesAtDistance(root, distance, list) {
         if (root === null)
            return;

         if (distance === 0) {
            return root.value;
         }

         getNodesAtDistance(root.leftChild, distance - 1, list);
         getNodesAtDistance(root.rightChild, distance - 1, list);
      }
   }

   equals(first, second) {
      if (first === null && second === null)
         return true;

      if (first !== null && second !== null)
         return first.value === second.value
            && this.equals(first.leftChild, second.leftChild)
            && this.equals(first.rightChild, second.rightChild);

      return false;
   }
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

   height(root = tree.root) {
      if (root === null)
         return -1;

      if (this.isLeaf(root))
         return 0;

      return (1 + Math.max(this.height(root.leftChild), (this.height(root.rightChild))));
   }

   isBinarySearchTree(root, min, max) {
      if (root === null)
         return true;

      if (root.value < min && root.value > max)
         return false;

      return this.isBinarySearchTree(root.leftChild, min, root.value - 1)
         && this.isBinarySearchTree(root.rightChild, root.value + 1, max);
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

      find(value, this.root);
      function find(value, current) {
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

         find(value, current);
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
const other = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);
//tree.size();
//tree.traverseBreadthFirst();
//tree.getNodesAtDistance(2);
//console.log(tree.isBinarySearchTree(tree.root, 0, 1000));
console.log(tree.countLeaves());


// other.insert(7);
// other.insert(4);
// other.insert(9);
// other.insert(1);
// other.insert(6);
// other.insert(8);
// other.insert(10);
//console.log(tree.equals(tree.root, other.root));
//console.log(tree.findMin(tree.root));





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





