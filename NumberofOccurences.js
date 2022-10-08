function numccurrence(array) {
    const obj = {};
    const result = array.reduce((obj, item) => {
      obj[item] = (obj[item] || 0) + 1;
      return obj;
    }, obj);
  
    return result;
  }
  
  console.log(numOccurrence([1, 2, 3, 3, 4, 1, 1]));
  
  // ------------------------------------------------- //
  
  // function numOccurrence(array) {
  //   const result = [];
  
  //   for (let num of array) {
  //     result[num] = (result[num] || 0) + 1;
  //   }
  
  //   return result;
  // }
  
  // console.log(numOccurrence([1, 2, 3, 3, 4, 1, 1]));
  
  // ------------------------------------------------- //
  // Find the number of occurrence of minimum value in an array
  // const minValue = (arr) => {
  //     const min = Math.min(...arr);
  //     return arr.filter((el) => el === min).length;
  //   };
    
  //   const arr = [4, 5, 6, 4, 4];
  //   console.log(minValue(arr));
  
    // ------------------------------------------------- //