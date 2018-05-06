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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('WrappedComponent', function () {
  it('Test WrappedComponent', function () {
    var NewDropDown = (0, _2.default)(_DropDown2.default, 'idDropDown');
    var div = global.document.createElement('div');
    global.document.body.appendChild(div);
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(NewDropDown, null), { attachTo: div });

    expect(wrapper.children().props().outside).toBe(false);
    expect(wrapper.children().props().id).toBe('idDropDown');

    var btnDropDown = wrapper.find('#btnDropDown');
    btnDropDown.simulate('click');

    // Open drop down list items
    var expectHtmlDropDown = '<div><button id="btnOutside">outside</button><div id="idDropDown" style="display: inline-block; background: orange;"><button id="btnDropDown">DropDown Button</button><div><button id="button_1">1</button><button id="button_1">2</button><button id="button_1">3</button><button id="button_1">4</button></div></div></div>';
    expect(wrapper.html()).toBe(expectHtmlDropDown);

    // Clicking drop down item
    var item1 = wrapper.find('#button_1').at(0);
    item1.simulate('click');
    expect(wrapper.html()).toBe(expectHtmlDropDown);

    var btnOutside = wrapper.find('#btnOutside');
    btnOutside.simulate('click');

    var componentWillReceivePropsSpy = (0, _sinon.spy)(_DropDown2.default.prototype, 'componentWillReceiveProps');

    expect(_DropDown2.default.prototype.componentWillReceiveProps.calledOnce).toBe(false);
    wrapper.setProps({
      outside: true
    });
    expect(_DropDown2.default.prototype.componentWillReceiveProps.calledOnce).toBe(true);

    var expectHtml = '<div><button id="btnOutside">outside</button><div id="idDropDown" style="display: inline-block; background: orange;"><button id="btnDropDown">DropDown Button</button></div></div>';
    expect(wrapper.html()).toBe(expectHtml);

    expect(wrapper.children().props().outside).toBe(true);
    expect(wrapper.children().props().id).toBe('idDropDown');

    // reset componentWillReceivePropsSpy
    componentWillReceivePropsSpy.restore();
  });
});