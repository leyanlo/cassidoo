const MIRROR = {
  L: 'R',
  R: 'L',
};

function maxPairs(shoes) {
  let nPairs = 0;
  const map = {
    L: {},
    R: {},
  };
  for (const shoe of shoes) {
    const [type, size] = shoe.split('-');
    if (map[MIRROR[type]][size]) {
      map[MIRROR[type]][size]--;
      nPairs++;
    } else {
      map[type][size] = (map[type][size] ?? 0) + 1;
    }
  }
  return nPairs;
}

test('maxPairs', () => {
  expect(maxPairs(['L-10', 'R-10', 'L-11', 'R-10', 'L-10', 'R-11'])).toBe(3);
  expect(maxPairs(['L-10', 'L-11', 'L-12', 'L-13'])).toBe(0);
  expect(maxPairs(['L-8', 'L-8', 'L-8', 'R-8'])).toBe(1);
});
