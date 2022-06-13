function longText(str, n) {
  return str.replaceAll(/[aeiou]/gi, (s) => Array(n).fill(s).join(''));
}

test('longText', () => {
  expect(longText('hello world', 3)).toBe('heeellooo wooorld');
  expect(longText('lol', 10)).toBe('looooooooool');
});
