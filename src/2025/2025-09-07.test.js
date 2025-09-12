function sumNeighbors(arr) {
  const sum = arr.reduce((acc, n) => acc + n, 0);
  const first = arr[0] ?? 0;
  const last = arr.at(-1) ?? 0;
  return 3 * sum - first - last;
}

test('sumNeighbors', () => {
  expect(sumNeighbors([])).toBe(0);
  expect(sumNeighbors([1])).toBe(1);
  expect(sumNeighbors([1, 4])).toBe(10);
  expect(sumNeighbors([1, 4, 7])).toBe(28);
  expect(sumNeighbors([1, 4, 7, 10])).toBe(55);
  expect(sumNeighbors([-1, -2, -3])).toBe(-14);
  expect(sumNeighbors([0.1, 0.2, 0.3])).toBeCloseTo(1.4);
  expect(sumNeighbors([1, -20, 300, -4000, 50000, -600000, 7000000])).toBe(
    12338842
  );
});
