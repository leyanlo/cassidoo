function removeZeroes(arr) {
  return arr.slice(arr.findIndex(Boolean), arr.findLastIndex(Boolean) + 1);
}

test('removeZeroes', () => {
  expect(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])).toStrictEqual([
    3, 1, 4, 1, 5, 9,
  ]);
  expect(removeZeroes([0, 0, 0])).toStrictEqual([]);
  expect(removeZeroes([8])).toStrictEqual([8]);
});
