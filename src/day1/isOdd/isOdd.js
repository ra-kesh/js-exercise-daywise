/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  return !Number.isInteger(num / 2);
}

module.exports = isOdd;
