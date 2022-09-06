function reverseString(str) {
    let array = Array.from(str);

    reverse(array, left = 0, right = array.length - 1);

    function reverse(array, left, right) {
        if (left > right) return array;

        let temp = array[left];
        array[left++] = array[right];
        array[right--] = temp;

        reverse(array, left, right);
    }

    return array.join('');
}

// hello -> oellh -> olleh
console.log(reverseString('hello'));


//return Array.from(string).reverse().join('');
// function reverseString(str) {
//    let array = Array.from(str);
//    let left = 0;
//    let right = array.length - 1;

//    while (left < right) {
//       let temp = array[left];
//       array[left++] = array[right];
//       array[right--] = temp;
//    }

//    return array.join('');
// }


// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;

// console.log(countVowels('helleuo'));