/** (*)
 * Compare two arrays and return a new array with any items only found
 * in one of the two given arrays, but not both. In other words, return
 * the symmetric difference of the two arrays.
 */
function diffArray(array1, array2) {
  const onlyArray1Contains = array1.filter(
    (element) => !array2.includes(element)
  );
  const onlyArray2Contains = array2.filter(
    (element) => !array1.includes(element)
  );
  return [...onlyArray1Contains, ...onlyArray2Contains];
}

module.exports = diffArray;
