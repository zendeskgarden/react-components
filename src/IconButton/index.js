import React, { Children } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ThemedComponent from "../utils/theming/ThemedComponent";

import Button from "../Button";

import styles from "./styles.css";

export default class IconButton extends ThemedComponent {
  static propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.string
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isRotated: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    pill: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
    title: PropTypes.string,
    /** <a href="#view">See View</a> for positioning options */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf(["default", "primary", "basic"])
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "IconButton",
      styles
    });
  }

  render() {
    const { children, className, isRotated, ...other } = this.props;
    const theme = this.theme;

    return (
      <Button className={classNames(theme.button, className)} {...other}>
        {typeof children === "string"
          ? children
          : React.cloneElement(Children.only(children), {
              className: classNames(theme.icon, {
                [theme.rotated]: isRotated
              })
            })}
      </Button>
    );
  }
}
