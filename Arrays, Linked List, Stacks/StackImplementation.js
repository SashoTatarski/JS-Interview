class Stack {
    stack = [];

    push(item) {
        //return this.stack.push(item);
        return this.stack[this.stack.length] = item;
    }

    pop() {
        //return this.stack.pop();
        return this.stack.splice(-1)
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.stack);

console.log(stack.peek());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());


