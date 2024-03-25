const DIRS = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

function largestIsland(map) {
  let largestIsland = 0;
  const seen = map.map((row) => row.map(() => 0));
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] && !seen[i][j]) {
        let island = 0;
        const queue = [[i, j]];
        while (queue.length) {
          const [i2, j2] = queue.pop();
          if (map[i2]?.[j2] && !seen[i2][j2]) {
            seen[i2][j2] = 1;
            island++;
            queue.push(...DIRS.map(([di, dj]) => [i2 + di, j2 + dj]));
          }
        }
        largestIsland = Math.max(largestIsland, island);
      }
    }
  }
  return largestIsland;
}

test('largestIsland', () => {
  let map = [
    [0, 1, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 0],
  ];

  expect(largestIsland(map)).toBe(7);
});
