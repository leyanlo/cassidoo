function toString(n) {
  const adds = [];
  const deletes = [];
  for (const char of n) {
    switch (char) {
      case '#':
        adds.pop();
        break;
      case '%':
        deletes.push('%');
        break;
      default:
        deletes.pop() ?? adds.push(char);
    }
  }
  return adds.join('');
}

function equalWithDeletions(n, m) {
  return toString(n) === toString(m);
}

test('equalWithDeletions', () => {
  expect(equalWithDeletions('a##x', '#a#x')).toBe(true); // both strings become "x"
  expect(
    equalWithDeletions('fi##f%%%th %%year #time###', 'fifth year time')
  ).toBe(false); // the first string becomes "fart"
});
