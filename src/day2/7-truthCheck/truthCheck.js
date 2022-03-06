/** (*)
 * Check if the predicate (second argument) is truthy on all
 * elements of a collection (first argument).
 * Remember, you can access object properties through either
 * dot notation or [] notation.
 */
function truthCheck(predicates, propName) {
  return predicates.reduce(
    (acc, predicate) => acc && Boolean(predicate[propName]),
    true
  );
}

module.exports = truthCheck;
