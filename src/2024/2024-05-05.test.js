function wrap(string, length) {
  const lines = [];
  let start = 0;
  while (start < string.length) {
    let end = start + length - 1;
    while (!/[ 0-9A-Z]/i.test(string[end])) {
      end--;
    }
    if (!string[end] || string[end] === ' ') {
      lines.push(string.slice(start, end));
      start = end + 1;
    } else {
      lines.push(string.slice(start, end) + '-');
      start = end;
    }
  }
  return lines.join('\n');
}

test('wrap', () => {
  let string = 'Hello, world! I am hungry.';
  let length = 10;

  expect(wrap(string, length)).toBe(
    `Hello, wo-
rld! I am
hungry.`
  );
});
