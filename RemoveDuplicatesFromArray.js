// We pass an empty array as a default arguement to reduce()
// Inside we check if acc includes our el and if we have it we return acc, so we don't change anything
// If we don't have it, then we push it to the empty array with ... spread operator
removeDuplicates = (array) => {
  const result = array.reduce((resultArray, currentValue) => {
    if (!resultArray.includes(currentValue))
      return [...resultArray, currentValue];

    return resultArray;
  }, []);

  return result;
};

// Same as
// removeDuplicates = (array) => {
//   return array.reduce((resultArray, currentValue) => {
//     return array.includes(currentValue) ? resultArray : [...resultArray, currentValue];
//   }, [])
// }

console.log(removeDuplicates([1,2,2,1,1,3]))

// const arr = [1,2,2,3];

// const result = [... new Set(arr)]
// console.log(result)

// ------------------------------------------------------------------------- //

// Remove duplicate characters in a string.
// Input: “Hellooo!!”
// Output: “Helo!”
//return [...new Set(str)].join("")
// function removeDuplicates(str) {
//     let seen = new Set();
//     let output = '';

//     for (let ch of str) {
//         if (!seen.has(ch)) {
//             seen.add(ch);
//             output += ch;
//         }
//     }

//     return output;
// }

// console.log(removeDuplicates('Hellooo'));

// ------------------------------------------------------------------------- //
