import { Component } from "react";
import PropTypes from "prop-types";

const extendStyles = (styles, theme, resetTheme, namespace) => {
  const { [namespace]: themeStyles } = theme || {};

  if (themeStyles) {
    // If resetTheme is provided we don't want to override the default styling
    if (resetTheme) {
      return themeStyles;
    }

    const extendStyles = {};

    Object.keys(styles).forEach(key => {
      extendStyles[key] =
        key in themeStyles ? `${styles[key]} ${themeStyles[key]}` : styles[key];
    });

    return extendStyles;
  } else {
    return styles;
  }
};

export default class ThemedComponent extends Component {
  static contextTypes = {
    rcTheme: PropTypes.object,
    resetTheme: PropTypes.bool
  };

  constructor(props, context, { namespace, styles }) {
    super(props, context);

    const { rcTheme, resetTheme } = context;
    this.theme = extendStyles(styles, rcTheme, resetTheme, namespace);
  }
}
