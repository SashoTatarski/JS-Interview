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

   max(node = tree.root) {
      if (this.isLeaf(node))
         return node.value;

      this.max(node.leftChild);

      return node.value;
   }

   findMin(node = tree.root) {
      if (this.isLeaf(node))
         return node.value;

      let left = this.findMin(node.leftChild);
      let right = this.findMin(node.rightChild);

      // return the max between this node's value and the max of the left and right subtrees of this node.
      return Math.min(Math.min(left, right), node.value);
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

   // Mosh implementation
   contains(node = tree.root, value) {
      // Base case: If node is null, return false.
      if (node === null) {
         return false;
      }
      // Base case: If the value matches the value of the current node we're on, return true.
      if (value === node.value) {
         return true;
      }
      // return the logical or of contains for both left and right subtrees of the current node we're on.
      return console.log(this.contains(node.leftChild, value) || contains(node.rightChild, value));
   }
   // My implementation
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

   areSiblings(parent, left, right) {
      // Base case 1: If parent is null, we have a null tree and we return false.
      if (parent === null)
         return false;
      // Base case 2: If parent is a leaf, we return false since we've reached the end of a subtree
      // and know the siblings cannot exist here.

      if (this.isLeaf(parent))
         return false;

      // Base case 3: If parent's left & right child aren't null, we check if they equal to the values
      // we're looking to see if they're siblings.
      if (parent.leftChild !== null && parent.rightChild !== null) {
         // If both children equal to the values we're looking to see if they're siblings,
         // we return true.
         if ((parent.leftChild.value === left && parent.rightChild.value === right)
            || (parent.leftChild.value == right && parent.rightChild.value == left)) {
            return true;
         }
      }

      // Assign a variable existsLeft the return value of this function on parent's left child, left, right.
      // In other words, we continue to traverse down the left subtree and run this function on the left subtree
      // of this parent node.
      let existsLeft = this.areSiblings(parent.leftChild, left, right);
      // Assign a variable existsRight the return value of this function on parent's right child, left, right.
      // In other words, we continue to traverse down the right subtree and run this function on the right subtree
      // of this parent node.
      let existsRight = this.areSiblings(parent.rightChild, left, right);
      // We propagate the logical or of both values all the way up to the root where we finally return the logical
      // or between the root's subtrees.
      return existsLeft || existsRight;
   }

   getAncestors(k) {
      let list = [];
      getAncestors(tree.root, list, k);
      return console.log(list);

      function getAncestors(parent, list, val) {
         // Base case: if parent is null we've reached the end of a subtree where the value didn't
         // exist and return it. We also return parent if it does equal to the value we're looking for.
         if (parent === null || parent.value === val)
            return parent;

         // We traverse down the left subtree and check if we found the value in the left subtree.
         let left = getAncestors(parent.leftChild, list, val);
         // if so we add this current node's value to the list and continue propagating the status of
         // the found value up the call stack.
         if (left !== null && left.value === val) {
            list.push(parent.value);
            return left;
         }

         // We traverse down the right subtree and check if we found the value in the right subtree.
         let right = getAncestors(parent.rightChild, list, val);
         // if so we add this current node's value to the list and continue propagating the status of
         // the found value up the call stack.
         if (right !== null && right.value === val) {
            list.push(parent.value);
            return right;
         }
         // we return parent as a way to continue propagating back up the call stack if we havent
         // found the value we're looking for.
         return parent;
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
//tree.find(1);
//tree.contains(1);
//tree.getAncestors(1);
console.log(tree.areSiblings(tree.root, 1, 6));
//console.log(tree.findMin());
//console.log(tree.max());
//tree.size();
//tree.traverseBreadthFirst();
//tree.getNodesAtDistance(2);
//console.log(tree.isBinarySearchTree(tree.root, 0, 1000));
//console.log(tree.countLeaves());



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





