function lonelyNumber(...nums) {
  const counts = nums.reduce((counts, num) => {
    counts[num] = (counts[num] ?? 0) + 1;
    return counts;
  }, {});
  return Object.entries(counts).reduce((product, [num, count]) => {
    if (count === 1) {
      product *= num;
    }
    return product;
  }, 1);
}

test('lonelyNumber', () => {
  expect(lonelyNumber(1, 2, 3)).toBe(6);
  expect(lonelyNumber(6, 6, 4)).toBe(4);
  expect(lonelyNumber(7, 7, 7)).toBe(1);
});
