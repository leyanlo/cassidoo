function isOdious(n) {
  return (
    n
      .toString(2)
      .split('')
      .filter((c) => c === '1').length %
      2 ===
    1
  );
}

test('isOdious', () => {
  expect(isOdious(14)).toBe(true);
  expect(isOdious(5)).toBe(false);
});
