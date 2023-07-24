function maximumProfit(arr) {
  let minBuy = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    minBuy = Math.min(minBuy, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minBuy);
  }
  return maxProfit;
}

test('maximumProfit', () => {
  expect(maximumProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});
