import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

import View from "../core/View";

var RadioButtonGroup = function (_Component) {
  _inherits(RadioButtonGroup, _Component);

  function RadioButtonGroup(props, context) {
    _classCallCheck(this, RadioButtonGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onChange = function (value, event) {
      var onChange = _this.props.onChange;


      onChange && onChange(value, event);
    };

    _this.keyboard = true;
    _this.id = uuid.v4();
    return _this;
  }

  RadioButtonGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        dir = _props.dir,
        disabled = _props.disabled,
        muted = _props.muted,
        selected = _props.selected,
        className = _props.className;


    var radios = React.Children.map(children, function (item, index) {
      return React.cloneElement(item, {
        disabled: "disabled" in item.props ? item.props.disabled : disabled,
        checked: selected === item.props.value,
        dir: dir,
        key: "radio-" + index,
        name: _this2.id,
        muted: "muted" in item.props ? item.props.muted : muted,
        onChange: _this2.onChange
      });
    });

    return React.createElement(
      View,
      { className: className },
      radios
    );
  };

  return RadioButtonGroup;
}(Component);

RadioButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  disabled: PropTypes.bool,
  muted: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.any
};
RadioButtonGroup.defaultProps = {
  dir: "ltr"
};
export default RadioButtonGroup;