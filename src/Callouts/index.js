import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Callout from "../Callout";

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

  constructor(props, context) {
    super(props, context, {
      namespace: "Callout"
    });
    this.state = {};
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
        {Children.map(children, (child, index) => {
          if (child && child.type === Callout) {
            return React.cloneElement(child, {
              floating: floating
            });
          } else {
            return child;
          }
        })}
      </div>
    );
  }
}
