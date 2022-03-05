// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {
  let functionCallCount = 0;
  return (...args) => {
    if (functionCallCount < n) {
      functionCallCount += 1;
      return cb.apply(this, args);
    }
    return null;
  };
}

module.exports = limitFunctionCallCount;
