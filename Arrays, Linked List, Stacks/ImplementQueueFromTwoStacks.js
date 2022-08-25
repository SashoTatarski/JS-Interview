class QueueWithTwoStacks {
    stack1 = [];
    stack2 = [];

    enqueue(item) {
        return this.stack1.push(item);
    }

    dequeue() {
        if (this.isEmpty())
            throw new Error('Stack is empty');

        this.moveStack1toStack2();

        return this.stack2.pop();
    }

    peek() {
        if (this.isEmpty())
            throw new Error('Stack is empty');

        this.moveStack1toStack2();

        return this.stack2[this.stack2.length - 1];
    }

    moveStack1toStack2() {
        if (this.stack2.length === 0)
            while (this.stack1.length !== 0)
                this.stack2.push(this.stack1.pop());
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}

let queue = new QueueWithTwoStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());