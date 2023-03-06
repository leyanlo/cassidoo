// Fisher–Yates shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function scramble(sentence) {
  return sentence.replaceAll(/\w(\w\w+)\w/g, (word, inside) => {
    let shuffled;
    do {
      shuffled = shuffle(inside.split('')).join('');
    } while (shuffled === inside);
    return [word[0], shuffled, word.at(-1)].join('');
  });
}

console.log(scramble('A quick brown fox jumped over the lazy dog.'));
