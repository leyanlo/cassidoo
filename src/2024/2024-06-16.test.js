function nVowels(str) {
  return str.match(/[aeiou]/gi)?.length ?? 0;
}

function sortNames(names) {
  return names.toSorted(
    (a, b) => nVowels(b) - nVowels(a) || a.localeCompare(b)
  );
}

test('sortNames', () => {
  expect(sortNames(['Goku', 'Vegeta', 'Piccolo', 'Gohan'])).toStrictEqual([
    'Piccolo',
    'Vegeta',
    'Gohan',
    'Goku',
  ]);
  expect(sortNames(['Edward', 'Alphonse', 'Roy', 'Winry'])).toStrictEqual([
    'Alphonse',
    'Edward',
    'Roy',
    'Winry',
  ]);
});
