function stockQueue(snapshot) {
  const lastIdx = snapshot.reduce((lastIdx, stock, idx) => {
    lastIdx[stock.sym] = idx;
    return lastIdx;
  }, {});
  return snapshot.filter((stock, idx) => idx === lastIdx[stock.sym]);
}

snapshot = [
  { sym: "GME", cost: 280 },
  { sym: "PYPL", cost: 234 },
  { sym: "AMZN", cost: 3206 },
  { sym: "AMZN", cost: 3213 },
  { sym: "GME", cost: 325 },
];
console.log(stockQueue(snapshot));
// [
//   { sym: "PYPL", cost: 234 },
//   { sym: "AMZN", cost: 3213 },
//   { sym: "GME", cost: 325 },
// ];
