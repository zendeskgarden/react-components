import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

import View from "../core/View";

var arrowPositions = {
  bottom: "top",
  bottom_left: "top_right",
  bottom_right: "top_left",
  left: "right",
  right: "left",
  top: "bottom",
  top_left: "bottom_right",
  top_right: "bottom_left"
};

var Container = function (_ThemedComponent) {
  _inherits(Container, _ThemedComponent);

  function Container(props, context) {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Menu",
      styles: styles
    }));
  }

  Container.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        animate = _props.animate,
        arrow = _props.arrow,
        children = _props.children,
        dir = _props.dir,
        fixedWidth = _props.fixedWidth,
        maxHeight = _props.maxHeight,
        position = _props.position,
        size = _props.size,
        wide = _props.wide;


    var style = {};
    var innerStyle = {};
    var hasMaxHeight = typeof maxHeight !== "undefined";

    if (hasMaxHeight) {
      style.maxHeight = typeof maxHeight === "number" ? maxHeight + "px" : maxHeight;

      innerStyle.maxHeight = "calc(" + style.maxHeight + " - 2px)";
    }

    var theme = this.theme;


    return React.createElement(
      View,
      {
        className: classNames(theme.menu, theme["size_" + size], theme["position_" + position], theme[dir], (_classNames = {}, _classNames[theme.animate] = animate, _classNames[theme.fixed_width] = fixedWidth, _classNames[theme.arrow] = arrow, _classNames[theme["arrow_" + arrowPositions[position]]] = arrow, _classNames[theme.scrollable] = hasMaxHeight, _classNames[theme.wide] = wide, _classNames)),
        role: "menu",
        style: style
      },
      React.createElement(
        View,
        { className: theme.inner, style: innerStyle },
        children
      )
    );
  };

  return Container;
}(ThemedComponent);

Container.propTypes = {
  animate: PropTypes.bool,
  arrow: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  fixedWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.oneOf(["bottom", "bottom_left", "bottom_right", "bottom_stretch", "left", "right", "top", "top_left", "top_right", "top_stretch"]),
  size: PropTypes.oneOf(["small", "medium"]),
  wide: PropTypes.bool
};
Container.defaultProps = {
  animate: false,
  arrow: false,
  dir: "ltr",
  position: "bottom_right",
  size: "medium",
  wide: false
};
export default Container;