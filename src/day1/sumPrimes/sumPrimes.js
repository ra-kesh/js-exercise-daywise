/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  if (num === 2) return 2;

  if (num > 2) {
    const rootOfNumber = Math.sqrt(num);
    for (let i = 2; i <= rootOfNumber; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return false;
}

function sumPrimes(uptoNumber) {
  let sumOfPrimes = 0;
  for (let num = 0; num <= uptoNumber; num++) {
    if (isPrime(num)) {
      sumOfPrimes += num;
    }
  }
  return sumOfPrimes;
}

module.exports = sumPrimes;
