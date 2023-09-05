function minSubs(arr, k) {
  let minSum = arr.slice(0, k).reduce((acc, n) => acc + n);
  let minStart = 0;
  let currSum = minSum;
  for (let i = k; i < arr.length; i++) {
    currSum += arr[i] - arr[i - k];
    if (currSum < minSum) {
      minSum = currSum;
      minStart = i - k + 1;
    }
  }
  return arr.slice(minStart, minStart + k);
}

test('minSubs', () => {
  expect(minSubs([1, 3, 20, 4, 8, 9, 11], 3)).toEqual([4, 8, 9]);
  expect(minSubs([4, 4, 4, 4, 8], 2)).toEqual([4, 4]);
});
