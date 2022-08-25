function numberofOccurences(numbers) {
    let longest = 1;
    let temp = 1;

    let startIndex;
    let endIndex;
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1]) {
            if (startIndex === null) startIndex = i;
            temp++;
            continue;
        }

        if (temp > longest) {
            endIndex = i + 1;
            longest = temp;

            result = numbers.slice(startIndex, endIndex);
        }

        startIndex = null;
        endIndex = null;
        temp = 1;
    }

    return result;
}

console.log(numberofOccurences([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5]));