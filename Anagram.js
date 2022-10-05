const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return console.log(false);

  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return console.log(sortedStr1 === sortedStr2);
};

isAnagram('listen', 'Silent');
