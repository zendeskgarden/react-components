import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Children } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ThemedComponent from "../utils/theming/ThemedComponent";

import Button from "../Button";

import styles from "./styles";

var IconButton = function (_ThemedComponent) {
  _inherits(IconButton, _ThemedComponent);

  function IconButton(props, context) {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: styles
    }));
  }

  IconButton.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        isRotated = _props.isRotated,
        other = _objectWithoutProperties(_props, ["children", "className", "isRotated"]);

    var theme = this.theme;

    return React.createElement(
      Button,
      _extends({ className: classNames(theme.button, className) }, other),
      typeof children === "string" ? children : React.cloneElement(Children.only(children), {
        className: classNames(theme.icon, (_classNames = {}, _classNames[theme.rotated] = isRotated, _classNames))
      })
    );
  };

  return IconButton;
}(ThemedComponent);

IconButton.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string]),
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  isRotated: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  pill: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["default", "primary", "basic"])
};
export default IconButton;