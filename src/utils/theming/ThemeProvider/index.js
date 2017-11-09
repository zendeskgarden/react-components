import { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    resetTheme: PropTypes.bool
  };

  static childContextTypes = {
    rcTheme: PropTypes.object,
    resetTheme: PropTypes.bool
  };

  getChildContext() {
    const { theme, resetTheme } = this.props;
    return { rcTheme: theme, resetTheme };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
