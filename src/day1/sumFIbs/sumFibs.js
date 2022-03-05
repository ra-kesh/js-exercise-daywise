/** Q11 (*)
 * Given a positive integer num, return the sum of all odd Fibonacci
 * numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two
 * previous numbers. The first six numbers of the Fibonacci sequence
 * are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci
 * numbers less than 10 are 1, 1, 3, and 5
 */

function isOdd(num) {
  return !Number.isInteger(num / 2);
}

function sumFibs(num) {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  while (fib1 < num) {
    if (isOdd(fib1)) {
      sum += fib1;
    }
    const newFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = newFib;
  }

  return sum;
}

module.exports = sumFibs;
