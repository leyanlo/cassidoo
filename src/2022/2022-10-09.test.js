function truncate(str, n) {
  return str.replace(new RegExp(`([a-z]{${n}})[a-z]+`, 'gi'), '$1');
}

test('truncate', () => {
  let n = 3;
  expect(truncate('never gonna give you up', n)).toBe('nev gon giv you up');
  expect(truncate('*hello* darkness, my ~old_friend', n)).toBe(
    '*hel* dar, my ~old_fri'
  );
});
