const dirs = [
  [0, 1],
  [1, 1],
  [1, 0],
];

function findWord(grid, word) {
  gridLoop: for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        dirLoop: for (const [di, dj] of dirs) {
          // check for match
          for (let k = 1; k < word.length; k++) {
            if (grid[i + di * k]?.[j + dj * k] !== word[k]) {
              continue dirLoop;
            }
          }
          // replace match with asterisks
          for (let k = 0; k < word.length; k++) {
            grid[i + di * k][j + dj * k] = '*';
          }
          break gridLoop;
        }
      }
    }
  }
  return grid;
}

test('findWord', () => {
  let grid = [
    ['a', 'a', 'q', 't'],
    ['x', 'c', 'w', 'e'],
    ['r', 'l', 'e', 'p'],
  ];
  expect(findWord(grid, 'ace')).toEqual([
    ['*', 'a', 'q', 't'],
    ['x', '*', 'w', 'e'],
    ['r', 'l', '*', 'p'],
  ]);
});
