const closure = () => {
  const person = {name: 'Sasho', age: 35}

  return () => {console.log(person.name)}  
}

// Първо се изпълнява closure() и тя връща функция, която запазваме в initialClosure
const initialClosure = closure();

// След това върната функция се изпълнява, когато извикаме initialClosure()
initialClosure();

console.dir(initialClosure)
// closure() вместо да унищожи стойността на person след като се е изпълнила, запазва нейната стойност в паметта а бъдеща референция
// Поради тази причина, фукцията, върната в return, може да използва стойнността на промелнивата, декларирана във външния скоуп, дори след като
// функцията вече се е изпълнила. Способността на фукнцията да пази променлива за бъдеща рефенция, дори след като се е изпълнила, се нарича Closure

// -------------------------------------------------------------------------------------- //

// const closure = () => {
//   let count = 0;

//   return {
//     increment: () => {
//       count++;
//     },
//     getValue: () => {
//       return count;
//     }
//   }
// }

// const counter = closure();
// console.log(counter.getValue())
// counter.increment()
// console.log(counter.getValue())
// console.dir(counter)

// // След това върната функция се изпълнява, когато извикаме initialClosure()

// -------------------------------------------------------------------------------------- //
// Function that keeps track how many times it was called. We can solve it using closure

// function myFunc() {
//   let count = 0;

//   return function() {
//     return ++count
//   }
// }

// const instance = myFunc();

// console.log('instance: ', instance())
// console.log('instance: ', instance())
// console.log('instance: ', instance())
// -------------------------------------------------------------------------------------- //