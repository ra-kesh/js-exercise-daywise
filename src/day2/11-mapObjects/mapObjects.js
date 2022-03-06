// (*)
// const mapObject = (obj, cb) => {
//   // Like map for arrays, but for objects. Transform the value of each property in turn.
//   // http://underscorejs.org/#mapObject
// }

function mapObject(inputObj, mapFn) {
  const outputObj = {};
  Object.keys(inputObj).forEach((element) => {
    const newValue = mapFn(inputObj[element]);
    outputObj[element] = newValue;
  });
  return outputObj;
}

module.exports = mapObject;
