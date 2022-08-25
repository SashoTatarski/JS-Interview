// Remove duplicate characters in a string.
// Input: “Hellooo!!”
// Output: “Helo!”
//return [...new Set(str)].join("")
function removeDuplicates(str) {
    let seen = new Set();
    let output = '';

    for (let ch of str) {
        if (!seen.has(ch)) {
            seen.add(ch);
            output += ch;
        }
    }

    return output;
}

console.log(removeDuplicates('Hellooo'));


