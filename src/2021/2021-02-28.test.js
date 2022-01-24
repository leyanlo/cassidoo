function numberOfCans(room, canCoverage) {
  return Math.ceil(
    (2 * room.height * (room.length + room.width)) / canCoverage
  );
}

test('numberOfCans', () => {
  expect(numberOfCans({ length: 12, width: 10, height: 9 }, 200)).toBe(2);
});
