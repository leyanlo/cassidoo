function minLaundryLoads(load) {
  let nDelicates = 0;
  const colors = new Set();
  for (const [color, type] of load) {
    if (type === 'delicate') {
      nDelicates++;
    } else {
      colors.add(color);
    }
  }
  return nDelicates + colors.size;
}

test('minLaundryLoads', () => {
  let load1 = [
    ['red', 'normal'],
    ['blue', 'normal'],
    ['red', 'delicate'],
    ['blue', 'heavy'],
  ];

  let load2 = [
    ['white', 'normal'],
    ['white', 'delicate'],
    ['white', 'normal'],
    ['white', 'heavy'],
  ];

  expect(minLaundryLoads(load1)).toBe(3);
  expect(minLaundryLoads(load2)).toBe(2);
});
