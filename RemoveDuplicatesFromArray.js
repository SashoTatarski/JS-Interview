let arr1 = [1, 2, 2, 3, 4];

let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) arr2.push(arr1[i]);
}

console.log(arr2);

// We store the numbers as keys in the object, because an object key has to be unique
obj = {};
for (let i of arr1) obj[i] = true;

console.log(Object.keys(obj));

let arrSet = [...new Set(arr1)];
console.log(arrSet);
