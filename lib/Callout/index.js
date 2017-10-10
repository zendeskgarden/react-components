import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import P from "./P";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var Callout = function (_ThemedComponent) {
  _inherits(Callout, _ThemedComponent);

  function Callout(props, context) {
    _classCallCheck(this, Callout);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Callout",
      styles: styles
    }));

    _this.renderClose = function (onClose) {
      var theme = _this.theme;
      var tabIndex = _this.props.tabIndex;


      return React.createElement("button", { tabIndex: tabIndex, className: theme.remove, onClick: onClose });
    };

    return _this;
  }

  Callout.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        dir = _props.dir,
        onClose = _props.onClose,
        type = _props.type,
        title = _props.title,
        floating = _props.floating;


    return React.createElement(
      View,
      {
        className: classNames(theme[type], (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.floating] = floating, _classNames), className)
      },
      title && React.createElement(
        "strong",
        { className: theme.title },
        title
      ),
      children,
      onClose && this.renderClose(onClose)
    );
  };

  return Callout;
}(ThemedComponent);

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  onClose: PropTypes.func,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  floating: PropTypes.bool,
  type: PropTypes.oneOf(["default", "success", "warning", "error"])
};
Callout.defaultProps = {
  dir: "ltr",
  type: "default",
  tabIndex: 0,
  floating: false
};
Callout.P = P;
export default Callout;