function product(nums) {
  return nums.reduce((acc, n) => acc * n);
}

function maxProduct(nums) {
  const sorted = nums.toSorted((a, b) => a - b);
  return Math.max(
    product(sorted.slice(-3)),
    product([...sorted.slice(0, 2), sorted.at(-1)])
  );
}

test('maxProduct', () => {
  expect(maxProduct([2, 4, 1, 3, -5, 6])).toBe(72);
  expect(maxProduct([2, 4, 1, 3, -5, -6])).toBe(120);
});
