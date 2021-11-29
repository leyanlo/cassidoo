const digitToLetters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function phoneLetter(digits) {
  let combinations = [''];
  for (const d of digits.split('')) {
    const nextCombinations = [];
    for (const base of combinations) {
      for (const letter of digitToLetters[d]) {
        nextCombinations.push(base + letter);
      }
    }
    combinations = nextCombinations;
  }
  return combinations;
}

test('phoneLetter', () => {
  expect(phoneLetter('9')).toEqual(['w', 'x', 'y', 'z']);
  expect(phoneLetter('23')).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ]);
});
