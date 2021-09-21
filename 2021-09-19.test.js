const { JSDOM } = require('jsdom');

// avoid parsing with regex: https://stackoverflow.com/a/1732454
function parseHTML(html) {
  const dom = new JSDOM(html);
  const body = dom.window.document.querySelector('body');
  const queue = [...body.children];
  const parsed = [];
  while (queue.length) {
    const el = queue.shift();
    const tag = el.tagName.toLowerCase();
    const attributes = [...el.attributes].map(({ name, value }) => ({
      [name]: value,
    }));
    parsed.push({
      tag,
      ...(attributes.length > 0 ? { attributes } : {}),
    });
    queue.push(...el.children);
  }
  return parsed;
}

test('parseHTML', () => {
  expect(
    parseHTML(`<p><img src="https://i.imgur.com/LSG9xg3.jpeg" /></p>`)
  ).toEqual([
    { tag: 'p' },
    { tag: 'img', attributes: [{ src: 'https://i.imgur.com/LSG9xg3.jpeg' }] },
  ]);
});
