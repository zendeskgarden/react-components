import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

import styles from "./styles";
import ThemeProvider from "../../theming/ThemeProvider";
import Tooltip from "../../../Tooltip";
import getBestRelativePlacement from "../../positioning/getBestRelativePlacement";

var rtlPositions = {
  top: "top",
  bottom: "bottom",
  left: "right",
  right: "left"
};

var TooltipContainer = function (_Component) {
  _inherits(TooltipContainer, _Component);

  function TooltipContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, TooltipContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.container = document.createElement("div");
      _this.container.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      _this.container.style.position = "absolute";
      _this.container.style.visibility = "hidden";
      _this.container.style.top = "0px";
      _this.container.style.left = "0px";
      _this.container.style.width = "100%";
      document.body.appendChild(_this.container);
    }, _this.componentWillReceiveProps = function (_ref) {
      var content = _ref.content,
          size = _ref.size,
          theme = _ref.theme;

      if (!content) {
        _this.setState({ tooltipBounds: null });

        return null;
      }

      // Render an invisible tooltip into the DOM in order to analyze its dimensions,
      // so we know exactly how to place it correctly when we render it.
      render(React.createElement(
        ThemeProvider,
        { theme: theme },
        React.createElement(
          Tooltip,
          { size: size },
          content
        )
      ), _this.container, function () {
        var tooltipBounds = _this.container.firstElementChild.getBoundingClientRect();

        _this.setState({ tooltipBounds: tooltipBounds });
      });
    }, _this.render = function () {
      if (!(_this.state && _this.state.tooltipBounds)) {
        return null;
      }

      var tBounds = _this.state.tooltipBounds;
      var _this$props = _this.props,
          content = _this$props.content,
          anchor = _this$props.anchor,
          rawPositions = _this$props.positions,
          dir = _this$props.dir,
          size = _this$props.size,
          zIndex = _this$props.zIndex,
          theme = _this$props.theme;


      var positions = function () {
        return typeof rawPositions === "string" ? [rawPositions] : rawPositions;
      }().map(function (position) {
        return dir === "rtl" ? rtlPositions[position] : position;
      });

      var aBounds = anchor.getBoundingClientRect();

      var _getBestRelativePlace = getBestRelativePlacement({
        positions: positions,
        anchor: {
          left: aBounds.left,
          right: aBounds.right,
          top: aBounds.top,
          bottom: aBounds.bottom,
          width: aBounds.width,
          height: aBounds.height,
          margins: { left: 5, top: 5, right: 5, bottom: 5 }
        },
        centerPoint: 0,
        target: {
          width: tBounds.width,
          height: tBounds.height
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }),
          _getBestRelativePlace2 = _getBestRelativePlace.rect,
          left = _getBestRelativePlace2.left,
          top = _getBestRelativePlace2.top,
          position = _getBestRelativePlace.position;

      return React.createElement(
        ThemeProvider,
        { theme: theme },
        React.createElement(
          "div",
          { className: styles.container, style: { zIndex: zIndex } },
          React.createElement(
            Tooltip,
            { left: left, top: top, position: position, size: size },
            content
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TooltipContainer;
}(Component);

TooltipContainer.propTypes = {
  positions: PropTypes.oneOfType([Tooltip.propTypes.position, PropTypes.arrayOf(Tooltip.propTypes.position)]),
  content: Tooltip.propTypes.children,
  anchor: PropTypes.object,
  dir: PropTypes.oneOf(["rtl", "ltr"]),
  size: Tooltip.propTypes.size,
  zIndex: PropTypes.number,
  theme: PropTypes.object
};

TooltipContainer.defaultProps = {
  positions: ["top", "bottom", "left", "right"],
  dir: "ltr",
  zIndex: 600
};

export default TooltipContainer;