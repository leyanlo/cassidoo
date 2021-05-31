function inits(list) {
  return list.reduce(
    (acc, n, i) => {
      acc.push(acc[i].concat(n));
      return acc;
    },
    [[]]
  );
}

test('inits', () => {
  expect(inits([4, 3, 2, 1])).toEqual([
    [],
    [4],
    [4, 3],
    [4, 3, 2],
    [4, 3, 2, 1],
  ]);
  expect(inits([144])).toEqual([[], [144]]);
});
