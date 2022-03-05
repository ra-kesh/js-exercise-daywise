/** (*)
 * Remove all falsy values from an array.
 */

// Don't show a false ID to this bouncer.

function bouncer(array) {
  return array.filter(
    (element) =>
      (typeof element === "string" || typeof element === "number") && element
  );
}

module.exports = bouncer;
