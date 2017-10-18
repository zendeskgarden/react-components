"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _react = require("react");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendStyles = function extendStyles(styles, theme, namespace) {
  var _ref = theme || {},
      themeStyles = _ref[namespace];

  if (themeStyles) {
    var _extendStyles = {};

    (0, _keys2.default)(styles).forEach(function (key) {
      _extendStyles[key] = key in themeStyles ? styles[key] + " " + themeStyles[key] : styles[key];
    });

    return _extendStyles;
  } else {
    return styles;
  }
};

var ThemedComponent = function (_Component) {
  (0, _inherits3.default)(ThemedComponent, _Component);

  function ThemedComponent(props, context, _ref2) {
    var namespace = _ref2.namespace,
        styles = _ref2.styles;
    (0, _classCallCheck3.default)(this, ThemedComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.theme = extendStyles(styles, context.rcTheme, namespace);
    return _this;
  }

  return ThemedComponent;
}(_react.Component);

ThemedComponent.contextTypes = {
  rcTheme: _propTypes2.default.object
};
exports.default = ThemedComponent;