function isSuperUgly(n, primes) {
  for (let prime of primes) {
    while (n / prime === ~~(n / prime)) {
      n /= prime;
    }
    if (n === 1) {
      return true;
    }
  }
  return false;
}

function superUgly(n, primes) {
  let count = 1;
  let i = 1;
  while (count < n) {
    i++;
    count += isSuperUgly(i, primes);
  }
  return i;
}

test('isSuperUgly', () => {
  expect(isSuperUgly(1, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(2, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(3, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(4, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(5, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(6, [2, 3, 5])).toBe(true);
  expect(isSuperUgly(7, [2, 3, 5])).toBe(false);

  expect(isSuperUgly(1, [2, 7, 13, 19])).toBe(true);
  expect(isSuperUgly(2, [2, 7, 13, 19])).toBe(true);
  expect(isSuperUgly(3, [2, 7, 13, 19])).toBe(false);
});

test('superUgly', () => {
  expect(superUgly(1, [2, 3, 5])).toBe(1);
  expect(superUgly(11, [2, 7, 13, 19])).toBe(28);
});
