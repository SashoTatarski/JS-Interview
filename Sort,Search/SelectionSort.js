function selectionSort(array, k = 0) {
    if (k === array.length - 1)
        return console.log(array);

    let min = array[k];
    let indexOfMin;
    for (let i = k; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            min = array[i + 1];
            indexOfMin = i + 1;
        }
    }

    if (min < array[k])
        swap(k, indexOfMin);

    selectionSort(array, ++k);

    function swap(k, indexOfMin) {
        let temp = array[k];
        array[k] = array[indexOfMin];
        array[indexOfMin] = temp;
    }

}

selectionSort([8, 2, 3, 1, 4, 5]);

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