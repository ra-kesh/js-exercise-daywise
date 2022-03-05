/** Q15(*)
 *Description (optional): Given an array of numbers and a target sum, find the first triplet that adds up to the target. If there is no such triplet, return null. Throw when you get invalid inputs.

 */

function threeSum(array, number) {
  if (array.length < 3) {
    throw new Error("Array length is less than 3");
  }
  if (typeof number !== "number") {
    throw new Error("Number must be of type Number");
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (number === array[i] + array[j] + array[k]) {
          return [array[i], array[j], array[k]];
        }
      }
    }
  }
  return null;
}

module.exports = threeSum;
