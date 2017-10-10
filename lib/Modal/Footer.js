import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Footer = function (_ThemedComponent) {
  _inherits(Footer, _ThemedComponent);

  function Footer(props, context) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: styles
    }));
  }

  Footer.prototype.render = function render() {
    var children = this.props.children;
    var theme = this.theme;


    return React.createElement(
      "footer",
      { className: theme.footer },
      children
    );
  };

  return Footer;
}(ThemedComponent);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
export default Footer;