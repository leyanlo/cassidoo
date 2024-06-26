function dailyTemperatures(temps) {
  const stack = [];
  const res = temps.map(() => 0);
  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    while (stack.at(-1)?.temp < temp) {
      const { i: i2 } = stack.pop();
      res[i2] = i - i2;
    }
    stack.push({ temp, i });
  }
  return res;
}

test('dailyTemperatures', () => {
  expect(dailyTemperatures([70, 70, 70, 75])).toStrictEqual([3, 2, 1, 0]);
  expect(dailyTemperatures([90, 80, 70, 60])).toStrictEqual([0, 0, 0, 0]);
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
});
