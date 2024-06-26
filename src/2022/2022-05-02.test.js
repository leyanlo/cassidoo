let dict = ['apple', 'banana', 'cranberry', 'strawberry'];

function simpleAutocomplete(s) {
  return dict.filter((d) => d.includes(s));
}

test('simpleAutocomplete', () => {
  expect(simpleAutocomplete('app')).toStrictEqual(['apple']);
  expect(simpleAutocomplete('berry')).toStrictEqual([
    'cranberry',
    'strawberry',
  ]);
  expect(simpleAutocomplete('fart')).toStrictEqual([]);
});
