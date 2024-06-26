function mergeIntervals(intervals) {
  return intervals
    .sort(([a], [b]) => a - b)
    .reduce((acc, curr) => {
      const prev = acc[acc.length - 1];
      if (prev && curr[0] <= prev[1]) {
        prev[1] = Math.max(prev[1], curr[1]);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
}

test('mergeIntervals', () => {
  expect(
    mergeIntervals([
      [1, 4],
      [2, 6],
      [8, 10],
      [15, 20],
    ])
  ).toStrictEqual([
    [1, 6],
    [8, 10],
    [15, 20],
  ]);

  expect(
    mergeIntervals([
      [1, 2],
      [2, 7],
    ])
  ).toStrictEqual([[1, 7]]);
});
