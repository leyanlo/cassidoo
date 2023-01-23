function missingBits(list) {
  for (let i = 0; i < list.length - 1; i++) {
    switch (list[i + 1] - list[i]) {
      case 1:
        break;
      case 2:
        list.splice(i + 1, 0, list[i] + 1);
        i++;
        break;
      default:
        list.splice(i + 1, 0, '...');
        i++;
        break;
    }
  }
  return JSON.stringify(list).replaceAll('"', '');
}

test('missingBits', () => {
  expect(missingBits([1, 2, 3, 4, 20, 21, 22, 23])).toBe(
    '[1,2,3,4,...,20,21,22,23]'
  );
  expect(missingBits([1, 2, 3, 5, 6])).toBe('[1,2,3,4,5,6]');
  expect(missingBits([1, 3, 20, 27])).toBe('[1,2,3,...,20,...,27]');
});
