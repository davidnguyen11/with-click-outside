'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withClickOutside(Child, targetName) {
  var WrappedComponent = function (_React$Component) {
    _inherits(WrappedComponent, _React$Component);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      var _this = _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this));

      _this.detectClickOutside = function (e) {
        var parent = document.getElementById(targetName);
        if (!(0, _contains2.default)(parent, e.target)) {
          _this.setState({ outside: true });
        } else {
          _this.setState({ outside: false });
        }
      };

      _this.state = {
        outside: false
      };
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!document.getElementById(targetName)) {
          throw new Error('withClickOutside - Missing "id" of element');
        }
        document.addEventListener('click', this.detectClickOutside);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.detectClickOutside);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Child, _extends({}, this.state, this.props, { id: targetName }));
      }
    }]);

    return WrappedComponent;
  }(_react2.default.Component);

  return WrappedComponent;
}

exports.default = withClickOutside;