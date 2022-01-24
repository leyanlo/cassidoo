function roundToZero(n) {
  return ~~n;
}

test('roundToZero', () => {
  expect(roundToZero(1.7)).toBe(1);
  expect(roundToZero(-2.1)).toBe(-2);
  expect(roundToZero(500.4)).toBe(500);
  expect(roundToZero(-369.5)).toBe(-369);
  expect(roundToZero(150)).toBe(150);
  expect(roundToZero(-350)).toBe(-350);
});
