// // (*)
// const defaults = (obj, defaultProps) => {
//   // Fill in undefined properties that match properties on the `defaultProps` parameter object.
//   // Return `obj`.
//   // http://underscorejs.org/#defaults
// };

function objectDefaults(mainObject, defaultValues) {
  const outputObject = mainObject;

  Object.keys(defaultValues).forEach((prop) => {
    if (!(prop in mainObject)) {
      outputObject[prop] = defaultValues[prop];
    }
  });
  return outputObject;
}

module.exports = objectDefaults;
