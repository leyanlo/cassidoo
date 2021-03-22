// Solutions assume n and m only contain digits and k < n.length + m.length.

// O(n) solution
function maxNum(n, m, k) {
  const counts = {};
  for (let digit of [...n, ...m]) {
    counts[digit] = (counts[digit] ?? 0) + 1;
  }
  const digits = [];
  for (let digit = 9; digit >= 0; digit--) {
    for (let i = 0; i < counts[digit] ?? 0; i++) {
      digits.push(digit);
      if (digits.length === k) {
        return +digits.join('');
      }
    }
  }
}

// O(n * log(n)) solution
function maxNumSlow(n, m, k) {
  return +[...n, ...m]
    .sort((a, b) => b - a)
    .slice(0, k)
    .join('');
}

test('maxNum', () => {
  expect(maxNum([3, 4, 6, 5], [9, 0, 2, 5, 8, 3], 5)).toBe(98655);
});

test('maxNumSlow', () => {
  expect(maxNumSlow([3, 4, 6, 5], [9, 0, 2, 5, 8, 3], 5)).toBe(98655);
});
