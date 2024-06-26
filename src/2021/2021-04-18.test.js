function moveZeroes(arr) {
  arr.sort((a, b) => !a || -!b);
  return arr;
}

test('moveZeroes', () => {
  expect(moveZeroes([0, 2, 0, 3, 8])).toStrictEqual([2, 3, 8, 0, 0]);
});
