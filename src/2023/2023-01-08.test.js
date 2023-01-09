function sumEveryOther(num) {
  return num
    .toString(10)
    .split('')
    .filter((char) => /\d/.test(char))
    .map(Number)
    .reduce((acc, n, i) => acc + n * (i % 2), 0);
}

test('sumEveryOther', () => {
  expect(sumEveryOther(548915381)).toBe(26);
  expect(sumEveryOther(10)).toBe(0);
  expect(sumEveryOther(1010.11)).toBe(1);
});
