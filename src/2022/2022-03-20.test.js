function smallestTimeInterval(times) {
  const minutes = times
    .map((time) => time.split(':').map(Number))
    .map(([h, m]) => 60 * h + m)
    .sort((a, b) => a - b);
  const intervals = minutes.slice(1).map((_, i) => minutes[i + 1] - minutes[i]);
  return `${Math.min(...intervals)} minutes`;
}

test('smallestTimeInterval', () => {
  expect(
    smallestTimeInterval(['01:00', '08:15', '11:30', '13:45', '14:10', '20:05'])
  ).toBe('25 minutes');
});
