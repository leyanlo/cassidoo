function groupAnagrams(arr) {
  const anagrams = {};
  for (const word of arr) {
    const counts = {};
    for (const char of word) {
      counts[char] = (counts[char] ?? 0) + 1;
    }
    const key = Object.entries(counts)
      .sort(([a], [b]) => a.localeCompare(b))
      .map((entry) => entry.join(''))
      .join('');
    anagrams[key] ??= [];
    anagrams[key].push(word);
  }
  return Object.values(anagrams);
}

test('groupAnagrams', () => {
  expect(
    groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
  ).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);

  expect(groupAnagrams(['vote', 'please'])).toStrictEqual([
    ['vote'],
    ['please'],
  ]);

  expect(groupAnagrams(['debitcard', 'badcredit'])).toStrictEqual([
    ['debitcard', 'badcredit'],
  ]);
});
