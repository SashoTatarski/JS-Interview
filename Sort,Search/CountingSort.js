function countingSort(array, max) {
    let counts = [];
    for (let item of array) {
        if (counts[item] === undefined) counts[item] = 1;
        else counts[item]++;
    }

    let k = 0;
    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[i]; j++)
            array[k++] = i;
    }


    return array;
}

console.log(countingSort([5, 3, 2, 5, 4, 4, 5], 5));