/** (*)
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */
function binaryAgent(binaryValue) {
  const binaryArray = binaryValue.split(" ");

  const outputAlphabet = binaryArray.reduce(
    (alphabetValues, binary) =>
      alphabetValues + String.fromCharCode(parseInt(binary, 2)),
    ""
  );

  return outputAlphabet;
}

module.exports = binaryAgent;
