// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

module.exports = isTriangle;
