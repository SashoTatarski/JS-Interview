// Create a function that shift everty letter in a given string by a given number
function caesarCipher(str, num) {
  num = num % 26;
  let lowerCaseString = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;

    str[i] === str[i].toUpperCase()
      ? (newString += alphabet[newIndex].toUpperCase())
      : (newString += alphabet[newIndex]);
  }

  return newString;
}

console.log(caesarCipher('Zoo Keeper', 2)); //Bqq Mggrgt
