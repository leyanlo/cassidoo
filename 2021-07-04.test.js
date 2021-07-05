const keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  [' '],
];

const shiftMap = keys.reduce((acc, row) => {
  for (let i = 0; i < row.length; i++) {
    acc[row[i]] = row[i - 1] ?? row[i];
  }
  return acc;
}, {});

function translateShift(str) {
  return str
    .split('')
    .map((char) => shiftMap[char])
    .join('');
}

test('translateShift', () => {
  expect(translateShift(';p; epe')).toBe('lol wow');
  expect(translateShift('vtsmnrttu')).toBe('cranberry');
});
