function specialPairs(arr) {
  const map = {};
  return arr.reduce((pairs, n) => {
    map[n] = (map[n] || 0) + 1;
    return pairs + map[n] - 1;
  }, 0);
}

test('specialPairs', () => {
  // (0,3), (0,4), (3,4), (2,5)
  expect(specialPairs([1, 2, 3, 1, 1, 3])).toBe(4);
});
