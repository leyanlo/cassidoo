function explodeString(str) {
  const map = {};
  for (const char of str) {
    if (char !== ' ') {
      map[char] = (map[char] || 0) + 1;
    }
  }
  return Object.keys(map)
    .sort()
    .map((key) => key.repeat(map[key]));
}

test('explodeString', () => {
  // prettier-ignore
  expect(explodeString('Ahh, abracadabra!')).toEqual(['!',',','A','aaaaa','bb','c','d','hh','rr']);
  expect(explodeString('\\o/\\o/')).toEqual(['//', '\\\\', 'oo']);
});
