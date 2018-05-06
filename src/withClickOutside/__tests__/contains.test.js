import contains from '../contains';

const { test } = global;

test('parent contains child', () => {
  const div = global.document.createElement('div');
  global.document.body.appendChild(div);

  const span = global.document.createElement('span');
  div.appendChild(span);

  expect(contains(div, span)).toBe(true);
});

test('parent does not contains child', () => {
  const div = global.document.createElement('div');
  global.document.body.appendChild(div);

  const span = global.document.createElement('span');
  global.document.body.appendChild(span);

  expect(contains(div, span)).toBe(false);
});
