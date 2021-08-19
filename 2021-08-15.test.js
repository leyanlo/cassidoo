function pSubstring(s) {
  let longestPalindrome = '';
  for (let i = 0; i < s.length; i += 0.5) {
    for (let j = 0; j < Math.min(i + 1, s.length - i); j++) {
      const left = Math.floor(i - j);
      const right = Math.ceil(i + j);
      if (!s[left] || !s[right] || s[left] !== s[right]) {
        break;
      }
      const palindrome = s.substring(left, right + 1);
      if (longestPalindrome.length < palindrome.length) {
        longestPalindrome = palindrome;
      }
    }
  }
  return longestPalindrome;
}

test('pSubstring', () => {
  expect(pSubstring('babad')).toBe('bab');
  expect(pSubstring('babbad')).toBe('abba');
});
