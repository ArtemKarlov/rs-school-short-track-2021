/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const index = Math.floor(array.length - 1 / 2);
  if (array[index] === value) {
    return index;
  } if (array[index] > value) {
    return findIndex(array.slice(0, index), value);
  }
  return findIndex(array.slice(index + 1), value);
}

module.exports = findIndex;
