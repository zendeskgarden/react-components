import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var CloseButton = function (_ThemedComponent) {
  _inherits(CloseButton, _ThemedComponent);

  function CloseButton(props, context) {
    _classCallCheck(this, CloseButton);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: styles
    }));

    _this.state = { focused: false };
    return _this;
  }

  CloseButton.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var onClick = this.props.onClick;
    var focused = this.state.focused;


    return React.createElement("button", {
      "aria-label": "close",
      className: classNames(styles.close, (_classNames = {}, _classNames[styles.close_focused] = focused, _classNames)),
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
}(ThemedComponent);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default CloseButton;