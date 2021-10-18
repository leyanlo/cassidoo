function reorder(a, b) {
  const newA = [];
  for (let i = 0; i < a.length; i++) {
    newA[b[i]] = a[i];
  }
  for (let i = 0; i < a.length; i++) {
    a[i] = newA[i];
  }
}

test('reorder', () => {
  let a = ['C', 'D', 'E', 'F', 'G', 'H'];
  let b = [3, 0, 4, 1, 2, 5];
  reorder(a, b);
  expect(a).toEqual(['D', 'F', 'G', 'C', 'E', 'H']);
});
