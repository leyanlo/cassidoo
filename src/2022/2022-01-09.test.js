function capPermutations(s) {
  let permutations = new Set(['']);
  for (const char of s) {
    const nextPermutations = new Set();
    for (const p of permutations) {
      nextPermutations.add(p + char.toLowerCase());
      nextPermutations.add(p + char.toUpperCase());
    }
    permutations = nextPermutations;
  }
  return [...permutations];
}

test('capPermutations', () => {
  expect(capPermutations('ab2')).toStrictEqual(['ab2', 'aB2', 'Ab2', 'AB2']);
  expect(capPermutations('35p')).toStrictEqual(['35p', '35P']);
});
