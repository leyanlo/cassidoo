function orderFireworks(fireworks) {
  // count how many of each firework there are
  const counts = {};
  for (const firework of fireworks) {
    counts[firework] = (counts[firework] ?? 0) + 1;
  }

  // map count to fireworks
  const map = [];
  for (const [firework, count] of Object.entries(counts)) {
    map[count] = map[count] ?? [];
    map[count].push(firework);
  }

  // build firing order based on map
  const order = [];
  for (let i = map.length - 1; i > 0; i--) {
    order.push(...map[i]);
    map[i - 1] = map[i - 1] ?? [];
    map[i - 1].push(...map[i]);
  }

  // return null for firing orders containing duplicates
  for (let i = 0; i < order.length - 2; i++) {
    if (order[i] === order[i + 1]) {
      return null;
    }
  }

  return order;
}

test('orderFireworks', () => {
  expect(
    orderFireworks(['green', 'green', 'green', 'red', 'red', 'blue'])
  ).toEqual(['green', 'red', 'green', 'blue', 'red', 'green']);
  expect(
    orderFireworks(['green', 'green', 'green', 'green', 'red', 'red', 'blue'])
  ).toBe(null);
});
