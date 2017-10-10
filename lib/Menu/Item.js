import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";
import Selectable from "../core/Selectable";

import styles from "./styles";

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    return React.createElement(
      View,
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        className: classNames(styles.item, (_classNames = {}, _classNames[styles.disabled] = disabled, _classNames[styles.focused] = selected, _classNames)),
        disabled: disabled,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: role,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      children
    );
  };

  return Item;
}(Component);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  role: PropTypes.string,
  selected: PropTypes.bool,
  testId: PropTypes.string,
  title: PropTypes.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
Item.defaultProps = {
  disabled: false,
  role: "menuitem"
};


export default Selectable(Item, {
  action: function action(props, event) {
    var onClick = props.onClick,
        value = props.value;


    onClick && onClick(value, event);
  },
  preventDefault: true
});