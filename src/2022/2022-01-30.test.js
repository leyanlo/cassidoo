let humans = [
  { name: 'Clara', timezone: 'UTC-4:00' },
  { name: 'Cami', timezone: 'UTC-7:00' },
  { name: 'Ximena', timezone: 'UTC-5:00' },
];

function localTime(name, hour24) {
  const { timezone } = humans.find((human) => human.name === name);
  let [, dh, dm] = timezone.match(/^UTC([-+]\d+):(\d+)$/);
  dh = parseInt(dh);
  dm = parseInt(dm);
  const date = new Date(Date.now() + dh * 3_600_000 + dm * 60_000);
  const h = date.getHours();
  const m = date.getMinutes();
  return `${
    hour24 ? h.toString().padStart(2, '0') : ((h + 11) % 12) + 1
  }:${m.toString().padStart(2, '0')}${hour24 ? '' : h < 12 ? 'am' : 'pm'}`;
}

jest.useFakeTimers().setSystemTime(new Date('2022-01-31T05:26:00').getTime());

test('localTime', () => {
  expect(localTime('Clara')).toBe(`1:26am`);
  expect(localTime('Clara', true)).toBe(`01:26`);
  expect(localTime('Cami')).toBe(`10:26pm`);
  expect(localTime('Cami', true)).toBe(`22:26`);
  expect(localTime('Ximena')).toBe(`12:26am`);
  expect(localTime('Ximena', true)).toBe(`00:26`);
});
