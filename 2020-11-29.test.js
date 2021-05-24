function arrayDiff(arr, target) {
  const seen = {};
  return arr.reduce((numPairs, n) => {
    const targetsFromN = {
      [n + target]: null,
      [n - target]: null,
    };
    numPairs += Object.keys(targetsFromN).reduce(
      (seenFromN, targetFromN) => seenFromN + (seen[targetFromN] || 0),
      0
    );
    seen[n] = (seen[n] || 0) + 1;
    return numPairs;
  }, 0);
}

test('arrayDiff', () => {
  // 2 - 1 = 1, 3 - 2 = 1, and 4 - 3 = 1
  expect(arrayDiff([1, 2, 3, 4], 1)).toBe(3);
});
