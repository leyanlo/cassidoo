function lonelyNumber(...nums) {
  const counts = {};
  for (const num of nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }
  let product = 1;
  for (const [num, count] of Object.entries(counts)) {
    if (count === 1) {
      product *= num;
    }
  }
  return product;
}

test('lonelyNumber', () => {
  expect(lonelyNumber(1, 2, 3)).toBe(6);
  expect(lonelyNumber(6, 6, 4)).toBe(4);
  expect(lonelyNumber(7, 7, 7)).toBe(1);
});
