function everyOther(str) {
  let nDelete = 0;
  let prevChar = str[0];
  for (let i = 1; i < str.length; ++i) {
    const char = str[i];
    nDelete += char === prevChar;
    prevChar = char;
  }
  return nDelete;
}

console.log(everyOther('xxyxxy'));
console.log(everyOther('yyyyy'));
