function maxSubarray(arr, n) {
  let sum = arr.slice(0, n).reduce((acc, n) => acc + n);
  let maxSum = sum;
  let maxI = 0;
  for (let i = 1; i < arr.length - n + 1; i++) {
    sum += arr[i + n - 1] - arr[i - 1];
    if (sum > maxSum) {
      maxI = i;
      maxSum = sum;
    }
  }
  return arr.slice(maxI, maxI + n);
}

test('maxSubarray', () => {
  expect(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)).toEqual([1, 2, 3, 6]);
  expect(maxSubarray([1, 2, 0, 5], 2)).toEqual([0, 5]);
});
