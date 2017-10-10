import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import Core from "./Core";

import styles from "./styles";

var Button = function (_ThemedComponent) {
  _inherits(Button, _ThemedComponent);

  function Button(props, context) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: styles
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
        danger = _props.danger,
        disabled = _props.disabled,
        stretched = _props.stretched,
        pill = _props.pill,
        size = _props.size,
        type = _props.type,
        other = _objectWithoutProperties(_props, ["className", "children", "danger", "disabled", "stretched", "pill", "size", "type"]);

    var _state = this.state,
        focused = _state.focused,
        active = _state.active;
    var theme = this.theme;


    var typeStyle = theme["type_" + type];
    return React.createElement(
      Core,
      _extends({}, other, {
        disabled: disabled,
        onBlur: this.onBlur,
        onKeyUp: this.onKeyUp,
        onKeyboardFocus: this.onKeyboardFocus,
        onSubmitKeyPressed: this.onSubmitKeyPressed,
        className: classNames(theme["size_" + size], (_classNames = {}, _classNames[typeStyle] = typeStyle, _classNames[theme.focused] = focused, _classNames[theme.pill] = pill, _classNames[theme.stretched] = stretched, _classNames[theme.disabled] = disabled, _classNames[theme.active] = active, _classNames[theme.danger] = danger, _classNames), className)
      }),
      children
    );
  };

  return Button;
}(ThemedComponent);

Button.Core = Core;
Button.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  pill: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  stretched: PropTypes.bool,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["default", "primary", "basic", "anchor"])
};
Button.defaultProps = {
  tabIndex: 0,
  type: "default",
  size: "small"
};
export default Button;