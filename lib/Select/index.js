import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";

import Menu from "../Menu";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Select = function (_ThemedComponent) {
  _inherits(Select, _ThemedComponent);

  function Select(props, context) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Select",
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

    _this.onClick = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    _this.onOpen = function () {
      var onOpen = _this.props.onOpen;

      _this.setState({ open: true });
      onOpen && onOpen();
    };

    _this.onClose = function () {
      var onClose = _this.props.onClose;

      _this.setState({ open: false });
      onClose && onClose();
    };

    _this.generatedId = uuid.v4();
    _this.state = {
      open: false
    };
    return _this;
  }

  Select.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        inputClassName = _props.inputClassName,
        dir = _props.dir,
        disabled = _props.disabled,
        hint = _props.hint,
        maxHeight = _props.maxHeight,
        onBlur = _props.onBlur,
        onFocus = _props.onFocus,
        onChange = _props.onChange,
        positioning = _props.positioning,
        selected = _props.selected,
        size = _props.size,
        stretched = _props.stretched,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        validation = _props.validation,
        validationText = _props.validationText;
    var open = this.state.open;
    var theme = this.theme;


    return React.createElement(
      View,
      {
        className: classNames(theme.txt, theme[validation], theme["size_" + size], (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.stretched] = stretched, _classNames[theme.disabled] = disabled, _classNames), className),
        testId: testId
      },
      this.renderLabel(),
      hint && React.createElement(
        "small",
        { className: theme.hint },
        hint
      ),
      React.createElement(
        Menu,
        {
          dir: dir,
          maxHeight: maxHeight,
          onChange: onChange,
          positioning: positioning,
          onOpen: this.onOpen,
          onClose: this.onClose,
          trigger: React.createElement(
            View,
            {
              className: classNames(theme.input, (_classNames2 = {}, _classNames2[theme.open] = open, _classNames2), inputClassName),
              dir: dir,
              disabled: disabled,
              onBlur: onBlur,
              onClick: this.onClick,
              onFocus: onFocus,
              role: "button",
              tabIndex: disabled ? null : tabIndex,
              title: title,
              tooltipPositioning: tooltipPositioning
            },
            selected || React.createElement(
              "span",
              null,
              "\xA0"
            )
          ),
          size: size,
          stretched: stretched
        },
        children
      ),
      validation && validationText && React.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return Select;
}(ThemedComponent);

Select.Item = Menu.Item;
Select.Separator = Menu.Separator;
Select.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * This is for use in self-service-components only
   */
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool,
  hint: PropTypes.node,
  inputClassName: PropTypes.string,
  label: PropTypes.node,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func,
  onClose: PropTypes.func,
  onFocus: PropTypes.func,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  positioning: Menu.propTypes.positioning,
  selected: PropTypes.node,
  stretched: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  validation: PropTypes.oneOf(["error", "warning", "success"]),
  validationText: PropTypes.string
};
Select.defaultProps = {
  dir: "ltr",
  disabled: false,
  positioning: ["bottom_stretch", "top_stretch"],
  stretched: true,
  size: "medium",
  tabIndex: 0
};
export default Select;