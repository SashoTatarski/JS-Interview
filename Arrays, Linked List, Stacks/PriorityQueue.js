class PriorityQueue {
    arr = [];

    insert(item) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > item)
                return this.arr.splice(i, 0, item)
            else if (this.arr[i + 1] === undefined)
                return this.arr.push(item);
        }

        return this.arr.push(item);
    }
}

let queue = new PriorityQueue();
queue.insert(1);
queue.insert(2);
queue.insert(5);
queue.insert(3);
queue.insert(6);
queue.insert(10);
queue.insert(8);
queue.insert(9);
queue.insert(0);

console.log(queue.arr);

// class PriorityQueue {
//     items = [];
    
//     insert(item) {
//         let i;
//         for (i = this.items.length - 1; i >= 0; i--) {
//             // For shifting items only
//             if (this.items[i] > item)
//                 this.items[i + 1] = this.items[i];
//             else
//                 break;
//         }

//         this.items[i + 1] = item;        
//     }
// }

// let queue = new PriorityQueue();
// queue.insert(5);
// queue.insert(3);
// queue.insert(6);
// queue.insert(1);
// queue.insert(4);


// console.log(queue.items);