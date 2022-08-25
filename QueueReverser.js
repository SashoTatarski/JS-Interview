class QueueReverser {
    items = [10, 20, 30, 40, 50];
    array = [];


    reverse(k) {
        // [40, 50]
        // [30, 20, 10]
        // Copy and reverse elements to array
        for (let i = k - 1; i >= 0; i--) {
            this.array.push(this.items.splice(k-- - 1, 1)[0]);
        }


        // []
        // [30, 20, 10, 40, 50]
        // Populate array with remaining elements
        while (this.items.length !== 0) {
            this.array.push(this.items.shift());
        }
        console.log(this.array);
        console.log(this.items);
    }
}
let queue = new QueueReverser();
queue.reverse(3);
//console.log(queue.array);
//console.log(queue.items);

// class QueueReverser {
//     queue = [10, 20, 30, 40, 50];
//     stack = [];


//     reverse(k) {
//         //[40, 50]
//         //[10, 20, 30]
//         for (let i = 0; i < k; i++)
//             this.stack.push(this.queue.shift());

//         //[40, 50, 30, 20, 10]
//         //[]
//         while (this.stack.length !== 0)
//         this.queue.push(this.stack.pop());
//         //[30, 20, 10, 40, 50]
//         //[]
//         for (let i = 0; i < this.queue.length - k; i++)
//         this.queue.push(this.queue.shift());
//     }
// }

// let queue = new QueueReverser();
// queue.reverse(3);
// console.log(queue.queue);





    // reverse(itemsToReverse) {
    //     // Move items that are going to be reversed to stack1
    //     for (let i = 0; i <= itemsToReverse - 1; i++) {
    //         this.stack1.push(this.items.shift());
    //     }

    //     //Copy stack1 to stack2 reversed
    //     while (this.stack1.length !== 0) {
    //         this.stack2.push(this.stack1.pop());
    //     }

    //     // Populate stack2 with remaining elements
    //     while (this.items.length !== 0) {
    //         this.stack2.push(this.items.shift());
    //     }
    // }



