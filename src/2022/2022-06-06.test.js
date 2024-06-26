function coinComboHelper(coins, amount, memo) {
  // assume coins sorted ascending
  if (amount < coins[0]) {
    return [];
  }
  // check from largest to smallest coin
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    if (amount === coin) {
      return [coin];
    }

    const nextAmount = amount - coin;
    memo[nextAmount] =
      memo[nextAmount] ?? coinComboHelper(coins, nextAmount, memo);
    const nextCombo = memo[nextAmount];
    if (nextCombo.length) {
      return [...nextCombo, coin];
    }
  }
  return [];
}

function coinCombo(coins, amount) {
  return coinComboHelper(
    coins.sort((a, b) => a - b),
    amount,
    {}
  );
}

test('coinCombo', () => {
  expect(coinCombo([2, 3, 5, 7], 17)).toStrictEqual([3, 7, 7]);
  expect(coinCombo([2, 3, 5], 11)).toStrictEqual([3, 3, 5]);
});
