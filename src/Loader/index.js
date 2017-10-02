import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles.css";

import DotsAluminum from "./assets/dots.100x85.aluminum.gif";
import DotsPelorous from "./assets/dots.100x85.pelorous.gif";
import SpinnerAluminum from "./assets/spinner.100x100.aluminum.gif";
import SpinnerPelorous from "./assets/spinner.100x100.pelorous.gif";

export default class Loader extends ThemedComponent {
  static propTypes = {
    /**
       * The alt value to be applied to the GIF
       */
    alt: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf(["aluminum", "pelorous"]),
    testId: PropTypes.string,
    type: PropTypes.oneOf(["dots", "spinner"]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  static defaultProps = {
    alt: "Loading",
    color: "pelorous",
    type: "dots",
    size: 50
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Loader",
      styles
    });
  }

  retrieveLoader = () => {
    const { type, color } = this.props;

    if (type === "dots") {
      return color === "aluminum" ? DotsAluminum : DotsPelorous;
    }

    return color === "aluminum" ? SpinnerAluminum : SpinnerPelorous;
  };

  render() {
    const { alt, className, size, testId } = this.props;
    const { theme } = this;
    const loaderSrc = this.retrieveLoader();

    return (
      <img
        className={classNames(theme.loader, className)}
        src={loaderSrc}
        width={size}
        alt={alt}
        title={alt}
        data-test-id={testId}
      />
    );
  }
}
