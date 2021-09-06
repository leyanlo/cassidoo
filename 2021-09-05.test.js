const zeroCodePoint = '0'.codePointAt(0);

function parse(n) {
  let parsed = 0;
  for (let i = 0; i < n.length; i++) {
    parsed += 10 ** i * (n.codePointAt(n.length - 1 - i) - zeroCodePoint);
  }
  return parsed;
}

function stringProduct(n1, n2) {
  const parsedN1 = parse(n1);
  const parsedN2 = parse(n2);
  return (parsedN1 * parsedN2).toString(10);
}

test('stringProduct', () => {
  expect(stringProduct('123', '456')).toBe('56088');
});
