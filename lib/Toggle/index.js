import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";

import styles from "./styles";

var Toggle = function (_ThemedComponent) {
  _inherits(Toggle, _ThemedComponent);

  function Toggle(props, context) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Toggle",
      styles: styles
    }));

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;


      onChange && onChange(event.target.checked);
    };

    _this.onArrowLeft = function () {
      var onChange = _this.props.onChange;
      var checked = _this.input.checked;


      if (checked) {
        _this.input.checked = false;
        onChange && onChange(false);
      }
    };

    _this.onArrowRight = function () {
      var onChange = _this.props.onChange;
      var checked = _this.input.checked;


      if (!checked) {
        _this.input.checked = true;
        onChange && onChange(true);
      }
    };

    _this.generatedId = uuid.v4();

    _this.handlers = {
      "13": _this.toggle,
      "37": _this.onArrowLeft,
      "39": _this.onArrowRight
    };

    _this.state = {
      focused: false
    };
    return _this;
  }

  Toggle.prototype.render = function render() {
    var _classNames,
        _this2 = this,
        _classNames2;

    var _props = this.props,
        children = _props.children,
        checked = _props.checked,
        className = _props.className,
        defaultChecked = _props.defaultChecked,
        dir = _props.dir,
        disabled = _props.disabled,
        hint = _props.hint,
        id = _props.id,
        muted = _props.muted,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        validation = _props.validation,
        validationText = _props.validationText;
    var focused = this.state.focused;
    var theme = this.theme;


    var idAttribute = id || this.generatedId;

    return React.createElement(
      View,
      {
        className: classNames(theme.toggle, theme[validation], (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.focused] = focused, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.noLabel] = !children, _classNames), className)
      },
      React.createElement("input", {
        checked: checked,
        className: theme.input,
        "data-test-id": testId,
        defaultChecked: defaultChecked,
        disabled: disabled,
        id: idAttribute,
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onChange: this.onChange,
        onKeyDown: function onKeyDown(event) {
          var handler = _this2.handlers[event.keyCode];
          handler && handler();
        },
        onFocus: function onFocus() {
          _this2.setState({ focused: _this2.keyboard });
          _this2.keyboard = true;
        },
        ref: function ref(_ref) {
          _this2.input = _ref;
        },
        tabIndex: tabIndex,
        type: "checkbox"
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
        { className: theme.hint },
        hint
      ),
      validation && validationText && React.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return Toggle;
}(ThemedComponent);

Toggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool,
  hint: PropTypes.node,
  id: PropTypes.string,
  muted: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string
};
Toggle.defaultProps = {
  dir: "ltr",
  muted: false
};
export default Toggle;