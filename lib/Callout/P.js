import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var P = function (_ThemedComponent) {
  _inherits(P, _ThemedComponent);

  function P(props, context) {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Callout",
      styles: styles
    }));
  }

  P.prototype.render = function render() {
    var theme = this.theme;
    var children = this.props.children;


    return React.createElement(
      "p",
      { className: theme.paragraph },
      children
    );
  };

  return P;
}(ThemedComponent);

P.propTypes = {
  children: PropTypes.node.isRequired
};
export default P;