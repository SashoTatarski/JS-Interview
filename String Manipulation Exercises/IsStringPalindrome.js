// Check if a string is palindrome. If we read a palindrome string from
// left or right, we get the exact same characters.
// Input: “abba”
// Output: true
function palindrome(string, left = 0, right = string.length - 1) {
    if (left >= right) return console.log(true);
  
    if (string[left] !== string[right]) return console.log(false);
    
    palindrome(string, ++left, --right);
  }
  
  palindrome('abba');
  