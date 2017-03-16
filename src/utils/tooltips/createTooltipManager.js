import React from 'react'
import { render } from 'react-dom'

import TooltipContainer from './TooltipContainer'

const createTooltipManager = (renderNode, options = {}) => {
  let currentTooltipId = 0

  const show = (anchor, content, positions) => {
    render(
      <TooltipContainer
        anchor={anchor}
        content={content}
        dir={options.dir}
        positions={positions}
        zIndex={options.zIndex}
      />
    , renderNode)

    return ++currentTooltipId
  }

  const hide = tooltipId => {
    if (typeof tooltipId !== 'number' || tooltipId === currentTooltipId) {
      render(<TooltipContainer />, renderNode)
    }
  }

  // Initial empty render that creates the container element
  render(<TooltipContainer />, renderNode)

  // Event handlers
  document.body.addEventListener('scroll', hide)
  window.addEventListener('resize', hide)

  return { show, hide }
}

export default createTooltipManager
