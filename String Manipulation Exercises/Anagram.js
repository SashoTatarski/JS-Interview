// Detect if two strings are anagram of each other. A string is an
// anagram of another string if it has the exact same characters in any
// order.
// Input: “abcd”, “adbc”
// Output: true
function anagram(str1, str2) {
    let str1Sorted = Array.from(str1).sort().join('').toLowerCase();
    let str2Sorted = Array.from(str2).sort().join('').toLowerCase();

    return (str1Sorted === str2Sorted)
}

console.log(anagram('abcd', 'ABCD'));


