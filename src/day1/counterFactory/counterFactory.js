// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let counter = 0;
  return {
    increment: () => {
      counter += 1;
      return counter;
    },

    decrement: () => {
      counter -= 1;
      return counter;
    },
  };
}

module.exports = counterFactory;
