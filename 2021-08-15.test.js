function pSubstring(s) {
  let longestPalindrome = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < Math.min(i + 1, s.length - i); j++) {
      if (!s[i + j] || !s[i - j] || s[i + j] !== s[i - j]) {
        break;
      }
      const palindrome = s.substring(i - j, i + j + 1);
      if (longestPalindrome.length < palindrome.length) {
        longestPalindrome = palindrome;
      }
    }
  }
  return longestPalindrome;
}

test('pSubstring', () => {
  expect(pSubstring('babad')).toBe('bab');
});
