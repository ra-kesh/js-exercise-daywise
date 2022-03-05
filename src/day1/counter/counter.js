/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {
  let counts = 0;
  return () => {
    counts += 1;
    return counts;
  };
}

module.exports = counter;
