function missingSevens(arr) {
  const rowSums = arr.map((row) => row.reduce((acc, n) => acc + n, 0));
  const maxRowSum = Math.max(...rowSums);

  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (rowSums[i] === maxRowSum) {
      continue;
    }
    for (let j = 0; j < arr[i].length; j++) {
      n += !!((maxRowSum - arr[i][j]) % 7);
    }
  }
  return n;
}

test('missingSevens', () => {
  expect(
    missingSevens([
      [9, 4, 3],
      [3, 4, 9],
      [4, 8, 4],
    ])
  ).toBe(0);

  expect(
    missingSevens([
      [1, 5, 2],
      [5, 9, 5],
      [6, 5, 3],
    ])
  ).toBe(4);

  expect(
    missingSevens([
      [3, 9, 6],
      [8, 5, 5],
      [8, 4, 0],
    ])
  ).toBe(2);
});
