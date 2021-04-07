/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoding = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      encoding += str[i];
    } else {
      let count = 1;
      let j = i;
      while (str[i] === str[j + 1]) {
        count++;
        j++;
      }
      encoding += count + str[i];
      i = j;
    }
  }
  return encoding;
}

module.exports = encodeLine;
