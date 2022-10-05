const fibonacci = (n) => {
  if (n < 2) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
};

// ------------------------------------------- //

// const fibo = (input, first = 0, second = 1, result = 0) => {
//   if (input === 1) return console.log(result);

//   result = first + second;
//   first = second;
//   second = result;

//   fibo(--input, first, second, result)

// }

// fibo(10);
