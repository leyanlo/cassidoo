function repeatedGroups(nums) {
  const groups = [];
  let currGroup;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      currGroup = [];
      groups.push(currGroup);
    }
    currGroup.push(nums[i]);
  }
  return groups.filter((group) => group.length > 1);
}

test('repeatedGroups', () => {
  expect(repeatedGroups([1, 2, 2, 4, 5])).toStrictEqual([[2, 2]]);
  expect(repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])).toStrictEqual(
    [
      [1, 1],
      [0, 0],
      [4, 4, 4],
      [9, 9],
    ]
  );
});
