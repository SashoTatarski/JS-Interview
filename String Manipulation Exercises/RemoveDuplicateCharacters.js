// const arr = [1,2,2,3];

// const result = [... new Set(arr)]
// console.log(result)

// ------------------------------------------------------------------------- //
// We pass an empty array as a default arguement to reduce()
// Inside we check if acc includes our el and if we have it we return acc, so we don't change anything
// If we don't have it, then we push it to the empty array with ... spread operator
// const uniqueArr = arr => {
//   return arr.reduce((acc, el) => {
//     return acc.includes(el) ? acc : [...acc, el]
//   }, [])
// };

// console.log(uniqueArr([1,2,2,3]))

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


