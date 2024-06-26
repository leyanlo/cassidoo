function longestPrefix(arr) {
  let prefix = arr[0] ?? '';
  for (let i = 1; i < arr.length && prefix; i++) {
    const str = arr[i];
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== str[j]) {
        prefix = prefix.substring(0, j);
        break;
      }
    }
  }
  return prefix;
}

test('longestPrefix', () => {
  expect(longestPrefix(['cranberry', 'crawfish', 'crap'])).toBe('cra');
  expect(longestPrefix(['parrot', 'poodle', 'fish'])).toBe('');
});
