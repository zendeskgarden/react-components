import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import P from "./P";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

export default class Callout extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    onClose: PropTypes.func,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.oneOf(["default", "success", "warning", "error"])
  };

  static defaultProps = {
    dir: "ltr",
    type: "default",
    tabIndex: 0
  };

  static contextTypes = {
    floating: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Callout",
      styles
    });
  }

  static P = P;

  renderClose = onClose => {
    const { theme } = this;
    const { tabIndex } = this.props;

    return (
      <button tabIndex={tabIndex} className={theme.remove} onClick={onClose} />
    );
  };

  render() {
    const { theme } = this;
    const { floating } = this.context;
    const { children, className, dir, onClose, type, title } = this.props;

    return (
      <View
        className={classNames(
          theme[type],
          { [theme.rtl]: dir === "rtl", [theme.floating]: floating },
          className
        )}
      >
        {title &&
          <strong className={theme.title}>
            {title}
          </strong>}
        {children}
        {onClose && this.renderClose(onClose)}
      </View>
    );
  }
}
