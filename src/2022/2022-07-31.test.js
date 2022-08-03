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
//   ~~((n + 9) / 10) +
//     Math.max(~~((n + 81) / 100) * 10, n - 9 - ~~((n + 81) / 100) * 90) +
//     Math.max(~~((n + 801) / 1000) * 100, n - 99 - ~~((n + 801) / 1000) * 900) + ...
function numberOfOnes(n) {
  let count = 0;
  for (let pow = 1; pow <= n; pow *= 10) {
    const stepFn = ~~((n + 8 * pow + 1) / (10 * pow)) * pow;
    const sawtoothFn = n - (pow - 1) - stepFn * 9;
    count += Math.max(stepFn, sawtoothFn);
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
