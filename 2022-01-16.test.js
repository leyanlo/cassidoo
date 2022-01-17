function wordleGuess(guess, solution) {
  return guess
    .split('')
    .map((char, i) =>
      char === solution[i] ? '🟩' : solution.includes(char) ? '🟨' : '⬛'
    )
    .join('');
}

test('wordleGuess', () => {
  let solutionWord = 'fudge';
  expect(wordleGuess('reads', solutionWord)).toBe('⬛🟨⬛🟨⬛');
  expect(wordleGuess('lodge', solutionWord)).toBe('⬛⬛🟩🟩🟩');
});
