import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "../Button/styles";

var Item = function (_ThemedComponent) {
  _inherits(Item, _ThemedComponent);

  function Item(props, context) {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Button",
      styles: styles
    }));
  }

  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        active = _props.active,
        children = _props.children,
        danger = _props.danger,
        disabled = _props.disabled,
        onClick = _props.onClick,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        selected = _props.selected,
        selectedByMouse = _props.selectedByMouse,
        size = _props.size;
    var theme = this.theme;


    return React.createElement(
      "button",
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        "aria-selected": active,
        className: classNames(theme.type_default, theme["size_" + size], (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.selected] = active, _classNames[theme.focused] = !selectedByMouse && selected, _classNames[theme.danger] = danger, _classNames)),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: "tab",
        tabIndex: "-1"
      },
      children
    );
  };

  return Item;
}(ThemedComponent);

Item.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  selected: PropTypes.bool,
  selectedByMouse: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"])
};
Item.defaultProps = {
  size: "small"
};


export default Selectable(Item, {
  selectEvent: "onClick"
});