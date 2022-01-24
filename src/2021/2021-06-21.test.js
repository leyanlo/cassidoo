// draw a line of chars connecting [r1, c1] to [r2, c2], excluding the endpoints
function drawLine(img, [r1, c1], [r2, c2], char) {
  const dr = r2 === r1 ? 0 : r2 > r1 ? 1 : -1;
  const dc = c2 === c1 ? 0 : c2 > c1 ? 1 : -1;
  for (
    let r = r1 + dr, c = c1 + dc;
    (dr !== 0 && (dr > 0 ? r < r2 : r > r2)) ||
    (dc !== 0 && (dc > 0 ? c < c2 : c > c2));
    r += dr, c += dc
  ) {
    img[r][c] = char;
  }
}

function drawCube(x) {
  const img = [...Array(2 * x + 2)].map(() =>
    [...Array(~~(2.5 * x) + 3)].map(() => ' ')
  );

  /**
   * vertices are indexed as follows:
   *   0----1
   *  /    /|
   * 2----3 |
   * |    | 4
   * |    |/
   * 5----6
   */
  const v = [
    [~~(x / 2) - 1, ~~(x / 2) + 1],
    [~~(x / 2) - 1, ~~(2.5 * x) + 2],
    [x, 0],
    [x, 2 * x + 1],
    [~~(1.5 * x), ~~(2.5 * x) + 2],
    [2 * x + 1, 0],
    [2 * x + 1, 2 * x + 1],
  ];

  for (const [r, c] of v) {
    img[r][c] = '+';
  }

  drawLine(img, v[0], v[1], '-');
  drawLine(img, v[2], v[3], '-');
  drawLine(img, v[5], v[6], '-');

  drawLine(img, v[0], v[2], '/');
  drawLine(img, v[1], v[3], '/');
  drawLine(img, v[4], v[6], '/');

  drawLine(img, v[1], v[4], '|');
  drawLine(img, v[2], v[5], '|');
  drawLine(img, v[3], v[6], '|');

  console.log(img.map((row) => row.join('').trimEnd()).join('\n'));
}

test('drawCube', () => {
  const mockLog = jest
    .spyOn(global.console, 'log')
    .mockImplementation(() => {});
  drawCube(2);
  expect(console.log).toHaveBeenLastCalledWith(`  +----+
 /    /|
+----+ |
|    | +
|    |/
+----+`);
  drawCube(4);
  expect(console.log).toHaveBeenLastCalledWith(`
   +--------+
  /        /|
 /        / |
+--------+  |
|        |  |
|        |  +
|        | /
|        |/
+--------+`);
  drawCube(5);
  expect(console.log).toHaveBeenLastCalledWith(`
   +----------+
  /          /|
 /          / |
/          /  |
+----------+  |
|          |  |
|          |  +
|          | /
|          |/
|          |
+----------+`);
  drawCube(6);
  expect(console.log).toHaveBeenLastCalledWith(`

    +------------+
   /            /|
  /            / |
 /            /  |
+------------+   |
|            |   |
|            |   |
|            |   +
|            |  /
|            | /
|            |/
+------------+`);
  mockLog.mockRestore();
});
