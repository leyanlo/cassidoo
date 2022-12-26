function replaceZeros(str) {
  return +str.replace(/0+/g, (substring) => {
    return substring.length;
  });
}

test('replaceZeros', () => {
  expect(replaceZeros('1234500362000440')).toBe(1234523623441);
  expect(replaceZeros('123450036200044')).toBe(123452362344);
  expect(replaceZeros('000000000000')).toBe(12);
  expect(replaceZeros('123456789')).toBe(123456789);
});
