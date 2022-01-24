function areSetsEqual(a, b) {
  return a.size === b.size && [...a].every((value) => b.has(value));
}

function sameDigits(n) {
  return areSetsEqual(
    new Set((BigInt(n) ** 3n).toString().split('')),
    new Set(n.toString().split(''))
  );
}

test('sameDigits', () => {
  expect(sameDigits(1)).toBe(true);
  expect(sameDigits(10)).toBe(true);
  expect(sameDigits(251894)).toBe(true);
  expect(sameDigits(251895)).toBe(false);
});
