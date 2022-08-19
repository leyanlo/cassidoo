// O(n) brute force solution
function numberOfOnesSlow(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i
      .toString(10)
      .split('')
      .map((d) => d === '1')
      .reduce((acc, b) => acc + b);
  }
  return count;
}

// O(log(n)) solution by calculating series:
//   ~~(n / 10) + (n % 10 < 1 ? 0 : 1) +
//   ~~(n / 100) * 10 + (n % 100 < 10 ? 0 : n % 100 < 20 ? (n % 100) - 9 : 10) +
//   ~~(n / 1000) * 100 + (n % 1000 < 100 ? 0 : n % 1000 < 200 ? (n % 1000) - 99 : 100) + ...
function numberOfOnes(n) {
  let count = 0;
  for (let pow = 1; pow <= n; pow *= 10) {
    const q = ~~(n / (10 * pow));
    const r = n % (10 * pow);
    count += q * pow + (r < pow ? 0 : r < 2 * pow ? r - pow + 1 : pow);
  }
  return count;
}

test('numberOfOnes', () => {
  expect(numberOfOnes(14)).toBe(7);

  // verify against slow solution
  for (let n = 1; n <= 1000; n++) {
    expect(numberOfOnes(n)).toBe(numberOfOnesSlow(n));
  }
});
