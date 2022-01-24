function rotateBrackets(str) {
  let depth = 0;
  let minDepth = 0;
  let minDepthIdx = 0;
  for (let i = 1; i < str.length; i++) {
    const char = str[i - 1];
    depth += char === '[' ? 1 : -1;
    if (depth <= minDepth) {
      minDepth = depth;
      minDepthIdx = i;
    }
  }
  // string must start from the minimum depth
  return str.substr(minDepthIdx) + str.substr(0, minDepthIdx);
}

describe('rotateBrackets', () => {
  test('First rotation yields ‘[]][][‘. Second one yields ‘[[]][]’.', () => {
    expect(rotateBrackets(']][][[')).toBe('[[]][]');
  });
});
