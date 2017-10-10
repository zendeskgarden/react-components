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

var Checkbox = function (_ThemedComponent) {
  _inherits(Checkbox, _ThemedComponent);

  function Checkbox(props, context) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Checkbox",
      styles: styles
    }));

    _this.onChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          indeterminate = _this$props.indeterminate;


      onChange && onChange(indeterminate ? true : event.target.checked, event);
    };

    _this.generatedId = uuid.v4();
    _this.keyboard = true;
    _this.state = {
      focused: false
    };
    return _this;
  }

  /**
   * When an indeterminate checkbox is toggled, it should match native checkbox
   * functionality and always return true as the new state.
   */


  /**
   * Since indeterminate is not a valid INPUT prop, we must dynamically add
   * this attribute when the component is rendered.
   */
  Checkbox.prototype.componentDidMount = function componentDidMount() {
    var indeterminate = this.props.indeterminate;


    if (indeterminate) {
      this.input.setAttribute("indeterminate", true);
    } else {
      this.input.removeAttribute("indeterminate");
    }
  };

  /**
   * Since indeterminate is not a valid INPUT prop, we must dynamically add
   * this attribute when the component is updated.
   */


  Checkbox.prototype.componentWillUpdate = function componentWillUpdate(_ref) {
    var indeterminate = _ref.indeterminate;

    if (indeterminate) {
      this.input.setAttribute("indeterminate", true);
    } else {
      this.input.removeAttribute("indeterminate");
    }
  };

  Checkbox.prototype.render = function render() {
    var _classNames,
        _this2 = this,
        _classNames2;

    var _props = this.props,
        checked = _props.checked,
        className = _props.className,
        children = _props.children,
        defaultChecked = _props.defaultChecked,
        disabled = _props.disabled,
        dir = _props.dir,
        hint = _props.hint,
        id = _props.id,
        indeterminate = _props.indeterminate,
        muted = _props.muted,
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
        className: classNames(theme.checkbox, theme[validation], (_classNames = {}, _classNames[theme.focused] = focused, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.disabled] = disabled, _classNames[theme.noLabel] = !children, _classNames[theme.indeterminate] = indeterminate, _classNames), className),
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
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onChange: this.onChange,
        onFocus: function onFocus() {
          _this2.setState({ focused: _this2.keyboard });
          _this2.keyboard = true;
        },
        ref: function ref(_ref2) {
          _this2.input = _ref2;
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

  return Checkbox;
}(ThemedComponent);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool,
  hint: PropTypes.node,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  muted: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  title: PropTypes.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string
};
Checkbox.defaultProps = {
  dir: "ltr",
  muted: false
};
export default Checkbox;