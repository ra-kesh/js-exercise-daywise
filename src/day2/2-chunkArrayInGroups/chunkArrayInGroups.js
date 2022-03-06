/** (*)
 * Write a function that splits an array (first argument) into groups the length of size
 * (second argument) and returns them as a two-dimensional array.
 * Refer Array.push() and Array.slice() IF STUCK.
 */
// function chunkArrayInGroups(arr, size) {}

function chunkArrayInGroups(array, number) {
  const outputArray = [];
  let index = 0;
  for (let i = 0; i < array.length; i += number) {
    outputArray[index] = array.slice(i, i + number);
    index += 1;
  }
  return outputArray;
}

module.exports = chunkArrayInGroups;
