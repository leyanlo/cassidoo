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

console.log(
  rotate90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  rotate90([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  rotate90([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
