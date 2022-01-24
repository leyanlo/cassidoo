function isInRange([x0, y0], mesh) {
  return mesh.some(([x, y]) => Math.sqrt((x - x0) ** 2 + (y - y0) ** 2) <= 5);
}

function canToggle(network) {
  const mesh = [network.switch];
  let nodesQueue = [...network.hub];
  let shouldUpdate = true;
  while (shouldUpdate) {
    shouldUpdate = false;
    const nextNodesQueue = [];
    for (let node of nodesQueue) {
      if (isInRange(node, mesh)) {
        mesh.push(node);
        shouldUpdate = true;
      } else {
        nextNodesQueue.push(node);
      }
    }
    nodesQueue = nextNodesQueue;
  }
  return isInRange(network.light, mesh);
}

test('canToggle', () => {
  let network = {
    switch: [0, 1],
    hub: [
      [2, 1],
      [2, 5],
    ],
    light: [1, 6],
  };
  expect(canToggle(network)).toBe(true);

  network = {
    switch: [0, 0],
    hub: [
      [4, 1],
      [4, 6],
      [7, 8],
      [17, 6],
      [19, 9],
      [20, 13],
      [23, 15],
    ],
    light: [26, 17],
  };
  expect(canToggle(network)).toBe(false);
});
