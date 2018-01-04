import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.css";

export default class Callouts extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    testId: PropTypes.string,
    floating: PropTypes.bool,
    className: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {
    dir: "ltr",
    floating: false,
    zIndex: 700
  };

  static childContextTypes = {
    floating: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Callout"
    });
    this.state = {};
  }

  getChildContext() {
    return { floating: this.props.floating };
  }

  render() {
    const { testId, floating, dir, children, className, zIndex } = this.props;

    const props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    return (
      <div
        className={classNames(
          styles.callouts,
          {
            [styles.floating]: floating,
            [styles.rtl]: dir === "rtl"
          },
          className
        )}
        style={{ zIndex }}
        {...props}
      >
        {children}
      </div>
    );
  }
}
