function maximizedArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])]
    .sort((a, b) => a - b)
    .slice(-arr1.length);
}

test('maximizedArray', () => {
  let arr1 = [7, 4, 10, 0, 1];
  let arr2 = [9, 7, 2, 3, 6];

  expect(maximizedArray(arr1, arr2)).toEqual([4, 6, 7, 9, 10]);
});
