import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";

import styles from "./styles.css";

const arrowPositions = {
  bottom: "top",
  bottom_left: "top_right",
  bottom_right: "top_left",
  left: "right",
  right: "left",
  top: "bottom",
  top_left: "bottom_right",
  top_right: "bottom_left"
};

export default class Container extends ThemedComponent {
  static propTypes = {
    animate: PropTypes.bool,
    arrow: PropTypes.bool,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    fixedWidth: PropTypes.bool,
    children: PropTypes.node.isRequired,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    position: PropTypes.oneOf([
      "bottom",
      "bottom_left",
      "bottom_right",
      "bottom_stretch",
      "left",
      "right",
      "top",
      "top_left",
      "top_right",
      "top_stretch"
    ]),
    size: PropTypes.oneOf(["small", "medium"])
  };

  static defaultProps = {
    animate: false,
    arrow: false,
    dir: "ltr",
    position: "bottom_right",
    size: "medium"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
      styles
    });
  }

  render() {
    const {
      animate,
      arrow,
      children,
      dir,
      fixedWidth,
      maxHeight,
      position,
      size
    } = this.props;

    const style = {};
    const innerStyle = {};
    const hasMaxHeight = typeof maxHeight !== "undefined";

    if (hasMaxHeight) {
      style.maxHeight =
        typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight;

      innerStyle.maxHeight = `calc(${style.maxHeight} - 2px)`;
    }

    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.menu,
          theme[`size_${size}`],
          theme[`position_${position}`],
          theme[dir],
          {
            [theme.animate]: animate,
            [theme.fixed_width]: fixedWidth,
            [theme.arrow]: arrow,
            [theme[`arrow_${arrowPositions[position]}`]]: arrow,
            [theme.scrollable]: hasMaxHeight
          }
        )}
        role="menu"
        style={style}
      >
        <View className={theme.inner} style={innerStyle}>
          {children}
        </View>
      </View>
    );
  }
}
