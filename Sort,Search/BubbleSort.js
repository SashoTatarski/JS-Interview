function bubbleSort(array, end = array.length - 1) {
    if (end === 0) return console.log(array);

    for (let i = 0; i <= end; i++)
        if (array[i] > array[i + 1])
            swap(array, i);

    bubbleSort(array, --end);
  }

  bubbleSort([6, 1, 4, 3, 8, 9, 2, 5, 7]);

  function swap(array, i) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }

//------------------------------------------------------------------- //

// function bubbleSort(items) {
//   let isSorted;
//   for (let i = 0; i < items.length; i++) {
//     isSorted = true;
//     for (let j = 1; j < items.length - i; j++)
//       if (items[j] < items[j - 1]) {
//         swap(j);
//         isSorted = false;
//       }

//     if (isSorted) return;
//   }
//   return items;

//   function swap(j) {
//     let temp = items[j];
//     items[j] = items[j - 1];
//     items[j - 1] = temp;
//   }
// }

// console.log(bubbleSort([6, 5, 3, 1, 4, 2]));
