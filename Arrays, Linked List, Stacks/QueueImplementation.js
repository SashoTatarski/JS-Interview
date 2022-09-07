class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class Queue {
    #head = null;
    #tail = null;

    enqueue(value) {
        const node = new ListNode(value);
        if (!this.#head)
            this.#head = node;
        else
            this.#tail.next = node;

        this.#tail = node;
    }

    dequeue() {
        if (!this.#head)
            console.log("Queue is empty");

        let headValue = this.#head.value;
        this.#head = this.#head.next;

        return headValue;
    }

    peek() {
        if (!this.#head)
            console.log("Queue is empty");

        return this.#head.value;
    }

    isEmpty() {
        return !this.#head;
    }

    values(head = this.#head, values = []) {
        if (!head)
            return console.log(values);

        values.push(head.value);

        this.values(head.next, values);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();
queue.values();
