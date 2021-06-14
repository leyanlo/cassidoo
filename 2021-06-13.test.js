function getLines(startLen, endLen) {
  const lines = [];
  const dLen = endLen > startLen ? 1 : -1;
  for (let len = startLen; len !== endLen + dLen; len += dLen) {
    lines.push('*'.padStart(len, ' '));
  }
  return lines;
}

function printArrow(dir, n) {
  const lines =
    dir === 'right'
      ? getLines(1, n).concat(getLines(n - 1, 1))
      : getLines(n, 1).concat(getLines(2, n));
  console.log(lines.join('\n'));
}

test('printArrow', () => {
  const mockLog = jest
    .spyOn(global.console, 'log')
    .mockImplementation(() => {});
  printArrow('right', 3);
  expect(console.log).toHaveBeenLastCalledWith(`*
 *
  *
 *
*`);
  printArrow('left', 5);
  expect(console.log).toHaveBeenLastCalledWith(`    *
   *
  *
 *
*
 *
  *
   *
    *`);
  mockLog.mockRestore();
});
