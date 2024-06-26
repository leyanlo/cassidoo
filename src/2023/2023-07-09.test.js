function justifyText(arr, width) {
  const lines = [];
  let lineLength = 0;
  let start = 0;
  let end = 0;
  while (end <= arr.length) {
    if (
      end !== arr.length &&
      lineLength + end - start + arr[end].length <= width
    ) {
      lineLength += arr[end].length;
    } else {
      let line = '';
      let lineSpaces = width - lineLength;
      for (let i = start; i < end; i++) {
        const chunkSpaces = Math.ceil(lineSpaces / (end - i - 1 || 1));
        line += arr[i].padEnd(chunkSpaces + arr[i].length);
        lineSpaces -= chunkSpaces;
      }
      lines.push(line);
      lineLength = arr[end]?.length ?? 0;
      start = end;
    }
    end++;
  }
  return lines;
}

test('justifyText', () => {
  // prettier-ignore
  expect(justifyText(["This", "is", "an", "example", "of", "text", "justification."], 16)).toStrictEqual([
    "This    is    an",
    "example  of text",
    "justification.  "
  ])
});
