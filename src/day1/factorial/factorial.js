/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */

function factorial(n) {
  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
}

// function factorial(number) {
//   if (!factorial.cache) {
//     factorial.cache = {
//       0: 1,
//       1: 1,
//     };
//   }

//   if (!factorial.cache[number]) {
//     factorial.cache[number] = number * factorial(number - 1);
//   }
//   return factorial.cache[number];
// }

module.exports = factorial;
