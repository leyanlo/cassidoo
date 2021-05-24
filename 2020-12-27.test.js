const twentyTwenty = '2020'.split('');

function find2020(str) {
  for (let i = 0; i <= str.length - twentyTwenty.length; i++) {
    const found = twentyTwenty.every((char, j) => str[i + j] === char);
    if (found) {
      return i;
    }
  }
  return -1;
}

test('find2020', () => {
  expect(find2020('2220000202220020200')).toBe(14);
});
