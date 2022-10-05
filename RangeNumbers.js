// Write a function that prints numbers in range
const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};
console.log(range(1, 50));

// -------------------------------------------------------- ///

// function range(current = 1, end, result = []) {
//     if (current > end) return console.log(result);

//     result.push(current);

//     range(++current, end, result);
// }

// range(1, 50);
