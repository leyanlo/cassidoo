function fibLike(a, b, n) {
  const sequence = [a, b];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  // truncate if n < 2
  sequence.length = n;
  return sequence;
}

test('fibLike', () => {
  let n = 5;
  expect(fibLike(10, 20, n)).toStrictEqual([10, 20, 30, 50, 80]);
  expect(fibLike(3, 7, n)).toStrictEqual([3, 7, 10, 17, 27]);
});

// extra credit
function isFibLike(sequence) {
  return sequence
    .slice(0, -2)
    .every((_, i) => sequence[i] + sequence[i + 1] === sequence[i + 2]);
}

test('isFibLike', () => {
  expect(isFibLike([10, 20, 30, 50, 80])).toBe(true);
  expect(isFibLike([10, 20, 30, 50, 81])).toBe(false);
});
