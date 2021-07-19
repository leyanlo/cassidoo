function subarraySum(arr, n) {
  const sums = arr.map((num, i) => num + (arr[i - 1] ?? 0));
  let count = 0;
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] === n) {
      count++;
    }
    for (let j = i - 1; j >= 0; j--) {
      if (sums[i] - sums[j] === n) {
        count++;
      }
    }
  }
  return count;
}

test('subarraySum', () => {
  // arr[0...3], arr[1...4], arr[3...4]
  expect(subarraySum([10, 2, -2, -20, 10], -10)).toBe(3);
});
