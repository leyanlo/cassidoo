function allUnique(str) {
  return str.length === new Set(str).size;
}

test('allUnique', () => {
  expect(allUnique('Cassidy')).toBe(false);
  expect(allUnique('cat & dog')).toBe(false);
  expect(allUnique('cat+dog')).toBe(true);
});
