import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import _Object$keys from "babel-runtime/core-js/object/keys";
import { Component } from "react";
import PropTypes from "prop-types";

var extendStyles = function extendStyles(styles, theme, namespace) {
  var _ref = theme || {},
      themeStyles = _ref[namespace];

  if (themeStyles) {
    var _extendStyles = {};

    _Object$keys(styles).forEach(function (key) {
      _extendStyles[key] = key in themeStyles ? styles[key] + " " + themeStyles[key] : styles[key];
    });

    return _extendStyles;
  } else {
    return styles;
  }
};

var ThemedComponent = function (_Component) {
  _inherits(ThemedComponent, _Component);

  function ThemedComponent(props, context, _ref2) {
    var namespace = _ref2.namespace,
        styles = _ref2.styles;

    _classCallCheck(this, ThemedComponent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.theme = extendStyles(styles, context.rcTheme, namespace);
    return _this;
  }

  return ThemedComponent;
}(Component);

ThemedComponent.contextTypes = {
  rcTheme: PropTypes.object
};
export default ThemedComponent;