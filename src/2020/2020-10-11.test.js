// cassidoo 10/11/2020 O(n) solution with validation
// https://buttondown.email/cassidoo/archive/4b882f72-2fc1-4b77-b574-0118a37f480c

function getValue(operator, a, b) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}

function babyLisp(expression) {
  if (!expression) throw new Error('Missing expression');

  const stack = [];
  const tokens = expression.split(' ');

  while (tokens.length > 0) {
    const [, token, closingParens] =
      /^([^)]+)+(\)*)/.exec(tokens.shift()) ?? [];
    if (!token) break;

    if (token.startsWith('(')) {
      const operator = token.substring(1);
      if (!operator) throw new Error(`Missing operator`);
      stack.push([operator]);
      continue;
    }

    let top = stack[stack.length - 1];
    if (!top) throw new Error(`Missing opening parenthesis`);
    if (top.length === 1) {
      top.push(Number(token));
      continue;
    }

    // top.length === 2
    top.push(Number(token));
    if (!closingParens) break;
    for (let i = 0; i < closingParens.length; ++i) {
      const value = getValue(...top);
      stack.pop();
      if (stack.length === 0) {
        if (tokens.length > 0)
          throw new Error(
            `Expression continues after last closing parenthesis`
          );
        if (i !== closingParens.length - 1)
          throw new Error(`Too many closing parentheses`);
        return value;
      }
      top = stack[stack.length - 1];
      top.push(value);
    }
  }

  switch (stack[stack.length - 1].length) {
    case 0:
      throw new Error(`Missing opening parenthesis`);
    case 1:
      throw new Error(`Missing first operand`);
    case 2:
      throw new Error(`Missing second operand`);
    default:
      throw new Error(`Missing closing parenthesis`);
  }
}

it('works', () => {
  expect(babyLisp('(add 1 2)')).toBe(3);
  expect(babyLisp('(multiply 4 (add 2 3))')).toBe(20);
  expect(babyLisp('(subtract (multiply 4 (add 2 3)) 5)')).toBe(15);
  expect(
    babyLisp('(divide (subtract (multiply 4 (add 2 3)) 5) (add 1 2))')
  ).toBe(5);
});

it('validates', () => {
  expect(() => babyLisp('')).toThrow('Missing expression');
  expect(() => babyLisp('foo')).toThrow('Missing opening parenthesis');
  expect(() => babyLisp('(')).toThrow('Missing operator');
  expect(() => babyLisp('(add')).toThrow('Missing first operand');
  expect(() => babyLisp('(add 1')).toThrow('Missing second operand');
  expect(() => babyLisp('(add 1 2')).toThrow('Missing closing parenthesis');
  expect(() => babyLisp('(add 1 2))')).toThrow('Too many closing parentheses');
  expect(() => babyLisp('(add 1 2) 3')).toThrow(
    'Expression continues after last closing parenthesis'
  );
  expect(() => babyLisp('(modulo 1 2)')).toThrow('Invalid operator: modulo');
});
