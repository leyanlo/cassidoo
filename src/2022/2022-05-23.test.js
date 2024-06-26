const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const dirName = {
  '0,1': 'right',
  '1,0': 'down',
  '0,-1': 'left',
  '-1,0': 'up',
};

function startToEnd(mat) {
  let paths;
  const seen = mat.map((row) => row.map((col) => false));
  outer: for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        paths = [[[i, j]]];
        seen[i][j] = true;
        break outer;
      }
    }
  }
  while (true) {
    const nextPaths = [];
    let foundEnd = false;
    for (const path of paths) {
      const [i, j] = path[path.length - 1];
      for (const [di, dj] of dirs) {
        const i2 = i + di;
        const j2 = j + dj;
        if (seen[i2]?.[j2]) {
          continue;
        }
        switch (mat[i2]?.[j2]) {
          case 2:
            foundEnd = true;
          // intentionally fall through
          case 0:
            nextPaths.push([...path, [i2, j2]]);
        }
      }
    }
    paths = nextPaths;
    if (foundEnd) {
      break;
    }
    // avoid retracing by saving seen coords
    for (const path of paths) {
      const [i, j] = path[path.length - 1];
      seen[i][j] = true;
    }
  }
  return paths
    .filter((path) => {
      const [i, j] = path[path.length - 1];
      return mat[i][j] === 2;
    })
    .map((path) =>
      path.slice(1).map(([i2, j2], idx) => {
        const [i, j] = path[idx];
        const dir = [i2 - i, j2 - j];
        return dirName[dir.join()];
      })
    );
}

test('startToEnd', () => {
  let grid = [
    [1, 0, 0],
    [0, 0, 2],
  ];

  let grid2 = [
    [1, 3, 0],
    [0, 0, 2],
  ];

  expect(startToEnd(grid)).toStrictEqual([
    ['right', 'right', 'down'],
    ['right', 'down', 'right'],
    ['down', 'right', 'right'],
  ]);

  expect(startToEnd(grid2)).toStrictEqual([['down', 'right', 'right']]);
});
