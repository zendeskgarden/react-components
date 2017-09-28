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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Core = require("./Core");

var _Core2 = _interopRequireDefault(_Core);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_ThemedComponent) {
  (0, _inherits3.default)(Button, _ThemedComponent);

  function Button(props, context) {
    (0, _classCallCheck3.default)(this, Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: _styles2.default
    }));

    _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;


      _this.setState({
        focused: false,
        active: false
      });
      onBlur && onBlur(e);
    };

    _this.onKeyboardFocus = function (e) {
      _this.setState({ focused: true });
    };

    _this.onSubmitKeyPressed = function (e) {
      _this.setState({ active: true });
    };

    _this.onKeyUp = function (e) {
      var onKeyUp = _this.props.onKeyUp;


      _this.setState({ active: false });
      onKeyUp && onKeyUp(e);
    };

    _this.state = {
      focused: false,
      active: false
    };
    return _this;
  }

  Button.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        disabled = _props.disabled,
        stretched = _props.stretched,
        pill = _props.pill,
        size = _props.size,
        type = _props.type,
        other = (0, _objectWithoutProperties3.default)(_props, ["className", "children", "disabled", "stretched", "pill", "size", "type"]);
    var _state = this.state,
        focused = _state.focused,
        active = _state.active;
    var theme = this.theme;


    var typeStyle = theme["type_" + type];
    return _react2.default.createElement(
      _Core2.default,
      (0, _extends3.default)({}, other, {
        disabled: disabled,
        onBlur: this.onBlur,
        onKeyUp: this.onKeyUp,
        onKeyboardFocus: this.onKeyboardFocus,
        onSubmitKeyPressed: this.onSubmitKeyPressed,
        className: (0, _classnames2.default)(theme["size_" + size], (_classNames = {}, _classNames[typeStyle] = typeStyle, _classNames[theme.focused] = focused, _classNames[theme.pill] = pill, _classNames[theme.stretched] = stretched, _classNames[theme.disabled] = disabled, _classNames[theme.active] = active, _classNames), className)
      }),
      children
    );
  };

  return Button;
}(_ThemedComponent3.default);

Button.Core = _Core2.default;
Button.propTypes = {
  autoFocus: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  pill: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  stretched: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: _propTypes2.default.oneOf(["default", "primary", "basic", "anchor"])
};
Button.defaultProps = {
  tabIndex: 0,
  type: "default",
  size: "small"
};
exports.default = Button;