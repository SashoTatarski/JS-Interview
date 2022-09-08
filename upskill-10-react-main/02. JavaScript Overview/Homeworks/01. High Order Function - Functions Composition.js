const students = [{
    name: "Peter",
    score: [[30, 40], [60, 80]] // 
}, {
    name: "Georgi",
    score: [[60, 50], [70, 40]]
}, {
    name: "Ivan",
    score: [[90, 70], [80, 30]]
}];


// 1. Example
students
    .map(({ score }) => score.flat())
    .map(score => score.reduce((x, y) => x + y) / score.length)
    .map(averageScore => console.log(averageScore) || averageScore)
    .reduce((x, y) => x + y) / students.length;

// 2. Cleaner Example
const normalizeStudentScore = ({ score }) => score.flat();
const sum = (x, y) => x + y;
const average = array => array.reduce(sum) / array.length;
const print = func => averageScore => func(averageScore) || averageScore;

students
    .map(normalizeStudentScore)
    .map(average)
    .map(print(console.log))
    .reduce(sum) / students.length;