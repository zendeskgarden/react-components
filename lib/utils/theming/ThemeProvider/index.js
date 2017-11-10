"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);

  function ThemeProvider() {
    (0, _classCallCheck3.default)(this, ThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        theme = _props.theme,
        resetTheme = _props.resetTheme;

    return { rcTheme: theme, resetTheme: resetTheme };
  };

  ThemeProvider.prototype.render = function render() {
    var children = this.props.children;


    return children;
  };

  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  resetTheme: _propTypes2.default.bool
};
ThemeProvider.childContextTypes = {
  rcTheme: _propTypes2.default.object,
  resetTheme: _propTypes2.default.bool
};
exports.default = ThemeProvider;