"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButton = function (_ThemedComponent) {
  (0, _inherits3.default)(IconButton, _ThemedComponent);

  function IconButton(props, context) {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: _styles2.default
    }));
  }

  IconButton.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        isRotated = _props.isRotated,
        other = (0, _objectWithoutProperties3.default)(_props, ["children", "className", "isRotated"]);

    var theme = this.theme;

    return _react2.default.createElement(
      _Button2.default,
      (0, _extends3.default)({ className: (0, _classnames2.default)(theme.button, className) }, other),
      typeof children === "string" ? children : _react2.default.cloneElement(_react.Children.only(children), {
        className: (0, _classnames2.default)(theme.icon, (_classNames = {}, _classNames[theme.rotated] = isRotated, _classNames))
      })
    );
  };

  return IconButton;
}(_ThemedComponent3.default);

IconButton.propTypes = {
  autoFocus: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element.isRequired, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  danger: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  isRotated: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  pill: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: _propTypes2.default.oneOf(["default", "primary", "basic"])
};
exports.default = IconButton;