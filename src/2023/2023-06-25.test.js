function missingLetters(arr) {
  const missings = [];
  let currCodePoint = arr[0].codePointAt(0) + 1;
  let currIdx = 1;
  while (currIdx < arr.length) {
    if (arr[currIdx].codePointAt(0) === currCodePoint) {
      currIdx++;
    } else {
      missings.push(String.fromCodePoint(currCodePoint));
    }
    currCodePoint++;
  }
  return missings;
}

test('missingLetters', () => {
  expect(missingLetters(['a', 'b', 'c', 'd', 'f'])).toEqual(['e']);
  expect(
    // prettier-ignore
    missingLetters(['a', 'b', 'c', 'd', 'e', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'])
  ).toEqual(['f', 'g', 'v']);
});
