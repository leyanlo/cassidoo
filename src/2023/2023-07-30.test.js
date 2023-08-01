function isAnagram(s, t) {
  const map = {};
  for (const char of s) {
    map[char] = (map[char] ?? 0) + 1;
  }
  for (const char of t) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return Object.values(map).every((count) => count === 0);
}

test('isAnagram', () => {
  expect(isAnagram('barbie', 'oppenheimer')).toBe(false);
  expect(isAnagram('race', 'care')).toBe(true);
});
