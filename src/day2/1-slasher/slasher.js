/** (*)
 * Return the remaining elements of an array after chopping
 * off n elements from the head.
 * The head means the beginning of the array, or the zeroth index.
 */
// function slasher(arr, howMany) { }

const slasher = (array, untilIndex) => array.slice(untilIndex);

module.exports = slasher;
