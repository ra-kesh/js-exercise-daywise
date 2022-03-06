/** (*)
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 * The range will be an array of two numbers that will not
 * necessarily be in numerical order.
 * e.g. for 1 and 3 - find the smallest common multiple of
 * both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */

/**
 * Converts to memoize function
 * if function contains recursion
 *  then it requires to reinitialized with returned memoized function
 * @param {Function} [func] The function to be memoize
 * @returns {Function} Returns memoized Function
 */
function memoizer(func) {
  const cache = {};
  return (...args) => {
    const index = args.toString();
    if (cache[index] === undefined) {
      cache[index] = func(...args);
    }
    return cache[index];
  };
}

let GCD = (num1, num2) => (num2 === 0 ? num1 : GCD(num2, num1 % num2));
GCD = memoizer(GCD);

let LCM = (num1, num2) => (num1 * num2) / GCD(num1, num2);
LCM = memoizer(LCM);

function smallestCommons(range) {
  let [lowerBound, upperBound] = range;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  let smallestCommon = lowerBound;
  for (let i = upperBound; i >= lowerBound; i -= 1) {
    smallestCommon = LCM(smallestCommon, i);
  }
  return smallestCommon;
}

module.exports = smallestCommons;
