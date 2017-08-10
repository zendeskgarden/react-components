import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

export default class CloseButton extends ThemedComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Modal",
      styles
    });
    this.state = { focused: false };
  }

  render() {
    const { onClick } = this.props;
    const { focused } = this.state;

    return (
      <button
        aria-label="close"
        className={classNames(styles.close, {
          [styles.close_focused]: focused
        })}
        onBlur={() => this.setState({ focused: false })}
        onClick={onClick}
        onFocus={() => this.setState({ focused: true })}
      />
    );
  }
}
