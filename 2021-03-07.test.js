function getCounts(board) {
  let xCount = 0;
  let oCount = 0;
  for (let row of board) {
    for (let char of row.split('')) {
      if (char === 'X') {
        xCount++;
      } else if (char === 'O') {
        oCount++;
      }
    }
  }
  return { xCount, oCount };
}

const winConfigs = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function getWinners(board) {
  let xWin = false;
  let oWin = false;
  for (let [[r1, c1], [r2, c2], [r3, c3]] of winConfigs) {
    if (board[r1][c1] === board[r2][c2] && board[r2][c2] === board[r3][c3]) {
      if (board[r1][c1] === 'X') {
        xWin = true;
      } else if (board[r1][c1] === 'O') {
        oWin = true;
      }
    }
  }
  return { xWin, oWin };
}

function validTTTPosition(board) {
  const { xCount, oCount } = getCounts(board);
  const { xWin, oWin } = getWinners(board);
  // either it is O’s turn and X hasn’t won, or it is X’s turn and O hasn’t won
  return (xCount === oCount && !xWin) || (xCount === oCount + 1 && !oWin);
}

test('validTTTPosition', () => {
  expect(validTTTPosition(['XOX', ' X ', '   '])).toBe(false);
  expect(validTTTPosition(['XOX', 'O O', 'XOX'])).toBe(true);
  expect(validTTTPosition(['OOO', '   ', 'XXX'])).toBe(false);
  expect(validTTTPosition(['  O', '   ', '   '])).toBe(false);
});
