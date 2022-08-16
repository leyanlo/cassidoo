function parensSubstring(s) {
  const stack = [];
  let start = undefined;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(start ?? i);
      start = undefined;
    } else {
      start = stack.pop();
      if (typeof start === 'number') {
        longest = Math.max(longest, i - start + 1);
      }
    }
  }
  return longest;
}

test('parensSubstring', () => {
  expect(parensSubstring('(()(')).toBe(2);
  expect(parensSubstring(')()(()))')).toBe(6);
});
