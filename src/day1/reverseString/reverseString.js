/** (*)
 * Don't use Array.prototype.reverse
 */
function reverseString(str) {
  let reversedString = "";
  let { length } = str;
  while (length) {
    length -= 1;
    reversedString += str.charAt(length);
  }
  return reversedString;
}

module.exports = reverseString;
