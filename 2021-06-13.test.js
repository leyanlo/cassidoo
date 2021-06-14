function printArrow(dir, n) {
  const lines = [];
  let lineLength, dLineLength;
  if (dir === 'right') {
    lineLength = 1;
    dLineLength = 1;
  } else {
    lineLength = n;
    dLineLength = -1;
  }
  for (let i = 0; i < n - 1; i++) {
    lines.push('*'.padStart(lineLength, ' '));
    lineLength += dLineLength;
  }
  dLineLength *= -1;
  for (let i = 0; i < n; i++) {
    lines.push('*'.padStart(lineLength, ' '));
    lineLength += dLineLength;
  }
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
