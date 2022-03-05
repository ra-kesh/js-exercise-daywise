/** (*)
 * Return the longest word in a string
 */
function longestWordInString(statement) {
  const arrayOfWords = statement.split(" ");
  let longestLen = 0;
  arrayOfWords.forEach((word) => {
    const { length } = word;
    if (longestLen < length) longestLen = length;
  });
  return longestLen;
}

module.exports = longestWordInString;
