function wrap(...dimens) {
  if (dimens.length === 2) {
    return 2 * dimens[0] * dimens[1];
  }
  let sum = 0;
  for (let i = 0; i < dimens.length; i++) {
    sum += wrap(...dimens.filter((_, j) => j !== i));
  }
  return sum;
}

test('wrap', () => {
  expect(wrap(2, 3)).toBe(12);
  expect(wrap(2, 3, 4)).toBe(52);
  expect(wrap(2, 3, 4, 5)).toBe(284);
});
