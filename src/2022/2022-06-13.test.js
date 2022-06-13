function longText(str, n) {
  return str.replace(/([aeiou])/gi, '$1'.repeat(n));
}

test('longText', () => {
  expect(longText('hello world', 3)).toBe('heeellooo wooorld');
  expect(longText('lol', 10)).toBe('looooooooool');
});
