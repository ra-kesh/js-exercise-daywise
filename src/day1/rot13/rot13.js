/** (*)
 * One of the simplest and most widely known ciphers is a Caesar
 * cipher, also known as a shift cipher. In a shift cipher the
 * meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and
 * returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 */

// LBH QVQ VG!

function rot13(str) {
  return str.replace(/([A-M])|([N-Z])/g, (match, case1, case2) => {
    if (match === case1) {
      return String.fromCharCode(match.charCodeAt(0) + 13);
    }
    if (match === case2) {
      return String.fromCharCode(match.charCodeAt(0) - 13);
    }
    return "";
  });
}

module.exports = rot13;
