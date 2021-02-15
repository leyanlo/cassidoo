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

const str = "penpineapplepenapple";
const dict = ["apple", "pen", "applepen", "pine", "pineapple"];

console.log(makeSentence(str, dict));
// [
//   "pen pine apple pen apple",
//   "pen pineapple pen apple",
//   "pen pine applepen apple",
// ];
