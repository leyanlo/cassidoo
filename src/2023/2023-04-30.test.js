function removeZeroes(arr) {
  return arr.slice(arr.findIndex(Boolean), arr.findLastIndex(Boolean) + 1);
}

test('removeZeroes', () => {
  expect(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])).toEqual([
    3, 1, 4, 1, 5, 9,
  ]);
  expect(removeZeroes([0, 0, 0])).toEqual([]);
  expect(removeZeroes([8])).toEqual([8]);
});
