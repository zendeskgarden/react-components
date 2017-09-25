import React from "react";
import PropTypes from "prop-types";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

export default class P extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Callout",
      styles
    });
  }

  render() {
    const { theme } = this;
    const { children } = this.props;

    return (
      <p className={theme.paragraph}>
        {children}
      </p>
    );
  }
}
