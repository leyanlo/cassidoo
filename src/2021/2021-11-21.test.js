function groupAnagrams(arr) {
  const map = {};
  for (const s of arr) {
    const sorted = s.split('').sort().join('');
    map[sorted] = map[sorted] ?? [];
    map[sorted].push(s);
  }
  return Object.values(map);
}

test('groupAnagrams', () => {
  expect(groupAnagrams(['eat', 'tea', 'ten', 'poop', 'net', 'ate'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['ten', 'net'],
    ['poop'],
  ]);
});
