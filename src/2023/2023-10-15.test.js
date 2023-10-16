function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = t[i];
    } else if (map[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
}

test('isIsomorphic', () => {
  expect(isIsomorphic('abb', 'cdd')).toBe(true);
  expect(isIsomorphic('cassidy', '1234567')).toBe(false);
  expect(isIsomorphic('cass', '1233')).toBe(true);
});
