function addVertices(lines, x) {
  lines[~~(x / 2) - 1][~~(x / 2) + 1] = '+';
  lines[~~(x / 2) - 1][~~((5 / 2) * x) + 2] = '+';
  lines[x][0] = '+';
  lines[x][2 * x + 1] = '+';
  lines[~~((3 / 2) * x)][~~((5 / 2) * x) + 2] = '+';
  lines[2 * x + 1][0] = '+';
  lines[2 * x + 1][2 * x + 1] = '+';
}

function addHorizontals(lines, x) {
  for (let i = 0; i < 2 * x; i++) {
    lines[x / 2 - 1][x / 2 + 2 + i] = '-';
    lines[x][1 + i] = '-';
    lines[2 * x + 1][i + 1] = '-';
  }
}

function addVerticals(lines, x) {
  for (let i = 0; i < x; i++) {
    lines[~~(x / 2) + i][~~((5 / 2) * x) + 2] = '|';
    lines[x + 1 + i][0] = '|';
    lines[x + 1 + i][2 * x + 1] = '|';
  }
}

function addDiagonals(lines, x) {
  for (let i = 0; i < ~~(x / 2); i++) {
    lines[~~(x / 2) + i][~~(x / 2) - i] = '/';
    lines[~~(x / 2) + i][~~((5 / 2) * x) + 1 - i] = '/';
    lines[~~((3 / 2) * x + 1 + i)][~~((5 / 2) * x) + 1 - i] = '/';
  }
}

function drawCube(x) {
  const lines = [...Array(2 * x + 2)].map(() =>
    [...Array(~~(2.5 * x) + 3)].map(() => ' ')
  );
  addVertices(lines, x);
  addHorizontals(lines, x);
  addVerticals(lines, x);
  addDiagonals(lines, x);
  console.log(lines.map((line) => line.join('').trimEnd()).join('\n'));
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
