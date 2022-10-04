function binarySearch(array, key, left = 0, right = array.length - 1) {  
  if (right < left) return console.log(false);

  let middle = Math.floor((left + right) / 2);
  
  if (key === array[middle]) return console.log(true);


  if (key < array[middle])
    return binarySearch(array, key, left, middle - 1);
  
    return binarySearch(array, key, middle + 1, right); 
}

binarySearch([5, 6, 7, 8, 9, 10, 11], 111);



// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);

//         if (array[middle] === target)
//             return middle;

//         if (target < array[middle])
//             right = middle - 1;
//         else
//             left = middle + 1;
//     }

//     return -1;
// }
