import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "../core/View";

var Core = function (_Component) {
  _inherits(Core, _Component);

  function Core(props, context) {
    _classCallCheck(this, Core);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onSubmitKeyPressed = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onSubmitKeyPressed = _this$props.onSubmitKeyPressed;

      onClick && onClick(e);
      onSubmitKeyPressed && onSubmitKeyPressed(e);
      e.preventDefault();
    };

    _this.onMouseDown = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else {
        _this.keyboard = false;
      }
    };

    _this.onClick = function (e) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else {
        onClick && onClick(e);
      }
    };

    _this.onFocus = function (e) {
      var _this$props3 = _this.props,
          onFocus = _this$props3.onFocus,
          onKeyboardFocus = _this$props3.onKeyboardFocus;


      onFocus && onFocus(e);
      _this.keyboard && onKeyboardFocus && onKeyboardFocus(e);

      _this.keyboard = true;
    };

    _this.keyboard = true;
    return _this;
  }

  Core.prototype.render = function render() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        className = _props.className,
        children = _props.children,
        disabled = _props.disabled,
        onBlur = _props.onBlur,
        onKeyDown = _props.onKeyDown,
        onKeyUp = _props.onKeyUp,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    return React.createElement(
      View,
      {
        autoFocus: autoFocus,
        className: className,
        testId: testId,
        disabled: disabled,
        onBlur: onBlur,
        onClick: this.onClick,
        onEnter: this.onSubmitKeyPressed,
        onFocus: this.onFocus,
        onMouseDown: this.onMouseDown,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onSpace: this.onSubmitKeyPressed,
        tabIndex: disabled ? null : tabIndex,
        role: "button",
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      children
    );
  };

  return Core;
}(Component);

Core.propTypes = {
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
  tooltipPositioning: function tooltipPositioning() {},
  children: PropTypes.node.isRequired
};
Core.defaultProps = {
  tabIndex: 0
};
export default Core;