/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const reducedNumbers = n
    .toString()
    .split('')
    .map((el, i, arr) => {
      const digStrArr = [...arr];
      digStrArr.splice(i, 1);
      const numStr = digStrArr.reduce((concatStr, digitStr) => concatStr + digitStr);
      return Number.parseInt(numStr, 10);
    });

  return Math.max(...reducedNumbers);
}

module.exports = deleteDigit;
