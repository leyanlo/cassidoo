function zerosEndingFactorial(n) {
  let nZeros = 0;
  for (let p = 1; 5 ** p <= n; p++) {
    nZeros += ~~(n / 5 ** p);
  }
  return nZeros;
}

test('zerosEndingFactorial', () => {
  expect(zerosEndingFactorial(1)).toBe(0);
  expect(zerosEndingFactorial(5)).toBe(1);
  expect(zerosEndingFactorial(10)).toBe(2);
  expect(zerosEndingFactorial(15)).toBe(3);
  expect(zerosEndingFactorial(20)).toBe(4);
  expect(zerosEndingFactorial(25)).toBe(6);
  expect(zerosEndingFactorial(30)).toBe(7);
  expect(zerosEndingFactorial(35)).toBe(8);
  expect(zerosEndingFactorial(40)).toBe(9);
  expect(zerosEndingFactorial(45)).toBe(10);
  expect(zerosEndingFactorial(50)).toBe(12);
  expect(zerosEndingFactorial(55)).toBe(13);
  expect(zerosEndingFactorial(100)).toBe(24);
});
