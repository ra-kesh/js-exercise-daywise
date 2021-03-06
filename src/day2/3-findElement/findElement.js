/** (*)
 * Create a function that looks through an array (first argument) and
 * returns the first element in the array that passes a truth test (second argument)
 */

// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

function findElement(array, findFn) {
  return array.find(findFn);
}

module.exports = findElement;
