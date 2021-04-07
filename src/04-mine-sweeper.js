/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function getNeighborMinesCount(n, k, matrix) {
  let mineCount = 0;
  for (let i = (n - 1); i <= (n + 1); i++) {
    for (let j = (k - 1); j <= (k + 1); j++) {
      if (
        (matrix[i] !== undefined)
        && (matrix[i][j] !== undefined)
        && ((i !== n) || (j !== k))
      ) mineCount += matrix[i][j];
    }
  }
  return mineCount;
}

function minesweeper(matrix) {
  return matrix.map((row, i) => row.map((el, j) => getNeighborMinesCount(i, j, matrix)));
}

module.exports = minesweeper;
