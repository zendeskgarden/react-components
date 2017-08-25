import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Core extends Component {
  static propTypes = {
    autoComplete: PropTypes.oneOf(["on", "off"]),
    autoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPaste: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    autoComplete: "off",
    disabled: false,
    rows: 2,
    type: "text"
  };

  render() {
    const {
      autoComplete,
      autoFocus,
      className,
      defaultValue,
      dir,
      disabled,
      id,
      isFocused,
      name,
      maxLength,
      onArrowDown,
      onArrowLeft,
      onArrowRight,
      onArrowUp,
      onClick,
      onBlur,
      onChange,
      onDelete,
      onEnter,
      onEscape,
      onFocus,
      onKeyDown,
      onPaste,
      placeholder,
      rows,
      tabIndex,
      testId,
      type,
      value
    } = this.props;

    const handlers = {
      "8": onDelete,
      "13": onEnter,
      "27": onEscape,
      "37": onArrowLeft,
      "38": onArrowUp,
      "39": onArrowRight,
      "40": onArrowDown
    };

    const props = {
      autoFocus,
      autoComplete,
      className,
      "data-test-id": testId,
      defaultValue,
      dir,
      disabled,
      id,
      name,
      maxLength,
      onClick,
      onBlur,
      onChange(event) {
        onChange && onChange(event.target.value);
      },
      onFocus,
      onKeyDown(event) {
        const handler = handlers[event.keyCode];
        handler && handler(event);
        onKeyDown && onKeyDown(event);
      },
      onPaste,
      placeholder,
      rows,
      tabIndex,
      type,
      value
    };

    return (
      <textarea
        {...props}
        ref={input => {
          this.input = input;
          input && isFocused && input.focus();
        }}
      />
    );
  }
}
