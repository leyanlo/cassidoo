const keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function remoteControl(word) {
  let [r, c] = [0, 0];
  const buttons = [];
  for (const char of word) {
    const dr = keyboard.findIndex((row) => row.includes(char)) - r;
    const dc = keyboard[r + dr].indexOf(char) - c;
    for (let i = 0; i < -dc; i++) buttons.push('left');
    for (let i = 0; i < dr; i++) buttons.push('down');
    for (let i = 0; i < -dr; i++) buttons.push('up');
    for (let i = 0; i < dc; i++) buttons.push('right');
    buttons.push('select');
    [r, c] = [r + dr, c + dc];
  }
  return buttons.join(', ');
}

test('remoteControl', () => {
  expect(remoteControl('car')).toBe(
    'down, down, right, right, select, left, left, up, select, up, right, right, right, select'
  );
});
