/* 5
Here's the basic usage of the function that you'll be creating:
function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add); <- this is the curry function
console.log(  curriedAdd(1)(2)  ); // 3
See 'curry' tests for further info of the requirement
*/
function curry(callbackFunction) {
  // get arguments length of callback function
  const cbArgsLength = callbackFunction.length;
  if (cbArgsLength === 0) return callbackFunction;

  return function curryFunction(...args) {
    if (args.length < cbArgsLength) {
      // If less arguments passed then pass null for those empty spots.
      return curryFunction.bind(null, ...args);
    }
    return callbackFunction(...args);
  };
}

module.exports = curry;
