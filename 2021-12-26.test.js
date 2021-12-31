function orderFireworks(fireworks) {
  // count how many of each firework there are
  const counts = {};
  let maxCount = 0;
  for (const firework of fireworks) {
    counts[firework] = (counts[firework] ?? 0) + 1;
    maxCount = Math.max(maxCount, counts[firework]);
  }

  // map count to fireworks
  const map = [...Array(maxCount + 1)].map(() => []);
  for (const [firework, count] of Object.entries(counts)) {
    map[count].push(firework);
  }

  // build firing order based on map
  const order = [];
  for (let i = map.length - 1; i > 0; i--) {
    while (map[i].length) {
      const curr = map[i].shift();

      if (order[order.length - 1] === curr)
        avoidDupe: {
          // insert next available firework to avoid duplicates
          for (let j = i; j > 0; j--) {
            if (map[j].length) {
              const next = map[j].shift();
              order.push(next);
              map[j - 1].push(next);
              break avoidDupe;
            }
          }

          // no valid firing order
          return null;
        }

      order.push(curr);
      map[i - 1].push(curr);
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
  ).toEqual(['green', 'red', 'green', 'blue', 'green', 'red', 'green']);
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
  expect(
    orderFireworks(['green', 'green', 'red', 'red', 'blue', 'blue'])
  ).toEqual(['green', 'red', 'blue', 'green', 'red', 'blue']);
});
