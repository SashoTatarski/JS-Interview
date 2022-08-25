function countingSort() {
    this.sort = function (items) {
        sort(items, 0, items.length - 1);
        return items;
    }

    function sort(items, start, end) {
        if (start >= end) return;

        let boundary = partition(items, start, end);

        sort(items, start, boundary - 1);
        sort(items, boundary + 1, end);
    }


    function partition(items, start, end) {
        let pivot = items[end];
        let boundary = start - 1;
        for (let i = start; i <= end; i++)
            if (items[i] <= pivot)
                swap(items, i, ++boundary);

        return boundary;
    }

    function swap(items, index1, index2) {
        let temp = items[index1];
        items[index1] = items[index2];
        items[index2] = temp;
    }


}

let numbers = [7, 1, 5, 2];
let sorter = new countingSort();

console.log(sorter.sort(numbers));