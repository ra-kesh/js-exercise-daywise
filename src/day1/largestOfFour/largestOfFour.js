/** (*)
 * Return an array consisting of the
 * largest number from each provided
 * sub-array. For simplicity, the provided
 * array will contain exactly 4 sub-arrays.
 */
function largeOfFour(arrays) {
  return arrays.reduce((acc, array) => {
    acc.push(Math.max(...array));
    return acc;
  }, []);
}

module.exports = largeOfFour;
