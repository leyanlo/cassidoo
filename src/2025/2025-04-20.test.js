function calculateIngredients(ingredients, targetServings) {
  return ingredients.map((i) => ({
    name: i.name,
    amount: i.amount * targetServings,
  }));
}

test('calculateIngredients', () => {
  const ingredients = [
    { name: 'flour', amount: 200 }, // 200g per
    { name: 'sugar', amount: 100 }, // 100g per
    { name: 'eggs', amount: 2 }, // 2 eggs per
  ];
  const targetServings = 3;

  expect(calculateIngredients(ingredients, targetServings)).toStrictEqual([
    { name: 'flour', amount: 600 },
    { name: 'sugar', amount: 300 },
    { name: 'eggs', amount: 6 },
  ]);
});
