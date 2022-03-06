// // (*)
// const invert = (obj) => {
//   // Returns a copy of the object where the keys have become the values and the values the keys.
//   // Assume that all of the object's values will be unique and string serializable.
//   // http://underscorejs.org/#invert
// };

function objectInvert(Obj) {
  const outputObj = {};
  Object.keys(Obj).forEach((property) => {
    const propValue = Obj[property];
    outputObj[propValue] = property;
  });
  return outputObj;
}

module.exports = objectInvert;
