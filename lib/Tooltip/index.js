import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles";

import ThemedComponent from "../utils/theming/ThemedComponent";

var mediumTooltipLimit = 50;

var calculateTooltipSize = function calculateTooltipSize(content) {
  return mediumTooltipLimit < content.length ? "medium" : "default";
};

var Tooltip = function (_ThemedComponent) {
  _inherits(Tooltip, _ThemedComponent);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tooltip",
      styles: styles
    }));
  }

  Tooltip.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        left = _props.left,
        top = _props.top,
        children = _props.children,
        position = _props.position,
        inline = _props.inline,
        size = _props.size;
    var theme = this.theme;


    var resolvedSize = size || typeof children === "string" && calculateTooltipSize(children) || "default";

    return React.createElement(
      "div",
      {
        className: classNames(theme.tooltip, theme[position], theme["size_" + resolvedSize], (_classNames = {}, _classNames[theme.inline] = inline, _classNames)),
        style: { left: left, top: top }
      },
      children
    );
  };

  return Tooltip;
}(ThemedComponent);

Tooltip.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  left: PropTypes.number,
  /** For displaying a plain, independent tooltip  */
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  size: PropTypes.oneOf(["default", "medium", "large"]),
  top: PropTypes.number
};
Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: "top",
  inline: false
};
export default Tooltip;