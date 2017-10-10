import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeProvider from "../utils/theming/ThemeProvider";
import TooltipProvider from "../utils/tooltips/TooltipProvider";
import exampleTheme from "../themes/example-theme";
import electroidDarkTheme from "../themes/electroid-dark-theme";
import querystring from "querystring";

var Wrapper = function (_Component) {
  _inherits(Wrapper, _Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Wrapper.prototype.render = function render() {
    var children = this.props.children;


    var theme = window.localStorage.getItem("rc-theme") || "default";

    var query = querystring.parse(window.location.search.slice(1));
    document.body.classList.toggle("u-font-family-system", query.font === "system");

    switch (theme) {
      case "example":
        return React.createElement(
          ThemeProvider,
          { theme: exampleTheme },
          React.createElement(
            TooltipProvider,
            { id: "styleguide-tooltips" },
            children
          )
        );
      case "electroid-dark":
        return React.createElement(
          ThemeProvider,
          { theme: electroidDarkTheme },
          React.createElement(
            TooltipProvider,
            { id: "styleguide-tooltips" },
            React.createElement(
              "div",
              {
                className: "u-bg-daintree u-fg-white",
                style: { padding: "15px", margin: "-15px" }
              },
              children
            )
          )
        );
      default:
        return React.createElement(
          TooltipProvider,
          { id: "styleguide-tooltips" },
          children
        );
    }
  };

  return Wrapper;
}(Component);

Wrapper.propTypes = {
  children: PropTypes.node
};
export default Wrapper;