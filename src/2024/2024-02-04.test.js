function honeycomb(n) {
  const lines = [''];
  lines.push(`${' '.repeat(2 * n + 2)}${'_'.repeat(n)}`);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < n / 2 - 1; j++) {
      lines.push(
        `${' '.repeat(2 + j)}${i ? '\\' : ' '}${' '.repeat(
          2 * n - 2 - 2 * j
        )}/${' '.repeat(n + 2 * j)}\\${' '.repeat(2 * n - 2 - 2 * j)}${
          i ? '/' : ' '
        }`.trimEnd()
      );
    }
    lines.push(
      `${' '.repeat(n / 2 + 1)}${i ? '\\' : ' '}${'_'.repeat(n)}/${' '.repeat(
        2 * n - 2
      )}\\${'_'.repeat(n)}${i ? '/' : ' '}`.trimEnd()
    );
    for (let j = 0; j < n / 2 - 1; j++) {
      lines.push(
        `${' '.repeat(n / 2 + 1 - j)}${i < 2 ? '/' : ' '}${' '.repeat(
          n + 2 * j
        )}\\${' '.repeat(2 * n - 2 - 2 * j)}/${' '.repeat(n + 2 * j)}${
          i < 2 ? '\\' : ' '
        }`.trimEnd()
      );
    }
    lines.push(
      `  ${i < 2 ? '/' : ' '}${' '.repeat(2 * n - 2)}\\${'_'.repeat(
        n
      )}/${' '.repeat(2 * n - 2)}${i < 2 ? '\\' : ' '}`.trimEnd()
    );
  }

  return lines.join('\n');
}

test('honeycomb', () => {
  expect(honeycomb(2)).toBe(`
      __
   __/  \\__
  /  \\__/  \\
  \\__/  \\__/
  /  \\__/  \\
  \\__/  \\__/
     \\__/`);

  expect(honeycomb(4)).toBe(`
          ____
         /    \\
    ____/      \\____
   /    \\      /    \\
  /      \\____/      \\
  \\      /    \\      /
   \\____/      \\____/
   /    \\      /    \\
  /      \\____/      \\
  \\      /    \\      /
   \\____/      \\____/
        \\      /
         \\____/`);

  expect(honeycomb(6)).toBe(`
              ______
             /      \\
            /        \\
     ______/          \\______
    /      \\          /      \\
   /        \\        /        \\
  /          \\______/          \\
  \\          /      \\          /
   \\        /        \\        /
    \\______/          \\______/
    /      \\          /      \\
   /        \\        /        \\
  /          \\______/          \\
  \\          /      \\          /
   \\        /        \\        /
    \\______/          \\______/
           \\          /
            \\        /
             \\______/`);
});
