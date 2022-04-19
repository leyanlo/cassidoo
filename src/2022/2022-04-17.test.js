function largestSubarraySum(arr, n) {
  let start = 0;
  for (let i = n; i < arr.length; i++) {
    if (arr[i] > arr[i - n - 1]) {
      start = i;
    }
  }
  return arr.slice(start, n);
}

test('largestSubarraySum', () => {
  expect(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3)).toEqual([9, 2, 6]);
});
