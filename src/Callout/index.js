import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import P from "./P";
import View from "../core/View";

import styles from "./styles.css";

export default class Callout extends Component {
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

  static P = P;

  renderClose = onClose => {
    const { tabIndex } = this.props;
    return (
      <button tabIndex={tabIndex} className={styles.remove} onClick={onClose} />
    );
  };

  render() {
    const { children, className, dir, onClose, type, title } = this.props;

    return (
      <View
        className={classNames(
          styles[type],
          { [styles.rtl]: dir === "rtl" },
          className
        )}
      >
        {title &&
          <strong className={styles.title}>
            {title}
          </strong>}
        {children}
        {onClose && this.renderClose(onClose)}
      </View>
    );
  }
}
