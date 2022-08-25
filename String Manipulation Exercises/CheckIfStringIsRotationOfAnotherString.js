// Check if a string is a rotation of another string.
// Input: “ABCD”, “DABC” (rotate one char to the right)
// Output: true
// Input: “ABCD”, “CDAB” (rotate two chars to the right)
// Output: true 
// If ABCDABCD contains str2 return true
function areRotations(str1, str2) {
    return (str1.length === str2.length && (str1 + str1).includes(str2));
}

console.log(areRotations('abcd', 'dabc'));


