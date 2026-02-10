function moveNums(arr, n) {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
    }
  }
  return arr;
}

test('moveNums', () => {
  expect(moveNums([0, 2, 0, 3, 10], 0)).toStrictEqual([2, 3, 10, 0, 0]);
  expect(moveNums([0, 0, 2, 0, 3, 10], 0)).toStrictEqual([2, 3, 10, 0, 0, 0]);
  expect(moveNums([2, 0, 3, 10], 0)).toStrictEqual([2, 3, 10, 0]);
  expect(moveNums([1, 1, 1], 0)).toStrictEqual([1, 1, 1]);
  expect(moveNums([0, 0, 0], 0)).toStrictEqual([0, 0, 0]);
});
