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
    className: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    floating: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Callout"
    });
    this.state = {};
  }

  render() {
    const { testId, floating, dir, children, className } = this.props;

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
        {...props}
      >
        {Children.map(children, (child, index) => {
          if (child && child.type === Callout) {
            const { children, type, title, onClose } = child.props;

            return (
              <Callout
                type={type}
                floating={floating}
                key={child.key}
                title={title}
                onClose={onClose}
                dir={dir}
              >
                {children}
              </Callout>
            );
          } else {
            return child;
          }
        })}
      </div>
    );
  }
}
