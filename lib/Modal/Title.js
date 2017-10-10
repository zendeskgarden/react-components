import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Header = function (_ThemedComponent) {
  _inherits(Header, _ThemedComponent);

  function Header(props, context) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: styles
    }));
  }

  Header.prototype.render = function render() {
    var children = this.props.children;
    var theme = this.theme;


    return React.createElement(
      "h1",
      { className: theme.header },
      children
    );
  };

  return Header;
}(ThemedComponent);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
export default Header;