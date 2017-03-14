import React from 'react'
import { render } from 'react-dom'

import TooltipContainer from './TooltipContainer'

const createTooltipManager = renderNode => {
  const show = (anchor, content, positions) => {
    render(
      <TooltipContainer
        anchor={anchor}
        content={content}
        positions={positions}
      />
    , renderNode)
  }

  const hide = () => {
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
