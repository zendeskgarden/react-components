import React from 'react'
import { render } from 'react-dom'

import globalKey from './globalKey'
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

  if (window[globalKey]) {
    return null
  }

  // Attach to window
  window[globalKey] = { show, hide }

  // Event handlers
  document.body.addEventListener('scroll', hide)
  window.addEventListener('resize', hide)
}

export default createTooltipManager
