function orderFireworks(fireworks) {
  // count how many of each firework there are
  const counts = {};
  for (const firework of fireworks) {
    counts[firework] = (counts[firework] ?? 0) + 1;
  }

  // sort from most to least frequent
  const order = Object.entries(counts)
    .sort(([, c1], [, c2]) => c2 - c1)
    .flatMap(([firework, count]) => Array(count).fill(firework));

  // swap until order is valid
  outer: for (let i = 1; i < order.length; i++) {
    if (order[i] === order[i - 1]) {
      for (let j = i + 1; j < order.length; j++) {
        if (order[j] !== order[i]) {
          order[i] = order[j];
          order[j] = order[i - 1];
          continue outer;
        }
      }
      // valid swap not found
      return null;
    }
  }
  return order;
}

test('orderFireworks', () => {
  expect(
    orderFireworks(['green', 'green', 'green', 'red', 'red', 'blue'])
  ).toEqual(['green', 'red', 'green', 'red', 'green', 'blue']);
  expect(
    orderFireworks(['green', 'green', 'green', 'green', 'red', 'red', 'blue'])
  ).toEqual(['green', 'red', 'green', 'red', 'green', 'blue', 'green']);
  expect(
    orderFireworks([
      'green',
      'green',
      'green',
      'green',
      'green',
      'red',
      'red',
      'blue',
    ])
  ).toBe(null);
});
