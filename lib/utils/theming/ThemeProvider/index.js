import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import { Component } from "react";
import PropTypes from "prop-types";

var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;

    return { rcTheme: theme };
  };

  ThemeProvider.prototype.render = function render() {
    var children = this.props.children;


    return children;
  };

  return ThemeProvider;
}(Component);

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};
ThemeProvider.childContextTypes = {
  rcTheme: PropTypes.object
};
export default ThemeProvider;