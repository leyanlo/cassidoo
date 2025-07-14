function getCharAfterVimCommands(string, commands) {
  const lines = string.split('\n');
  let r = 0;
  let c = 0;

  for (const command of commands) {
    switch (command) {
      case 'h':
        c = Math.max(0, c - 1);
        break;
      case 'j':
        r = Math.min(lines.length - 1, r + 1);
        break;
      case 'k':
        r = Math.max(0, r - 1);
        break;
      case 'l':
        c = Math.min(lines[r].length, c + 1);
        break;
    }
  }

  return lines[r][c] ?? '';
}

test('getCharAfterVimCommands', () => {
  const string = `Hello, world!
how are ya?`;
  const commands = 'jlhll';

  expect(getCharAfterVimCommands(string, commands)).toBe('w');
});
