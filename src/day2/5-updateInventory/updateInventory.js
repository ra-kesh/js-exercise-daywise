/** (*)
 * Compare and update the inventory stored in a 2D array against a second 2D array of a
 * fresh delivery. Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */
const getCounts = (item) => item[0];
const getName = (item) => item[1];

const compareAlphabetically = (item1, item2) =>
  getName(item1).localeCompare(getName(item2));

function updateInventory(currentInventory, newInventory) {
  const finalInventory = currentInventory.reduce((acc, item) => {
    const newItemIndex = newInventory.findIndex(
      (newItem) => getName(newItem) === getName(item)
    );
    if (newItemIndex === -1) {
      acc.push(item);
    } else {
      const prevItem = acc[newItemIndex];
      const totalItemCount = getCounts(prevItem) + getCounts(item);
      acc[newItemIndex] = [totalItemCount, getName(item)];
    }
    return acc;
  }, newInventory);

  return finalInventory.sort(compareAlphabetically);
}

module.exports = updateInventory;
