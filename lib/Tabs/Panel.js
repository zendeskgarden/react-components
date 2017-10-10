import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Panel = function (_ThemedComponent) {
  _inherits(Panel, _ThemedComponent);

  function Panel(props, context) {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Tabs",
      styles: styles
    }));
  }

  Panel.prototype.render = function render() {
    var children = this.props.children;
    var theme = this.theme;


    return React.createElement(
      View,
      { className: theme.panel, role: "tabpanel" },
      children
    );
  };

  return Panel;
}(ThemedComponent);

Panel.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired
};
export default Panel;