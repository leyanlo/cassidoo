function removeFolder(folders, remove) {
  return [
    ...new Set(
      folders
        .map((folder) => {
          const split = folder.split('/');
          const removeIdx = split.indexOf(remove);
          return removeIdx > -1 ? split.slice(0, removeIdx).join('/') : folder;
        })
        .filter(Boolean)
    ),
  ];
}

test('removeFolder', () => {
  expect(
    removeFolder(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f', '/c/f/g'], 'c')
  ).toEqual(['/a', '/a/b']);

  expect(
    removeFolder(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f', '/c/f/g'], 'd')
  ).toEqual(['/a', '/a/b', '/c', '/c/f', '/c/f/g']);
});
