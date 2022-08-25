// - Capitalize the first letter of each word in a sentence. Also, remove any
// extra spaces between words.
// Input: “trees are beautiful”
// Output: “Trees Are Beautiful”
function capitalizeFirstLetter(str) {
    let arr = str.split(' ');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
    }

    console.log(result.trim());
}

console.log(capitalizeFirstLetter('trees are beautiful'));


