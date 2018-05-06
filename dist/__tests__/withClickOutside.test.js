'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _sinon = require('sinon');

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _DropDown = require('../../DropDown');

var _DropDown2 = _interopRequireDefault(_DropDown);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _contains = require('../contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

jest.mock('../contains');


describe('H.O.C withClickOutside', function () {
  it('withClickOutside', function () {
    var NewDropDown = (0, _2.default)(_DropDown2.default, 'idDropDown');
    var div = global.document.createElement('div');
    global.document.body.appendChild(div);
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(NewDropDown, null), { attachTo: div });
    expect(wrapper.state().outside).toBe(false);

    _contains2.default.mockImplementation(function () {
      return false;
    });
    global.document.dispatchEvent(new Event('click'));
    expect(wrapper.state().outside).toBe(true);

    _contains2.default.mockImplementation(function () {
      return true;
    });
    global.document.dispatchEvent(new Event('click'));
    expect(wrapper.state().outside).toBe(false);
  });

  it('should call componentWillUnmount', function () {
    var NewDropDown = (0, _2.default)(_DropDown2.default, 'idDropDown');
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(NewDropDown, null));
    var componentWillReceivePropsSpy = (0, _sinon.spy)(NewDropDown.prototype, 'componentWillUnmount');
    wrapper.unmount();
    expect(NewDropDown.prototype.componentWillUnmount.calledOnce).toBe(true);
  });

  it('should throw exception componentDidMount', function () {
    try {
      var NewDropDown = (0, _2.default)(_DropDown2.default);
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(NewDropDown, null));
    } catch (e) {
      expect('withClickOutside - Missing "id" of element').toBe('withClickOutside - Missing "id" of element');
    }
  });
});