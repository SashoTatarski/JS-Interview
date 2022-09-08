// Stack
class Stack {
    constructor() {
        this.items = [];
    }

    pop() {
        return this.items.pop();
    }

    push(item) {
        this.items.push(item);
    }

    print() {
        while (!this.isEmpty()) {
            console.log(this.pop());
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

// -> 3
// -> 2
// -> 1

// Queue
class Queue {
    constructor() {
        this.items = [];
    }

    dequeue() {
        return this.items.shift();
    }

    enqueue(item) {
        this.items.push(item);
    }

    print() {
        while (!this.isEmpty()) {
            console.log(this.dequeue());
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

// -> 1
// -> 2
// -> 3

// Tree
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

// Tree node creating
const five = new TreeNode(5);

const six = new TreeNode(6);

const three = new TreeNode(3);
const two = new TreeNode(2);


const eight = new TreeNode(8);

const one = new TreeNode(1);

const seven = new TreeNode(7);
const ten = new TreeNode(10);

const nine = new TreeNode(9);
const eleven = new TreeNode(11);

// Tree node linking
five.children.push(six, eight, one);
six.children.push(three, two);

one.children.push(seven, ten);

ten.children.push(nine, eleven);

// DFS Traverse - Pre-order
function depthFirstSearch(root) {
    const stack = new Stack();
    stack.push(root);

    while (!stack.isEmpty()) {
        const node = stack.pop();

        console.log(node.data);

        [...node.children].reverse().forEach(child => stack.push(child));
    }
}

// -> 5, 6, 3, 2, 8, 1, 7, 10, 9, 11

// DFS Traverse - Post-order
function depthFirstSearchPostOrder(root) {
    const stack = new Stack();
    stack.push(root);
    const out = new Stack();

    while (!stack.isEmpty()) {
        const node = stack.pop();

        out.push(node.data);

        node.children.forEach(child => stack.push(child));
    }

    out.print();
}

// -> 3, 2, 6, 8, 7, 9, 11, 10, 1, 5

// BFS Traverse
function breadthFirstSearch(root) {
    const queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        const node = queue.dequeue();

        console.log(node.data);

        [...node.children].reverse().forEach(child => queue.enqueue(child));
    }
}

// -> 5, 6, 8, 1, 3, 2, 7, 10, 9, 11

// Test
// https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/
// https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/
const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);
const eight = new TreeNode(8);

one.children.push(two, three);
two.children.push(four);
three.children.push(five, six);
five.children.push(seven, eight);

function findIndex(item, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (item === element) {
            return i;
        }
    }
}


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    return array;
}
