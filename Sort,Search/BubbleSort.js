function selectionSort(items, k = items.length) {
    if (k === 1)
        return console.log(items);

    for (let i = 0; i < k; i++)
        if (items[i] > items[i + 1])
            swap(i);

    selectionSort(items, --k);

    function swap(i) {
        let temp = items[i + 1];
        items[i + 1] = items[i];
        items[i] = temp;
    }

}

selectionSort([8, 2, 4, 1, 3]);

// function bubbleSort(items) {
//     let isSorted;
//     for (let i = 0; i < items.length; i++) {
//         isSorted = true;
//         for (let j = 1; j < items.length - i; j++)
//             if (items[j] < items[j - 1]) {
//                 swap(j);
//                 isSorted = false;
//             }

//         if (isSorted) return;

//         // Another variation
//         // while(true) {
//         //     let isSorted = true;
//         //     for (let i = 1; i < items.length; i++)
//         //        if (items[i] < items[i - 1]) {
//         //           swap(i);
//         //           isSorted = false;
//         //        }

//         //     if (isSorted) break;
//         //  }
//     }
//     return items;

//     function swap(j) {
//         let temp = items[j];
//         items[j] = items[j - 1];
//         items[j - 1] = temp;
//     }
// }

// console.log(bubbleSort([6, 5, 3, 1, 4, 2]));