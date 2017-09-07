import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import styles from "./styles.css";

export default class Anchor extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Whether to disable the Anchor. Only valid if onClick is provided.
     */
    disabled: ({ disabled, onClick }) => {
      if (disabled && typeof onClick === "undefined") {
        throw new Error(
          "onClick must be provided for a disabled state to be used."
        );
      }
    },
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string
  };

  static defaultProps = {
    tabIndex: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };

    this.mouseInitiated = false;
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.anchorElement.focus();
    }
  }

  /**
   * Necessary to not show focus styling when focused by mouse
   */
  onMouseDown = () => {
    this.mouseInitiated = true;

    setTimeout(() => {
      this.mouseInitiated = false;
    }, 0);
  };

  onFocus = event => {
    const { onFocus } = this.props;
    onFocus && onFocus(event);

    if (this.mouseInitiated) {
      return;
    }

    this.setState({
      isFocused: true
    });
  };

  onBlur = event => {
    const { onBlur } = this.props;
    onBlur && onBlur(event);

    this.setState({
      isFocused: false
    });
  };

  onClick = event => {
    const { onClick } = this.props;
    onClick && onClick(event);

    this.setState({
      isFocused: false
    });
  };

  render() {
    const {
      className,
      disabled,
      tabIndex,
      children,
      onClick,
      testId,
      ...anchorProps
    } = this.props;
    const { isFocused } = this.state;

    return (
      <View
        className={styles.container}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        testId={testId}
        onMouseDown={this.onMouseDown}
      >
        {onClick
          ? <button
              className={classNames(className, styles.anchor, {
                [styles.focused]: isFocused,
                [styles.disabled]: disabled
              })}
              ref={ref => {
                this.anchorElement = ref;
              }}
              onClick={onClick}
              tabIndex={tabIndex}
              disabled={disabled}
              {...anchorProps}
            >
              {children}
            </button>
          : <a
              className={classNames(className, styles.anchor, {
                [styles.focused]: isFocused
              })}
              ref={ref => {
                this.anchorElement = ref;
              }}
              tabIndex={tabIndex}
              {...anchorProps}
            >
              {children}
            </a>}
      </View>
    );
  }
}
