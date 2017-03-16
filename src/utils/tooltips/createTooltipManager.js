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
    // If the intention is to close a specific tooltip, we make sure that it
    // is currently on display, and return early if not.
    if (tooltipId != null && tooltipId !== currentTooltipId) {
      return null
    }

    render(<TooltipContainer />, renderNode)
  }

  // Initial empty render that creates the container element
  render(<TooltipContainer />, renderNode)

  // Event handlers
  document.body.addEventListener('scroll', hide)
  window.addEventListener('resize', hide)

  return { show, hide }
}

export default createTooltipManager
