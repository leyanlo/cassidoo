const fs = require('fs');

const height = +(
  fs.readFileSync('./merry-christmas.txt', 'utf8').trimEnd() || '25'
);

const tree = [...Array(height).keys()]
  .map((i) => {
    return Array(2 * i + 1)
      .fill('*')
      .join('')
      .padStart(i + height, ' ');
  })
  .join('\n');

fs.writeFileSync('./happy-holidays.txt', tree);
