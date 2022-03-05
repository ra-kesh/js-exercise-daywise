/** (*)
 * Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(nestedArray) {
  return nestedArray.reduce(
    (acc, value) =>
      Array.isArray(value)
        ? acc.concat(steamrollArray(value))
        : acc.concat(value),
    []
  );
}

module.exports = steamrollArray;
