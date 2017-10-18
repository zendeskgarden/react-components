"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButton = function (_ThemedComponent) {
  (0, _inherits3.default)(CloseButton, _ThemedComponent);

  function CloseButton(props, context) {
    (0, _classCallCheck3.default)(this, CloseButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: _styles2.default
    }));

    _this.state = { focused: false };
    return _this;
  }

  CloseButton.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var onClick = this.props.onClick;
    var focused = this.state.focused;


    return _react2.default.createElement("button", {
      "aria-label": "close",
      className: (0, _classnames2.default)(_styles2.default.close, (_classNames = {}, _classNames[_styles2.default.close_focused] = focused, _classNames)),
      onBlur: function onBlur() {
        return _this2.setState({ focused: false });
      },
      onClick: onClick,
      onFocus: function onFocus() {
        return _this2.setState({ focused: true });
      }
    });
  };

  return CloseButton;
}(_ThemedComponent3.default);

CloseButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired
};
exports.default = CloseButton;