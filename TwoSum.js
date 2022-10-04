// Function that returns every pari of numbers 'numArray' that adds up to the sum
function twoSum(array, sum, i = 0, result = []) {
  if (i === array.length - 1) return console.log(result);

  for (let j = i + 1; j < array.length; j++) {
    let innerResult = [];
    if (array[i] + array[j] === sum) {
      innerResult.push(array[i], array[j]);
      result.push(innerResult);
      continue;
    }
  }

  twoSum(array, sum, ++i, result);
}

numArray = [1, 6, 4, 5, 3, 3]; //[ [6,1], [3,4], [3,4] ]
twoSum(numArray, 7);
