/* 4
Create a function that caches another function
Example:
function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}
const memoized = memoize(expensiveOperation); <- memoize function
console.log(memoized());
console.log(memoized());
the console should show:
expensiveOperation function is called!
22
22
See 'memoize' tests for further info of the requirement
*/

function memoize(func) {
  const cache = {};
  return (...args) => {
    const index = args.toString();
    if (cache[index] === undefined) {
      cache[index] = func(...args);
    }
    return cache[index];
  };
}

module.exports = memoize;
