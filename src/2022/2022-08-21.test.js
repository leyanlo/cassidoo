function formatTable(str) {
  const table = str.split('\n').map((line) => line.split(' |'));
  const widths = table[0].map(() => 0);
  for (const row of table) {
    for (let i = 0; i < row.length; i++) {
      widths[i] = Math.max(widths[i], row[i].length);
    }
  }
  return table
    .map((row, i) =>
      row
        .map((cell, j) => cell.padEnd(widths[j], i === 1 ? '-' : ' '))
        .join(' |')
    )
    .join('\n');
}

test('formatTable', () => {
  expect(
    formatTable(`| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |`)
  ).toBe(`| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |`);
});
