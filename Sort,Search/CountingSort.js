function countingSort(input) {
    let counts = [];
    for (let item of input)
      counts[item] === undefined ? (counts[item] = 1) : counts[item]++;
  
    updateInputArray(input);
  
    return input;
  
    function updateInputArray(array, k = 0, i = 0) {
      if (i === counts.length) return;
  
      for (let j = 0; j < counts[i]; j++) array[k++] = i;
  
      updateInputArray(array, k, ++i);
    }
  }
  
  console.log(countingSort([5, 3, 2, 5, 4, 4, 5]));
  
  