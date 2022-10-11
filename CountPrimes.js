const countPrimes = (
  n,
  current = 2,
  result = 0,
  lastNonPrime = 2
) => {
  if (n < 2) return console.log(0);
  if (current === n) return console.log(result);

  let isPrime = true;
  for (let i = 2; i < current; i++)
    if (current % i === 0) {
      isPrime = false;
      break;
    }

  if (isPrime) result++;

  return countPrimes(n, ++current, result, lastNonPrime);
};

countPrimes(10);

// ------------------------------------------------------------------- //

// let isPrime = new Array(n).fill(true); //create an array of size n with default value true
// isPrime[0] = isPrime[1] = false; // mark 0th and 1st index as false as we know 0 and 1 are not prime and have to start with 2
// for (let i = 2; i * i < n; i++) {
//   // i<sqrt(n) or i*i<n is the same equation
//   if (!isPrime[i]) continue; // if not a prime number, continue
//   for (let j = i * 2; j < n; j += i) {
//     isPrime[j] = false; // We know all multiples of i must not be primes, so we mark them off as non-primes
//   }
// }
// return isPrime.filter((item) => item == true).length;
