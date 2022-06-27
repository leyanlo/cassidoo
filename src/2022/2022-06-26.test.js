function longestWord(str, dict) {
  return [...dict].reduce(
    (acc, word) =>
      acc.length < word.length &&
      new RegExp(word.split('').join('.*')).test(str)
        ? word
        : acc,
    ''
  );
}

test('longestWord', () => {
  let str = 'abppplee';
  let dict = new Set(['able', 'ale', 'apple', 'bale', 'kangaroo']);

  expect(longestWord(str, dict)).toBe('apple');
});
