const str = 'As car, a man, a maraca';
const input = str.replace(/\W/g, '').toLowerCase();

const palindrome = (input, left = 0, right = input.length - 1) => {
  if (left >= right) return true;
  
  if (input[left] !== input[right]) return false;

  return palindrome(input, ++left, --right);  
}

console.log(palindrome(input))

// //----------------------------------------------------------------//
// const isPalindrome = str => {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome('asbba'))
//----------------------------------------------------------------//
