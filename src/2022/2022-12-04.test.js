// prettier-ignore
const hexes = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 'A', 'A', 'B', 'B', 'C', '.'];

const dirs = [
  [-1, -1],
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
  [1, 1],
];

// Durstenfeld shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function checkBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const hex1 = board[i][j];
      if (hex1 !== 6 && hex1 !== 8) {
        continue;
      }
      for (const [di, dj] of dirs) {
        const hex2 = board[i + di]?.[j + dj];
        if (hex2 === 6 || hex2 === 8) {
          return false;
        }
      }
    }
  }
  return true;
}

function createBoard() {
  let board;
  do {
    const shuffled = shuffle([...hexes]);
    board = [
      shuffled.slice(0, 3),
      shuffled.slice(3, 7),
      shuffled.slice(7, 12),
      shuffled.slice(12, 16),
      shuffled.slice(16),
    ];
  } while (!checkBoard(board));
  return board;
}

function toString(board) {
  return `  ${board[0].join(' ')}
 ${board[1].join(' ')}
${board[2].join(' ')}
 ${board[3].join(' ')}
  ${board[4].join(' ')}`;
}

test('createBoard', () => {
  const board = createBoard();
  expect(checkBoard(board)).toBe(true);
  console.log(toString(board));
});
