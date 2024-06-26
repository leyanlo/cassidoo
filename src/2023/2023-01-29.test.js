function generateArrays(n) {
  return [...Array(n).keys()].map((i) =>
    [...Array(i + 1).keys()].map((j) => j + 1)
  );
}

test('generateArrays', () => {
  expect(generateArrays(4)).toStrictEqual([
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
  ]);
  expect(generateArrays(1)).toStrictEqual([[1]]);
});
