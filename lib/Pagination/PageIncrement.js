import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var PageIncrement = function (_ThemedComponent) {
  _inherits(PageIncrement, _ThemedComponent);

  function PageIncrement(props, context) {
    _classCallCheck(this, PageIncrement);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: styles
    }));
  }

  PageIncrement.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        selectedByMouse = _props.selectedByMouse,
        selected = _props.selected,
        disabled = _props.disabled,
        value = _props.value,
        description = _props.description,
        onSelection = _props.onSelection;


    return React.createElement(
      View,
      {
        className: classNames(theme.page, (_classNames = {}, _classNames[theme.page_previous] = value === "previous", _classNames[theme.page_next] = value === "next", _classNames[theme.is_hidden] = disabled, _classNames[theme.is_focused] = !selectedByMouse && selected, _classNames)),
        "aria-hidden": disabled,
        "aria-disabled": disabled,
        "aria-label": description,
        onClick: onSelection
      },
      description
    );
  };

  return PageIncrement;
}(ThemedComponent);

PageIncrement.propTypes = {
  value: PropTypes.oneOf(["previous", "next"]).isRequired,
  description: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};


export default Selectable(PageIncrement, {
  selectEvent: "onClick"
});