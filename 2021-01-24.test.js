function rotate90(arr) {
  const n = arr.length;
  for (let row = 0; row < n / 2; row++) {
    for (let col = 0; col < (n - 1) / 2; col++) {
      const tmp = arr[row][col];
      arr[row][col] = arr[n - 1 - col][row];
      arr[n - 1 - col][row] = arr[n - 1 - row][n - 1 - col];
      arr[n - 1 - row][n - 1 - col] = arr[col][n - 1 - row];
      arr[col][n - 1 - row] = tmp;
    }
  }
  return arr;
}

test('rotate90', () => {
  expect(
    rotate90([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
  expect(
    rotate90([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  ).toEqual([
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ]);
  expect(
    rotate90([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ])
  ).toEqual([
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ]);
});
