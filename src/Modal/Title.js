import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

export default class Header extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Modal",
      styles
    });
  }

  render() {
    const { children } = this.props;

    const { theme } = this;

    return (
      <h1 className={theme.header}>
        {children}
      </h1>
    );
  }
}
