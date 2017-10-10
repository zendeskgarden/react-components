import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";

var Core = function (_Component) {
  _inherits(Core, _Component);

  function Core() {
    _classCallCheck(this, Core);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Core.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        autoComplete = _props.autoComplete,
        autoFocus = _props.autoFocus,
        className = _props.className,
        defaultValue = _props.defaultValue,
        dir = _props.dir,
        disabled = _props.disabled,
        id = _props.id,
        isFocused = _props.isFocused,
        name = _props.name,
        maxLength = _props.maxLength,
        onArrowDown = _props.onArrowDown,
        onArrowLeft = _props.onArrowLeft,
        onArrowRight = _props.onArrowRight,
        onArrowUp = _props.onArrowUp,
        onClick = _props.onClick,
        onBlur = _props.onBlur,
        _onChange = _props.onChange,
        onDelete = _props.onDelete,
        onEnter = _props.onEnter,
        onEscape = _props.onEscape,
        onFocus = _props.onFocus,
        _onKeyDown = _props.onKeyDown,
        onPaste = _props.onPaste,
        placeholder = _props.placeholder,
        rows = _props.rows,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        value = _props.value;


    var handlers = {
      "8": onDelete,
      "13": onEnter,
      "27": onEscape,
      "37": onArrowLeft,
      "38": onArrowUp,
      "39": onArrowRight,
      "40": onArrowDown
    };

    var props = {
      autoFocus: autoFocus,
      autoComplete: autoComplete,
      className: className,
      "data-test-id": testId,
      defaultValue: defaultValue,
      dir: dir,
      disabled: disabled,
      id: id,
      name: name,
      maxLength: maxLength,
      onClick: onClick,
      onBlur: onBlur,
      onChange: function onChange(event) {
        _onChange && _onChange(event.target.value);
      },

      onFocus: onFocus,
      onKeyDown: function onKeyDown(event) {
        var handler = handlers[event.keyCode];
        handler && handler(event);
        _onKeyDown && _onKeyDown(event);
      },

      onPaste: onPaste,
      placeholder: placeholder,
      rows: rows,
      tabIndex: tabIndex,
      value: value
    };

    return React.createElement("textarea", _extends({}, props, {
      ref: function ref(input) {
        _this2.input = input;
        input && isFocused && input.focus();
      }
    }));
  };

  return Core;
}(Component);

Core.propTypes = {
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
  value: PropTypes.string
};
Core.defaultProps = {
  autoComplete: "off",
  disabled: false,
  rows: 2
};
export default Core;