import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "../core/View";

export default class Core extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyboardFocus: PropTypes.func,
    onSubmitKeyPressed: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    tabIndex: 0
  };

  constructor(props, context) {
    super(props, context);
    this.keyboard = true;
  }

  onSubmitKeyPressed = e => {
    const { onClick, onSubmitKeyPressed } = this.props;
    onClick && onClick(e);
    onSubmitKeyPressed && onSubmitKeyPressed(e);
    e.preventDefault();
  };

  onMouseDown = e => {
    const { disabled } = this.props;

    if (disabled) {
      e.stopPropagation();
      e.preventDefault();
    } else {
      this.keyboard = false;
    }
  };

  onClick = e => {
    const { disabled, onClick } = this.props;

    if (disabled) {
      e.stopPropagation();
      e.preventDefault();
    } else {
      onClick && onClick(e);
    }
  };

  onFocus = e => {
    const { onFocus, onKeyboardFocus } = this.props;

    onFocus && onFocus(e);
    this.keyboard && onKeyboardFocus && onKeyboardFocus(e);

    this.keyboard = true;
  };

  render() {
    const {
      autoFocus,
      className,
      children,
      disabled,
      onBlur,
      onKeyDown,
      onKeyUp,
      tabIndex,
      testId,
      title,
      tooltipPositioning
    } = this.props;

    return (
      <View
        autoFocus={autoFocus}
        className={className}
        testId={testId}
        disabled={disabled}
        onBlur={onBlur}
        onClick={this.onClick}
        onEnter={this.onSubmitKeyPressed}
        onFocus={this.onFocus}
        onMouseDown={this.onMouseDown}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onSpace={this.onSubmitKeyPressed}
        tabIndex={disabled ? null : tabIndex}
        role="button"
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {children}
      </View>
    );
  }
}
