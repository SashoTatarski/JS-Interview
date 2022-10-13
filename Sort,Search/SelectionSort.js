const insertionSort = (array, start = 1) => {
    if (start === array.length) return console.log(array);

    for (let i = start; i > 0; i--) 
        if (array[i] < array[i - 1]) 
            [array[i], array[i - 1]] = [array[i - 1], array[i]];
  
    return insertionSort(array, ++start);
};

insertionSort([4, 7, 1, 2, 9, 8, 3, 5, 6]);