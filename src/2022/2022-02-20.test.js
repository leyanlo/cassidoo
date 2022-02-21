function longestSubSeq(arr) {
  const sortedUniques = [...new Set([...arr].sort((a, b) => a - b))];
  let longestSubSeq = 0;
  let subSeq = 0;
  for (let i = 1; i < sortedUniques.length; i++) {
    subSeq++;
    if (sortedUniques[i] !== sortedUniques[i - 1] + 1) {
      longestSubSeq = Math.max(longestSubSeq, subSeq);
      subSeq = 0;
    }
  }
  return longestSubSeq;
}

test('longestSubSeq', () => {
  expect(longestSubSeq([1, 9, 87, 3, 10, 4, 20, 2, 45])).toBe(4);
  expect(longestSubSeq([36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42])).toBe(5);
});
