const $C = require('../utils/combinatorics');

const NUMS = [...Array(13).keys()].map((i) => i + 1);

// R = red, U = blue, B = black, Y = yellow
const COLORS = ['R', 'U', 'B', 'Y'];

const TILES = NUMS.flatMap((n) =>
  COLORS.flatMap((color) => Array(2).fill(`${n}${color}`))
).concat(...Array(2).fill('wildcard'));

// Fisher–Yates shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function createTray() {
  return shuffle([...TILES]).slice(0, 14);
}

function validSets(tray) {
  const wildcards = tray.filter((tile) => tile === 'wildcard');
  const nonWildcards = tray.filter((tile) => tile !== 'wildcard');

  const sames = NUMS.flatMap((n) => {
    const matches = nonWildcards.filter((tile) => +tile.match(/\d+/)[0] === n);
    const colors = matches.map((tile) => tile.match(/\D+/)[0]);
    const uniques = [...new Set(colors)].map((color) => `${n}${color}`);
    return [
      ...$C.Combination.of([...uniques, ...wildcards], 3),
      ...$C.Combination.of([...uniques, ...wildcards], 4),
    ];
  });

  const runs = COLORS.flatMap((color) => {
    const matchesColor = nonWildcards.filter(
      (tile) => tile.match(/\D+/)[0] === color
    );
    const nums = matchesColor.map((tile) => +tile.match(/\d+/)[0]);
    const uniques = [...new Set(nums)].map((num) => `${num}${color}`);
    const allRunCombos = [];
    for (let start = 0; start < NUMS.length - 3; start++) {
      for (let end = start + 3; end < NUMS.length; end++) {
        const matchesRun = NUMS.slice(start, end)
          .filter((n) => uniques.find((tile) => +tile.match(/\d+/)[0] === n))
          .map((n) => `${n}${color}`);
        const runCombos = [
          ...$C.Combination.of([...matchesRun, ...wildcards], end - start),
        ];
        if (!runCombos.length) {
          // there are no more runs beginning at start
          break;
        }
        allRunCombos.push(...runCombos);
      }
    }
    // return only unique runs
    return [...new Set(allRunCombos.map((tiles) => tiles.join()))].map((key) =>
      key.split(',')
    );
  });

  return [...sames, ...runs];
}

describe('validSets', () => {
  it('handles sames', () => {
    // has no sets
    expect(validSets(['1R', '1U'])).toStrictEqual([]);
    expect(validSets(['1R', '1U', '1U'])).toStrictEqual([]);
    expect(validSets(['1R', 'wildcard'])).toStrictEqual([]);

    // has sets
    expect(validSets(['1R', '1U', '1B'])).toStrictEqual([['1R', '1U', '1B']]);
    expect(validSets(['1R', '1U', '1B', '1B'])).toStrictEqual([
      ['1R', '1U', '1B'],
    ]);
    expect(validSets(['1R', '1U', '1B', '1Y'])).toStrictEqual([
      ['1R', '1U', '1B'],
      ['1R', '1U', '1Y'],
      ['1R', '1B', '1Y'],
      ['1U', '1B', '1Y'],
      ['1R', '1U', '1B', '1Y'],
    ]);

    // has sets using wildcard
    expect(validSets(['1R', '1U', 'wildcard'])).toStrictEqual([
      ['1R', '1U', 'wildcard'],
    ]);
    expect(validSets(['1R', '1U', '1B', 'wildcard'])).toStrictEqual([
      ['1R', '1U', '1B'],
      ['1R', '1U', 'wildcard'],
      ['1R', '1B', 'wildcard'],
      ['1U', '1B', 'wildcard'],
      ['1R', '1U', '1B', 'wildcard'],
    ]);
    expect(validSets(['1R', '1U', '1B', '1Y', 'wildcard'])).toStrictEqual([
      ['1R', '1U', '1B'],
      ['1R', '1U', '1Y'],
      ['1R', '1U', 'wildcard'],
      ['1R', '1B', '1Y'],
      ['1R', '1B', 'wildcard'],
      ['1R', '1Y', 'wildcard'],
      ['1U', '1B', '1Y'],
      ['1U', '1B', 'wildcard'],
      ['1U', '1Y', 'wildcard'],
      ['1B', '1Y', 'wildcard'],
      ['1R', '1U', '1B', '1Y'],
      ['1R', '1U', '1B', 'wildcard'],
      ['1R', '1U', '1Y', 'wildcard'],
      ['1R', '1B', '1Y', 'wildcard'],
      ['1U', '1B', '1Y', 'wildcard'],
    ]);
  });

  it('handles runs', () => {
    // has no runs
    expect(validSets(['1R', '2R'])).toStrictEqual([]);
    expect(validSets(['1R', '2R', '2R'])).toStrictEqual([]);
    expect(validSets(['1R', 'wildcard'])).toStrictEqual([]);

    // has runs
    expect(validSets(['1R', '2R', '3R'])).toStrictEqual([['1R', '2R', '3R']]);
    expect(validSets(['1R', '2R', '3R', '3R'])).toStrictEqual([
      ['1R', '2R', '3R'],
    ]);
    expect(validSets(['1R', '2R', '3R', '4R'])).toStrictEqual([
      ['1R', '2R', '3R'],
      ['1R', '2R', '3R', '4R'],
      ['2R', '3R', '4R'],
    ]);

    // has runs using wildcard
    expect(validSets(['2R', '3R', 'wildcard'])).toStrictEqual([
      ['2R', '3R', 'wildcard'],
    ]);
    expect(validSets(['2R', '3R', '4R', 'wildcard'])).toStrictEqual([
      ['2R', '3R', 'wildcard'],
      ['2R', '3R', '4R', 'wildcard'],
      ['2R', '3R', '4R'],
      ['2R', '4R', 'wildcard'],
      ['3R', '4R', 'wildcard'],
    ]);
    expect(validSets(['2R', '3R', '4R', 'wildcard', '6R'])).toStrictEqual([
      ['2R', '3R', 'wildcard'],
      ['2R', '3R', '4R', 'wildcard'],
      ['2R', '3R', '4R'],
      ['2R', '4R', 'wildcard'],
      ['3R', '4R', 'wildcard'],
      ['2R', '3R', '4R', '6R', 'wildcard'],
      ['3R', '4R', '6R', 'wildcard'],
      ['4R', '6R', 'wildcard'],
    ]);
  });
});
