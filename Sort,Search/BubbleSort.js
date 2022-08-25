function bubbleSort(items) {
    let isSorted;
    for (let i = 0; i < items.length; i++) {
        isSorted = true;
        for (let j = 1; j < items.length - i; j++)
            if (items[j] < items[j - 1]) {
                swap(j);
                isSorted = false;
            }

        if (isSorted) return;

        // Another variation
        // while(true) {
        //     let isSorted = true;
        //     for (let i = 1; i < items.length; i++)
        //        if (items[i] < items[i - 1]) {
        //           swap(i);
        //           isSorted = false;
        //        }

        //     if (isSorted) break;
        //  }
    }




    return items;

    function swap(j) {
        let temp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = temp;
    }
}

console.log(bubbleSort([6, 5, 3, 1, 4, 2]));