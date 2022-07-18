function hideEmail(email, { hideFull } = {}) {
  const [user, domain] = email.split('@');
  const [sld, ...tld] = domain.split('.');
  return [
    [...user].map((c, i) => (i >= 1 && i < user.length - 1 ? '*' : c)).join(''),
    [
      hideFull ? [...sld].map((c, i) => (i >= 1 ? '*' : c)).join('') : sld,
      ...tld,
    ].join('.'),
  ].join('@');
}

test('hideEmail', () => {
  expect(hideEmail('example@example.com')).toBe('e*****e@example.com');
  expect(hideEmail('example+test@example.co.uk', { hideFull: true })).toBe(
    'e**********t@e******.co.uk'
  );
  expect(hideEmail('e@e.co.uk', { hideFull: true })).toBe('e@e.co.uk');
  expect(hideEmail('ee@ee.co.uk', { hideFull: true })).toBe('ee@e*.co.uk');
  expect(hideEmail('eee@eee.co.uk', { hideFull: true })).toBe('e*e@e**.co.uk');
});
