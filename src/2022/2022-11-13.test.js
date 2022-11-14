function combineStrings(arr, n) {
  const curr = {
    start: 0,
    length: 0,
  };
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (curr.length + str.length <= n) {
      curr.length += str.length + 1;
    } else {
      list.push(arr.slice(curr.start, i).join(' '));
      curr.start = i;
      curr.length = str.length + 1;
    }
  }
  list.push(arr.slice(curr.start).join(' '));
  return list;
}

test('combineStrings', () => {
  expect(combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5)).toEqual([
    'a b c',
    'd e f',
    'g',
  ]);
  expect(combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 12)).toEqual([
    'a b c d e f',
    'g',
  ]);
  expect(
    combineStrings(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 20)
  ).toEqual(['alpha beta gamma', 'delta epsilon']);
});
