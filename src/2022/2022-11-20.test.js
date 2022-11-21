function verticalSlashes(str) {
  let indent = 0;
  let prevChar = str[0];
  let lines = [prevChar];
  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    indent += prevChar !== char ? 0 : char === '\\' ? 1 : -1;
    prevChar = char;
    lines.push(char.padStart(indent + 1));
  }
  return lines.join('\n');
}

test('verticalSlashes', () => {
  expect(verticalSlashes('\\\\\\//\\/\\\\')).toBe(`\\
 \\
  \\
  /
 /
 \\
 /
 \\
  \\`);
  expect(verticalSlashes('\\\\\\\\')).toBe(`\\
 \\
  \\
   \\`);
});
