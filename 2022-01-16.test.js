function wordleGuess(guess, solution) {
  return guess
    .split('')
    .map((char, i) =>
      char === solution[i]
        ? '🟩'
        : solution.includes(char) &&
          [...guess.slice(0, i + 1).matchAll(char)].length <=
            [...solution.matchAll(char)].length
        ? '🟨'
        : '⬛'
    )
    .join('');
}

test('wordleGuess', () => {
  let solutionWord = 'fudge';
  expect(wordleGuess('reads', solutionWord)).toBe('⬛🟨⬛🟨⬛');
  expect(wordleGuess('lodge', solutionWord)).toBe('⬛⬛🟩🟩🟩');
  expect(wordleGuess('deeds', solutionWord)).toBe('🟨🟨⬛⬛⬛');
});
