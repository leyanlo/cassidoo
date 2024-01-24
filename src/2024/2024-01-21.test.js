class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(getDepth(node.left), getDepth(node.right));
}

function printTree(node) {
  const depth = getDepth(node);
  const lines = [''];
  let curr = [node];
  for (let i = 0; i < depth; i++) {
    const values = `${' '.repeat(2 ** (depth - i) - 2)}${curr
      .map((n) => n?.value ?? ' ')
      .join(' '.repeat(2 ** (1 + depth - i) - 1))}`.trimEnd();
    const slashes = `${' '.repeat(3 * 2 ** (depth - i - 2) - 2)}${curr
      .map((n) =>
        [n?.left ? '/' : ' ', n?.right ? '\\' : ' '].join(
          ' '.repeat(2 ** (depth - i - 1) - 1)
        )
      )
      .join(' '.repeat(3 * 2 ** (depth - i - 1) - 1))}`.trimEnd();
    lines.push(values, slashes);
    curr = curr.flatMap((n) => [n?.left, n?.right]);
  }
  return lines.join('\n');
}

test('getDepth', () => {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);

  expect(getDepth(root)).toBe(3);

  root.right.left = new Node(6);
  root.right.right = new Node(7);
  expect(getDepth(root)).toBe(3);

  root.right.right.right = new Node(8);
  expect(getDepth(root)).toBe(4);
});

test('printTree', () => {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);

  expect(printTree(root)).toBe(`
      1
    /   \\
  2       3
 / \\
4   5
`);

  root.right.left = new Node(6);
  root.right.right = new Node(7);
  expect(printTree(root)).toBe(`
      1
    /   \\
  2       3
 / \\     / \\
4   5   6   7
`);

  root.right.right.right = new Node(8);
  expect(printTree(root)).toBe(`
              1
          /       \\
      2               3
    /   \\           /   \\
  4       5       6       7
                           \\
                            8
`);

  root.right.right.right.right = new Node(9);
  expect(printTree(root)).toBe(`
                              1
                      /               \\
              2                               3
          /       \\                       /       \\
      4               5               6               7
                                                        \\
                                                          8
                                                           \\
                                                            9
`);
});
