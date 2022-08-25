function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] === target)
            return middle;

        if (target < array[middle])
            right = middle - 1;
        else
            left = middle + 1;
    }

    return -1;
}

// function binarySearch(array, target, left = 0, right = array.length - 1) {
//    // We if that's true, it means that the array has less than element
//    if (right < left)
//       return -1;

//    let middle = Math.floor((left + right) / 2);

//    if (array[middle] === target)
//       return middle;

//    if (target < array[middle])
//       return binarySearch(array, target, left, middle - 1);

//    return binarySearch(array, target, middle + 1, right);
// }

console.log(binarySearch([1, 3, 5, 6, 7], 1));