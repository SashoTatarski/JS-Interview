function insertionSort(items) {
    for (let i = 0; i < items.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (items[j] < items[j - 1]) {
                swap(j);
            }
        }
    }

    return items;

    function swap(j) {
        let temp = items[j - 1];
        items[j - 1] = items[j];
        items[j] = temp;
    }
}

console.log(insertionSort([8, 8, 1, 1, 10, 3, 5, 2]));