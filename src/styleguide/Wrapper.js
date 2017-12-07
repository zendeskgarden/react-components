import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeProvider from "../utils/theming/ThemeProvider";
import TooltipProvider from "../utils/tooltips/TooltipProvider";
import exampleTheme from "../themes/example-theme";
import electroidDarkTheme from "../themes/electroid-dark-theme";
import neutralTheme from "../themes/neutral-theme";
import querystring from "querystring";

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;

    const theme = window.localStorage.getItem("rc-theme") || "default";

    const query = querystring.parse(window.location.search.slice(1));
    document.querySelector('link[href$="css-bedrock/index.css"]').disabled =
      query.bedrock === "false";

    switch (theme) {
      case "example":
        return (
          <ThemeProvider theme={exampleTheme}>
            <TooltipProvider id="styleguide-tooltips">
              {children}
            </TooltipProvider>
          </ThemeProvider>
        );
      case "electroid-dark":
        return (
          <ThemeProvider theme={electroidDarkTheme}>
            <TooltipProvider id="styleguide-tooltips">
              <div
                className="u-bg-daintree u-fg-white"
                style={{ padding: "15px", margin: "-15px" }}
              >
                {children}
              </div>
            </TooltipProvider>
          </ThemeProvider>
        );
      case "neutral-theme":
        return (
          <ThemeProvider theme={neutralTheme}>
            <TooltipProvider id="styleguide-tooltips">
              {children}
            </TooltipProvider>
          </ThemeProvider>
        );
      default:
        return (
          <TooltipProvider id="styleguide-tooltips">
            {children}
          </TooltipProvider>
        );
    }
  }
}
