function containedItems(str, start, end) {
  return str
    .substring(start, end)
    .match(/\|.*\|/)[0]
    .match(/\*/g).length;
}

test('containedItems', () => {
  let str = '|**|*|*';
  expect(containedItems(str, 0, 5)).toBe(2);
  expect(containedItems(str, 0, 6)).toBe(3);
  expect(containedItems(str, 1, 7)).toBe(1);
});
