import React from "react";
import { render } from "react-dom";

import TooltipContainer from "./TooltipContainer";

var createTooltipManager = function createTooltipManager(renderNode) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var currentTooltipId = 0;

  var show = function show(anchor, content, positions) {
    document.body.addEventListener("scroll", hide);
    window.addEventListener("resize", hide);

    render(React.createElement(TooltipContainer, {
      anchor: anchor,
      content: content,
      dir: options.dir,
      positions: positions,
      zIndex: options.zIndex,
      theme: options.theme
    }), renderNode);

    return ++currentTooltipId;
  };

  var hide = function hide(tooltipId) {
    if (typeof tooltipId !== "number" || tooltipId === currentTooltipId) {
      render(React.createElement(TooltipContainer, null), renderNode);

      document.body.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
    }
  };

  // Initial empty render that creates the container element
  render(React.createElement(TooltipContainer, null), renderNode);

  return { show: show, hide: hide };
};

export default createTooltipManager;