function bubbleSort(items, k = 0) {
    if (k === items.length - 1)
        return console.log(items);

    for (let i = items.length - 1; i > k; i--)
        if (items[i] < items[i - 1])
            swap(i);

    bubbleSort(items, ++k);

    function swap(i) {
        let temp = items[i - 1];
        items[i - 1] = items[i];
        items[i] = temp;
    }

}

bubbleSort([8, 2, 4, 1, 3]);

// function selectionSort(items) {
//     for (let i = 0; i < items.length - 1; i++) {
//         let { min, indexOfMin } = findSmallest(i);

//         if (indexOfMin)
//             swap(i, min, indexOfMin);
//     }

//     return items;

//     function swap(i, smallest, indexOfSmallest) {
//         let temp = items[i];
//         items[i] = smallest;
//         items[indexOfSmallest] = temp;
//     }

//     function findSmallest(i) {
//         let min = items[i];
//         let indexOfMin;
//         for (let j = i + 1; j < items.length; j++)
//             if (items[j] < min) {
//                 min = items[j];
//                 indexOfMin = j;
//             }

//         return { min, indexOfMin };
//     }
// }

// console.log(selectionSort([7, 3, 1, 5, 2]));