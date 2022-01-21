function wordleGuess(guess, solution) {
  const emojis = Array(5).fill('⬛');
  const counts = [...solution].reduce((acc, char) => {
    acc[char] = (acc[char] ?? 0) + 1;
    return acc;
  }, {});
  const wrongIndexes = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      emojis[i] = '🟩';
      counts[guess[i]]--;
    } else {
      wrongIndexes.push(i);
    }
  }

  for (const i of wrongIndexes) {
    if (counts[guess[i]]) {
      emojis[i] = '🟨';
      counts[guess[i]]--;
    }
  }

  return emojis.join('');
}

test('wordleGuess', () => {
  expect(wordleGuess('reads', 'fudge')).toBe('⬛🟨⬛🟨⬛');
  expect(wordleGuess('lodge', 'fudge')).toBe('⬛⬛🟩🟩🟩');
  expect(wordleGuess('deeds', 'fudge')).toBe('🟨🟨⬛⬛⬛');
  expect(wordleGuess('error', 'tries')).toBe('🟨🟩⬛⬛⬛');
  expect(wordleGuess('cooks', 'blond')).toBe('⬛⬛🟩⬛⬛');
  expect(wordleGuess('abbbb', 'aaccc')).toBe('🟩⬛⬛⬛⬛');
});
