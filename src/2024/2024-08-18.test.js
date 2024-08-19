function calculateExecutionTimes(logs) {
  const times = {};
  for (const { name, time, event } of logs) {
    if (event === 'start') {
      times[name] = -time;
    } else {
      times[name] += time;
    }
  }
  return times;
}

test('calculateExecutionTimes', () => {
  expect(
    calculateExecutionTimes([
      { name: 'main', time: 0, event: 'start' },
      { name: 'subTask1', time: 5, event: 'start' },
      { name: 'subTask1', time: 10, event: 'end' },
      { name: 'subTask2', time: 15, event: 'start' },
      { name: 'subTask2', time: 20, event: 'end' },
      { name: 'main', time: 25, event: 'end' },
    ])
  ).toStrictEqual({ main: 25, subTask1: 5, subTask2: 5 });
});
