function fromTo(start, end) {
  const gen = (function* (start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  })(start, end);
  return () => gen.next().value;
}

test('fromTo', () => {
  let gen = fromTo(5, 7);
  expect(gen()).toBe(5);
  expect(gen()).toBe(6);
  expect(gen()).toBe(7);
  expect(gen()).toBeUndefined();
});
