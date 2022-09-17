// Calculate and print (using console.log) the average score of each student​ using formula: 
//Average Score = (Subject 1: Score 1 + Subject 1: Score 2 + Subject 2: Score 1 + Subject 2: Score 2) / 4

// Calculate and print (using console.log) TOTAL average score of ALL students​ using formula: 
//Average Score = (Average Score Student 1 + Average Score Student 2 + Average Score Student 3) / 3

// Note: Use only functional programming style and functions composition.

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

// Моя разбивка, за четимост
const normalizeStudentScore = students.map(({ score }) => score.flat());
const average = normalizeStudentScore.map(array => array.reduce((x, y) => x + y) / array.length);
const print = average.map(averageScore => console.log(averageScore) || averageScore);
const reduce = average.reduce((x, y) => x + y / students.length);

// -------------------------------------------------------------------------------------------- //

// // Return array of products that are not discounted.
// const products = [
//   {
//       "id": 0,
//       "name": "Product name 0",
//       "quantity": 36,
//       "price": "$53.29"
//   },
//   {
//       "id": 1,
//       "name": "Product name 1",
//       "quantity": 32,
//       "price": "$99.33"
//   },
//   {
//       "id": 2,
//       "name": "Product name 2",
//       "quantity": 34,
//       "price": "$86.83"
//   },
//   {
//       "id": 3,
//       "name": "Product name 3",
//       "quantity": 25,
//       "price": "$68.07"
//   },
//   {
//       "id": 4,
//       "name": "Product name 4",
//       "quantity": 25,
//       "price": "$74.79"
//   }
// ];

// const productsInDiscount = [
//   {
//       "id": 2,
//       "name": "Product name 2",
//       "quantity": 34,
//       "price": "$86.83"
//   },
//   {
//       "id": 3,
//       "name": "Product name 3",
//       "quantity": 25,
//       "price": "$68.07"
//   }
// ];

// const source = new Set(products.map(({ id }) => id));
// const target = new Set(productsInDiscount.map(({ id }) => id));

// const difference = (source, target) => new Set(
//   [...source].filter(element => !target.has(element))
// );

// console.log(difference(source, target));
