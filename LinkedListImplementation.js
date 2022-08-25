class Node {
    constructor(value) {
        this.value = value;
    }

    next = null;
}

class LinkedList {
    first = null;
    last = null;
    size = 0;

    reverse() {
        if (this.isEmpty()) return;

        let previous = this.first;
        let current = this.first.next;
        while (current !== null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.last = this.first;
        this.last.next = null;
        this.first = previous;
    }

    addFirst(value) {
        //Create a new Node by creating a instance of a Node class
        const node = new Node(value);

        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            //Points this node's next to the head
            node.next = this.first;

            //Now make this node a head node
            this.first = node;
        }
        this.size++;
        return this;
    }

    addLast(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            let current = this.first;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;

        // //Create a new Node by creating a instance of a Node class
        // const node = new Node(value);

        // // If our LinkedList is empty, we need to set both the head and tail to point to this new node
        // if (this.isEmpty()) {
        //     this.first = this.last = node;
        // }
        // //If it's not empty, we're linking the last node to this new node
        // else {
        //     //We need to point current tail's next to the newNode
        //     // You are setting the REFERENCE to this.first and this.last t the same object. Basically, this.first and this.last have the same memory address.
        //     // this.last.next modifies the object reference of the previous newNode, whose memory address is same as this.first. So, when you change in this.last it gets modified also in this.first.
        //     this.last.next = node;
        //     this.last = node;
        // }
        // this.size++;

        // return this;
    }

    removeFirst() {
        if (this.isEmpty())
            return console.log("List is empty");

        // If first === last that means we have a single node in this list and in order to remove this item we should set both to null
        if (this.first === this.last)
            this.first = this.last = null;
        else {
            let second = this.first.next;
            this.first.next = null;
            this.first = second;
        }

        this.size--;
    }

    removeLast() {
        // [10 -> 20 -> 30]
        if (this.isEmpty())
            return console.log("List is empty");

        // If first === last that means we have a single node in this list and in order to remove this item we should set both to null
        if (this.first === this.last)
            this.first = this.last = null;
        else {
            let previous = this.getPrevious(this.last);
            // this will shrink our list
            this.last = previous;
            // We should remove the link between 20 and 30, so that the garbage collector can remove this last node from memory
            this.last.next = null;
        }

        this.size--;
    }

    getPrevious(node) {
        let current = this.first;
        while (current !== null) {
            if (current.next === node) return current;
            current = current.next;
        }
        return null;
    }

    contains(item) {
        // If this expression evaluates to true, that means that the item is present in our LL
        return this.indexOf(item) !== -1;
        // let current = this.first;

        // while (current !== null) {
        //     if (current.value === item) return true;
        //     current = current.next;
        // }

        // return false;
    }

    indexOf(item) {
        let index = 0;
        let current = this.first;

        while (current !== null) {
            if (current.value === item) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    isEmpty() {
        return this.first == null;
    }

    getSize() {
        return console.log(this.size);
        // let current = this.first;
        // let count = 0;
        // while (current !== null) {
        //     count++;
        //     current = current.next;
        // }

        // return  console.log(count);
    }

    toArray() {
        let arr = [];
        let current = this.first;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }

        return console.log(arr);
    }

    printList() {
        //Creates an empty array.
        let printArrayList = [];

        //Pointer which points to the head node
        let currentNode = this.first;

        //Start iterating from the first node till you reach the last node
        while (currentNode !== null) {
            //Add every node's value to the array
            printArrayList.push(currentNode.value);

            //Point pointer to the next node
            currentNode = currentNode.next;
        }
        //Return the array
        return printArrayList.join(' -> ');
    }
}

const list = new LinkedList();

list.addLast(30);
list.addLast(20);
list.addLast(10);

console.log(list.printList());

//list.toArray();
//console.log(list.contains(20));
// linkedList.addLast(10);
// linkedList.addLast(20);
// linkedList.addLast(30);
// linkedList.addLast(40);
// linkedList.addLast(50);


