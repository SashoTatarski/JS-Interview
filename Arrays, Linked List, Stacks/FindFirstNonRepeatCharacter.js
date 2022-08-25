function findFirstNonRepeatCharacter(str) {
    let obj = {};

    for (var char of str) {
        if (char in obj) return char
        obj[char] = 1;
        //obj.hasOwnProperty(char)
    }

    return Object.keys(obj).find(key => obj[key] >= 1);
    // for (var key in map) {
    //    if (map[key] === 1) return key;
    // }
}

function findFirstRepeatedChar(str) {
    const set = new Set();

    for (var char of str) {
        if (set.has(char)) return char

        set.add(char);
    }
}

//console.log(findFirstNonRepeatCharacter('aabbaac'));
console.log(findFirstRepeatedChar('caabbaac'));

 // function findFirstNonRepeatCharacter(str) {
 //    for(let i = 0; i < str.length; i++) {
 //       let j = str.charAt(i)
 //       if (str.indexOf(j) == str.lastIndexOf(j)) {
 //         return j;
 //       }
 //    }
 //    return null;
 // }