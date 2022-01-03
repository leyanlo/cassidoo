function pathBetweenPoints(points, start, end) {
  const nextMap = {};
  for (const { name, connections } of points) {
    nextMap[name] = connections;
  }

  const paths = [[start]];
  const seen = new Set();
  while (paths.length) {
    const path = paths.pop();
    const last = path[path.length - 1];
    if (last === end) {
      return path;
    }

    if (seen.has(last)) {
      continue;
    }
    seen.add(last);

    for (const next of nextMap[last]) {
      paths.push([...path, next]);
    }
  }

  return 'no path';
}

test('pathBetweenPoints', () => {
  const listOfPoints = [
    { name: 'A', connections: ['B', 'C'] },
    { name: 'B', connections: ['A', 'E'] },
    { name: 'C', connections: ['A', 'D'] },
    { name: 'D', connections: ['C'] },
    { name: 'E', connections: ['B', 'F'] },
    { name: 'F', connections: ['E'] },
  ];

  expect(pathBetweenPoints(listOfPoints, 'A', 'F')).toEqual([
    'A',
    'B',
    'E',
    'F',
  ]);

  expect(pathBetweenPoints(listOfPoints, 'D', 'B')).toEqual([
    'D',
    'C',
    'A',
    'B',
  ]);
});
