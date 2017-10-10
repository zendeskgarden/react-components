import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var RadioButton = function (_ThemedComponent) {
  _inherits(RadioButton, _ThemedComponent);

  function RadioButton(props, context) {
    _classCallCheck(this, RadioButton);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "RadioButton",
      styles: styles
    }));

    _this.onChange = function (event) {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;


      onChange && onChange(value, event);
    };

    _this.generatedId = uuid.v4();
    _this.keyboard = true;
    _this.state = {
      focused: false
    };
    return _this;
  }

  RadioButton.prototype.render = function render() {
    var _classNames,
        _this2 = this,
        _classNames2;

    var _props = this.props,
        checked = _props.checked,
        children = _props.children,
        className = _props.className,
        defaultChecked = _props.defaultChecked,
        dir = _props.dir,
        disabled = _props.disabled,
        hint = _props.hint,
        id = _props.id,
        muted = _props.muted,
        name = _props.name,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        validation = _props.validation,
        validationText = _props.validationText;
    var focused = this.state.focused;
    var theme = this.theme;


    var idAttribute = id || this.generatedId;

    return React.createElement(
      View,
      {
        className: classNames(theme.checkbox, theme.radio, theme[validation], (_classNames = {}, _classNames[theme.focused] = focused, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.disabled] = disabled, _classNames[theme.noLabel] = !children, _classNames), className),
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      React.createElement("input", {
        checked: checked,
        className: theme.input,
        "data-test-id": testId,
        defaultChecked: defaultChecked,
        disabled: disabled,
        id: idAttribute,
        name: name,
        ref: function ref(_ref) {
          _this2.input = _ref;
        },
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onChange: this.onChange,
        onFocus: function onFocus() {
          _this2.setState({ focused: _this2.keyboard });
          _this2.keyboard = true;
        },
        tabIndex: tabIndex,
        type: "radio"
      }),
      React.createElement(
        "label",
        {
          className: classNames(theme.label, (_classNames2 = {}, _classNames2[theme.muted] = muted, _classNames2)),
          dir: dir,
          htmlFor: idAttribute,
          onMouseUp: function onMouseUp() {
            _this2.keyboard = false;
          }
        },
        children
      ),
      hint && React.createElement(
        "small",
        { className: styles.hint },
        hint
      ),
      validation && validationText && React.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return RadioButton;
}(ThemedComponent);

RadioButton.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool,
  hint: PropTypes.node,
  id: PropTypes.string,
  muted: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  value: PropTypes.any,
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string
};
RadioButton.defaultProps = {
  dir: "ltr"
};
export default RadioButton;