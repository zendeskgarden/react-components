import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";

import styles from "./styles";

var Label = function (_ThemedComponent) {
  _inherits(Label, _ThemedComponent);

  function Label(props, context) {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tabs",
      styles: styles
    }));
  }

  Label.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        active = _props.active,
        children = _props.children,
        disabled = _props.disabled,
        onClick = _props.onClick,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        selected = _props.selected,
        selectedByMouse = _props.selectedByMouse,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;
    var theme = this.theme;


    return React.createElement(
      "li",
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        "aria-selected": active,
        className: classNames(theme.label, (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.selected] = active, _classNames[theme.focused] = !selectedByMouse && selected, _classNames)),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: "tab"
      },
      React.createElement(
        View,
        { title: title, tooltipPositioning: tooltipPositioning },
        children
      )
    );
  };

  return Label;
}(ThemedComponent);

Label.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  selected: PropTypes.bool,
  selectedByMouse: PropTypes.bool,
  title: PropTypes.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};


export default Selectable(Label, {
  selectEvent: "onClick"
});