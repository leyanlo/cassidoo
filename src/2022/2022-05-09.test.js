function whoOwes(receipts) {
  const map = {};
  for (const { name, paid } of receipts) {
    map[name] = (map[name] ?? 0) + paid;
  }
  const values = Object.values(map);
  const avg = ~~(values.reduce((acc, n) => acc + n) / values.length);
  const balances = Object.entries(map).map(([name, paid]) => [
    name,
    paid - avg,
  ]);
  const owes = [];
  while (balances.some(([, paid]) => paid !== 0)) {
    balances.sort(([, a], [, b]) => a - b);
    const ower = balances[0];
    const owee = balances[balances.length - 1];
    const amount = Math.min(-ower[1], owee[1]);
    if (!amount) break;
    ower[1] += amount;
    owee[1] -= amount;
    owes.push(`${ower[0]} owes ${owee[0]} $${amount}`);
  }
  return owes.join(', ');
}

test('whoOwes', () => {
  let receipts = [
    { name: 'Ximena', paid: 45 },
    { name: 'Clara', paid: 130 },
    { name: 'Ximena', paid: 100 },
    { name: 'Cassidy', paid: 140 },
    { name: 'Cassidy', paid: 76 },
    { name: 'Clara', paid: 29 },
    { name: 'Ximena', paid: 20 },
  ];
  expect(whoOwes(receipts)).toBe(
    'Clara owes Cassidy $21, Ximena owes Cassidy $15'
  );
  expect(whoOwes(receipts.slice(0, 2))).toBe('Ximena owes Clara $42');
  expect(whoOwes(receipts.slice(0, 3))).toBe('Clara owes Ximena $7');
  expect(whoOwes(receipts.slice(0, 4))).toBe(
    'Clara owes Ximena $7, Clara owes Cassidy $1'
  );
  expect(whoOwes(receipts.slice(0, 5))).toBe(
    'Clara owes Cassidy $33, Ximena owes Cassidy $18'
  );
  expect(whoOwes(receipts.slice(0, 6))).toBe(
    'Ximena owes Cassidy $28, Clara owes Cassidy $14'
  );
});
