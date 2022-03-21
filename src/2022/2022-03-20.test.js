function smallestTimeInterval(times) {
  const minutes = times
    .map((time) => time.split(':').map(Number))
    .map(([h, m]) => 60 * h + m)
    .sort((a, b) => a - b);
  let minInterval = minutes[1] - minutes[0];
  for (let i = 1; i < minutes.length - 1; i++) {
    minInterval = Math.min(minInterval, minutes[i + 1] - minutes[i]);
  }
  return `${minInterval} minutes`;
}

test('smallestTimeInterval', () => {
  expect(
    smallestTimeInterval(['01:00', '08:15', '11:30', '13:45', '14:10', '20:05'])
  ).toBe('25 minutes');
});
