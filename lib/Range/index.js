import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var Range = function (_ThemedComponent) {
  _inherits(Range, _ThemedComponent);

  function Range(props, context) {
    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Range",
      styles: styles
    }));

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;


      onChange && onChange(parseFloat(event.target.value), event);

      _this.setState({ bgWidth: _this.getBgWidth() });
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
    _this.state = {
      focused: false,
      bgWidth: 0
    };
    return _this;
  }

  Range.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      bgWidth: this.getBgWidth()
    });
  };

  Range.prototype.getBgWidth = function getBgWidth() {
    var _props = this.props,
        max = _props.max,
        min = _props.min;
    var value = this.input.value;


    if (parseFloat(max) < parseFloat(min)) {
      max = 100;
    }

    return 100 * (value - min) / (max - min);
  };

  Range.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        defaultValue = _props2.defaultValue,
        disabled = _props2.disabled,
        hint = _props2.hint,
        max = _props2.max,
        min = _props2.min,
        size = _props2.size,
        step = _props2.step,
        tabIndex = _props2.tabIndex,
        testId = _props2.testId,
        title = _props2.title,
        value = _props2.value,
        validation = _props2.validation,
        validationText = _props2.validationText;
    var _state = this.state,
        focused = _state.focused,
        bgWidth = _state.bgWidth;
    var theme = this.theme;


    return React.createElement(
      View,
      {
        className: classNames(theme.range, theme["size_" + size], theme[validation], (_classNames = {}, _classNames[theme.focused] = focused, _classNames), className)
      },
      this.renderLabel(),
      hint && React.createElement(
        "small",
        { className: theme.hint },
        hint
      ),
      React.createElement("input", {
        className: theme.input,
        "data-test-id": testId,
        defaultValue: defaultValue,
        disabled: disabled,
        id: this.getId(),
        max: max,
        min: min,
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onClick: this.onChange,
        onChange: this.onChange,
        onFocus: function onFocus() {
          return _this2.setState({ focused: true });
        },
        step: step,
        style: { backgroundSize: bgWidth + "%" },
        tabIndex: tabIndex,
        type: "range",
        title: title,
        value: value,
        ref: function ref(_ref) {
          _this2.input = _ref;
        }
      }),
      validation && validationText && React.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return Range;
}(ThemedComponent);

Range.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  hint: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  step: PropTypes.number,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string
};
Range.defaultProps = {
  min: 0,
  max: 100,
  size: "medium",
  step: 1
};
export default Range;