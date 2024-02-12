function fromTo(a, b) {
  function* generator() {
    for (let i = a; i < b; i++) {
      yield i;
    }
  }
  const gen = generator();
  return () => gen.next().value ?? null;
}

test('fromTo', () => {
  let range = fromTo(0, 3);
  expect(range()).toBe(0);
  expect(range()).toBe(1);
  expect(range()).toBe(2);
  expect(range()).toBe(null);
});
