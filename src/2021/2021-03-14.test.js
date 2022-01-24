function binomial(n, k) {
  let coefficient = 1;
  for (let i = n; i > n - k; i--) coefficient *= i;
  for (let i = k; i > 0; i--) coefficient /= i;
  return coefficient;
}

function pascals(rowIndex) {
  const row = [];
  for (let i = 0; i <= rowIndex; i++) {
    row.push(binomial(rowIndex, i));
  }
  return row;
}

test('pascals', () => {
  expect(pascals(0)).toEqual([1]);
  expect(pascals(3)).toEqual([1, 3, 3, 1]);
});
