import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import Core from "./Core";

import styles from "./styles.css";

export default class Button extends ThemedComponent {
  static Core = Core;

  static propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    pill: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    stretched: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf(["default", "primary", "basic", "anchor"])
  };

  static defaultProps = {
    tabIndex: 0,
    type: "default",
    size: "small"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Button",
      styles
    });
    this.state = {
      focused: false,
      active: false
    };
  }

  onBlur = e => {
    const { onBlur } = this.props;

    this.setState({
      focused: false,
      active: false
    });
    onBlur && onBlur(e);
  };

  onKeyboardFocus = e => {
    this.setState({ focused: true });
  };

  onSubmitKeyPressed = e => {
    this.setState({ active: true });
  };

  onKeyUp = e => {
    const { onKeyUp } = this.props;

    this.setState({ active: false });
    onKeyUp && onKeyUp(e);
  };

  render() {
    const {
      className,
      children,
      disabled,
      stretched,
      pill,
      size,
      type,
      ...other
    } = this.props;
    const { focused, active } = this.state;

    const { theme } = this;

    const typeStyle = theme[`type_${type}`];
    return (
      <Core
        {...other}
        disabled={disabled}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        onKeyboardFocus={this.onKeyboardFocus}
        onSubmitKeyPressed={this.onSubmitKeyPressed}
        className={classNames(
          theme[`size_${size}`],
          {
            [typeStyle]: typeStyle,
            [theme.focused]: focused,
            [theme.pill]: pill,
            [theme.stretched]: stretched,
            [theme.disabled]: disabled,
            [theme.active]: active
          },
          className
        )}
      >
        {children}
      </Core>
    );
  }
}
