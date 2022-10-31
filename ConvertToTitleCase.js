const titleCase = (string) => {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(titleCase('Have a good day'));

// ------------------------------------------- //

// const capitalize = (string1) => {  
//   const arr = string1.toLowerCase().split(' ');

//   return arr.reduce((resultArr, word) => {
//     const res = word.charAt(0).toUpperCase() + word.slice(1);
//     return [...resultArr, res]
//   }, []).join(' ')
// }

// console.log(capitalize('good morning sir'))