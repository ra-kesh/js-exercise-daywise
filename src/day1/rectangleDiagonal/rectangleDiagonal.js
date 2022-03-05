/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(width, height) {
  return Math.sqrt(width ** 2 + height ** 2);
  // The exponentiation operator (**), check out link:
  // [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**) ]
}

module.exports = rectangleDiagonal;
