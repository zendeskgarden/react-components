import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import Core from "./Core";

import styles from "./styles";

var TextInput = function (_ThemedComponent) {
  _inherits(TextInput, _ThemedComponent);

  function TextInput(props, context) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "TextInput",
      styles: styles
    }));

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.renderLabel = function () {
      var label = _this.props.label;
      var theme = _this.theme;


      if (!label) {
        return null;
      }

      return React.createElement(
        "label",
        { className: theme.label, htmlFor: _this.getId() },
        label
      );
    };

    _this.generatedId = uuid.v4();
    return _this;
  }

  TextInput.prototype.render = function render() {
    var _classNames,
        _classNames2,
        _this2 = this;

    var _props = this.props,
        className = _props.className,
        dir = _props.dir,
        disabled = _props.disabled,
        hint = _props.hint,
        size = _props.size,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        type = _props.type,
        validation = _props.validation,
        validationText = _props.validationText,
        valueType = _props.valueType,
        other = _objectWithoutProperties(_props, ["className", "dir", "disabled", "hint", "size", "title", "tooltipPositioning", "type", "validation", "validationText", "valueType"]);

    var theme = this.theme;


    return React.createElement(
      View,
      {
        className: classNames(theme.txt, theme["size_" + size], theme[validation], (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.rtl] = dir === "rtl", _classNames), className),
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      this.renderLabel(),
      hint && React.createElement(
        "small",
        { className: theme.hint },
        hint
      ),
      React.createElement(Core, _extends({}, other, {
        dir: dir,
        disabled: disabled,
        valueType: valueType,
        id: this.getId(),
        className: classNames(theme.input, (_classNames2 = {}, _classNames2[theme.style_bare] = type === "bare", _classNames2)),
        ref: function ref(_ref) {
          if (_ref && _ref.input) {
            _this2.input = _ref.input;
          }
        }
      })),
      validation && validationText && React.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return TextInput;
}(ThemedComponent);

TextInput.Core = Core;
TextInput.propTypes = {
  autoComplete: PropTypes.oneOf(["on", "off"]),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  isFocused: PropTypes.bool,
  defaultValue: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool.isRequired,
  hint: PropTypes.node,
  label: PropTypes.node,
  maxLength: PropTypes.number,
  name: PropTypes.string,
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
  onPaste: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["default", "bare"]),
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string,
  value: PropTypes.string,
  valueType: PropTypes.oneOf(["date", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "url", "week"])
};
TextInput.defaultProps = {
  autoComplete: "off",
  disabled: false,
  type: "default",
  valueType: "text",
  size: "medium",
  dir: "ltr"
};
export default TextInput;