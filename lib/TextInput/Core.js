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
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        value = _props.value,
        valueType = _props.valueType;


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
        _onChange && _onChange(event.target.value, event);
      },

      onFocus: onFocus,
      onKeyDown: function onKeyDown(event) {
        var handler = handlers[event.keyCode];
        handler && handler(event);
        _onKeyDown && _onKeyDown(event);
      },

      onPaste: onPaste,
      placeholder: placeholder,
      tabIndex: tabIndex,
      type: valueType || type,
      value: value
    };

    return React.createElement("input", _extends({}, props, {
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
  onClick: PropTypes.func,
  onArrowDown: PropTypes.func,
  onArrowLeft: PropTypes.func,
  onArrowRight: PropTypes.func,
  onArrowUp: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  onEnter: PropTypes.func,
  onEscape: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Use `valueType` instead */
  type: function type(props, propName, componentName) {
    if (propName in props) {
      return new Error("The TextInput does not accept a type prop use valueType instead");
    }
  },
  valueType: PropTypes.oneOf(["email", "number", "password", "search", "tel", "text"]),
  value: PropTypes.string
};
Core.defaultProps = {
  autoComplete: "off",
  disabled: false,
  valueType: "text"
};
export default Core;