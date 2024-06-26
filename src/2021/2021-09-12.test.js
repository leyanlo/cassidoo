function formParens(n) {
  let curr = [{ s: '', left: 0, right: 0 }];
  for (let i = 0; i < 2 * n; i++) {
    const next = [];
    for (let { s, left, right } of curr) {
      if (left < n) next.push({ s: s + '(', left: left + 1, right });
      if (right < left) next.push({ s: s + ')', left, right: right + 1 });
    }
    curr = next;
  }
  return curr.map(({ s }) => s);
}

test('formParens', () => {
  expect(formParens(3)).toStrictEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ]);
});
