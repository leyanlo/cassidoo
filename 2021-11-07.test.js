function localPeaks(arr) {
  const peaks = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
}

test('localPeaks', () => {
  expect(localPeaks([1, 2, 3, 1])).toEqual([2]);
  expect(localPeaks([1, 3, 2, 3, 5, 6, 4])).toEqual([1, 5]);
});
