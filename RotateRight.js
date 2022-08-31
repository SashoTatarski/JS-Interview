// Implement a function that returns an updated array with r right rotations on an array of integers a .
// Example:

// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

function rotateRight(arr, rotations) {
    if (rotations == 0)
        return arr;

    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
console.log(rotateRight([2, 3, 4, 5, 7], 3)); // Return [4,5,7,2,3]
console.log(rotateRight([44, 1, 22, 111], 5)); // Returns [111,44,1,22]  



// function arrayRotate(array, rotations) {
//    let result = [];
//    for (let i = 0; i <= rotations; i++) {
//       result = result.concat(array);
//    }

//    console.log(result);
//    let end = result.length - rotations;
//    let start = end - array.length;

//    console.log(result.splice(start, array.length));
// }
//console.log(arrayRotate([2, 3, 4, 5, 7], 3));