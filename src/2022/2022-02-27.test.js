function largestRect(islands) {
  const rects = islands.map((row) => row.map(() => null));
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[i].length; j++) {
      if (islands[i][j] === 1) {
        rects[i][j] = [
          (rects[i][j - 1]?.[0] ?? 0) + 1,
          (rects[i - 1]?.[j]?.[1] ?? 0) + 1,
        ];
      }
    }
  }
  let largestRect = [0, 0];
  for (const rect of rects.flat()) {
    if (rect && rect[0] * rect[1] > largestRect[0] * largestRect[1]) {
      largestRect = rect;
    }
  }
  return largestRect.join('x');
}

test('largestRect', () => {
  let islands = [
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ];
  expect(largestRect(islands)).toBe('2x2');
});
