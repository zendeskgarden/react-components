import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

export default class FormHint extends ThemedComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "FormHint",
      styles
    });
  }

  render() {
    const { children, className } = this.props;
    const { theme } = this;

    return (
      <small className={classNames(theme.hint, className)}>
        {children}
      </small>
    );
  }
}
