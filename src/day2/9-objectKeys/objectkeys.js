// (*)
// const keys = (obj) => {
//   // Retrieve all the names of the object's properties.
//   // Return the keys as strings in an array.
//   // Based on http://underscorejs.org/#keys
// };

function objectKeys(object) {
  const Keys = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      Keys.push(key);
    }
  }
  return Keys;
}

module.exports = objectKeys;
