'use strict';

var _contains = require('../contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    test = _global.test;


test('parent contains child', function () {
  var div = global.document.createElement('div');
  global.document.body.appendChild(div);

  var span = global.document.createElement('span');
  div.appendChild(span);

  expect((0, _contains2.default)(div, span)).toBe(true);
});

test('parent does not contains child', function () {
  var div = global.document.createElement('div');
  global.document.body.appendChild(div);

  var span = global.document.createElement('span');
  global.document.body.appendChild(span);

  expect((0, _contains2.default)(div, span)).toBe(false);
});