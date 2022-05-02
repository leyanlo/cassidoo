let dict = ['apple', 'banana', 'cranberry', 'strawberry'];

function simpleAutocomplete(s) {
  return dict.filter((d) => d.includes(s));
}

test('simpleAutocomplete', () => {
  expect(simpleAutocomplete('app')).toEqual(['apple']);
  expect(simpleAutocomplete('berry')).toEqual(['cranberry', 'strawberry']);
  expect(simpleAutocomplete('fart')).toEqual([]);
});
