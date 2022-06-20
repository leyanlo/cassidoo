const PHI = (1 + Math.sqrt(5)) / 2;

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// https://en.wikipedia.org/wiki/Fibonacci_number#Identification
function isFibonacci(n) {
  return isSquare(5 * n ** 2 + 4) || isSquare(5 * n ** 2 - 4);
}

function prevFibonacci(n) {
  return isFibonacci(n) ? Math.round(n / PHI) : -1;
}

test('prevFibonacci', () => {
  expect(prevFibonacci(8)).toBe(5);
  expect(prevFibonacci(7)).toBe(-1);
  expect(prevFibonacci(6)).toBe(-1);
  expect(prevFibonacci(5)).toBe(3);
  expect(prevFibonacci(4)).toBe(-1);
  expect(prevFibonacci(3)).toBe(2);
  expect(prevFibonacci(2)).toBe(1);
  expect(prevFibonacci(1)).toBe(1);
});
