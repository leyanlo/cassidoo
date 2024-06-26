function makeSentence(str, dict) {
  const sentences = [];
  for (let word of dict) {
    if (str === word) {
      sentences.push(word);
    } else if (str.startsWith(word)) {
      const subSentences = makeSentence(str.substr(word.length), dict);
      for (let subSentence of subSentences) {
        sentences.push(`${word} ${subSentence}`);
      }
    }
  }
  return sentences;
}

test('makeSentence', () => {
  expect(
    makeSentence('penpineapplepenapple', [
      'apple',
      'pen',
      'applepen',
      'pine',
      'pineapple',
    ])
  ).toStrictEqual([
    'pen pine apple pen apple',
    'pen pine applepen apple',
    'pen pineapple pen apple',
  ]);
});
