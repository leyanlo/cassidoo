function depthJSON(data) {
  if (typeof data !== 'object' && data !== null) {
    return 0;
  }
  return (
    1 + Math.max(0, ...Object.values(data).map((value) => depthJSON(value)))
  );
}

test('depthJSON', () => {
  expect(depthJSON([])).toBe(1);
  expect(depthJSON([1, 2, 3, 4, 5])).toBe(1);
  expect(depthJSON([{ a: [] }, ['abc']])).toBe(3);
});
