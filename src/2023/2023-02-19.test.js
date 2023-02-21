function numBalanced(s) {
  while (/\(\)/.test(s)) {
    s = s.replace(/\(\)/g, '');
  }
  return s.length;
}

test('numBalanced', () => {
  expect(numBalanced(`()`)).toBe(0);
  expect(numBalanced(`(()`)).toBe(1);
  expect(numBalanced(`))()))))()`)).toBe(6);
  expect(numBalanced(`)))))`)).toBe(5);
});
