/** (*)
 * Given an array arr, find element pairs whose sum equal the second argument arg and
 * return the sum of their indices.
 * If multiple pairs are possible that have the same numeric elements but different
 * indices, return the smallest sum of indices. Once an element has been used,
 * it cannot be reused to pair with another.
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
 * 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
 * Index  0  1   2   3   4
 * Value 7  9  11  13  15
 * Below we'll take their corresponding indices and add them.
 * 7 + 13 = 20 → Indices 0 + 3 = 3
 * 9 + 11 = 20 → Indices 1 + 2 = 3
 * 3 + 3 = 6 → Return 6
 */
function pairwise(arr, targetSum) {
  const matchedPairs = [];
  let totalSumOfPairs = 0;

  const isMatchedPrevious = (i, j) =>
    matchedPairs.includes(i) || matchedPairs.includes(j);

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === targetSum && !isMatchedPrevious(i, j)) {
        matchedPairs.push(i, j);
        totalSumOfPairs += i + j;
      }
    }
  }
  return totalSumOfPairs;
}

module.exports = pairwise;
