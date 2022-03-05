/** (*)
 * Repeat a given string (first argument) num times
 * (second argument). Return an empty string if num
 * is not a positive number.
 */
function repeatStringNumTimes(string, repeatTimes) {
  if (repeatTimes <= 0) return "";

  let repreatedString = "";
  for (let i = 0; i < repeatTimes; i += 1) {
    repreatedString += string;
  }
  return repreatedString;
}

module.exports = repeatStringNumTimes;
