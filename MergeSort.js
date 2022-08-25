function mergeSort(items) {
    // Divide the array
    if (items.length < 2) return;

    let middle = Math.floor(items.length / 2);

    let left = [];
    for (let i = 0; i < middle; i++)
        left[i] = items[i];

    let right = [];
    for (let i = middle; i < items.length; i++)
        right[i - middle] = items[i];

    // Sort each half
    mergeSort(left);
    mergeSort(right);

    merge(left, right, items);


    function merge(left, right, result) {
        let i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j])
                result[k++] = left[i++];
            else
                result[k++] = right[j++];
        }

        // Ако имаме останали елементи в left (а сме копирали всичко от right), ги добавяме
        while (i < left.length)
            result[k++] = left[i++];

        while (j < right.length)
            result[k++] = right[j++];
    }

    return items;
}

console.log(mergeSort([4, 3, 2, 1]));