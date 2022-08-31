
function quickSort(items, start = 0, end = items.length - 1) {
    if (start >= end) return;

    let boundary = partition(items, start, end);

    quickSort(items, start, boundary - 1);
    quickSort(items, boundary + 1, end);

    return items;
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


console.log(quickSort([7, 1, 5, 2]));