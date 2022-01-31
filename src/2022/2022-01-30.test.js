let humans = [
  { name: 'Clara', timezone: 'UTC-4:00' },
  { name: 'Cami', timezone: 'UTC-7:00' },
  { name: 'Ximena', timezone: 'UTC-5:00' },
];

function localTime(name, hour24) {
  let [, dh, dm] = humans
    .find((h) => h.name === name)
    .timezone.match(/^UTC([-+]\d+):(\d+)$/);
  dh = parseInt(dh);
  dm = parseInt(dm);
  const t = new Date(Date.now() + dh * 3600000 + dm * 60000);
  const h = t.getHours();
  const m = t.getMinutes();
  return `${hour24 ? h : h % 12}:${m.toString().padStart(2, '0')}${
    hour24 ? '' : h < 12 ? 'am' : 'pm'
  }`;
}

jest.useFakeTimers().setSystemTime(new Date('2022-01-31T05:26:00').getTime());

test('localTime', () => {
  expect(localTime('Cami')).toBe(`10:26pm`);
  expect(localTime('Cami', true)).toBe(`22:26`);
});
