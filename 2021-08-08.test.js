const dirs = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function generateMinesweeper(gridSize, mines) {
  // init grid
  const grid = [...Array(gridSize)].map(() =>
    [...Array(gridSize)].map(() => 0)
  );

  // init mines
  for (const [col, row] of mines) {
    grid[row - 1][col - 1] = -1;
  }

  // init neighbors
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === -1) continue;
      let nNeighbors = 0;
      for (const [di, dj] of dirs) {
        nNeighbors += grid[i + di]?.[j + dj] === -1;
      }
      grid[i][j] = nNeighbors;
    }
  }

  return grid
    .map((row) =>
      row.map((cell) => (cell === -1 ? '*' : cell === 0 ? 'x' : cell)).join('')
    )
    .join('\n');
}

test('generateMinesweeper', () => {
  expect(
    generateMinesweeper(5, [
      [1, 3],
      [3, 5],
      [2, 4],
    ])
  ).toBe(`xxxxx
11xxx
*21xx
2*21x
12*1x`);
});
