function primes(num, current = 2, result = []) {
  if (current === num) return console.log(result);

  let isPrime = true;

  for (let i = 2; i < current; i++) 
    if (current % i === 0) {
      isPrime = false;
      break;
    } 
  
  if (isPrime) result.push(current);
  primes(num, ++current, result)
}

primes(20);
