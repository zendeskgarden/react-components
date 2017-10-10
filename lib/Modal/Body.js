import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";
import View from "../core/View/";

var Body = function (_ThemedComponent) {
  _inherits(Body, _ThemedComponent);

  function Body(props, context) {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: styles
    }));
  }

  Body.prototype.render = function render() {
    var children = this.props.children;
    var theme = this.theme;


    return React.createElement(
      View,
      { className: theme.body },
      children
    );
  };

  return Body;
}(ThemedComponent);

Body.propTypes = {
  children: PropTypes.node.isRequired
};
export default Body;