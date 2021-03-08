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

function getWinners(board) {
  let xWin = false;
  let oWin = false;
  for (let row of board) {
    if (row === 'XXX') {
      xWin = true;
    } else if (row === 'OOO') {
      oWin = true;
    }
  }
  for (let c = 0; c < 3; c++) {
    if (board[0][c] === board[1][c] && board[1][c] === board[2][c]) {
      if (board[0][c] === 'X') {
        xWin = true;
      } else if (board[0][c] === 'O') {
        oWin = true;
      }
    }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === 'X') {
      xWin = true;
    } else if (board[0][0] === 'O') {
      oWin = true;
    }
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === 'X') {
      xWin = true;
    } else if (board[0][2] === 'O') {
      oWin = true;
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
