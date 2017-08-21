import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.css";

import ThemedComponent from "../utils/theming/ThemedComponent";

const mediumTooltipLimit = 50;

const calculateTooltipSize = content =>
  mediumTooltipLimit < content.length ? "medium" : "default";

export default class Tooltip extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    left: PropTypes.number,
    /** For displaying a plain, independent tooltip  */
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    size: PropTypes.oneOf(["default", "medium", "large"]),
    top: PropTypes.number
  };

  static defaultProps = {
    top: 0,
    left: 0,
    position: "top",
    inline: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Tooltip",
      styles
    });
  }

  render() {
    const { left, top, children, position, inline, size } = this.props;
    const { theme } = this;

    const resolvedSize =
      size ||
      (typeof children === "string" && calculateTooltipSize(children)) ||
      "default";

    return (
      <div
        className={classNames(
          theme.tooltip,
          theme[position],
          theme[`size_${resolvedSize}`],
          { [theme.inline]: inline }
        )}
        style={{ left, top }}
      >
        {children}
      </div>
    );
  }
}
