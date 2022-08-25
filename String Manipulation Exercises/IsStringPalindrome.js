// Check if a string is palindrome. If we read a palindrome string from
// left or right, we get the exact same characters.
// Input: “abba”
// Output: true
function palindrome(string) {
    return check(string);

    function check(string, left = 0, right = string.length - 1) {
        if (left < right) {
            if (string[left] !== string[right])
                return false;

            left++;
            right--;
            check(string, left, right);
        }

        return true;
    }
}

console.log(palindrome('abba'));


