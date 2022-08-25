// - Find the most repeated character in a string.
// Input: “Hellooo!!”
// Output: ‘o’ 
function mostRepeated(str) {
    let result = {};
    for (let item of str) {
        result[item] = (result[item] || 0) + 1;
    }

    let arr = Object.values(result);
    let maxCount = Math.max(...arr);

    return Object.keys(result).find(key => result[key] === maxCount);
}

console.log(mostRepeated('Hellooo'));


