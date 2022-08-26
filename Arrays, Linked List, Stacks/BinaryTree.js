class Node {
    constructor(value) {
        this.value = value;
    }

    leftChild = null;
    rightChild = null;
}

class Tree {
    root = null;

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

}

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);


tree.find(1);
tree.find(1);
tree.find(8);
tree.find(10);
tree.find(102);

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





