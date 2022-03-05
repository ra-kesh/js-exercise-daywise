/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator(...args) {
  if (args.length === 0) throw new Error("Operator not specified");
  let output = 0;
  switch (args[0]) {
    case "+":
      for (let i = 1; i < args.length; i++) {
        output += args[i];
      }
      break;
    case "-":
      for (let i = 1; i < args.length; i++) {
        output -= args[i];
      }
      break;
    case "*":
      output = 1;
      for (let i = 1; i < args.length; i++) {
        output *= args[i];
      }
      break;
    case "/":
      output = 1;
      for (let i = 1; i < args.length; i++) {
        output /= args[i];
      }
      // eslint-disable-next-line radix
      output = parseInt(output * 10000) / 10000;
      break;
    case "%":
      output = args[1];
      for (let i = 2; i < args.length; i++) {
        output %= args[i];
      }
      break;
  }
  return output;
}

module.exports = applyOperator;
