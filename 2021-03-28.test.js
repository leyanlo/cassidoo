function isValidNumber(s) {
  return /^[\-+]?(?:\d+\.?\d*|\d*\.?\d+)$/.test(s);
}

test('isValidNumber', () => {
  expect(isValidNumber('7')).toBe(true);
  expect(isValidNumber('0011')).toBe(true);
  expect(isValidNumber('+3.14')).toBe(true);
  expect(isValidNumber('4.')).toBe(true);
  expect(isValidNumber('-.9')).toBe(true);
  expect(isValidNumber('-123.456')).toBe(true);
  expect(isValidNumber('-0.1')).toBe(true);

  expect(isValidNumber('abc')).toBe(false);
  expect(isValidNumber('1a')).toBe(false);
  expect(isValidNumber('e8')).toBe(false);
  expect(isValidNumber('–6')).toBe(false);
  expect(isValidNumber('-+3')).toBe(false);
  expect(isValidNumber('95x54e53.')).toBe(false);

  expect(isValidNumber('.')).toBe(false);
  expect(isValidNumber('..')).toBe(false);
  expect(isValidNumber('1..')).toBe(false);
});
