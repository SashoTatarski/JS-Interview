class CustomArray {
    constructor() {
        this.length = 0;
        this.items = {};
    }

    push(item) {
        this.items[this.length++] = item;
        return this.print();
    }

    pop() {
        delete this.items[this.length-- - 1];
        return this.print();
    }



    indexOf(number) {
        for (let item in this.items) {
            if (this.items[item] === number) return console.log(item);
        }

        return console.log('Invalid number');
    }

    removeAt(index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length)
            return console.log('Invalid entry');

        for (let i = index; i < this.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }

        delete this.items[this.length-- - 1];
        return this.print();
    }

    insertAt(index, item) {
        if (typeof index !== 'number' || index < 0 || index >= this.length)
            return console.log('Invalid entry');

        if (typeof item !== 'number') return console.log('Invalid entry');

        for (let i = this.length; i >= index; i--) {
            this.items[i] = this.items[i - 1];
        }

        this.items[index] = item;
        this.length++;

        return this.print();
    }

    verifyIndex(index) {

    }

    print() {
        return console.log(Object.values(this.items));
    }
}

const result = new CustomArray();

result.push(1);
result.push(2);
result.push(3);
result.push(4);
result.push(5);

result.removeAt(5);
//result.insertAt('s', 2.5);

//result.removeAt(3);
//result.print();
