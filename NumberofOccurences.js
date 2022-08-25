function numberofOccurences(arr) {
    let occurrences = [];

    for (let number of arr) {
        occurrences[number] = (occurrences[number] || 0) + 1;
    }

    for (let number in occurrences) {
        console.log(`${occurrences[number]}: ${number}`)
    }

    for (let number of arr) {
        if (occurrences[number] % 2 !== 0) occurrences.splice(occurrences[number], 1);
    }

    for (let number in occurrences) {
        console.log(`${occurrences[number]}: ${number}`)
    }

}

numberofOccurences([1, 3, 4, 4, 2, 3, 3, 4, 3, 2]);

// function numberofOccurences(arr) {
//     return arr.reduce(function (obj, item) {
//         obj[item] = (obj[item] || 0) + 1;
//         return obj;
//     }, {});
// }

// console.log(numberofOccurences([-1, 2, 2, 3, 4, -5]));