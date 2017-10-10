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

var Page = function (_ThemedComponent) {
  _inherits(Page, _ThemedComponent);

  function Page(props, context) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: styles
    }));
  }

  Page.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        isCurrent = _props.isCurrent,
        isAnimated = _props.isAnimated,
        ariaLabel = _props.ariaLabel,
        onSelection = _props.onSelection,
        selectedByMouse = _props.selectedByMouse,
        selected = _props.selected;


    return React.createElement(
      View,
      {
        className: classNames(theme.page, (_classNames = {}, _classNames[theme.is_current] = isCurrent, _classNames[theme.is_focused] = !selectedByMouse && selected, _classNames[theme.no_animation] = !isAnimated, _classNames)),
        "aria-label": ariaLabel,
        "aria-current": isCurrent,
        onClick: onSelection
      },
      this.props.children
    );
  };

  return Page;
}(ThemedComponent);

Page.propTypes = {
  /**
   * If the page is currently selected.
   */
  isCurrent: PropTypes.bool,
  /**
   * If the page allows animation.
   */
  isAnimated: PropTypes.bool,
  /**
   * Callback when the page is selected.
   */
  onSelection: PropTypes.func.isRequired,
  /**
   * The label to apply to the page element.
   */
  ariaLabel: PropTypes.string.isRequired
};
Page.defaultProps = {
  isCurrent: false,
  isFocused: false,
  isAnimated: false,
  selected: false
};


export default Selectable(Page, {
  selectEvent: "onClick"
});