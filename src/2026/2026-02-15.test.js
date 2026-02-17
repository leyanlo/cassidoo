function zoom(grid, k) {
  const res = [];
  for (let r = 0; r < grid.length * k; r++) {
    const row = [];
    res.push(row);
    for (let c = 0; c < grid[~~(r / k)].length * k; c++) {
      row.push(grid[~~(r / k)][~~(c / k)]);
    }
  }
  return res;
}

test('zoom', () => {
  expect(
    zoom(
      [
        [1, 2],
        [3, 4],
      ],
      2
    )
  ).toStrictEqual([
    [1, 1, 2, 2],
    [1, 1, 2, 2],
    [3, 3, 4, 4],
    [3, 3, 4, 4],
  ]);

  expect(zoom([[7, 8, 9]], 3)).toStrictEqual([
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
  ]);

  expect(zoom([[1], [2]], 3)).toStrictEqual([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ]);
});
