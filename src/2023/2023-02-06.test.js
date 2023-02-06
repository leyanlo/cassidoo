const aCharCode = 'A'.charCodeAt(0);

function getColNum(colName) {
  let n = 0;
  for (let i = 0; i < colName.length; i++) {
    n += (colName.charCodeAt(colName.length - 1 - i) + 1 - aCharCode) * 26 ** i;
  }
  return n;
}

test('getColNum', () => {
  expect(getColNum('A')).toBe(1);
  expect(getColNum('B')).toBe(2);
  expect(getColNum('C')).toBe(3);
  expect(getColNum('Z')).toBe(26);
  expect(getColNum('AA')).toBe(27);
  expect(getColNum('AB')).toBe(28);
  expect(getColNum('AAA')).toBe(703);
});
