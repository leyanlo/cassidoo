function countPerfectlyRoundCookies(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

test('countPerfectlyRoundCookies', () => {
  expect(countPerfectlyRoundCookies(5)).toBe(1);
  expect(countPerfectlyRoundCookies(10)).toBe(2);
  expect(countPerfectlyRoundCookies(100)).toBe(24);
});
