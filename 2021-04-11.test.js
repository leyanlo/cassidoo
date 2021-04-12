function canPlant(garden, n) {
  let nPlants = 0;
  let currPlotSize = 0;
  for (let plot of garden) {
    if (plot === 0) {
      currPlotSize++;
    } else if (currPlotSize > 0) {
      nPlants += ~~((currPlotSize - 1) / 2);
      currPlotSize = 0;
    }
  }
  return n <= nPlants;
}

describe('canPlant', () => {
  const garden = [1, 0, 0, 0, 1];

  test('plant at position 2', () => {
    expect(canPlant(garden, 1)).toBe(true);
  });

  test("there are only 3 plots, and two of them can't be planted on", () => {
    expect(canPlant(garden, 4)).toBe(false);
  });
});
