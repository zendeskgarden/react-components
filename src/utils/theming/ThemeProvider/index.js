import { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
  };

  static childContextTypes = {
    rcTheme: PropTypes.object
  };

  getChildContext() {
    const { theme } = this.props;
    return { rcTheme: theme };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
