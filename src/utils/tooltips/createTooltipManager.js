import React from "react";
import { render } from "react-dom";

import TooltipContainer from "./TooltipContainer";

const createTooltipManager = (renderNode, options = {}) => {
  let currentTooltipId = 0;

  const show = (anchor, content, positions) => {
    document.body.addEventListener("scroll", hide);
    window.addEventListener("resize", hide);

    render(
      <TooltipContainer
        anchor={anchor}
        content={content}
        dir={options.dir}
        positions={positions}
        zIndex={options.zIndex}
      />,
      renderNode
    );

    return ++currentTooltipId;
  };

  const hide = tooltipId => {
    if (typeof tooltipId !== "number" || tooltipId === currentTooltipId) {
      render(<TooltipContainer />, renderNode);

      document.body.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
    }
  };

  // Initial empty render that creates the container element
  render(<TooltipContainer />, renderNode);

  return { show, hide };
};

export default createTooltipManager;
