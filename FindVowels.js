const findVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      return vowels.includes(char) ? acc + 1 : acc;
    }, 0);
};

console.log(findVowels('helleuo'));

//------------------------------------------------------------------ //

// const findVowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let char of str.toLowerCase())
//     if (vowels.includes(char)) count++;

//   return count;
// };

// console.log(findVowels('helleuo'));

//------------------------------------------------------------------ //

// const countVowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   return Array
//   .from(str)
//   .filter((letter) => vowels
//   .includes(letter))
//   .length;
// };

// console.log(countVowels('helleuo'));

//------------------------------------------------------------------ //
