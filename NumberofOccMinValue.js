// Find the number of occurence of minimum value in an array
const minValue = (arr) => {
  const min = Math.min(...arr);
  return arr.filter((el) => el === min).length;
};

const arr = [4, 5, 6, 4, 4];
console.log(minValue(arr));
